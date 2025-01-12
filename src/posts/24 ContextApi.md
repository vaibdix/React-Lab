# 26 - Dec - 2024

## useEffect hook remaining portion and context api

### useEffect Hook

The `useEffect` hook allows you to perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components.

#### Basic Example

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, the document title is updated every time the `count` state changes.

### Context API

The Context API is a way to manage state globally. It can be used to share data between components without having to pass props down manually at every level.

#### Creating Context

```jsx
import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const [value, setValue] = useState('Hello, World!');

  return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
}
```

#### Consuming Context

```jsx
import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('Hello, React!')}>Change Value</button>
    </div>
  );
}
```

In this example, `MyComponent` consumes the context provided by `MyProvider` and can update the shared state.
