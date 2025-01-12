# JSX Expression Rules in React

## Rule 1: No `console` statements inside JSX expressions

We should not write `console` statements inside JSX expressions because they will not get displayed on the UI.

### Example:

```jsx
let JsxExpressionRule1 = () => {
  return (
    <div>
      <h3>jsxExpressionRule1</h3>
      <p>
        We should not write console statements inside the JSX expression because it will not get
        displayed on the UI.
      </p>
      <div>{console.log('not going to display on the UI')}</div>
    </div>
  );
};
export default JsxExpressionRule1;
```

## Rule 2: Conditional statements in JSX

In JSX expressions, we can't write conditional statements directly. However, we can use ternary operators or short-circuit operators.

```jsx
let JsxExpressionRule2 = () => {
  let mode = 'dark';
  return (
    <div>
      <h3>JsxExpressionRule2</h3>
      <p>
        In JSX expressions, we can't write conditional statements directly, but we can use ternary
        operators and short-circuit operators.
      </p>
      <h1>{mode === 'dark' ? <p>☀️</p> : <p>🌙</p>}</h1>
    </div>
  );
};
export default JsxExpressionRule2;
```

## Rule 3: Looping inside JSX

We cannot use all types of looping statements inside JSX expressions. We can only use higher-order functions (HOF) that return something. The allowed functions are map(), filter(), and reduce().

```jsx
let JsxExpressionRule3 = () => {
  let names = ['Ram', 'Sham', 'Sita', 'Geeta', 'Meena'];

  return (
    <div>
      <h3>JsxExpressionRule3</h3>
      <p>
        We cannot use all the looping statements inside JSX expressions. <br />
        We can use only three higher-order functions: map(), filter(), and reduce().
      </p>
      <p>
        The names of the students are:
        {names.map((element, i) => {
          return <React.Fragment key={i}>{element}</React.Fragment>;
        })}
      </p>
    </div>
  );
};
export default JsxExpressionRule3;
```

## Rule 4: Return Statement Syntax

- ### Return statements can be of two types:
  - Without parentheses (return <h1>...</h1>): The returned value must be on the same line.
  - With parentheses (return (...)): The returned value can be on multiple lines.

```jsx
let JsxExpressionRule4 = () => {
  return (
    <div>
      <h3>JsxExpressionRule4</h3>
      <p>
        When we are not using `()` with the return keyword, the value to be returned must be written
        on the same line. <br />
        When we are using `()` with the return keyword like this: `return()`, the value can be
        written on multiple lines inside `()`.
      </p>
    </div>
  );
};
export default JsxExpressionRule4;
```

## Rule 5: Uppercase vs Lowercase Tag Names

If you write the first letter of a tag name in uppercase, React treats it as a component. If it starts with a lowercase letter, it is treated as an HTML element.

```jsx
let JsxExpressionRule5 = () => {
  return (
    <div>
      <h3>JsxExpressionRule5</h3>
      <p>
        If you write the first letter of a tag name in uppercase, React treats it as a component.{' '}
        <br />
        If the tag name starts with a lowercase letter, it is treated as an HTML element.
      </p>
      {/* <Prasad>hello, this will be treated as a component name</Prasad> */}
      {/* <prasad>hello, this will be treated as an HTML element</prasad> */}
    </div>
  );
};
export default JsxExpressionRule5;
```

## General Notes on JSX Expressions

- JSX expressions must be returned from components and should be valid JavaScript expressions.
- They can include JavaScript variables, functions, and even inline conditionals or loops, but there are specific rules about how to use them (e.g., ternary operators, map(), etc.).
- Always use key when rendering lists of items to help React keep track of changes efficiently.
