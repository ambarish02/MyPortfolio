import { useRef } from 'react';
import './Services.scss';
import { motion, useInView} from "framer-motion"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity:1,
    y:0,
    transition: {
      duration:1,
      staggerChildren: 0.1,
    }
  }
}

const Services = () => {

  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div 
    className='services'
     variants={variants}
      initial="initial"
       //animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={ "animate"}
       >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on most trending skills 
            <br/> and move forward 
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Skills
            </h1>
          </div>
          <div className='title'>
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Better</motion.b> Interface
            </h1>
            <button>WHAT I LEARN</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
         <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>HTML & CSS</h2>
            <p> Designed and developed responsive web pages using HTML5, ensuring cross-browser compatibility.
            Strong foundational knowledge in HTML, coupled with CSS for styling and JavaScript for interactivity.
           </p>
           <button>Go</button>
         </motion.div>
         <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Bootstrap</h2>
            <p> Advanced skills in Bootstrap, including customization of themes, components, and layouts.
            Experienced in implementing and customizing Bootstrap components like navbars, modals, and carousels.
           </p>
           <button>Go</button>
         </motion.div>
         <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Javascript</h2>
            <p> Strong understanding of asynchronous programming, including promises and async/await.Experience with DOM manipulation and event handling.  Familiar with various JavaScript libraries and frameworks (e.g. jQuery)
           </p>
           <button>Go</button>
         </motion.div>
         <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>React</h2>
            <p> Extensive experience in building reusable components and using React hooks (useState, useEffect, useContext) for state management.
            Proficient in using Redux for global state management and Context API for simpler state scenarios.
           </p>
           <button>Go</button>
         </motion.div>
      
        </motion.div>
    </motion.div>
  )
}

export default Services
