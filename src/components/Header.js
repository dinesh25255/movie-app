import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

const Header = () => {
  const nav = useNavigate();
  const location = useLocation();
  const url = location.pathname.split('/');

  const [menu, setMenu] = useState(false);
  const [showSearch, setSearch] = useState(false);
  const searchQuery = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (data, { resetForm }) => {
      if (data.search !== '') {
        nav(`/movie/search/${data.search}`);
        resetForm();

      }

    }
  });

  return (
    <div>
      <div className='flex justify-between bg-black items-center text-white px-6 py-2 rj-sm:px-3 '>
        <div className="">
          <NavLink to={'/'} className=' hover:text-teal-400 text-xl font-semibold rj-sm:text-sm '>Movie App</NavLink>
        </div >


        <div className="space-x-6  text-base font-medium flex items-center rj-sm:hidden rj-md:text-sm rj-md:space-x-3">

          <NavLink to={'/movie/popular'} className={url.includes('popular') ? `text-teal-400 hover:text-teal-700` : `hover:text-teal-400`}>Popular</NavLink>
          <NavLink to={'/movie/top-rated'} className={url.includes('top-rated') ? `text-teal-400 hover:text-teal-700` : `hover:text-teal-400`}>Top Rated</NavLink>


          <NavLink to={'/tv'} className={url.includes('tv') ? `text-teal-400 hover:text-teal-700` : `hover:text-teal-400`}>TV Show</NavLink>
          <form onSubmit={searchQuery.handleSubmit}>
            <div className=" flex items-center border-2 border-teal-700 hover:border-teal-400 rounded-md " >

              <input type='text' className='text-sm font-medium outline-none search-wrapper  text-white tracking-wide py-1  w-[200px] bg-black  rj-md:w-[180px]  px-2 ' placeholder='Search Movie'
                onChange={searchQuery.handleChange} name='search'
                value={searchQuery.values.search}
              />
              <i className="z-0 fa-solid fa-magnifying-glass pl-3 pr-2 hover:text-teal-500 " onClick={searchQuery.handleSubmit} ></i >
            </div>
          </form>
        </div>

        <div className="hidden rj-sm:flex space-x-1 "
        >
          <div className="px-2" onClick={() => {
            setSearch(!showSearch);
            setMenu(false);
          }}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="px-2" onClick={() => {
            setMenu(!menu);
            setSearch(false);
          }}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

      </div >
      {
        menu && <div className=" hidden rj-sm:inline-block bg-black pb-2 text-sm font-medium px-4 fixed right-0 z-10 ">
          <div className="">
            <NavLink to={'/movie/popular'} className='hover:text-teal-500  '>Popular</NavLink>
          </div>
          <div className="">
            <NavLink to={'/movie/top-rated'} className='hover:text-teal-500'>Top Rated</NavLink>
          </div>
          <div className="">
            <NavLink to={'/tv'} className='hover:text-teal-500'>TV Show</NavLink>
          </div>

        </div>
      }
      {
        showSearch && <div className="hidden px-2 rj-sm:block">
          <form onSubmit={searchQuery.handleSubmit}>
            <div className=" flex justify-between items-center border-2 border-teal-700 hover:border-teal-400 rounded-md w-[100%] " >

              <input type='text' className='text-sm font-medium outline-none search-wrapper  text-white tracking-wide py-1 w-[85%] bg-black  px-2 ' placeholder='Search Movie'
                onChange={searchQuery.handleChange} name='search'
                value={searchQuery.values.search}
              />
              <i className="z-0 rounded-sm fa-sharp fa-solid  fa-arrow-right pl-4 pr-4  bg-teal-600 py-2" onClick={searchQuery.handleSubmit} ></i >
            </div>
          </form>
        </div>
      }

    </div >

  )
}

export default Header