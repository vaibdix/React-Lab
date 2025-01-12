# 16 - Dec - 2024

### ES7 Snippet Extension

- `rafc`: React Arrow Function Component
- `rafce`: React Arrow Function Component with Export
- `rcc`: React Class Component

### Props

- **Props** is an object.
- Example:

```javascript
let a = 10;
# In parent class, pass props like this:
<ChildComponent props={a} />;
# In child class, props look like this internally, in (key:value) pair:
{
    props: 10;
}
```

#### Default props:

- if parent component is not sending any props to the child component and we want some default value in child, then we use default props
- destructuring is compulsory

### eg:

```js
// In parent class:
<PropsEx1Child />;
// In child class:
const PropsEx1Child = ({ gift = 'Swift' }) => {
  return <div>{gift}</div>;
};
```

### html element creation before JSX:

- document.createElement() k jaisa hi syntax likha jata tha jab JSX nhi aya tha React me.

```js
const ABC = () => {
  let myDiv = React.createElement(
    'div',
    { id: 'mydiv' },
    React.createElement(
      'section',
      { title: 'This is section' },
      React.createElement('p', null, 'Text')
    )
  );
  return (
    <div>
      {myDiv} {/* Output will be ===> Text */}
    </div>
  );
};
export default ABC;
```

### PROPS DRILLING:

- sending data from one parent component to nth child component
- props drilling is not recommended
- props drilling is the problem; soln is context API
- Eg: passing LAN cable to 10th class drilling the wall
- refer clicked picture
