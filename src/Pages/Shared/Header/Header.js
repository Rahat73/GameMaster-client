import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navbar justify-between pt-3 pb-16 px-14">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">
                                Home
                            </Link></li>
                            <li><Link to="courses">
                                Courses
                            </Link></li>
                            <li><Link to="faq">
                                FAQ
                            </Link></li>
                            <li><Link to="blog">
                                Blog
                            </Link></li>
                            {/* work needed -----------------------------------*/}
                            <li><Link to="login">
                                Login
                            </Link></li>
                            <li><Link to="registration">
                                Register
                            </Link></li>
                            {/* work needed -----------------------------------*/}
                        </ul>
                    </div>
                    <Link to="/"><button><img className='h-28 lg:h-40' src={logo} alt="logo" /></button></Link>
                </div>
                <div className="navbar-center hidden lg:flex mx-20">
                    <ul className="menu menu-horizontal p-0 items-center">
                        <li><Link to="/">
                            Home
                        </Link></li>
                        <li><Link to="courses">
                            Courses
                        </Link></li>
                        <li><Link to="faq">
                            FAQ
                        </Link></li>
                        <li><Link to="blog">
                            Blog
                        </Link></li>
                    </ul>
                </div>
                <div className='menu menu-horizontal p-0 items-center hidden md:block'>
                    {/* work needed---------------------------- */}
                    <Link className='mr-2 btn btn-ghost' to="login">Login</Link>
                    <Link className='btn btn-ghost' to="registration">Register</Link>
                    {/* work needed ------------------------------ */}
                </div>
                <div>
                    <div className='tooltip' data-tip='use_name'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar px mx-4">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;