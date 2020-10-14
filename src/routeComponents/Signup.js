import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


import api from '../apis/index'
import NavBar from "./NavBar";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Signup() {

  const history = useHistory();

  const [ state, setState ] = useState({
    git_user: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [ loadingState, setLoadingState ] = useState({
    loading: false,
    error: ''
  })

  // Atualiza o state toda vez que o usuario digitar ou apagar algo dentro dos campos do form
  const handleChange = (event) => {
    const temp = {...state}
    temp[event.currentTarget.name] = event.currentTarget.value;
    setState(temp);
  };

  const handleSubmit = async (event) => {
    setLoadingState({...loadingState, loading: true});

    try {
      event.preventDefault();

      const response = await api.post('/signup', state);
      console.log(response);

      setLoadingState({...loadingState, loading: false});

      history.push('/login');
    }catch (err) {
      console.error(err);
      setLoadingState({ loading: false, error: err.message });
    }
  }

  return (

      <div id="content">
        <NavBar pageName="Signup" />
        <div>
          <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
            <div className="control pt-2">
              <label htmlFor="git_user">Github Username </label>
              <input
                type="text"
                id="git_user"
                name='git_user'
                className="form-control"
                placeholder="Github Username"
                value={state.git_user}
                onChange={handleChange}
              />
            </div>
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
              <small id="passwordInfo" className="form-text text-muted">
                Password should be at least 8 characters long, should contain an uppercase letter, lowercase letter, a number and a special character
              </small>
            </div>
            <div className="control pt-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name='confirmPassword'
                className="form-control"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                onChange={handleChange}
              />
              <small id="passwordInfo" className="form-text text-muted">
                Must match the password
              </small>
            </div>

            {loadingState.error ? (
              <div className='alert alert-danger' role='alert'>
                {loadingState.error}
              </div>
            ) : null}

            {loadingState.loading ? (
              <span className="btn btn-info my-4 btn-block"
                style={{ backgroundColor: "#7386D5" }}
              >
                Loading...
              </span>
            ) : (
              <button className="btn btn-info my-4 btn-block"
                style={{ backgroundColor: "#7386D5" }}
                type="submit"
              >
                Sign Up
              </button>
            )}
            

            <p>or sign up with:</p>

            <a href="/" role="button">
              <FontAwesomeIcon icon={faGithub} color="#7386D5" size="3x" />
            </a>
          </form>
        </div>

        <div className="line"></div>
      </div>
  );
}

export default Signup;
