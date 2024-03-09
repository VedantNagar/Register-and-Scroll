import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import classes from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        duration: 6000,
      });
      return;
    }
    try {
      const { data } = await axios.post('/register', {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error, {
          duration: 6000,
        });
      } else {
        setData({});
        toast.success('Login Succesful. Welcome!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.register}>
      <h1>Register</h1>
      <div>
        <form onSubmit={registerUser}>
          <div className={classes.input}>
            <label>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
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
          <div className={classes.input}>
            <label>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm password'
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
