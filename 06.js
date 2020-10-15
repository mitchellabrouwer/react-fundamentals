// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

// React uses synthetic events for performance reasons. Event.nativeEvent accesses the real event
// console.dir on a DOM node will show all the accessible properties
// htmlFor === for
// useRef is a regular JS object with a current property. When it is updated it does not perform a re-render

import React from "react";

// Extra 3 - Control the input value

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const { value } = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} value={username} id="usernameInput" type="text" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;

// Exercise

// function UsernameForm({onSubmitUsername}) {
//   function handleSubmit(e) {
//     e.preventDefault()
//     onSubmitUsername(e.target.elements.usernameInput.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// Extra 1 - using a ref

// function UsernameForm({onSubmitUsername}) {
//   const usernameInputRef = useRef(null)

//   function handleSubmit(e) {
//     e.preventDefault()
//     onSubmitUsername(usernameInputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input ref={usernameInputRef} id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// Extra 2 - validate lowercase

// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   function handleSubmit(event) {
//     event.preventDefault()
//     onSubmitUsername(event.target.elements.usernameInput.value)
//   }

//   function handleChange(event) {
//     const {value} = event.target
//     const isValid = value === value.toLowerCase()
//     setError(isValid ? null : 'Username must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input onChange={handleChange} id="usernameInput" type="text" />
//         <div style={{color: 'red'}}>{error}</div>
//         <button disabled={Boolean(error)} type="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }
