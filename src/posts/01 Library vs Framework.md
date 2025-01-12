# 29 - Nov - 2024

### React

- **React** is a JavaScript library used for building single-page applications (SPA) where the page doesn't require a refresh.
- **React**: Focuses on **frontend development** only.
- **Next.js**: A **framework** built on top of React that focuses on both **frontend and backend development**.

#### Example:

- **Facebook Messaging Example**: Demonstrates React's capability to build dynamic, real-time applications.

- **GSAP**: A JavaScript library used for **CSS animations** purely with JS.

---

### Framework vs Library

#### Example:

- **Library vs College Library**:

  - **Framework**: Takes all books and notebooks for a specific class, like "History".
  - **Library**: Only takes the history book.

- **Library**: A collection of reusable blocks of code.
- **Framework**: A collection of libraries.

#### Characteristics:

- **Library**:

  - Lightweight.
  - Always oriented toward a specific functionality.
  - Libraries help in creating fast and scalable applications.
  - Applications using libraries are easier to debug.

- **Framework**:
  - Heavyweight.
  - Focuses on multiple functionalities.
  - Frameworks are more strictly typed compared to libraries.
  - External libraries or frameworks can be installed within a framework.
  - Frameworks tend to be slower compared to libraries.
  - Applications created with frameworks are harder to debug.

---

### SPA (Single Page Application)

- **SPA**: Single Page Applications don't require page reloads to update content.
  - They typically contain **only one HTML file**.
  - SPAs are **faster** than multi-page applications.
  - **AJAX** (Asynchronous JavaScript and XML) plays a significant role in the performance of SPAs.

#### What is AJAX?

- **Example**: Subham and the water bottle (everyone is going with him).
- **Key Concept**: AJAX reduces the **request-response cycle** significantly, which makes SPAs faster.
  - AJAX sends only the **necessary requests** to the server, reducing bandwidth usage.
  - This results in faster request-response cycles, making the application faster.
  - **AJAX** allows the content to change without requiring a page refresh.

---

### Package Bundler

- A **package bundler** bundles all the requests into individual bundles based on their extensions.
  - This helps in reducing the overall **bandwidth**.
  - If the frontend sends multiple requests, the bundler combines them into as few requests as possible based on their extensions.
  - The lower the bandwidth (number of requests and response cycles per second), the **faster** the application.
  - Example tools: **Webpack**, **Rollup**, **Parcel**.

---

### Steps for Installing React:

1. Create a folder and open **CMD** inside it.
2. Run the command:
   ```bash
   npm create vite@latest
   ```
