import { useState, useEffect } from 'react'
import React from 'react'
import Logo from '../../assets/zombieapp-logo.png'


const Messages = () => {
  const [messages, setMessages] = useState([])

  return (
    <nav>
      <img
        img src={Logo}
        alt=""
        id="logo"
      />
    </nav>
  )
}



export default Messages