# behelit

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/behelit.svg)](https://www.npmjs.com/package/behelit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save behelit
```

## Usage

```jsx
import React from 'react'

import { Button } from 'behelit'
import 'behelit/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
    </>
  )
}

export default App
```

## License

MIT © [zulalnb](https://github.com/zulalnb)
