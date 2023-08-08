import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";

//This page id 90% similar to the signUp page

export default function Login() {
  const navigate = useNavigate()
  const [userdata, setUserdata] = useState({   //we only use email and password to login so we deduct name field
    Email: "",
    password: "",
  });


  const [error, setError] = useState("");
  const [disbaled, setDisabled] = useState(false);
  const [passHide, setPassHide] = useState(false)

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
    if (!userdata.Email || !userdata.password) {      // weare only checking email and password here so thats why name is eleminated
      setError("Please fill all the details...!");
      return;
    }
    setError("");
    setDisabled(true);

    signInWithEmailAndPassword(auth, userdata.Email, userdata.password)    // this method is changed here because we are checking and matching the email and password exists in the database
      .then(async (res) => {
        setDisabled(false);
        navigate('/Home')
        document.title = "Home Page"
      })
      .catch((err) => {
        setDisabled(false)
        setError(err.message)
        console.log("error", err.message);
      });
  };

  const toggleView = () => {
    setPassHide(!passHide)
  }

  return (
    <div>
      <div className="flex flex-col w-fit ml-24 xxs:ml-5 md:justify-center md:items-center  xs:ml-9 mt-6 ">
        <div className="m-6  xs:mt-5 xs:m-0">
          <h1 className="font-[Poppins] font-semibold 3xl:text-2xl 4xl:text-3xl text-5xl text-[#255258] ">
            Aniket.SignUp
          </h1>
        </div>

        {error.length == 0 ? "" : (
          <div className="flex flex-row items-center  ml-96 mt-16 shadow-lg lg:mt-24 lg:ml-44 md:ml-32 md:mt-20 xs:ml-24 xm:ml-1 shadow-yellow-600 bg-yellow-500 rounded-lg p-2 absolute">
            <span className="text-lg lg:text-base xs:text-sm xxs:text-xs font-[Poppins] text-white">{error}</span>
          </div>
        )}

<div className=" flex flex-col 3xl:mt-20 mt-36 2xl:mt-8 xm:mt-20 xxs:ml-0  lg:mt-20 lg:ml-2  xl:ml-20 xl:mt-10 md:mt-20 md:justify-center md:items-center xs:mt-20 ml-72 4xl:ml-44  3xl:gap-10 2xl:gap-7 gap-14">
          <div>
            <h1 className="font-[Poppins] font-semibold 3xl:text-lg 4xl:text-3xl  text-5xl text-[#0c1e21]">
              Login To Enter
            </h1>
          </div>
          <form className="flex flex-col 3xl:gap-7 gap-10" method="POST">
            <div className="flex flex-col">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl 4xl:text-2xl  text-black font-normal">
                Enter Email
              </h1>
              <input
                type="email"
                name="Email"
                placeholder="eg-: vishnoianiket903@gmail.com"
                value={userdata.Email}
                onChange={getUsUserData}
                className="border-2 border-black 3xl:w-80 text-2xl 2xl:text-base  2xl:p-2 xm:w-64 3xl:p-3 p-4 w-[500px] rounded-md"
                required
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl 4xl:text-2xl text-black font-normal">
               Password
              </h1>
              <img src={passHide ? "view.png":"hidden.png"} className="h-5 flex 3xl:ml-72 ml-[450px] mt-16 xm:ml-56 3xl:mt-11 absolute hover:cursor-pointer" onClick={toggleView}/>
              <input
                type={passHide ? "text":"password"}
                name="password"
                placeholder="create a password"
                value={userdata.password}
                onChange={getUsUserData}
                className="border-2 border-black 3xl:w-80 xm:w-64 text-2xl 2xl:text-base 2xl:p-2 3xl:p-3 p-4 w-[500px] rounded-lg"
                required
                autoComplete="off"
              />
            </div>
            <div>
            <div>
              <button
                type="submit"
                className="3xl:w-80 xm:w-64 3xl:p-2 p-4 w-[500px] bg-[#27485D] rounded-lg font-[Poppins] 3xl:text-base text-2xl text-white disabled:bg-red-600 "
                onClick={postData}
                disabled={disbaled}
              >
                Login
              </button>
            </div>
            </div>
            <div className="flex flex-row  3xl:w-80 xm:w-64 justify-center gap-2">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl text-[#6f6d6d] font-normal">
                Already a User..?
              </h1>

              <Link to="/">
              <h2 className="font-[Poppins] 3xl:text-sm text-3xl text-[#476D73] underline font-semibold">
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
