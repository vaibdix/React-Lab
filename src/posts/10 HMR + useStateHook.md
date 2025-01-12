# 10 - Dec - 2024

## HOT MODULE REPLACEMENT (HMR) (hot reload in Flutter)

- almost like auto save in vs code.
- Hot Module Replacement(HMR) is one of the most useful features offered by React.
- It allows all kinds of modules to be updated at runtime without the need for a full refresh.
- HMR is not intended for use in production (version which the user uses), meaning it should only be used in development.

**kaun karta hai ye HMR?** ========> package bundler i.e rollup(vite)
**is hmr same as hot reload in Flutter?** ========> yes.

---

## Function-Based Components and useState

- fn based comp. is by default stateless, if u want to make it stateful, we have to use `useState()` hook.

---

## Hooks?

- special inbuilt fns in React
- kaise pehchane: if it starts with 'use'
- in class based comp, we can't use hooks but in fn based component, we can use.

---

## 1. useState()

- used to declare variable that needs to be frequently changed like no of products in cart.
- default behaviour of `useState`: jab bhi state me change krte hn tub pura ka pura component read hota hai.

### How `useState` will internally look like?

```javascript
let useMyState = (a) => {
  let setMyState = (a) => {
    // logic to modify state
  };
  return [a, setMyState];
};
let [state, setState] = useMyState(55);
console.log(state);
```

## Features or Characteristics of React

1. **Component-based architecture**

   - React follows a component-based architecture. This means that we can break down the UI into small, reusable components.
   - Example: diagram (see clicked image - navbar + sidebar + maincontent + footer)

2. **React is declarative**

   - React is declarative, meaning many things are already declared and we just have to use them. In contrast, imperative programming requires us to explicitly define many of these things.
   - We don't need to write any DOM methods because everything is already declared with JSX.
   - React provides many inbuilt hooks for different functionalities, and we just have to use them.

   **Declarative means everything is declared, we just have to use it.**
   Example: If you know how to cook biryani, you don't need any instructions from anyone.

   **Imperative programming**: Many things are not already declared, and we need to explicitly/manually explain them.
   Example: If you don't know how to cook biryani, you will need instructions from someone to cook it.
   Example: DOM in JavaScript.

3. **Write Once, Use Anywhere (WORA)**
   - In React, we can create components for functionalities that are repetitive, and we can use these components an unlimited number of times.
   - Example: We create a button component once and use it wherever we want, any number of times.
