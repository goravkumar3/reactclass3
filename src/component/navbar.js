import React,{useState} from 'react'
import { FiAlignLeft } from "react-icons/fi";
import { CiBrightnessUp } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
function Navbar(props) {
    const [show,hide]=useState(false)
    let {mode,modefunc}=props
  return (
    <nav>
       <div className={mode?'navlight navbar':'navdark navbar'}>
       <div className='logo'>
         <h1>CodingLogo</h1>
       </div>
       <div className={show?"menuactive":"menu"}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
            <button onClick={modefunc}>{mode?<FiMoon className='modeicon'/>:<CiBrightnessUp className='modeicon'/>}</button>
          </ul>
       </div>
       </div>       
       <div className='menuicon'>
           <FiAlignLeft className='icon' onClick={()=>{hide((show)=>!show)}}/>
       </div>
    </nav>
  )
}
export default Navbar;