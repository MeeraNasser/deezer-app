import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deezer from '../../images/deezer.png';

export default function Login({ setToken }) {
    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return(
        <div className="outer">
            <div className="inner">
                <div>
                    <img alt="deerzer" src={deezer}/><span>Get your music !</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Sign in</h3>

                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="Enter your username" 
                        onChange={e => setUserName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" 
                        onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">LOGIN</button>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func
}