import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink className='hover:text-amber-500 me-0 md:me-6'>Home</NavLink>
      <NavLink className='hover:text-amber-500 me-0 md:me-6'>Contact Us</NavLink>
      <NavLink className='hover:text-amber-500 me-0 md:me-6'>Our Menu</NavLink>
      <NavLink className='hover:text-amber-500 me-0 md:me-6'>Our Shop</NavLink>
    </>
  );
  return (
    <div className="navbar  fixed z-10 bg-opacity-30 max-w-screen-xl bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >

            {navItems}
          </ul>
        </div>
        <Link to='/' className=" text-2xl font-bold text-green-600  italic">Green <span className="text-yellow-600 font-bold capitalize">Spoon</span></Link>
      </div>
      <div className="navbar-end hidden lg:flex px-6">
        <ul className="menu menu-horizontal px-1 text-white text-base ">
         {navItems}
        </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
