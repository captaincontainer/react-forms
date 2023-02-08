import React, { useState } from 'react';
import './Form.css'

// Multi-input form
const MultiForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  function handleSubmit(event) {
    // Prevent browser refresh
    event.preventDefault();
    console.log(username, event.target.username.value)
    console.log('username: ', username)
    // password
    console.log(password, event.target.password.value)
    console.log('password: ', password)
    // TODO: Post with Axios to our backend
  }

  function handleChange(event) {
    console.log('handleChange', event.target.value)
    const tempUsername = event.target.value
    setUsername(tempUsername)

    // inline validation
    const isLessThanFiveChars = event.target.value.length <= 5
    setIsError(isLessThanFiveChars)
  }

  function handlePasswordChange(event) {
    console.log('handlePasswordChange', event.target.value)
    setPassword(event.target.value)

    // // inline validation
    // const isLessThanFiveChars = event.target.value.length <= 5
    // setIsError(isLessThanFiveChars)
  }

  return <form className='userForm' onSubmit={handleSubmit}>
    {/* Username */}
    <label>Username:</label>
    {isError ? <p>Username must be more than 5 characters</p> : null
    }
    <input type='text' name='username' value={username} onChange={handleChange}></input>
    {/* Password */}
    <label>Password:</label>
    <input type='password' name='password' value={password} onChange={handlePasswordChange}></input>
    <button type='submit'>Submit</button>
  </form >
}

export default MultiForm
