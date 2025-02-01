import React from 'react'
import Logo from "../assets/images/logo.png"
function Header() {
  return (
    <header className='flex justify-center items-center h-[150px] relative z-[2]'>
      <img src={Logo} alt="@" className='absolute left-20' />
      <nav>
        <ul className="flex gap-x-10 text-style">
          <li>Кратко обо мне</li>
          <li>Услуги</li>
          <li>Сайт визитка</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header