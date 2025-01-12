# Types of Components in React

## 1. Function-Based Components (FBC)

Function-based components are simpler and usually used in modern React development.

### Key Characteristics of Function-Based Components:

- **Does not use `class`**: FBCs are simply JavaScript functions that return JSX.
- **No `render()` method**: Instead of using a `render()` method, FBC directly returns JSX.
- **Stateless by default**: FBCs do not manage state natively. If you need state in FBC, you use hooks like `useState()`.
- **Can use hooks**: React hooks such as `useEffect()`, `useState()`, and others can be used to manage state and side effects.

### Example of a Function-Based Component:

```jsx
let FnBasedComponentEx1 = () => {
  return <div>FunctionBasedComponentEx1</div>;
};
export default FnBasedComponentEx1;
```

### 2.Class-Based Components (CBC)

Class-based components are the traditional way of defining components in React, and they allow for state management and lifecycle methods.

### Key Characteristics of Class-Based Components:

- **Uses `class` to create a component**: CBCs are created using ES6 class syntax, and they extend the `Component` class.
- **Must have a `render()` method**: The `render()` method returns the JSX that is to be displayed on the UI.
- **Stateful components**: CBCs can maintain and manage local state using `this.state` and `this.setState()`.
- **Cannot use hooks**: Hooks like `useState()` and `useEffect()` cannot be used in CBCs.
- **Lifecycle methods**: CBCs come with built-in lifecycle methods like `componentDidMount()`, `getDerivedStateFromProps()`, and `render()` for managing component behavior at different stages of the component's life cycle.

### Example of a Class-Based Component:

```jsx
class ClassBasedComponentEx1 extends React.Component {
  render() {
    return <div>ClassBasedComponentEx1</div>;
  }
}
export default ClassBasedComponentEx1;
```

## Difference Between Class-Based and Function-Based Components

<table>
  <thead>
    <tr>
      <th><strong>Class-Based Component (CBC)</strong></th>
      <th><strong>Function-Based Component (FBC)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Will use <code>class</code> to create a component</td>
      <td>Will use functions to create components</td>
    </tr>
    <tr>
      <td>Extends <code>Component</code> class</td>
      <td>Does not extend <code>Component</code> class</td>
    </tr>
    <tr>
      <td>Must have a <code>constructor()</code>, and use <code>super()</code></td>
      <td>Does not have <code>constructor()</code> or <code>super()</code></td>
    </tr>
    <tr>
      <td>Requires <code>render()</code> method to return JSX</td>
      <td>Directly returns JSX</td>
    </tr>
    <tr>
      <td>Stateful component: Has <code>this.state</code> and <code>this.setState()</code></td>
      <td>Stateless: Uses hooks like <code>useState()</code> for state</td>
    </tr>
    <tr>
      <td>Cannot use hooks</td>
      <td>Can use hooks (e.g., <code>useState()</code>, <code>useEffect()</code>)</td>
    </tr>
    <tr>
      <td>In-built lifecycle methods such as <code>componentDidMount()</code>, <code>getDerivedStateFromProps()</code>, etc.</td>
      <td>Must use <code>useEffect()</code> hook for lifecycle management</td>
    </tr>
  </tbody>
</table>

## Render Method

The `render()` method is used to display JSX on the UI.

During rendering, multiple in-built processes happen like:

- **Transpilation**: JSX is converted into JavaScript code.
- **Diffing**: React compares the current virtual DOM with the previous one.
- **Reconciliation**: React updates the real DOM based on the differences (diffing).

---

## CBC: State-Based Component

- Class-based components are **stateful** and can manage state with `this.state` and `this.setState()`.
- React is known for its ability to manage the state effectively, which is one of the key reasons it’s popular.
- **Redux** is a state management tool that can be used alongside React to manage more complex state scenarios.

---

## Additional Notes:

- A component doesn't have to be defined in a single file. **Multiple components** can be defined in a single file, although this is not commonly done (99% of the time, we keep components in separate files).
