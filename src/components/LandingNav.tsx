import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <>
      <div className="fixed  w-[98.4%] flex justify-between p-5 items-center bg-[#1F1F1E] outline outline-1 outline-[#373737] rounded-sm shadow-lg shadow-[#1313135e]">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="w-36 rounded-sm" /> */}
          <h1 className="text-4xl">Cit skills</h1>
        </Link>
        <Link to="/login">
          <button className="h-12 outline-none flex justify-center items-center text-white font-semibold rounded-md px-8 bg-[#2084D0] hover:bg-[#2372c6] hover:text-[#fdfdfd]">
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default LandingNav;
