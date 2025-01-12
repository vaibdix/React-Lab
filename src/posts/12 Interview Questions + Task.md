# 12 - Dec - 2024

## PROPS

### Today's tasks

- Create `products` array of objects in `PropsIntro`.
- Create `ListProducts` component.
- Add `ListProducts` in `PropsIntro`.
- Send data as props (object of products) to `ListProducts` component.
- Create a card layout for products in `ListProducts` and display data of the `products` object from `PropsIntro`.

### Interview Questions

#### 1. What is React?

- React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to build fast, interactive, and dynamic web applications with reusable UI components.

#### 2. Features of React?

- Declarative: Makes the code more predictable and easier to debug.
- Component-based: Develop your UI with small, reusable pieces (components).
- Virtual DOM: React uses a virtual DOM to improve app performance by minimizing direct manipulation of the real DOM.
- Unidirectional Data Flow: Data flows in one direction, making it easier to understand and manage the state.
- JSX: A syntax extension that allows HTML-like code in JavaScript.

#### 3. Difference between Library and Framework?

- **Library**: A collection of pre-written code that provides specific functionalities and can be called upon when needed (e.g., React).
- **Framework**: A larger collection of tools and libraries that provides structure and guidelines for building applications. A framework often dictates how you should build the app.

#### 4. What is a Single Page Application (SPA)?

- A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app, rather than loading new pages from the server.

#### 5. What is Declarative?

- Declarative programming is a style of programming where you describe _what_ you want to happen, rather than _how_ to make it happen. React is declarative because you specify the UI state and let React handle how it should be rendered.

#### 6. What is Virtual DOM?

- The Virtual DOM is a lightweight copy of the real DOM. React uses it to optimize updates by only re-rendering parts of the DOM that have changed, instead of re-rendering the entire page.

#### 7. How many Virtual DOM React maintains? How?

- React maintains a single Virtual DOM. The changes to this virtual DOM are then compared (reconciliation) with the real DOM, and only the differences are updated in the real DOM to improve performance.

#### 8. Difference between Virtual DOM and Real DOM?

- **Virtual DOM**: A lightweight copy of the real DOM that React uses to track changes. It is much faster than directly manipulating the real DOM.
- **Real DOM**: The actual DOM used by the browser. Manipulating the real DOM can be slower compared to the virtual DOM because it triggers reflows and repaints.

#### 9. What is Reconciliation?

- Reconciliation is the process of comparing the Virtual DOM with the Real DOM and applying the necessary changes to the Real DOM.

#### 10. What is React Fiber?

- React Fiber is a re-implementation of React's core algorithm for rendering. It allows for better performance and optimization by breaking work into smaller chunks and prioritizing updates.

#### 11. Difference between React Fiber and previous versions of React?

- The main difference is that React Fiber allows for asynchronous rendering, enabling React to break tasks into smaller chunks and prioritize critical updates, improving the responsiveness and performance of apps.

#### 12. Folder Structure of React?

- A typical React project might have the following folder structure:

#### 13. What is the use of scripts in `package.json`?

- The `scripts` section in `package.json` contains commands that can be run through npm (e.g., `npm start`, `npm test`). It defines the build process, testing, and deployment commands.

#### 14. What is a Component?

- A component is a self-contained unit of a UI in React, which accepts input (props) and returns a React element describing how that UI should appear.

#### 15. What are the types of components?

- **Functional Components**: Components defined using functions.
- **Class Components**: Components defined using ES6 classes.
- **Pure Components**: Components that only re-render when props or state change.
- **Stateful Components**: Components that manage their own state.

#### 16. Difference between Class-based and Function-based Components?

- **Class-based Components**: Use ES6 classes and can have lifecycle methods and state.
- **Function-based Components**: Are simpler, don't have lifecycle methods by default, but can use hooks for state and side effects.

#### 17. What is a Hook?

- A Hook is a special function that lets you "hook into" React features, such as state and lifecycle methods, in functional components.

#### 18. What are Lifecycle Methods? Can you name a few?

- Lifecycle methods are special methods in class components that get called at specific points during the component's lifecycle.
- Examples: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

#### 19. What is `createRoot`?

- `createRoot` is the new API in React 18 used to create the root React container for rendering, replacing the old `ReactDOM.render`.

#### 20. What is `react-dom`? Its use?

- `react-dom` is the package that provides DOM-specific methods for React. It is used to render React components into the DOM and handle events.

#### 21. What are the methods in `react-dom`?

- Common methods in `react-dom`:
- `render()`
- `createRoot()`
- `hydrate()`
- `unmountComponentAtNode()`

#### 22. What is the use of CDN links?

- CDN (Content Delivery Network) links are used to load external libraries or resources quickly from servers located near the user, reducing the load time and improving performance.

#### 23. What is Render?

- `render()` is a method used in class components to define what should be displayed on the screen. In functional components, the return statement functions as the render method.

#### 24. What is `useState`?

- `useState` is a React hook used in functional components to add state management. It returns an array with the current state and a function to update it.

#### 25. What is Props?

- Props (short for properties) are inputs to a React component that are passed from a parent component to a child component. Props are immutable.

#### 26. What is `props.children`?

- `props.children` refers to any child elements or components passed into a component. It allows components to be more flexible and reusable.

#### 27. Difference between Props and State?

- **Props**: Passed to a component by its parent and are immutable.
- **State**: Managed inside a component and can change over time. The component re-renders when the state changes.
