import React from "react";

export default function Design(props) {
  return (
    <div>
      <div>
       {props.email.length == 0?(
        <div >
        <img src="lock.png" className="absolute h-48 z-10 flex mt-60 sm:hidden ml-96 md:ml-10 lg:ml-44 2xl:ml-[308px]  xl:ml-48 "/>
        <h1 className="absolute z-10 flex mt-[452px] xl:text-2xl xl:ml-36 sm:hidden 2xl:ml-56 lg:ml-32 ml-80 text-3xl md:ml-7 md:text-lg lg:text-2xl font-[Poppins] font-semibold text-white">SignUp to Unlock Please</h1>
        <img src="background.png" className="ml-36 lg:ml-9 w-[592px] sm:hidden xl:ml-8 md:ml-0 fixed h-[753px]" />
        </div>
        ):(
          <div>
        <img src="unlocked.png" className="absolute h-48 z-10 flex mt-60 sm:hidden ml-96 md:ml-10 lg:ml-20 lg:h-44 lg:mt-56 md:hidden 2xl:ml-[337px] 2xl:mt-44 2xl:h-60  xl:ml-48"/>
        <h1 className="absolute z-10 flex mt-[452px] xl:text-2xl xl:ml-36 sm:hidden 2xl:ml-72 lg:ml-16 ml-80 md:hidden text-3xl md:ml-7 md:text-lg lg:text-xl font-[Poppins] font-semibold text-white">Congrats you are In</h1>
        <img src="background.png" className="ml-36 lg:ml-9  sm:hidden xl:ml-8 md:hidden  h-[753px]ml-52 w-[659px] fixed h-[753px]"/>
        </div>
        )}
      </div>
    </div>
  );
}
