# 31 - Dec - 2024

## useMemo() hook

- ek execution / state k wajah se pura component slow ho skta hai
- jo bhi huge calculation honge unhe useMemo() me wrap krnge, isse calculation to slow hoga hi but dusre methods ko affect nahi krega
- take two buttons which prints odd and even and in first state increment one variable till 1 billion then print odd/even

  - kya hoga?

- useMemo():

  - ek sada pyaaj sataa container ko sada deta hai, useMemo() removes that rot pyaaj

- it is used for performance optimization.

## Notes by sir

- useMemo() hook is used to achieve performance optimization in React applications

- it will return the memoized value.

```jsx
const memoizedValue = useMemo(cbf, dependencyArray);
```

- Your cbf passed to the useMemo() hook, if has any expensive/heavy calculation/computation, so it could affect the overall performance of the application but as it is used with the useMemo() hook, it wan't get called on each component re-render. It will get called only when there are some changes in dependencies and it will return the memoized value
