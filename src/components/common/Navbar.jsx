import React from "react";
import { navbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { ACCOUNT_TYPE } from "../../utils/constants";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} width={160} height={42} loading="lazy" />
        </Link>

        {/* nav links */}
        <nav>
          <ul className="flex gap-6 text-richblack-25">
            {navbarLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  {navLink.title === "Catalog" ? (
                    <div></div>
                  ) : (
                    <Link
                      className={"active" ? "text-yellow" : "text-richblack-25"}
                      to={navLink.path}
                    >
                      <p
                        className={`${
                          matchRoute(navLink?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {navLink.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* login signup and dashboard */}
        <div className="flex gap-x-4 items-center">
          {user && user.accountType != ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <IoCartOutline />
              {totalItems > 0 && <span>totalItems</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded">
                Login
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded">
                Sign up
              </button>
            </Link>
          )}
          {token != null && <ProfileDropdown />}
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;

// start from 1:5:49
