import React from 'react';
import useToken from './useToken';

export default function Logout() {
const { removeToken } = useToken();

    return(
        <div>
            <button onClick={removeToken} className="sign-icon">
                <i className="sign out icon"></i>
                <span>Logout</span>
            </button>
        </div>
    )
}