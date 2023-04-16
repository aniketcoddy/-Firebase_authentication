import React from "react";
import SignUp from "./SignUp";
import Design from "./Design";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

//this is the parent component of all the components of my react application to avoid confusion and mess in app.js folder i created this

export default function Wrapper(props) {
  const [loggedEmail, setLoggedEmail] = useState(""); //this state handles the email you can see on ID Card when a user us signIn or LogIn in 

  //this iuse effect working as a sideEffect Hook which help us to fetch the email from which the user signed In and displa it on the UI of home page
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {  //onAuthStateChange is a provided function from the Firebase to check wether the user is loggin In and help in fetch the email
      if (user) {
        setLoggedEmail(user.email);
      } else {
        setLoggedEmail("");
      }
    });
  }, []);

  return (
    // Here we are witnessing the routing so we can jump and navigate from component to another without loading the the page
    <div>
      <div className="flex flex-row sm:flex-col sm:gap-0 gap-24">
        <BrowserRouter>
          <Routes>
            {/* signUp Page is our first user will encounter when someone will open our webpage so thats why it is marked with "/" and declared as index element */}
            <Route path="/" index element={<SignUp />} /> 
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home email={loggedEmail} />} />
            {/* using prop drilling we are sending the state (loggedEmail) which contain the email we need on to show on the UI of HOME page */}
          </Routes>
        </BrowserRouter>
        <Design email={loggedEmail} />
      </div>
    </div>
  );
}
