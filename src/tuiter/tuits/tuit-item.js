import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import TuitStats from "./tuits-stats";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const TuitItem = ({
  tuit = {
    "topic": "Space",
    "userName": "SpaceX",
    "title": "Falcon 9’s first stage Landing",
    "time": "2h",
    "image": "spacex.png",
    "liked": false,
    "replies": 222,
    "retuits": 333,
    "likes": 4444,
    "handle": "@spacex",
    "tuit": "Falcon 9’s first stage has landed on the A Shortfall of Gravitas droneship"
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row mt-3">
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`./images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-11">
              <span className="fw-bolder">{tuit.userName}</span>{" "}
              <i className="fas fa-check-circle wd-blue"></i> {tuit.handle} •{" "}
              {tuit.time}
            </div>
            <div className="col-1">
              <FontAwesomeIcon
                icon={faWindowClose}
                className="myIcon float-end"
                onClick={() => deleteTuitHandler(tuit._id)}
              />
            </div>
          </div>
          <div>{tuit.tuit}</div>
          <br />
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
