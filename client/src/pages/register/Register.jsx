import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/authContext';
import './register.css';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  console.log(error);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log([e.target.id]);
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'REGISTRATION_START' });
    try {
      const res = await axios.post('/auth/register', credentials);
      dispatch({ type: 'REGISTRATION_SUCCESS', payload: res.data });
      navigate('/');
    } catch (error) {
      dispatch({ type: 'REGISTRATION_FAILURE', payload: error.response.data });
    }
  };

  return (
    <div className="regPage">
      <Navbar type="login" />
      <div className="register">
        <div className="registerContainer">
          <div className="registerWrapper">
            <span className="regPageTitle">Welcome! Let's Sign Up.</span>
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="rInput"
            />
            <input
              type="text"
              placeholder="email"
              id="email"
              onChange={handleChange}
              className="rInput"
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="rInput"
            />
            <button
              disabled={loading}
              onClick={handleClick}
              className="rButton"
            >
              Sign Up
            </button>
            {error && <span className="errorMsg">{error.message}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
