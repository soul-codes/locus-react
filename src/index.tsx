import { Component, cloneElement, ReactElement, ReactHTMLElement } from "react";
import { Locus } from "locus-dom";

interface ILocusWrapperProp {
  children: ReactHTMLElement<any>;
  onPositionChange(position: Locus["state"]): any;
}

export default class LocusWrapper extends Component<ILocusWrapperProp> {
  private _locus: Locus | null = null;
  private _listener = () => this._handlePositionChange();
  private _ref = (el: HTMLElement) => this._handleRef(el);

  render(): ReactElement<any> {
    const reactElement = this.props.children;
    return cloneElement(reactElement, {
      ...reactElement.props,
      ref: this._ref
    });
  }

  private _handlePositionChange() {
    const { _locus, props } = this;
    const { onPositionChange } = props;
    _locus && onPositionChange(_locus.state);
  }

  private _handleRef(el: HTMLElement) {
    const originalRef = this.props.children.ref;
    originalRef && typeof originalRef === "function" && originalRef(el);
    if (el && !(this._locus && this._locus.target === el)) {
      this._locus && this._locus.stop();
      this._locus = new Locus({ target: el, listener: this._listener });
      this._locus.start();
    } else if (!el && this._locus) {
      this._locus.stop();
      this._locus = null;
    }
  }
}
