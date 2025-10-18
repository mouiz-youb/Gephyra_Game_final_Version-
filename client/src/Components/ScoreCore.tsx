import {motion} from "framer-motion"
import type{Variants} from "framer-motion"
import vaultX from "../images/vaultX.png"
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import bg from "../images/bg.png"
import "../index.css"
// 2. Define variants for the vault animation for clarity and consistency.
const vaultVariants: Variants = {
  initial: {
    opacity: 0,
    z: 500,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    z: 0,
    scale: 1,
    transition: {
      duration: 2,
      delay: 4, // starts after others finish moving
      ease: "easeOut",
    },
  },
};
function ScoreCore() {
  return (
   <motion.div
        className=" w-screen h-screen  absolute grid grid-cols-1 grid-rows-10 bg-black "
        style={{ transformStyle: "preserve-3d" }}
        variants={vaultVariants}
        initial="initial"
        animate="visible"
      >
        {/* <Header/> */}
       <div className='col-start-1 col-end-1 row-start-1 row-end-2 border-[1px]  flex justify-between items-center flex-row px-2 py-5 '>
            <img src={bg} alt="" className='w-1/4' />
            <div className=' grad flex justify-between items-center flex-row gap-2 border-[1px]  rounded-4xl w-1/2 py-1  px-2 '>
              <p className='text-[#FCE2CA]'>username</p>
              <FaRegUserCircle className='text-3xl '/>
            </div>
        </div>
        <div className='col-start-1 col-end-1 row-start-2 row-end-9 border-[1px]  flex justify-center items-center '>
        <img src={vaultX} alt="" className='w-2/3 shadowx' />
        </div>
        <div className='col-start-1 col-end-1 row-start-9 row-end-11  border-t-[1px]  border-b-[1px] border-[#FFB702] grid grid-cols-4 grid-rows-1  '>
          <div className='col-start-1 col-end-2 row-start-1 row-end-2  text-[#FFB702] flex justify-center items-center flex-col'>
            <img src={bg} alt="" />
            <p className='-translate-y-9'>Gephyra</p>
          </div>
          <div className='col-start-2 col-end-5 row-start-1 row-end-2 flex justify-start items-center '>
            {/* <div class="w-px h-20 bg-yellow-500 mx-6"></div> */}
            <div className='w-px h-20 bg-[#FFB702] mx-6 '></div>
            <div className='flex justify-center  items-start flex-col gap-2 w-3/4'>
              <p className='text-white font-bold  text-xl'>Contact us </p>
              <div className='flex justify-start items-center flex-row gap-2 '>
                <MdOutlineMail className='text-[#FFB702]'/>
                <p className='text-white text-xs'>gephyra@estin.dz</p>
              </div>
              <div className='flex justify-start items-center flex-row gap-2 '>
                <FaInstagram className='text-[#FFB702]'/>
                <p className='text-white text-xs'>gephyra.club</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  )
}

export default ScoreCore