import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");

  type LoginFormState = {
    loginid: string;
    password: string;
  };

  const [formState, setFormState] = useState<LoginFormState>({
    loginid: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //add login logic here
    console.log("Submitting login form:", formState);
  };

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="w-full flex flex-col items-start p-10 gap-6 ">
        <form
          onSubmit={handleSubmit}
          className="w-2/5 flex flex-col items-start justify-center gap-2 p-16 pb-10 outline outline-[#373737] outline-1 ml-96 mt-10"
        >
          <input
            type="text"
            placeholder="Login Id"
            name="loginid"
            onChange={handleChange}
            value={formState.loginid}
            required
            className="w-full h-10 bg-white text-black rounded-md pl-4"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formState.password}
            required
            className="w-full h-10 bg-white text-black rounded-md pl-4"
          />
          {error && (
            <div className="w-3/5 bg-red-400 text-white font-semibold text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="h-10 outline-none mt-4 text-white font-semibold rounded-md px-6 bg-[#2084D0] hover:bg-[#2089F9] "
          >
            Login
          </button>
        </form>
        <Link to="/ChangePwd">
          <button className="h-10 rounded-md bg-red-700 p-2 px-4 font-semibold ml-96">
            Forgot password?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
