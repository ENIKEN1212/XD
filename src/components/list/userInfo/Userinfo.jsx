import React from 'react'
import './userinfo.css'
import Avatar from "../../../Assets/user.png"
import Camer from "../../../Assets/menu-burger.png"
import Video from "../../../Assets/video-camera-alt.png"
import Edit from "../../../Assets/pencil.png"
import { useUserStore } from '../../../lib/userStore';
const Userinfo = () => {
  const { CurrentUser} = useUserStore(); // Call useUserStore as a function

  return (
    <div className='userinfo'>
      <div className='user'>
      <img src={ CurrentUser.avatar || Avatar} alt="" />
      <h1>{CurrentUser.username}</h1>
      </div>
      <div className='icons'>
<img src={Camer} alt="" />
<img src={Video} alt="" />
<img src={Edit} alt="" />
      </div>
    </div>
  )
}

export default Userinfo
