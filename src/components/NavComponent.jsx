import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/images.jpeg'

const NavComponent = () => {
    return (
        <div>


            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Post Ronda</span>
                        <img src={logo} className="h-8 rounded-full" alt="Logo" />
                    </NavLink>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                                            isActive
                                                ? 'text-white bg-blue-700 md:text-blue-700'
                                                : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'
                                        }`
                                    }
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/users"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                                            isActive
                                                ? 'text-white bg-blue-700 md:text-blue-700'
                                                : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'
                                        }`
                                    }
                                >
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/posts"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                                            isActive
                                                ? 'text-white bg-blue-700 md:text-blue-700'
                                                : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'
                                        }`
                                    }
                                >
                                    Posts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavComponent