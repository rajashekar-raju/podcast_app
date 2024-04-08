import React from 'react'
import { Link, useLocation} from 'react-router-dom'

const HeaderPage = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className='text-center'>
        <div className='absolute w-[800px] h-[150px] bg-[#18b2de] custom_blur -z-[1] top-[-140px] left-1/2 transform -translate-x-1/2'></div>
        <div className='text-gray-400 p-3 relative z-[1]'>
            <Link to="/" className={`p-3 ${currentPath === "/" ? "text-[#fff]" : ""}`}>SignUp</Link>
            <Link to="/podcasts" className={`p-3 ${currentPath === "/podcasts" ? "bg-[#fff]" : ""}`}>Podcasts</Link>
            <Link to="start-podcast" className={`p-3 ${currentPath === "/start-podcast" ? "bg-[#fff]" : ""}`}>Start Podcast</Link>
            <Link to="/profile" className={`p-3 ${currentPath === "/profile" ? "bg-[#fff]" : ""}`}>Profile</Link>
        </div>
    </div>
  )
}

export default HeaderPage
