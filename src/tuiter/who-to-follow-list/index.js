import React from "react";
// import whoArray from './who.json'; move the data into reducer
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
 const whoArray = useSelector((state) => state.who);
 return(
   <ul className="list-group">
     <li className="list-group-item">
       <h4>Who to follow</h4>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
 );
};
export default WhoToFollowList;