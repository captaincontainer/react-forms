import React, { useState } from 'react';
import './Form.css'

// Managed form
const ManagedForm = () => {

  const [username, setUsername] = useState('')
  const [isError, setIsError] = useState(false)

  function handleSubmit(event) {
    // Prevent browser refresh
    event.preventDefault();
    console.log(username, event.target.username.value)
    console.log('username: ', username)
  }

  function handleChange(event) {
    console.log('handleChange', event.target.value)
    const tempUsername = event.target.value
    setUsername(tempUsername)

    // inline validation
    const isLessThanFiveChars = event.target.value.length <= 5
    setIsError(isLessThanFiveChars)
  }

  return <form className='userForm' onSubmit={handleSubmit}>
    <label>Username:</label>
    {isError ? <p>Username must be more than 5 characters</p> : <div />
    }
    <input type='text' name='username' value={username} onChange={handleChange}></input>
    <button type='submit'>Submit</button>
  </form >
}

export default ManagedForm
