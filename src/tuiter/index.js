import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./screen-placeholders/home-screen"
import ExploreScreen from "./explore-screen/index"
import ProfileScreen from "./screen-placeholders/profile-screen"
import BookmarksScreen from "./screen-placeholders/bookmarks-screen"
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";


const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div class="d-flex justify-content-center">
      <div class="container mt-4">
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <NavigationSidebar />
        </div>

        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-9 col-sm-9">
          <HomeScreen/>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        
        <div className="col-xxl-3 col-xl-3 col-lg-3 d-none d-lg-block d-xl-block d-xxl-block list-group">
          <WhoToFollowList/>
        </div>
      </div>
      </div>
     </div>
   </div>
  </Provider>
 );
}
export default Tuiter;
