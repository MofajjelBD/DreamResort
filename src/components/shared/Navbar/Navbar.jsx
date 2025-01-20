import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/Essence">Essence</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl px-0">Dream Resort</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-dots loading-md mr-8"></span>
        ) : user ? (
          <div className="inline-flex flex-row items-center">
            {/* <span className="font-bold italic mr-4">{user.email}</span> */}
            {/* <button onClick={handleSignOut} className="btn rounded-full px-8">
              Log Out
            </button> */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar group/item relative"
              >
                <div className="w-10 rounded-full">
                  <img alt="Profile" src={user.photoURL} />
                </div>
                <span className="absolute top-1/3 right-14 group/edit invisible group-hover/item:visible group-hover/edit:text-gray-700 z-[11]">
                  {user.displayName}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[11] mt-3 w-32 p-2 shadow"
              >
                <li>
                  <Link to="/update" className="justify-between">
                    Update Profile
                  </Link>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn rounded-full px-8">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
