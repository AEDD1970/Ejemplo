import React from 'react'
import { LogoContent } from '../styles/styles';
import logo from '../Assets/images/logopurple.png'
import {useNavigate } from 'react-router-dom'

export default function Home() {
  const history = useNavigate()
  
  const handleLogin = () => {
    history(`/login`)
  }
  return (
    <LogoContent color="#7f5af0" >
        <img src={logo} alt="" id="login" onClick={() => handleLogin()} />
    </LogoContent>
    
  )
}
