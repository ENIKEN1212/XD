import React from 'react';
import "./detail.css";
import Avatar from "../../Assets/user.png";
import Arrowup from "../../Assets/icons8-arrow-up-50.png";
import Arrowdown from "../../Assets/icons8-arrow-down-50.png";
import man from "../../Assets/c9017ca5629f8966518e6ee94b9b3cb6.jpg";
import download from "../../Assets/icons8-download-50.png";
import { auth } from '../../lib/firebase';
import { useUserStore } from '../../lib/userStore';

const Detail = () => {
  const setLoading = useUserStore((state) => state.setLoading);

  const handleLogout = () => {
    setLoading(true); // Set loading state before logging out
    auth.signOut();
  };

  return (
    <div className='Detail'>
      <div className="user">
        <img src={Avatar} alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit ame</p>
      </div>
      <div className="info">
        <div className="optino">
          <div className="title">
            <span>Chat Settings</span> 
            <img src={Arrowup} alt="" />
          </div>
        </div>
        <div className="optino">
          <div className="title">
            <span>Privacy & Help</span> 
            <img src={Arrowup} alt="" />
          </div>
        </div>
        <div className="optino">
          <div className="title">
            <span>Shared Photos</span> 
            <img src={Arrowdown} alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photDetail">
                <img className='man' src={man} alt="" />
                <span>You_Cooked_2024</span>
              </div>
              <img src={download} className='iconn' alt="" />
            </div>
            <div className="photoItem">
              <div className="photDetail">
                <img src={man} alt="" />
                <span>You_Cooked_2024</span>
              </div>
              <img src={download} className='iconn' alt="" />
            </div>
            <div className="photoItem">
              <div className="photDetail">
                <img src={man} alt="" />
                <span>You_Cooked_2024</span>
              </div>
              <img src={download} className='iconn' alt="" />
            </div>
          </div>
        </div>
        <div className="optino">
          <div className="title">
            <span>Shared Files</span> 
            <img src={Arrowup} alt="" />
          </div>
        </div>
        <button className='blocy'>Block User</button>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
