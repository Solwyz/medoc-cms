import React from 'react'
import medoLogo from "../../Assets/icons/medologo.png"
import User from "../../Assets/icons/userIcon.svg"
function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[72px] z-[1000] bg-white  flex items-center py-2 pr-[40px]">
    <img className="w-[53px] h-[54px] ml-[98px] cursor-pointer" src={medoLogo} alt="Logo" />
    <div className="flex justify-end ml-auto">
      
      <div className="relative">
        <img className=" cursor-pointer w-6 h-6" src={User} alt="User" />
      </div>
    </div>
  </div>
  )
}

export default Header