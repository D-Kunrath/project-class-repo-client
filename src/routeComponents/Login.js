import React, { useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';

import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import api from "../apis";

function Login(props) {
  const history = useHistory();
  const mounted = useRef();
  mounted.current = false;

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [loadingState, setLoadingState] = useState({
    loading: false,
    error: ''
  });

  useEffect(() => {
    mounted.current = true;
  }, []);

  useEffect(() => {
    return () => {
      mounted.current = false;
    }
  }, []);


  const handleChange = (event) => {
    const temp = { ...state };
    temp[event.currentTarget.name] = event.currentTarget.value;
    setState(temp);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingState({...loadingState, loading: true});
    try {
      const { data } = await api.post('/login', state)
      console.log('data ->', data)
      props.setUserState({ user: {...data.user }, token: data.token });

      localStorage.setItem('loggedInUser', JSON.stringify({
        user: { ...data.user },
        token: data.token,
      }))

      if (mounted) {
        setLoadingState({...loadingState, loading: false})
        history.push('/profile');
      }
    } catch (err) {
      console.error(err)
      setLoadingState({...loadingState, loading: false})
    }
  }

  return (

      <div id="content">
        <NavBar pageName="Login" />

        <div>
          <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
            <div className="control pt-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name='email'
                className="form-control"
                placeholder="E-mail"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="control pt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name='password'
                className="form-control"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-info my-4 btn-block"
              style={{ backgroundColor: "#7386D5" }}
              type="submit"
            >
              Login
            </button>

            <p>or sign up with:</p>

            <a href="/" role="button">
              {" "}
              <FontAwesomeIcon icon={faGithub} color="#7386D5" size="3x" />{" "}
            </a>
          </form>
        </div>

        <div className="line"></div>
      </div>

  );
}
export default Login;
