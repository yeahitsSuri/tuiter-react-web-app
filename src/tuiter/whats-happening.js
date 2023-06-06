import React, {useState} from "react";
import {createTuit} from "./reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faListUl, faSmile, faCalendarAlt, faMapMarkerAlt, faBold, faItalic } from '@fortawesome/free-solid-svg-icons';


const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        tuit: whatsHappening
    }
    dispatch(createTuit(newTuit));
    setWhatsHappening("");   
   console.log(whatsHappening);
 }
 return (
   <div className="row">
    <div className="col-auto">
    <img src="/images/nasa.png" width={60}/>
    </div>
    <div className="col-10">
    <textarea value={whatsHappening} placeholder="What's happening?"
            className="form-control border-0"
            onChange={(event) => setWhatsHappening(event.target.value)}>
    </textarea>
    <div>
        <button className="rounded-pill btn btn-primary float-end pl-2 mt-2 ps-3 pe-3 fw-bold"
                onClick={tuitClickHandler}>
        Tuit
        </button>
        <div className="text-primary fs-4">
            <FontAwesomeIcon icon={faImage} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
            <FontAwesomeIcon icon={faListUl} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
            <FontAwesomeIcon icon={faSmile} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
            <FontAwesomeIcon icon={faCalendarAlt} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
            <FontAwesomeIcon icon={faBold} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
            <FontAwesomeIcon icon={faItalic} className="me-3 gray-icon" style={{ fontSize: '1.2rem' }} />
        </div>
    </div>
    </div>
    <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;