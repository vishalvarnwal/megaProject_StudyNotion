import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { matchPath, NavLink, useLocation } from "react-router-dom";

const SidebarLink = ({ name, path, icon }) => {
  const Icon = Icons[icon];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`relative px-8 py-2 text-sm font-medium ${
        matchRoute(path)
          ? "bg-yellow-800 text-yellow-50"
          : "bg-opacity-0 text-richblack-300"
      } transition-all duration-200`}
    >
      <NavLink to={path} className={` `}>
        <span
          className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
            matchRoute(path) ? "opacity-100" : "opacity-0"
          }`}
        ></span>
        <div className="flex items-center gap-x-2">
          {Icon && <Icon className="text-lg" />}
          <span>{name}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarLink;
