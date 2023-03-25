import logo from "../assets/logo.png";

const LandingNav = () => {
  return (
    <>
      <div className="flex justify-between p-5 items-center bg-[#1F1F1E] outline outline-[1px] outline-[#373737] rounded-sm">
        <a href="./">
          <img src={logo} alt="logo" className="w-36 " />
        </a>
        <button className="h-12 outline-none  text-black rounded-md px-8 font-normal bg-[#2084D0] hover:bg-white hover:text-black">
          Login
        </button>
      </div>
    </>
  );
};

export default LandingNav;
