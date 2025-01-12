📝 **Notes: Higher Order Components (HOCs)**

1. **Definition:**

- A Higher Order Component is a function that takes a component and returns a new enhanced component
- It's a pattern derived from React's compositional nature
- HOCs are used for code reuse, adding additional functionality, and cross-cutting concerns

2. **Key Characteristics:**

- Pure functions with no side effects
- Don't modify the input component
- Pass unrelated props through to the wrapped component
- Maximally composable

Here's a comprehensive guide with code examples:

1. **Basic HOC Structure:**

```jsx
import React from 'react';

// Regular component that will be wrapped
const DisplayText = ({ text, count }) => {
  console.log('DisplayText component rendered');
  return (
    <div>
      <h2>{text}</h2>
      <p>Count: {count}</p>
    </div>
  );
};

// HOC using React.memo()
const MemoizedDisplayText = React.memo(DisplayText, (prevProps, nextProps) => {
  // Custom comparison function (optional)
  // Return true if you don't want the component to update
  // Return false if you want the component to update
  return prevProps.text === nextProps.text;
});

// Parent component
const App = () => {
  const [text, setText] = React.useState('Hello World');
  const [count, setCount] = React.useState(0);

  const handleTextChange = () => {
    setText(text === 'Hello World' ? 'Hi there!' : 'Hello World');
  };

  const handleCountChange = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleTextChange}>Change Text</button>
      <button onClick={handleCountChange}>Increment Count</button>

      <MemoizedDisplayText text={text} count={count} />
    </div>
  );
};

export default App;
```
