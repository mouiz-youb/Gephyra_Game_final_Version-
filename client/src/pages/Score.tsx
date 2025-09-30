import React from 'react'
import { useAuth } from '../Hook/useGetData'
import { useNavigate } from 'react-router-dom';
function Score() {
  const {user , isAuthenticated , logout }= useAuth()
  const navigate= useNavigate()
   if (!isAuthenticated) return <p>Please log in.</p>;
    const handleLogout = () => {
    // 1. Clear state and localStorage via the store action
    logout(); 
    
    // 2. Perform the navigation after cleanup
    navigate('/login'); 
  };
  return (
     <div>
      <h2>Welcome, {user?.username}</h2>
      <p>Email: {user?.email}</p>
      <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Score