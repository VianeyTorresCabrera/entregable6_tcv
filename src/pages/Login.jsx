import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './styles/login.css';


const Login = () => {

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []); 

  const {handleSubmit, register, reset} = useForm();

  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';

  const submit =async data =>{
    await useAuth('/users/login',data);
    reset({
      email : '',
      password: '',
    });
    setToken(localStorage.getItem('token'));
  }

  const handleLogout = () =>{
    localStorage.removeItem('token');
    setToken();    
  }

  return (
    <>
    {
      token ?
        <button className='logout' onClick={handleLogout}>Logout</button>
      :
      <div className='login'>
      <form onSubmit={handleSubmit(submit)}>
        <div className='login_items'>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div className='login_items'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <button>Login</button>
        <p>If you nor register yet, <Link to = '/register'>register here</Link></p>
      </form>
    </div>
    }
    </>    
  )
}

export default Login;