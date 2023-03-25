import logo from "../assets/logo.png";

const LandingNav = () => {
  return (
    <>
      <div className="fixed w-[99.4%] flex justify-between p-5 items-center ">
        <a href="./">
          <img src={logo} alt="logo" className="w-28" />
        </a>
        <button className="outline  outline-white  h-12 outline-2 rounded-sm px-8  bg-black hover:bg-white hover:text-black">
          Login
        </button>
      </div>
    </>
  );
};

export default LandingNav;
