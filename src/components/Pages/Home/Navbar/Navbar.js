import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToComponent, contact, about, projectUndertaken }) => {

    const menu =
        <>
            <li><Link to="/home">Home</Link></li>
            {projectUndertaken && <li><Link onClick={() => scrollToComponent(projectUndertaken)}>Projects</Link></li>}
            {about && <li><Link to="/home" onClick={() => scrollToComponent(about)}>About</Link></li>}
            {contact && <li><Link onClick={() => scrollToComponent(contact)}>Contact</Link></li>}


        </>


    return (
        <div className="navbar bg-slate-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menu}
                    </ul>
                </div>


                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>

            <div className="navbar-end">
                {/* <a className="btn">Get started</a> */}
            </div>
            {/* {
                setSpinner(false)
            } */}
        </div>
    );
};

export default Navbar;