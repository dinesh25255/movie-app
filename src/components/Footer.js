import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {

  const date = new Date();
  const location = useLocation();
  const url = location.pathname.split('/');

  return (
    <div className=" text-center space-y-1 py-3 rj-sm:py-2 bg-gray-900  rj-sm:overflow-hidden ">
      <div className="space-x-4 text-2xl rj-sm:text-base">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>

      <ul className='text-base   tracking-wide flex justify-center rj-sm:text-sm '>
        <li><NavLink to={'/movie/popular'} className={url.includes('popular') ? `text-teal-400 hover:text-teal-700` : `hover:text-teal-400`}>Popular</NavLink> | &nbsp;  </li>
        <li> <NavLink to={'/movie/top-rated'} className={url.includes('top-rated') ? `text-teal-400 hover:text-teal-700` : `hover:text-teal-400`}>Top Rated</NavLink> | &nbsp; </li>
        <li>  <NavLink to={'/tv'} className={url.includes('tv') ? `text-teal-400 hover:text-teal-700` : `hover:text-teal-400`}>TV Show</NavLink></li>
      </ul>

      <div className="text-sm rj-sm:text-xs">
        Movie App &copy; {date.getFullYear()}
      </div>

    </div>
















  )
}

export default Footer