import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const [disbaled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const postData = () => {            // we also have to signOut so we can make another account so this method is making out signout work invoked down in signOut button 
    signOut(auth)                      // signOut function is provided by firebase and by this we can easily signout from the account
      .then((e) => {
        setDisabled(false);
        navigate("/");             // this navigate us to the signup page again
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  return (
      <div className="flex flex-col  w-fit ml-24 md:justify-center md:items-center sm:ml-4 xxs:ml-0  xs:ml-9 mt-6 ">
        <div className="m-6  xs:mt-5 xs:m-0">
          <h1 className="font-[Poppins] font-semibold 3xl:text-2xl 4xl:text-3xl text-5xl text-[#255258] ">
            Aniket.SignUp
          </h1>
        </div>

      <div>
        <div className=" flex flex-row border-8 rounded-2xl xl:ml-0 w-fit border-[#255258] border-solid 4xl:ml-24 ml-56 4xl:mt-40 3xl:mt-32 2xl:mt-20 mt-52 xs:ml-3 xs:mt-20  ">
          <div className="flex items-center p-3 4xl:p-2 sm:p-0 sm:pl-1 xm:p-2">
            <img src="boy.png" className="h-56 sm:h-16 xl:h-24 4xl:h-32 2xl:h-28 xm:h-16" />
          </div>
          <div className="flex flex-col p-7 pr-8 gap-5 4xl:gap-3 xm:p-3">
            <div className=" flex">
              <h1 className="text-5xl 4xl:text-3xl xl:text-lg sm:text-sm 3xl:text-2xl 2xl:text-xl font-[Poppins] xm:text-lg text-[#255258] font-semibold">
                ID CARD
              </h1>
            </div>

            <div className="flex gap-2 flex-row">
              <h1 className="text-5xl xm:text-xs 4xl:text-3xl xl:text-lg sm:text-sm 2xl:text-xl 3xl:text-2xl font-[Poppins] text-[#255258] font-normal">
                You are Logged In With
              </h1>
            </div>
            <div className="flex gap-2 flex-row">
              <h1 className="text-5xl font-[Poppins] xm:text-xs xxs:text-[11px] xl:text-lg sm:text-sm 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-[#255258] font-normal">
                Email:
              </h1>
              <h1 className="text-4xl font-[Poppins] xm:text-xs xxs:text-[11px]  xl:text-lg sm:text-sm 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-[#255258] font-semibold">
                {props.email}                
                 {/* the email from which we are signing In fetched in the wrapper component and bring here using props(prop drilling) */}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex ml-80 xl:ml-48 justify-center xs:ml-14 sm:ml-16 xm:ml-9 xxs:ml-0 mt-5">
          <button
            type="submit"
            className="3xl:w-80 xm:w-64 md:w-56 3xl:p-2 sm:p-1 p-4 w-[500px] bg-[#27485D] rounded-lg font-[Poppins] 3xl:text-base text-2xl text-white disabled:bg-red-600 "
            onClick={postData}
            disabled={disbaled}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
