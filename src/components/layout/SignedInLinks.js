import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='bnt btn-floating pink lighten-1'>KV</NavLink></li>

        </ul>
    )
}

export default SignedInLinks