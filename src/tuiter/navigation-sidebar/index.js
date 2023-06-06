import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ active] = pathname.split("/");

  return (
    <div className="list-group">
      <Link to="../navigation.html" className="list-group-item list-group-item-action">
        <i className="fab fa-twitter"></i>
      </Link>

      <Link to="/home" className="list-group-item list-group-item-action active">
        <i className="fa fa-home"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "white"}}>Home</span>
      </Link>

      <Link to="/explore" className={`list-group-item list-group-item-action ${active === "explore" ? "active" : ""}`}>
        <i className="fa fa-hashtag"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>Explore</span>
      </Link>

      <Link to="../notifications.html" className="list-group-item list-group-item-action">
        <i className="fa fa-bell"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>Notifications</span>
      </Link>

      <Link to="../messages.html" className="list-group-item list-group-item-action">
        <i className="fa fa-message"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>Messages</span>
      </Link>

      <Link to="../bookmarks/bookmarks-css.html" className="list-group-item list-group-item-action">
        <i className="fa fa-bookmark"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>Bookmarks</span>
      </Link>

      <Link to="../lists.html" className="list-group-item list-group-item-action">
        <i className="fa fa-list"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>Lists</span>
      </Link>

      <Link to="../profile.html" className="list-group-item list-group-item-action">
        <i className="fa fa-user"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>Profile</span>
      </Link>

      <Link to="../more.html" className="list-group-item list-group-item-action">
        <i className="fa fa-ellipsis"></i>
        <span className="d-none d-xxl-inline d-xl-inline" style={{ paddingLeft: "10px", color: "gray"}}>More</span>
      </Link>

      <button className="btn btn-primary rounded-pill mt-4 wd-round-corner" action="../tuit.html">
        Tuit
      </button>
    </div>
  );
};

export default NavigationSidebar;
