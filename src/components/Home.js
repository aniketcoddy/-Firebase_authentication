import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const [disbaled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const postData = () => {
    signOut(auth)
      .then((e) => {
        setDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  return (
    <div>
      <div className="m-16">
        <h1 className="font-[Poppins] font-semibold text-3xl text-[#255258] ">
          Breeze.ai
        </h1>
      </div>

      <div>
        <div className=" flex flex-row border-8 rounded-2xl border-[#255258] border-solid ml-56 mt-52 xs:ml-2 xs:mt-20  ">
          <div className="flex items-center p-3 xm:p-2">
            <img src="boy.png" className="h-24 xm:h-16" />
          </div>
          <div className="flex flex-col p-5 xm:p-3">
            <div className=" flex">
              <h1 className="text-3xl font-[Poppins] xm:text-lg text-[#255258] font-semibold">
                ID CARD
              </h1>
            </div>

            <div className="flex gap-2 flex-row">
              <h1 className="text-base xm:text-xs font-[Poppins] text-[#255258] font-normal">
                You are Logged In With
              </h1>
            </div>
            <div className="flex gap-2 flex-row">
              <h1 className="text-base font-[Poppins] xm:text-xs text-[#255258] font-normal">
                Email:
              </h1>
              <h1 className="text-base font-[Poppins] xm:text-xs text-[#255258] font-semibold">
                {props.email}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex ml-80 xs:ml-14 xm:ml-9 xxs:ml-8 mt-5">
          <button
            type="submit"
            className="w-80 bg-[#27485D] xm:w-60 p-2 rounded-lg font-[Poppins] text-base text-white disabled:bg-red-600 "
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
