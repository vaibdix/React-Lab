# 02 - Dec - 2024

### Manually Create React Project Without Using Vite

---

### Diffing Algorithm

- The process of finding the differences between the **Real DOM** and the **Virtual DOM**.

### Reconciliation Process

- The process of implementing changes from the **Virtual DOM** to the **Real DOM** that are found during the **Diffing Algorithm**.

### React Fiber (React Engine)

- React is managed by **React Fiber Engine**, just like the **JavaScript Engine** takes care of JS files.

---

### Babel

- **Babel** is a **transpiler**.
  - It converts modern JavaScript code (JSX) into browser-understandable JavaScript.
  - Modern JavaScript code means **JSX code**.
  - The process of converting JSX code into browser-understandable JS is called **transpilation**, and it is done by Babel.
  - **Transpilation occurs during rendering**.

---

### JSX

- **JSX** stands for **JavaScript XML**.
- JSX is HTML-like code written in JavaScript.
- It is a syntax extension for JavaScript that allows you to write HTML structures in the same file as JavaScript code.

---

### Rendering

- Rendering happens when there is a change in the code, or **whenever there are updates** (like when state or props change).

---

### main.jsx

```js
// Strict Mode will check the JS file twice.
```

### Components

- **Components** are reusable blocks of code that always return **JSX**.
- The first letter of a component must be **uppercase**.
- If mistakenly written in lowercase, React will treat it as a new component, so it's better to change the name to uppercase to avoid confusion.

#### Example:

**An Empire**:

- Different villages are like components.
- The **main.jsx** file acts like the **king**, and only the king communicates with foreign bodies.
