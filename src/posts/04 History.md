# 03 - Dec - 2024

### History

- `npm trends`: Compare the popularity of libraries like **React**, **Angular**, **Vue**, **Svelte**.

#### Timeline:

- **Angular** (2009)
- **React** (2011)
- **Angular 2** (2014-15)
- **Vue** (2015-16)

---

### npm Website (Registry)

- npm is the world’s largest package/libraries registry.
- Everything related to JavaScript, such as packages and libraries, is stored here.
- **npm** stands for **Node Package Manager**.

---

### Package Installers

- **npm** (We will use this)
- Yarn
- Bun
- pnpm
- spm
- cnpm
- chocolatey

---

### Latest Version of React

- **React 18**

---

### main.jsx

- `CreateRoot >`
  - Why use `render()` and not `append()`?
    - Because **JSX** code needs to be converted into browser-understandable JavaScript, which is done through **transpilation**.

---

### VVI (Very Very Important)

#### Explanation of Diagram: **Component-Based Architecture**

- We create various components in different folders and then import all modules into the **App.jsx** file.
- The **App.jsx** file communicates with the **main.jsx** file.

  - **main.jsx**:

    - Targets the `div` inside **index.html** using `getElementById()`.
    - Creates a root using `CreateRoot()`.
    - Finally, the rendering process happens, rendering **App.jsx** inside **main.jsx**.

  - Since all the JSX code will finally come inside **main.jsx**, and **index.css** is imported inside **main.jsx**, the styling applied to different components will work because **index.css** acts as a global file for styling.

---

### Purpose of React:

- React was created to **reduce the complexity of DOM manipulation** and provide a more efficient way to update the user interface.
