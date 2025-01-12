# 26 - Dec - 2024

## UseEffect Hook

The `useEffect` Hook lets you perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components.

### Basic Usage

```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Code to run on component mount

    return () => {
      // Code to run on component unmount
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div>Example Component</div>;
}
```

### Fetching Data

```jsx
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array ensures this runs only once

  return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</div>;
}
```

### Cleanup Example

```jsx
import React, { useEffect } from 'react';

function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div>Timer Component</div>;
}
```

### Dependencies

```jsx
import React, { useState, useEffect } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### componentWillUnmount Example

```jsx
import React, { useEffect } from 'react';

function UnmountExampleComponent() {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div>Unmount Example Component</div>;
}
```
