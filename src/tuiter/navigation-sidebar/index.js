import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [, tuiter, active] = pathname.split("/"); 

  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
  const icons = ["fas fa-home", "fas fa-hashtag", "fas fa-bell", "fas fa-envelope", "fas fa-bookmark", "fas fa-list", "fas fa-user", "fas fa-ellipsis-h"];

  return (
    // make tuiter/home active as default page- tianshu
    <div className="list-group">
      <Link to="/tuiter/home" className={`list-group-item text-capitalize ${active === "home" ? "active" : ""}`}>
        <i className={icons[0]}></i> <span className="d-none d-xxl-inline">home</span>
      </Link>
      {links.slice(1).map((link, index) => (
        <Link
          key={link}
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}
        >
          <i className={icons[index + 1]}></i> <span className="d-none d-xxl-inline">{link}</span>
        </Link>
      ))}
      {!currentUser && <Link className="list-group" to="/tuiter/login">Login</Link>}
      {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
      {currentUser && <Link className="list-group" to="/tuiter/profile">Profile</Link>}
      <button className="btn btn-primary mt-2 p-2 rounded-pill">Tuit</button>
    </div>
  );
};

export default NavigationSidebar;
