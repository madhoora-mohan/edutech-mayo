import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <>
      <div className="flex justify-between p-5 items-center bg-[#1F1F1E] outline outline-[1px] outline-[#373737] rounded-sm">
        <Link to="/">
          <img src={logo} alt="logo" className="w-36 " />
        </Link>
        <Link to="/login">
          <button className="h-12 outline-none flex justify-center items-center text-white font-semibold rounded-md px-8 bg-[#2084D0] hover:bg-[#2089F9] hover:text-[#fdfdfd]">
            Login
          </button>
        </Link>
      </div>
    </>
  );
};

export default LandingNav;
