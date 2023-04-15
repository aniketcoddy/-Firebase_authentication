import React, { useState } from "react";
import { Link , Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from "../components/Firebase";

export default function SignUp() {

  const navigate = useNavigate()
 

  const [error, setError] = useState("");
  const [disbaled, setDisabled] = useState(false);
  const [passHide , setPassHide] = useState(false)

  const [userdata, setUserdata] = useState({
    name: "",
    Email: "",
    // phone: "",
    password: "",
  });

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
    if (!userdata.name || !userdata.Email || !userdata.password) {
      setError("Please fill all the details...!");
      return;
    }
    setError("");
    setDisabled(true);

    createUserWithEmailAndPassword(auth, userdata.Email, userdata.password)
      .then(async(res) => {
        setDisabled(false);
        const user = res.user
       await updateProfile(user , {
          displayName:userdata.name
        }).then(console.log("check user",user),navigate('/'))
      })
      .catch((err) => {
        setDisabled(false)
        setError(err.message)
        console.log("error", err.message);
      });
  };

  const toggleView=()=>{
     setPassHide(!passHide)
  }
  
  
  return (
    <div>
      <div className="flex flex-col w-fit ml-24 xs:ml-9 mt-6 ">
        <div className="m-6 xs:mt-5 xs:m-0">
          <h1 className="font-[Poppins] font-semibold text-2xl text-[#255258] ">
            Breeze.ai
          </h1>
        </div>

       {error.length==0?"":(
        <div className="flex flex-row items-center ml-96 mt-16 lg:mt-24 lg:ml-44 md:ml-32 md:mt-20 xs:ml-24 xm:ml-1 shadow-lg shadow-yellow-600 bg-yellow-500 rounded-lg p-2 absolute">
          <span className="text-lg lg:text-base xs:text-sm xxs:text-xs font-[Poppins] text-white">{error}</span>
        </div>
        )}

        <div className=" flex flex-col mt-20 xm:mt-20 lg:mt-20 lg:ml-11 xl:mt-11 xl:ml-56 md:mt-20 xs:mt-20 md:ml-0 ml-72 gap-10">
          <div>
            <h1 className="font-[Poppins] font-semibold text-lg text-[#0c1e21]">
              Let's get you started
            </h1>
          </div>
          <form className="flex flex-col gap-7" method="POST">
            <div className="flex flex-col">
              <h1 className="font-[Poppins] text-sm text-black font-normal">
                Full Name
              </h1>
              <input
                type="text"
                name="name"
                placeholder="eg-: Aniket vishnoi"
                value={userdata.name}
                onChange={getUsUserData}
                className="border-2 border-black w-80 xm:w-64 p-3 rounded-md"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-[Poppins] text-sm text-black font-normal">
                Email Address
              </h1>
              <input
                type="email"
                name="Email"
                placeholder="eg-: vishnoianiket903@gmail.com"
                value={userdata.Email}
                onChange={getUsUserData}
                className="border-2 border-black w-80 xm:w-64 p-3 rounded-lg"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-[Poppins] text-sm text-black font-normal">
                Create Password
              </h1>
              <img src={passHide ? "view.png":"hidden.png"} className="h-5 flex ml-72 xm:ml-56 mt-11 absolute hover:cursor-pointer" onClick={toggleView}/>
              <input
                type={passHide ? "text":"password"}
                name="password"
                placeholder="create a password"
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
                className="w-80 xm:w-64 bg-[#27485D] p-2 rounded-lg font-[Poppins] text-base text-white disabled:bg-red-600 "
                onClick={postData}
                disabled={disbaled}
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-row  w-80 xm:w-64 justify-center gap-2">
              <h1 className="font-[Poppins] text-sm text-[#6f6d6d] font-normal">
                Already a User..?
              </h1>

              <Link to="/Login">
                <h2 className="font-[Poppins] text-sm text-[#476D73] underline font-semibold">
                  Login
                </h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
