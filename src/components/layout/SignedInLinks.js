import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../../store/reducers/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.logOut}>Log out</a></li>
            <li><NavLink to='/' className='bnt btn-floating pink lighten-1'>{ props.profile.initials }</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)