# 06 - Jan - 2025

## Unique ID Creation

- `id: Date.now()`
- Other ways to create a unique ID:
  - Install `uuid` from npm:
    ```javascript
    import { v4 as uuidv4 } from 'uuid';
    const id = uuidv4();
    ```

## `find()` Method

- The `find()` method:
  - Searches for the required item.
  - Returns the first match and stops further checking.

## Task

- **Create different components for each task.**
- Components should include:
  - `form`: Two inputs and one button.
  - `handleChange`
  - `handleSubmit`
  - `handleUpdate`
  - `handleDelete`
  - Display items using `map`.
- **All components can be in one file**, e.g., `crudintro.jsx`.

---

## `forwardRef()` Higher-Order Component (HOC)

- **Requirement:**
  - NOT REQUIRED after react 19
  - Change the background color of an `h1` element on button click using the `useRef` hook, but from the child component.
- To forward a `ref` from child to parent, use the `forwardRef()` technique.

---

## HOC (Higher-Order Components)

- **Definition:**
  - HOCs are components that take another component as an argument.
- **Examples:**
  - `React.memo()`
- **Custom HOCs:**
  - You can create your own HOCs. Refer to the loader example.
