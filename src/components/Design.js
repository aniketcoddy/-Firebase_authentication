import React from "react";

export default function Design(props) {

  const myStyle = {
    backgroundImage: "url(background.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh"
  };

  return (
    <div>
      <div>
        {props.email.length == 0 ? (
          <div style={myStyle} className="flex flex-col justify-center items-center md:hidden">
            <div className="flex flex-col justify-center items-center m-48 5xl:m-20">
              <img src="lock.png" className="w-96 pb-10 4xl:w-72 2xl:w-56" />
              <h1 className="text-6xl 4xl:text-5xl 2xl:text-3xl xl:text-2xl text-white font-semibold">SignUp to Unlock Please</h1>
            </div>
          </div>
        ) : (
          <div style={myStyle} className="flex flex-col justify-center items-center md:hidden">
            <div className="flex flex-col justify-center items-center m-48 5xl:m-20">
              <img src="unlocked.png" className="w-96 pb-10 4xl:w-72 2xl:w-56" />
              <h1 className="text-6xl 4xl:text-5xl 2xl:text-3xl xl:text-2xl text-white font-semibold">Congrats You Are In</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
