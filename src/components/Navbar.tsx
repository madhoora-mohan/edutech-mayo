import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  let logout = () => {
    console.log("logged out");
  };
  return (
    <>
      <nav className="flex justify-between p-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-36 rounded-sm" />
        </Link>
        <ul className="flex gap-6 justify-center items-center">
          <li>
            <Link
              to="/Home"
              className="p-4 hover:bg-[#323234] hover:text-[#ababab]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Reports"
              className="p-4 hover:bg-[#323234] hover:text-[#ababab]"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/Profile"
              className="p-4 hover:bg-[#323234] hover:text-[#ababab]"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/LeaderBoard"
              className="p-4 hover:bg-[#323234] hover:text-[#ababab]"
            >
              LeaderBoard
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="h-12 outline-none flex justify-center items-center text-white font-semibold rounded-md px-6 bg-[#2084D0] hover:bg-[#2372c6] hover:text-[#fdfdfd]"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
