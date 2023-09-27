import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline text-lg font-medium"
                    : ""
                }
              >
                <span className="text-lg font-medium"> Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline text-lg font-medium"
                    : ""
                }
              >
                <span className="text-lg font-medium">Donation</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline text-lg font-medium"
                    : ""
                }
              >
                <span className="text-lg font-medium">Statistics</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-5 px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-lg font-medium"
                  : ""
              }
            >
              <span className="text-lg font-medium"> Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-lg font-medium"
                  : ""
              }
            >
              <span className="text-lg font-medium">Donation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-lg font-medium"
                  : ""
              }
            >
              <span className="text-lg font-medium">Statistics</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

