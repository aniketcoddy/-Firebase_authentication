import React, { useState } from "react";
import { Link , Navigate, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../components/Firebase";

export default function Login() {
  const navigate = useNavigate()
  const [userdata, setUserdata] = useState({
    Email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [disbaled, setDisabled] = useState(false);

  let name, value;
  const getUsUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserdata({
      ...userdata,
      [name]: value,
    });
  };

  const postData = (e) => {
    e.preventDefault();
    if (!userdata.Email || !userdata.password) {
      setError("Please fill all the details...!");
      return;
    }
    setError("");
    setDisabled(true);

   signInWithEmailAndPassword(auth, userdata.Email, userdata.password)
      .then(async(res) => {
        setDisabled(false);
        navigate('/')
      })
      .catch((err) => {
        setDisabled(false)
        setError(err.message)
        console.log("error", err.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col w-fit ml-24 xs:ml-9 mt-6 ">
        <div className="m-6 xs:mt-5 xs:m-0">
          <h1 className="font-[Poppins] font-semibold text-2xl text-[#255258] ">
            Breeze.ai
          </h1>
        </div>

       {error.length==0?"":(
        <div className="flex flex-row items-center  ml-96 mt-16 shadow-lg lg:mt-24 lg:ml-44 md:ml-32 md:mt-20 xs:ml-24 xm:ml-1 shadow-yellow-600 bg-yellow-500 rounded-lg p-2 absolute">
          <span className="text-lg lg:text-base xs:text-sm xxs:text-xs font-[Poppins] text-white">{error}</span>
        </div>
        )}

        <div className=" flex flex-col mt-20 xm:mt-14 lg:mt-28 lg:ml-11 xl:mt-11 xl:ml-56 md:mt-20 xs:mt-20 md:ml-0 ml-72 gap-10">
          <div>
            <h1 className="font-[Poppins] font-semibold text-lg text-[#0c1e21]">
             Login To Enter The Website
            </h1>
          </div>
          <form className="flex flex-col gap-7" method="POST">
            <div className="flex flex-col">
              <h1 className="font-[Poppins] text-sm text-black font-normal">
                Enter Email 
              </h1>
              <input
                type="email"
                name="Email"
                placeholder="eg-: vishnoianiket903@gmail.com"
                value={userdata.Email}
                onChange={getUsUserData}
                className="border-2 border-black xm:w-64 w-80 p-3 rounded-lg"
                required
                autoComplete="off"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <h1 className="font-[Poppins] text-sm text-black font-normal">
                Password
              </h1>
              <input
                type="password"
                name="password"
                value={userdata.password}
                onChange={getUsUserData}
                className="border-2 border-black w-80 xm:w-64 p-3 rounded-lg"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-80 bg-[#27485D] xm:w-64 p-2 rounded-lg font-[Poppins] text-base text-white disabled:bg-red-600 "
                onClick={postData}
                disabled={disbaled}
              >
                Login
              </button>
            </div>
            <div className="flex flex-row  w-80 xm:w-64 justify-center gap-2">
              <h1 className="font-[Poppins] text-sm text-[#6f6d6d] font-normal">
               Create a new account
              </h1>

              <Link to="/signUp">
                <h2 className="font-[Poppins] text-sm text-[#476D73] underline font-semibold">
                  Sign Up
                </h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
