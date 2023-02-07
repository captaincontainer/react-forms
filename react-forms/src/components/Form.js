import React from 'react';
import './Form.css'

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    console.log('username: ', username)
  }

  return (<>
    <form className='myForm' onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name='username'></input>
      <button type='submit'>Submit</button>
    </form>
  </>)
}

export default Form