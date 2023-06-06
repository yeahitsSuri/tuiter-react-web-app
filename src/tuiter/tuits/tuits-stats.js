import React from "react";
import { useDispatch } from "react-redux";
import { updateLikes } from "../reducers/tuits-reducer";
import "./style.css";

const TuitStats = ({ tuit }) => {
  const { replies, retuits, likes, liked, _id } = tuit;
  const dispatch = useDispatch();

  const heartIconStyle = {
    color: liked ? "palevioletred" : "inherit",
  };

  const toggleLike = () => {
    dispatch(updateLikes({ id: _id, liked: !liked }));
  };

  return (
    <div className="row" style={{ paddingLeft: '13px', paddingBottom: '15px' }}>
      <div className="col-3">
        <div><i className="fas fa-comment"></i> {replies}</div>
      </div>
      <div className="col-3">
        <div><i className="fas fa-retweet"></i> {retuits}</div>
      </div>
      <div className="col-3">
        <i className="fas fa-heart" style={heartIconStyle} onClick={toggleLike}></i>{" "}
        {likes}
      </div>
      <div className="col-3">
        <div><i className="fas fa-upload"></i></div>
      </div>
    </div>
  );
};

export default TuitStats;
