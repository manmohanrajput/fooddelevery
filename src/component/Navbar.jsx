import React,{useState} from 'react';
import '../css/navbar.css';


function Navbar() {

  const [menu, setMenu]=useState("home")
  return (
    <div className='navbar'>
        <img src="../assets/logo.png" alt="" className='logo'/>
        <ul className='navbar-menu'>
           <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
           <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
           <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
           <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact Us</li>
        </ul>
        <div className='navbar-right'>
             <img src="../assets/search-icon.png" alt="" className='search-icon'/>
             <div className='navbar-search-icon'>
             <img src="../assets/bascket.webp" alt="" className='basket'/>
             <div className='dot'></div>
             </div>
             <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar;