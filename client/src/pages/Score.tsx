import { useAuth } from '../Hook/useGetData'
// import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import type {Variants} from "framer-motion"
// import vaultX from "../images/vaultX.png";
import coin2 from "../images/coin2.png";
import "../index.css";
// import Header from '../Components/Header';
// import Vault from '../Components/ScoreCore';
import ScoreCore from '../Components/ScoreCore';
// 1. Define the variants for the coin animations.
// We'll use the `custom` prop to handle the different starting positions.
const coinVariants: Variants = {
  // The 'initial' state is now a function that accepts our `custom` prop.
  // This allows us to have one variant set for all four different starting points.
  initial: (custom: { x: string; y: string }) => ({
    opacity: 1,
    x: custom.x,
    y: custom.y,
    rotate: "180deg",
  }),
  // This is the second state in the sequence
  center: {
    opacity: 1,
    x: "0vw",
    y: "0vh",
    rotate: "0deg",
    transition: {
      duration: 3,
    },
  },
  // This is the final state in the sequence
  hidden: {
    opacity: 0,
    transition: {
      // The custom transition for this specific state is defined here
      duration: 6,
    },
  },
};

// 2. Define variants for the vault animation for clarity and consistency.
// const vaultVariants: Variants = {
//   initial: {
//     opacity: 0,
//     z: 500,
//     scale: 0.2,
//   },
//   visible: {
//     opacity: 1,
//     z: 0,
//     scale: 1,
//     transition: {
//       duration: 2,
//       delay: 4, // starts after others finish moving
//       ease: "easeOut",
//     },
//   },
// };

// 3. Store the unique starting positions in an array.
// This allows us to map over them instead of repeating code.
const coinInitialPositions = [
  { x: '100vw',  y: '-100vh', colorClass: 'text-blue-600'   },
  { x: '100vw',  y: '100vh',  colorClass: 'text-red-600'    },
  { x: '-100vw', y: '100vh',  colorClass: 'text-yellow-600' },
  { x: '-100vw', y: '-100vh', colorClass: 'text-green-600'  },
];
const Score:React.FC=()=> {
  const { isAuthenticated  }= useAuth()
  // const navigate= useNavigate()
   if (!isAuthenticated) return <p>Please log in.</p>;
  //   const handleLogout = () => {
  //   logout(); 
  //   navigate('/login'); 
  // };
  
  return (
    <motion.div className="flex h-full w-full items-center justify-center ">
      {/* 4. Map over the positions array to render each coin */}
      {coinInitialPositions.map((pos, index) => (
        <motion.div
          key={index} // React requires a unique key for list items
          className={`text-3xl ${pos.colorClass}`}
          variants={coinVariants}
          // Pass the position object as the `custom` prop
          custom={pos} 
          initial="initial"
          // Animate through the sequence of variant names
          animate={["initial", "center", "hidden"]}
        >
          <img src={coin2} className="w-[100px]" alt="coin" />
        </motion.div>
      ))}
      <ScoreCore/>
    </motion.div>
  )
}

export default Score


{/* <h2>Welcome, {user?.username}</h2>
      <p>Email: {user?.email}</p>
       <p>Score: {user?.points}</p>
      <button className='cursor-pointer' onClick={handleLogout}>Logout</button> */}