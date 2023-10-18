import React from 'react'
import 
 {BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h4>Hello Akash</h4>
        </div>
        <div className='header-right'>
            <input type="Search"/>{" "}
            <BsSearch className='icon'/>
        </div>
    </header>
  )
}

export default Header