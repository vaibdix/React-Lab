// 13 - Dec - 2024

## CSS Modules

CSS Modules are a way to modularize and scope your CSS in a React application. They help to avoid naming conflicts and make it easier to maintain styles in large projects.

### How to Use CSS Modules

1. **Create a CSS Module file**: Name your CSS file with the `.module.css` extension.

```css
/* styles.module.css */
.container {
  background-color: #f0f0f0;
  padding: 20px;
}
```

2. **Import the CSS Module in your component**:

```jsx
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.container}>This is a styled container.</div>;
}

export default MyComponent;
```

### Benefits of CSS Modules

- **Scoped Styles**: Styles are scoped to the component, preventing conflicts.
- **Maintainability**: Easier to manage and maintain styles in large projects.
- **Dynamic Class Names**: You can dynamically apply class names using JavaScript.

## Props Drilling

Props drilling is the process of passing data from a parent component to a deeply nested child component through intermediate components.

### Example of Props Drilling

```jsx
function ParentComponent() {
  const data = 'Hello from Parent';

  return <ChildComponent data={data} />;
}

function ChildComponent({ data }) {
  return <GrandChildComponent data={data} />;
}

function GrandChildComponent({ data }) {
  return <div>{data}</div>;
}
```

### Problems with Props Drilling

- **Verbose Code**: Passing props through many layers can make the code verbose and harder to read.
- **Tight Coupling**: Intermediate components become tightly coupled to the data they are passing down.

### Solutions to Props Drilling

- **Context API**: React's Context API allows you to share data across the component tree without passing props manually at every level.
- **State Management Libraries**: Libraries like Redux or MobX can help manage state and avoid props drilling.

### Using Context API

```jsx
import React, { createContext, useContext } from 'react';

const DataContext = createContext();

function ParentComponent() {
  const data = 'Hello from Parent';

  return (
    <DataContext.Provider value={data}>
      <ChildComponent />
    </DataContext.Provider>
  );
}

function ChildComponent() {
  return <GrandChildComponent />;
}

function GrandChildComponent() {
  const data = useContext(DataContext);
  return <div>{data}</div>;
}
```

By using the Context API, you can avoid passing props through intermediate components, making your code cleaner and more maintainable.
