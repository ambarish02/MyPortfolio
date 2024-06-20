
import Sidebar from '../sidebar/Sidebar';
import './Navbar.scss';
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar/>
      

      <div className='wrapper'>
         <motion.span
         initial={{opacity:0, scale:0.5}} 
         animate={{opacity:1, scale:1}} 
         transition={{duration:0.5}}
         >
          AMBARISH
          </motion.span>
         <div className="social">
            <a href="https://github.com/ambarish02" target='_blank'><img src="/Glogo.png" alt="" /></a>
            <a href="https://www.instagram.com/am_baarish" target='_blank'><img src="/instagram.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/ambarish-dandekar-877828302/" target='_blank'><img src="/linkedIn.png" alt="" /></a>
            {/* <a href="#"><img src="/github.png" alt="" /></a> */}
         </div>
      </div>
    </div>
  )
}

export default Navbar
