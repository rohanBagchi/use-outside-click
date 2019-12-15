# use-outside-click

> Allows you to attach a listener for clicks outside a section of DOM. Like for instance, a modal. If we want any clicks outside the modal to say, close it, we can use-outside-click hook to easily implement this behavior.

[![NPM](https://img.shields.io/npm/v/use-outside-click.svg)](https://www.npmjs.com/package/use-outside-click) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-outside-click
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-outside-click'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [rohanBagchi](https://github.com/rohanBagchi)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
