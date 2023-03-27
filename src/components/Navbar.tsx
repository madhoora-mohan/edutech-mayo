import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  let logout = () => {
    console.log("logged out");
  };
  return (
    <>
      <nav className="fixed bg-[#1F1F1E] flex justify-between p-4 rounded-sm  w-[98.4%] shadow-lg shadow-[#131313b8]">
        <Link to="/Home">
          {/* <img src={logo} alt="logo" className="w-20 rounded-sm" /> */}
          <h1 className="text-4xl">Cit skills</h1>
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
              type="submit"
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
