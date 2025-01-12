# 30 - Nov - 2024

### Project Folder Structure

#### 1. **Node Modules**

- This folder holds all the packages that are downloaded during the React installation. These packages are necessary for running the React application.
- **Examples of packages**:
  - Babel
  - ESLint
  - Rollup (package bundler for React)
  - ViteJS
  - React
  - React-DOM

#### 2. **Public (don't use me)**

- This folder stores static assets like images, audio, etc. It is similar to an **assets** folder.
- **Tip**: Prefer using an **assets** folder inside the **src** folder instead of the **public** folder.

#### 3. **src (write everything here)**

- The main source folder for writing React code.
  - Example structure:
    - **Components**
      - **about**
        - about.html
        - about.css

#### 4. **.gitignore**

- This file stores a list of files and directories that need to be ignored when pushing to Git.

#### 5. **eslint.config.js**

- This configuration file helps identify **syntax errors** while writing JavaScript code.

#### 6. **index.html**

- This is the only HTML file in a React app. It typically contains just one line of HTML:
  ```html
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
  ```

#### 7. **package-lock.json**

- This file contains information about all the packages in **node_modules** that are downloaded, formatted as a JSON object.

#### 8. **package.json**

- This file is like the **dashboard** of the project, providing an overview of the dependencies and important package information.
  - **Contains**:
    - Project metadata (name, version, etc.)
    - Main dependencies
    - Dev dependencies
    - Scripts for development and production

#### 9. **Readme.md**

- This file contains **project-related information** that is displayed on GitHub.
  - **Includes**:
    - Project description
    - Instructions for team members

#### 10. **vite.config.js**

- This file contains the **Vite** configuration.
  - Vite is known for being **40% faster** than other build tools.
  - The minimum size of a project created using Vite is around **55 MB**.

---

### package.json

- **Versioning**: `5.5.3` (majorUpdate.minorUpdate.patch)
- **Scripts**: Defines custom scripts for running the app in development or production.

#### Dependencies:

- These are essential libraries or packages that are required during both the **development** and **production** phases.
  - **Examples**:
    - React
    - React-DOM

#### Dev Dependencies (Development Dependencies):

- These are libraries or packages that are only needed during the **development** phase and are not required after deployment.
  - **Examples**:
    - ESLint
    - Vite
