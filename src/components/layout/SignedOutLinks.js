import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Register</NavLink></li>
            <li><NavLink to='/'>Log in</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks