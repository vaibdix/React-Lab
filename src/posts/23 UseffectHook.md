# 25 - Dec - 2024

## UseEffect Hook

### Introduction

The `useEffect` Hook lets you perform side effects in function components. It is similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

### Basic Example

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Notes

- **Dependencies**: The second argument to `useEffect` is an array of dependencies. The effect will only run if one of the dependencies has changed.
- **Cleanup**: To clean up after an effect, return a function from the effect. This is useful for things like subscriptions or timers.

### Cleanup Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('This will run every second!');
  }, 1000);

  return () => clearInterval(timer); // Cleanup the interval on component unmount
}, []);
```

### Common Use Cases

- Fetching data from an API
- Subscribing to a data stream
- Manually changing the DOM
- Setting up a subscription

### Conclusion

The `useEffect` Hook is a powerful tool for managing side effects in your React components. By understanding how to use it effectively, you can create more dynamic and responsive applications.
