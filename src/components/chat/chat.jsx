import React, { useState } from 'react'
import "./chat.css"
import Avatar from "../../Assets/user.png"
import Info from "../../Assets/info.png"
import Phone from "../../Assets/phone-flip.png"
import Emoji from "../../Assets/smile.png"
import EmojiPicker from 'emoji-picker-react'

import man from "../../Assets/c9017ca5629f8966518e6ee94b9b3cb6.jpg"
import Image from "../../Assets/icons8-image-50.png"
import Camera from "../../Assets/icons8-camera-50.png"
import Mic from "../../Assets/mic.png"

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");


  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  }

  return (
    <div className='chat'>
      <div className='top'>
        <div className="user">
          <img src={Avatar} alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur, </p>
          </div>
        </div>
        <div className="icons">
          <img src={Avatar} alt="" />
          <img src={Info} alt="" />
          <img src={Phone} alt="" />
        </div>
      </div>
      <div className='center'>
        <div className="massage">

          <img src={Avatar} alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
            <span>1 min ago</span>
          </div>

        </div>
        <div className="massage">

<img src={Avatar} alt="" />
<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage">

<img src={Avatar} alt="" />
<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage own">

<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage">

<img src={Avatar} alt="" />
<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage own">

<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage">

<img src={Avatar} alt="" />
<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage own">


<div className="texts">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage">

<img src={Avatar} alt="" />
<div className="texts">
  
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
<div className="massage own">


<div className="texts">
  <img src={man } alt="" />
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit exercitationem cupiditate animi reprehenderit fuga illo dolorum corporis delectus excepturi.</p>
  <span>1 min ago</span>
</div>

</div>
      </div>
      <div className='bottom'>

        <div className="icons">
          <img src={Image} alt="" />
          <img src={Camera} alt="" />
          <img src={Mic} alt="" />
        </div>
        <input type="text" value={text} placeholder='Type a masage....' onChange={e => setText(e.target.value)} />
        <div className="emoji">

          <img src={Emoji} onClick={() => setOpen(prev => !prev)} alt="" />

          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>

        <button className='sentButton'>Sent</button>
      </div>
    </div>
  )
}

export default Chat
