import { useAuth } from '../Hook/useGetData'
import { useNavigate } from 'react-router-dom';
function Score() {
  const {user , isAuthenticated , logout }= useAuth()
  const navigate= useNavigate()
   if (!isAuthenticated) return <p>Please log in.</p>;
    const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };
  
  return (
    <div>
      
    </div>
  )
}

export default Score


{/* <h2>Welcome, {user?.username}</h2>
      <p>Email: {user?.email}</p>
       <p>Score: {user?.points}</p>
      <button className='cursor-pointer' onClick={handleLogout}>Logout</button> */}