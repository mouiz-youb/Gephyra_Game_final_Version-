import {motion  } from "framer-motion"
import type{Variants  } from "framer-motion"
import Score from '../pages/Score'
const AnimateOne:React.FC=()=> {

    const animationVariants: Variants = {
  // This is the state for the first item in our animation sequence
  start: { 
    width: "0vw", 
    height: 0 
  },
  // This is the state for the second item in our animation sequence
  end: { 
    width: "1000vw", 
    height: "100vh" 
  },
};
  return (
     <div className="w-full h-full flex justify-center items-center">
      <motion.div
      variants={animationVariants}
        initial="start"
         animate={["start", "end"]}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="h-2 bg-black"
      >
        <div className="bg w-full h-full flex justify-center items-center">
          <Score />
        </div>
      </motion.div>
    </div>
  )
}

export default AnimateOne