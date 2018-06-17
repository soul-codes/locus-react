import React from "react";
import ReactDOM from "react-dom";
import * as LocusDom from "locus-dom";
import Locus from "../dist";

class Demo extends React.Component {
  constructor() {
    super();
    this.state = { left: null, top: null };
  }
  render() {
    const { state } = this;
    return (
      <div>
        <section>
          <div className="hoverable">
            Hover to expand me and add a margin to my friend.
          </div>
          <Locus
            onPositionChange={position => {
              this.setState({
                left: position.left,
                top: position.top
              });
            }}
          >
            <div className="target">
              I live here: (left: {state.left}, top: {state.top} )
            </div>
          </Locus>
        </section>
      </div>
    );
  }
}

LocusDom.install();
ReactDOM.render(<Demo />, document.getElementById("react-mount"));
