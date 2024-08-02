import React, { useEffect, useState } from "react";
import { navbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { apiConnector } from "../../services/apiConnectors";
import { categories } from "../../services/apis";
import { RiArrowDropDownLine } from "react-icons/ri";

const sblnk = [
  { title: "python", link: "/catalog/python" },
  { title: "web dev", link: "/catalog/web-development" },
];

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);

  const fetchSublinks = async () => {
    try {
      let result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("printing sublink result", result);
      if (result?.data?.success) {
        result = result?.data?.categories;
      } else {
        result = [];
      }
      console.log("printing sublink result", result);
      setSubLinks(result);
    } catch (error) {
      console.log("cannot fetch the category list", error);
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

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
          <ul className="flex gap-6 text-richblack-25 relative">
            {navbarLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  {navLink.title === "Catalog" ? (
                    <div className="flex items-center gap-0 group">
                      <p>{navLink.title}</p>

                      <RiArrowDropDownLine className="text-red text-bold" />
                      <div className="invisible absolute left-[50%] top-[50%] rounded-md bg-richblack-5 p-4 text-richblack-900 transition-all duration-200 opacity-0 group-hover:visible group-hover:opacity-100 lg:w-[250px] translate-x-[-70%] translate-y-[30%] flex flex-col z-10">
                        <div className="absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded bg-richblack-5 translate-x-[-30%] translate-y-[-40%]"></div>
                        {subLinks.length ? (
                          subLinks.map((subLink, index) => (
                            <Link
                              to={`/catalog/${subLink.name
                                .replaceAll(" ", "-")
                                .toLowerCase()}`}
                              key={index}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                        ) : (
                          <div>No categories found</div>
                        )}
                      </div>
                    </div>
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
          {user && user.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
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
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;

// start from 1:5:49
