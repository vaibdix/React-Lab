# Conditional Rendering in React

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or the conditional operator `?` to create elements representing the current state, and let React update the UI to match them.

### Using `if` Statements

You can use `if` statements to conditionally include JSX:

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}
```

### Using the Conditional (Ternary) Operator

You can also use the ternary operator to conditionally render elements:

```jsx
function Greeting(props) {
  return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
}
```

### Inline `if` with Logical `&&` Operator

You can embed expressions in JSX by wrapping them in curly braces and using the `&&` operator:

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  );
}
```

### Preventing Component from Rendering

To prevent a component from rendering, you can return `null`:

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}
```

### Summary

- Use `if` statements for conditional rendering.
- Use the ternary operator for inline conditional rendering.
- Use the logical `&&` operator for short-circuit evaluation.
- Return `null` to prevent a component from rendering.

Conditional rendering in React allows you to create dynamic and interactive user interfaces based on the state and props of your components.
