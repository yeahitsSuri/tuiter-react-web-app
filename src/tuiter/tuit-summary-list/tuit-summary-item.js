import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png",
     "liked": true,
     "replies": 123,
     "retuits": 432,
     "likes": 2345,
     "handle": "@spacex",
     "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
    
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>

     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;