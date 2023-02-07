import React, { useState } from 'react';
import './Form.css'

const ManagedForm = () => {
  const [username, setUsername] = useState('')

  const onChange = (event) => {
    console.log('onChange: ', event.target.value)
    event.preventDefault();
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    console.log('username: ', username)
    setUsername('')
  }

  return (<>
    <form className='myForm' onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name='username' onChange={onChange} value={username}></input>
      <button type='submit'>Submit</button>
    </form>
  </>)
}

export default ManagedForm