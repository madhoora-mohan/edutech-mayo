import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";

const Login = () => {
  return (
    <>
      <LandingNav />
      <div className="h-[78vh] flex flex-col items-start p-10 gap-6">
        <form className="w-2/5 flex flex-col items-start justify-center gap-2 p-16 pb-10 outline outline-[#373737] outline-1">
          <input
            placeholder="Login Id"
            className="w-full h-10 bg-white rounded-md pl-4"
          ></input>
          <input
            placeholder="Password"
            className="w-full h-10 bg-white rounded-md pl-4"
          ></input>
          <button className="h-10 outline-none mt-4 text-white font-semibold rounded-md px-6 bg-[#2084D0] hover:bg-[#2089F9]">
            Login
          </button>
        </form>
        <Link to="/ChangePwd">
          <button className="h-10 rounded-md bg-red-700 p-2 px-4 font-semibold">
            Forgot password?
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
