import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../context/userContext';
import classes from './Login.module.css';
const Login = () => {
  const { isLogin, setIsLogin } = useContext(userContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(data)
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error, {
          duration: 2000,
        });
      } else {
        setData({});
        toast.success('Logged in', {
          duration: 2000,
        });
        setIsLogin(true);
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <div>
        <form onSubmit={registerUser} className={classes.form}>
          <div className={classes.input}>
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className={classes.input}>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
