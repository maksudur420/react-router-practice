import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink to="/" className={({isActive})=> isActive? 'active':undefined}>Home</NavLink>
                <NavLink to="/About" className={({isActive})=> isActive? 'active':undefined}>About</NavLink>
                <NavLink to="/friends" className={({isActive})=> isActive? 'active':undefined}>Friends</NavLink>
                <NavLink to='/posts' className={({isActive})=> isActive? 'active':undefined}>Posts</NavLink>
                <NavLink to="/products" className={({isActive})=> isActive? 'active':undefined}>Products</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;