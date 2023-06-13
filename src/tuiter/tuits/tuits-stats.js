import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";
import "./style.css";

const TuitStats = ({ tuit }) => {
  const { replies, retuits, likes, liked, dislikes, disliked} = tuit; //update dislike
  const dispatch = useDispatch();

  const heartIconStyle = {
    color: liked ? "palevioletred" : "inherit",
  };

  const thumbsDownIconStyle = {
    color: disliked ? 'palevioletred' : 'inherit',
  };

  const toggleLike = () => {
    const updatedTuit = {
      ...tuit,
      liked: !liked,
      dislikes: disliked ? dislikes : dislikes,
      likes: liked ? likes - 1 : likes + 1,
    };
    dispatch(updateTuitThunk(updatedTuit));
  };
  
  const toggleDislike = () => {
    const updatedTuit = {
      ...tuit,
      disliked: !disliked,
      likes: liked ? likes : likes,
      dislikes: disliked ? dislikes - 1 : dislikes + 1,
    };
    dispatch(updateTuitThunk(updatedTuit));
  };


  return (
    <div className="row" style={{ paddingLeft: '13px', paddingBottom: '15px' }}>
      <div className="col-2">
        <div><i className="fas fa-comment"></i> {replies}</div>
      </div>
      <div className="col-2">
        <div><i className="fas fa-retweet"></i> {retuits}</div>
      </div>
      <div className="col-2">
        <i className="fas fa-heart" style={heartIconStyle} onClick={toggleLike}></i>{" "}
        {likes}
      </div>
      <div className="col-2">
        <i className="fas fa-thumbs-down" style={thumbsDownIconStyle} onClick={toggleDislike}></i>{" "}
        {dislikes}
      </div>
      <div className="col-2">
        <div><i className="fas fa-upload"></i></div>
      </div>
    </div>
  );
};

export default TuitStats;
