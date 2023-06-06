import React from "react";

const WhoToFollowListItem = ({ who = { userName: 'TESLA', handle: 'TESLA', avatarIcon: 'nasa.png' } }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt={who.userName} />
        </div>
        <div className="col-8">
          <div className="d-flex flex-column">
            <div className="fw-bold" style={{ paddingLeft: '10px' }}>{who.userName}</div>
            <div style={{ paddingLeft: '10px' }}>@{who.handle}</div>
          </div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
    </li>
  );
};

export default WhoToFollowListItem;
