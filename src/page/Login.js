// import { Container } from "react-bootstrap";
// import Home_page from "./Home";
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import React, { useState } from 'react';
import Home_page from './Home';
import { hookUser } from '../dataFetch.js'

const callUser = async () => {
  let data = await hookUser()
  return data;
}

function checkLogin(e){
  e.preventDefault();
  let username = e.target.form.username.value;
  let passw = e.target.form.password.value;
  callUser().then((response) => {
    if(!(username in response) || response[username].PASSW != passw){
      console.log("failed");
    }
    else{
      console.log("pass");
    }
    
  });
}

function Login_page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Logged in as ${username} with password ${password}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="space-y-6" onSubmit={handleLogin}>
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Log in to your account
        </h1>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0-7a1 1 0 00-1 1v3a1 1 0 002 0V7a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Log in
          </button>
        </div>

      </form>
      </div>);
  }

export default Login_page;