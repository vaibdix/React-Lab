# 21 - Dec - 2024

### CRUD operation (create and read) done

### see EventsEx5

- useState Hook: The component uses the useState hook to manage its state.

```js
let [state, setState] = useState({
  user: '',
  pass: '',
  id: Date.now(),
  users: [],
});
```

- `user`: Stores the username input.
- `pass`: Stores the password input.
- `id`: Stores a unique identifier for each user, initialized with the current timestamp.
- `users`: An array to store the list of registered users.

### Event Handlers

- handleChange: Updates the state when the input fields change.

```js
let handleChange = (e) => {
  let { name, value } = e.target;
  setState({ ...state, [name]: value });
};
```

### Uses the name attribute of the input fields to update the corresponding state property.

### handleSubmit: Handles form submission.

```js
let handleSubmit = (e) => {
  e.preventDefault();
  let tempObj = {
    user: state.user,
    pass: state.pass,
    id: state.id,
  };
  setState({
    user: '',
    pass: '',
    id: Date.now(),
    users: [...users, tempObj],
  });
  console.log(state);
};
```

### Prevents the default form submission behavior.

- Creates a temporary object tempObj with the current user, pass, and id.
- Resets the user and pass fields, generates a new id, and adds the new user to the users array.

### JSX Structure

- Form Section: Contains the registration form.

### Users List Section: Displays the list of registered users.

```js
<main className="w-[96%] bg-orange-300 p-10 m-5">
  <h1 className="text-2xl mb-5">Users</h1>
  <div className="flex flex-wrap gap-5">
    {state.users.length > 0 &&
      state.users.map((val, i) => {
        return (
          <div className="border p-5 rounded-lg" key={i}>
            <h1 className="text-3xl">{val.user}</h1>
            <h2>{val.pass}</h2>
            <h1 className="text-md">{val.id}</h1>
            <button className="p-1 border m-2 rounded-sm text-white bg-green-800">update</button>
            <button className="p-1 border m-2 rounded-sm text-white bg-red-800">delete</button>
          </div>
        );
      })}
  </div>
</main>
```

### Additional Notes

- `Key Prop`: When rendering a list of elements, it's important to provide a unique key prop to each element. In this case, the key prop is set to the index i.
- `Styling`: The component uses Tailwind CSS classes for styling.
  Potential Improvements
- `Unique ID Generation`: Consider using a more robust method for generating unique IDs, such as the uuid library.
- `Form Validation`: Add more comprehensive form validation to ensure the inputs meet certain criteria.
- `State Management`: For larger applications, consider using a state management library like Redux or Context API.
- These notes should help you understand the structure and functionality of the EventsEx5 component.

```js
<section className="border p-5 bg-gray-600/10">
  <h1 className="text-3xl my-2">Registration Form</h1>
  <form method="post" action="" onSubmit={handleSubmit}>
    <input
      className="p-2 border m-1 w-full rounded-md"
      type="text"
      placeholder="username"
      name="user"
      value={user}
      onChange={handleChange}
      required
    />
    <br />
    <input
      className="p-2 border m-1 w-full rounded-md"
      type="password"
      placeholder="password"
      name="pass"
      value={pass}
      onChange={handleChange}
      required
    />
    <br />
    <button className="p-2 border m-1 w-full bg-green-500 rounded-md text-white">submit</button>
  </form>
</section>
```

### full Code

```jsx
import React, { useState } from 'react';

const EventsEx5 = () => {
  let [state, setState] = useState({
    user: '',
    pass: '',
    id: Date.now(),
    users: [],
  });
  let { user, pass, id, users } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(state);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let tempObj = {
      // user, pass
      user: state.user,
      pass: state.pass,
      id: state.id,
    };
    setState({
      user: '',
      pass: '',
      id: Date.now(),
      users: [...users, tempObj],
    });
    console.log(state);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="border p-5 bg-gray-600/10">
        <h1 className="text-3xl my-2">Registration Form</h1>
        <form method="post" action="" onSubmit={handleSubmit}>
          <input
            className="p-2 border m-1 w-full rounded-md"
            type="text"
            placeholder="username"
            name="user"
            value={user}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="p-2 border m-1 w-full rounded-md"
            type="password"
            placeholder="password"
            name="pass"
            value={pass}
            onChange={handleChange}
            required
          />
          <br />
          <button className="p-2 border m-1 w-full bg-green-500 rounded-md text-white">
            submit
          </button>
        </form>
      </section>
      <main className="w-[96%] bg-orange-300 p-10 m-5">
        <h1 className="text-2xl mb-5">Users</h1>
        <div className="flex flex-wrap gap-5">
          {state.users.length > 0 &&
            state.users.map((val, i) => {
              return (
                <div className="border p-5 rounded-lg">
                  <h1 className="text-3xl">{val.user}</h1>
                  <h2>{val.pass}</h2>
                  <h1 className="text-md">{val.id}</h1>
                  <button className="p-1 border m-2 rounded-sm text-white bg-green-800">
                    update
                  </button>
                  <button className="p-1 border m-2 rounded-sm text-white bg-red-800">
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default EventsEx5;
```
