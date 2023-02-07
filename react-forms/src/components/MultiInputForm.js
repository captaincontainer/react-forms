import React, { useState } from 'react';
import './Form.css'

const MultiInputForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChange = (event) => {
    event.preventDefault();
    console.log('onChange: ', event.target.value)
    setUsername(event.target.value)
  }

  const onPasswordChange = (event) => {
    event.preventDefault();
    console.log('onChange: ', event.target.value)
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    console.log('username: ', username)
    const password = event.target.password.value
    console.log('password: ', password)
    setUsername('')
    setPassword('')
  }

  return (<>
    <form className='myForm' onSubmit={handleSubmit}>
      {/* Username */}
      <label>Name:</label>
      <input name='username' onChange={onChange} value={username}></input>
      {/* Password */}
      <label>Password:</label>
      <input name='password' onChange={onPasswordChange} value={password}></input>
      <button type='submit'>Submit</button>
    </form>
  </>)
}

export default MultiInputForm