# 03 - Jan - 2025 Notes

## Three Steps to Use Bootstrap in React

1. **Install Bootstrap via npm**:  
   Use the following command to add Bootstrap to your React project:

   ```bash
   npm install bootstrap
   ```

2. **Import Bootstrap CSS in Your App**:  
   Add the Bootstrap CSS file to your React entry file (e.g., `index.js` or `App.js`):

   ```js
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

3. **Use Bootstrap Classes in Components**:  
   Apply Bootstrap classes to your React components as you would in regular HTML. For example:

   ```jsx
   import React from 'react';

   function App() {
     return (
       <div className="container mt-5">
         <h1 className="text-center">Welcome to Bootstrap in React</h1>
         <button className="btn btn-primary">Click Me</button>
       </div>
     );
   }

   export default App;
   ```

---

### **Breadcrumbs**

- Breadcrumbs are navigation aids that show the user’s current location in the app hierarchy.
- **Example**:
  ```
  Home / Login / Orange
  ```
- **Usage**: Add a `nav` element with `breadcrumb` class in your HTML or React.

---

## React: Using Images

- In React, you need to import the image and use it as a variable inside JSX.
- **Steps**:
  1. Import the image with an alias.
     ```js
     import myImage from './assets/image.jpg';
     ```
  2. Use the alias in the `src` attribute.
     ```jsx
     <img src={myImage} alt="Description" />
     ```

---

### Bootstrap Loader

- Add a **Bootstrap loader** (spinner) in yesterday’s code using the spinner class.
  ```html
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  ```

---

### Download Bootstrap Extension

- Install the **Bootstrap extension** in your code editor for quicker usage and autocomplete of Bootstrap classes.

---

## React: Re-Rendering Problem & Solution

### **Problem**

When a **function** is passed as a prop to a child component, the child component **re-renders** every time, even if the parent’s state hasn’t changed.

---

### **Solution**: `useCallback` Hook

- `useCallback` was introduced to **memoize functions** and prevent unnecessary re-renders.

#### **Syntax**:

```js
let memoizedFunction = useCallback(callbackFunction, dependencyArray);
```

#### **How It Works**:

- The function (`callbackFunction`) will only be recreated if the values in the `dependencyArray` change.

---

### **Comparison of Hooks**

- **`useCallback`**: Returns a **memoized function**.
- **`useMemo`**: Returns a **memoized value**.

---

## Memoization

- **Definition**: A technique to optimize performance by caching and reusing previously computed values or functions.
- Used in React to avoid unnecessary re-calculations or re-renders.

---

### **Important Hooks**

- **`useMemo()`**: For memoizing values.
- **`useCallback()`**: For memoizing functions.

---

### Example of `useCallback`:

```jsx
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // No dependency, so `increment` is not recreated.

  return <Child increment={increment} />;
}

function Child({ increment }) {
  console.log('Child re-rendered');
  return <button onClick={increment}>Increment</button>;
}
```
