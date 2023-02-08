import React from 'react';
import './Form.css'

// Unmanaged form
const Form = () => {

  function handleSubmit(event) {
    // Prevent browser refresh
    event.preventDefault();
    console.log('username: ', event.target.username.value)
  }

  return <form className='userForm' onSubmit={handleSubmit}>
    <label>Username:</label>
    <input type='text' name='username'></input>
    <button type='submit'>Submit</button>
  </form>
}

export default Form
