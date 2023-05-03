# Webixu React Hooks

[![npm version](https://badge.fury.io/js/webixu-react-hooks.svg)](https://www.npmjs.com/package/webixu-react-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains a collection of custom React hooks that can be used to simplify and enhance the development of React applications.

## Installation

You can install Webixu React Hooks using npm:

```bash
npm install webixu-react-hooks
```

## Usage

To use Webixu React Hooks, simply import the hooks you need into your project:

```typescript
import { useForceRender } from 'webixu-react-hooks';
```

## Available Hooks

### <span style="color: #228B22;">useForceRender</span>

A custom hook that returns a function to force a component to re-render. This can be useful in cases where a component needs to update its rendering without any changes to its props or state.

Example usage:

```tsx
import { useCallback } from 'react';
import { useForceRender } from 'webixu-react-hooks';

type Props = {};

const MyComponent = (): React.FunctionComponent<Props> => {
  const forceRender = useForceRender();

  const handleClick = useCallback(() => {
    // Call the forceRender function to trigger a re-render of the component
    forceRender();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Force re-render</button>
    </div>
  );
};
```

### <span style="color: #228B22;">useRefs</span>

A custom hook that returns an object with refs to multiple elements. This can be useful in cases where a component needs to reference multiple elements and track their state.

Example usage:

```tsx
import { useCallback } from 'react';
import { useRefs } from 'webixu-react-hooks';

type Refs = {
  element: HTMLDivElement;
  input: HTMLInputElement;
};

type Props = {};

const MyComponent: React.FunctionComponent<Props> = () => {
  const refs = useRefs<Refs>();

  const handleClick = useCallback(() => {
    refs.input.current?.focus();
  }, []);

  return (
    <div ref={refs.element}>
      <input type='text' ref={refs.input} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default MyComponent;
```

### <span style="color: #228B22;">useRenderCounter</span>

A custom hook that logs the number of times a component is rendered. This can be useful in cases where a component is re-rendering too often and you want to optimize its performance.

Example usage:

```tsx
import { useRenderCounter } from 'webixu-react-hooks';

type Props = {};

const MyComponent: React.FunctionComponent<Props> = () => {
  useRenderCounter('MyComponent');

  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
};

export default MyComponent;
```

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.
