import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import { useContext, useState } from 'react';
import axios from 'axios';

const Navbar = ({ type }) => {

  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="linkLogo" to="/">
          <span className="logo"> easybooking</span>
        </Link>
        {type !== "login" &&
          <>
            {user ? (
              <div className="navItems">
                <span>{user.username}</span>
                <button className="navButton"
                  onClick={handleClick}>Log out</button>
              </div>) : (
              <div className="navItems">
                <button className="navButton">Register</button>
                <Link to="/login">
                  <button className="navButton">Login</button>
                </Link>
              </div>)}
          </>}
      </div>
    </div>
  )
}

export default Navbar