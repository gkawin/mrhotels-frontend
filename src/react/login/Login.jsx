import React from 'react'
import './Login.styl'

const Login = (props) => (
  <div className='login'>
    <div className='login__header-container'>
      <div className='login__header-content'>
        <span>
          Site
        </span>
        <span className='login__header-highlight'>
          Random
        </span>
      </div>
    </div>
    <input type='text' placeholder='username' name='user' /><br />
    <input type='password' placeholder='password' name='password' /><br />
    <input type='button' value='Login' />
  </div>
)

export default Login
