# locus-react

A simple wrapper React component for [locus-dom](https://github.com/soul-codes/locus-dom)

## Installation

```bash
npm install locus-dom react  # install the dependencies
npm install locus-react
```

## Usage

Wrap `<Locus/>` around single React HTML element and provide the
`onPositionChange` callback.

```jsx
import Locus from "locus-react";

/* ... */

<Locus
  onPositionChange={position =>
    // Or do whatever calculation you want.
    this.setState({
      top: position.top,
      left: position.left
    })
  }
>
  <div>I am tracked</div>
</Locus>;
```

Remember that, as with locus-dom, `position` is relative to the top-left corner
of the page.

## Demo

- Clone the repository
- Run `npm install` and `then npm start`.
- The demo is served at port 9001.
