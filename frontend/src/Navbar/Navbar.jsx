import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="unList">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                            end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                    >
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
