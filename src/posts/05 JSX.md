# 04 - Dec - 2024

### Maintain Proper Folder Structure

---

### JSXIntro (Component)

- **JSX** stands for **JavaScript XML**.
- JSX is an HTML-like structure written within JavaScript.
- While writing JSX, we have to follow some important rules.

---

### jsxRules (Folder)

#### **JsxRule1.jsx (Component)**

- You must return JSX. If you are not returning JSX, you will not get any output.

#### **JsxRule2.jsx (Component)**

- We can return only one JSX element at a time.
- If we want to return more than one line of JSX, we must wrap that JSX in a parent element.

  - **This will work** because we are returning more than one element with one parent `div` element:

    ```jsx
    return (
      <div>
        <div>JsxRule2</div>
        <div></div>
      </div>
    );
    ```

  - **This will not work** because we are returning more than one element without any parent div element:
    ```jsx
    return (
      <div>JsxRule2</div>
      <div></div>
    );
    ```

#### **JsxRule3.jsx (Component)**

- Every tag must be properly closed.

  - **This will work** because all elements are properly closed:

    ```jsx
    return (
      <div>
        JsxRule3
        <div>
          <br />
          <hr />
          <input type="text" />
        </div>
      </div>
    );
    ```

  - **This will not work** because some elements are not closed properly:
    ```jsx
    return (
       <div>
       JsxRule3
       <div>
         <br>
         <hr>
         <input type='text' >
       </div>
       </div>
    );
    ```

#### **JsxRule4.jsx (Component)**

- In JSX, you can't use attributes like `class` and `for`. Instead, you have to use `className` and `htmlFor`.

  ```jsx
  return (
    <div>
      <label htmlFor="">Jsx Rule4</label>
      <p className="para1">
        We can't use attributes like 'class' and 'for' in JSX, instead we have to use 'className'
        and 'htmlFor'.
      </p>
    </div>
  );
  ```

#### **JsxRule5.jsx (Component)**

- **Fragments** are simply a pair of empty angular braces, i.e., `<></>`.
- By using **React Fragments**, we avoid the creation of extra nodes, helping to boost app performance.
- We can write fragments in three different ways:

  1. **As `<></>`:**

     ```jsx
     return (
       <>
         <h1>Fragments</h1>
         <p></p>
       </>
     );
     ```

  2. **As `<React.Fragment></React.Fragment>`:**

     ```jsx
     return (
       <React.Fragment>
         <h1>Fragments</h1>
         <p></p>
       </React.Fragment>
     );
     ```

  3. **As `<fragment></fragment>` (but we need to destructure it first):**
     ```jsx
     import { Fragment } from 'react';
     return (
       <fragment>
         <h1>Fragments</h1>
         <p></p>
       </fragment>
     );
     ```

- **Why 3 ways to do the same thing?**
  - We can’t use the `key` attribute with an empty fragment. However, we can use it with `<fragment>` or `<React.Fragment></React.Fragment>`.

---

### JsxRule6.jsx (Component)

- Related to **JSX expressions**.
