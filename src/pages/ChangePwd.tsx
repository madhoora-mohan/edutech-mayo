import React from "react";
import { useState } from "react";
import LandingNav from "../components/LandingNav";

const ChangePwd = () => {
  const [error, setError] = useState("");

  type LoginFormState = {
    loginid: string;
  };

  const [formState, setFormState] = useState<LoginFormState>({
    loginid: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //add submit logic here
    console.log("Submitting ChangePwd form:", formState);
  };
  return (
    <div className="h-[97.5vh]">
      <div className="flex justify-center">
        <div className="w-1/3 outline outline-1 outline-[#343434] p-4 m-20">
          <h3 className="text-base pl-8 pt-8">
            Enter your LoginId to check if it is registered.
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7 p-8 pl-8"
          >
            <input
              type="text"
              placeholder="Login Id"
              name="loginid"
              onChange={handleChange}
              value={formState.loginid}
              required
              className="w-5/6 h-10 bg-white text-black rounded-md pl-4"
            />
            <button
              type="submit"
              className="w-2/6 h-10  outline-none text-white font-semibold rounded-md px-6 bg-[#2084D0] hover:bg-[#2089F9]"
            >
              Check
            </button>
          </form>
          {error && (
            <div className="w-4/6 bg-red-400 text-white font-semibold text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePwd;
