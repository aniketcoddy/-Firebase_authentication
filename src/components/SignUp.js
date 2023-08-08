import React, { useState } from "react";
import { Link , Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from "../components/Firebase";

export default function SignUp() {

  const navigate = useNavigate()   //we are using useNavigate hook to navigate easly from one page to another it is a part of react router
 

  const [error, setError] = useState("");               //this satate is responsible for throwing error while signingIN and LogingIN
  const [disbaled, setDisabled] = useState(false);       // this state is responsible for showing disablity of signIn and Login button once we click it
  const [passHide , setPassHide] = useState(false)       //this state is responsible for toggle switch of password input field

  //instead of making state for each and indivisual input field i made an object in a single state and we can using any input field using dot operator
  const [userdata, setUserdata] = useState({
    name: "",                                  //   example -: userData.name
    Email: "",
    // phone: "",
    password: "",
  });

  let name, value;
  const getUsUserData = (e) => {    //this is the onclick funtion and the Invokation of the function you will find in input fields 
    name = e.target.name;            // all the input fields contain this getUsUserData function so common among all is name and value so we get the value from all the input fields
    value = e.target.value;

    setUserdata({                    //here we are getting the fetching the value from all the input fields
      ...userdata,                   //using  spread operator we are adding the new value to the previous value in the database beccause there would be multiple signIn and we have a to store them all 
      [name]: value,          //we are using dynamic array technique to store the value corresponding to the name
    });
  };


  const postData = (e) => {                     //this is the main method of this FORM invoked in signUp button 
    e.preventDefault();                              //this will avoid reloading of page evertime we click the signIn button 
    if (!userdata.name || !userdata.Email || !userdata.password) {               //Here we are checking whether all the input field are filled or not 
      setError("Please fill all the details...!");                          // if not then the programme will through an error 
      return;
    }
    setError("");                                                   //if all fields are filled then no error notification
    setDisabled(true);                                               // the signIN button will get disabled after if the fields are not empty

    createUserWithEmailAndPassword(auth, userdata.Email, userdata.password)        //here we send the fetched data the firebase database  createUserWithEmailAndPassword is a function provided by firebase and we are just attaching it
      .then(async(res) => {                                        // oviouslu it will return a promise so we need to catch the response using ".then" operator
        setDisabled(false);                                         
        const user = res.user                         
       await updateProfile(user , {          // we get email and password main filed to enter in the firebase but is we want to save name of the user in the database then we can use updateProfile methos provided by firebase 
          displayName:userdata.name            // display name is the field mentioned in the database of firebase so we can update the name in display name 
        }).then(console.log("check user",user),navigate('/Home'),document.title="Home Page")  // as soon as we done with the signUp and all the data has been saved then navigate to the home page as a new user to the website
      })
      .catch((err) => {
        setDisabled(false)    
        setError(err.message)  //if any error occurs we fetch the message thrown by firebase and display it on use related to email and password   
        console.log("error", err.message);   
      });
  };

  const toggleView=()=>{        //method we are using to toggle password field from hidden to visible
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

       {error.length==0?"":(            //condition if error field is empty then nothing if somthing is there in error then throw it on UI 
        <div className="flex flex-row items-center ml-96 mt-16 lg:mt-24 lg:ml-44 md:ml-32 md:mt-20 xs:ml-24 xm:ml-1 shadow-lg shadow-yellow-600 bg-yellow-500 rounded-lg p-2 absolute">
          <span className="text-lg lg:text-base xs:text-sm xxs:text-xs font-[Poppins] text-white">{error}</span>
        </div>
        )}

        <div className=" flex flex-col 3xl:mt-20 mt-36 2xl:mt-8 xm:mt-20 xxs:ml-0  lg:mt-20 lg:ml-2  xl:ml-20 xl:mt-10 md:mt-20 md:justify-center md:items-center xs:mt-20 ml-72 4xl:ml-44  3xl:gap-10 2xl:gap-7 gap-14">
          <div>
            <h1 className="font-[Poppins] font-semibold 3xl:text-lg 4xl:text-3xl  text-5xl text-[#0c1e21]">
              Let's get you started
            </h1>
          </div>
          <form className="flex flex-col 3xl:gap-7 gap-10" method="POST">
            <div className="flex flex-col">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl 4xl:text-2xl  text-black font-normal">
                Full Name
              </h1>
              <input
                type="text"
                name="name"
                placeholder="eg-: Aniket vishnoi"
                value={userdata.name}
                onChange={getUsUserData}
                className="border-2 border-black text-2xl 3xl:w-80 2xl:text-base  2xl:p-2 xm:w-64 3xl:p-3 p-4 w-[500px] rounded-md"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl 4xl:text-2xl text-black font-normal">
                Email Address
              </h1>
              <input
                type="email"
                name="Email"
                placeholder="eg-: vishnoianiket903@gmail.com"
                value={userdata.Email}
                onChange={getUsUserData}
                className="border-2 border-black text-2xl 2xl:text-base 3xl:w-80 xm:w-64  2xl:p-2 3xl:p-3 p-4 w-[500px] rounded-lg"
                required
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl 4xl:text-2xl text-black font-normal">
                Create Password
              </h1>
              <img src={passHide ? "view.png":"hidden.png"} className="h-5 flex 3xl:ml-72 ml-[450px] mt-16 xm:ml-56 3xl:mt-11 absolute hover:cursor-pointer" onClick={toggleView}/>
              <input
                type={passHide ? "text":"password"}
                name="password"
                placeholder="create a password"
                value={userdata.password}
                onChange={getUsUserData}
                className="border-2 border-black 3xl:w-80 text-2xl 2xl:text-base xm:w-64  2xl:p-2 3xl:p-3 p-4 w-[500px] rounded-lg"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <button
                type="submit"
                className="3xl:w-80 xm:w-64 3xl:p-2 p-4 w-[500px] bg-[#27485D] rounded-lg font-[Poppins] 3xl:text-base text-2xl text-white disabled:bg-red-600 "
                onClick={postData}
                disabled={disbaled}
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-row  3xl:w-80 xm:w-64 justify-center gap-2">
              <h1 className="font-[Poppins] 3xl:text-sm text-3xl text-[#6f6d6d] font-normal">
                Already a User..?
              </h1>

              {/*this navigates us to the login page*/}
              <Link to="/Login">                  
                <h2 className="font-[Poppins] 3xl:text-sm text-3xl text-[#476D73] underline font-semibold">
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
