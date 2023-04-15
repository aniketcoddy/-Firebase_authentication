import React from "react";
import SignUp from "./SignUp";
import Design from "./Design";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./Firebase"

export default function Wrapper(props) {

  const [loggedEmail , setLoggedEmail] =useState("")

  useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
  if(user){
    console.log("name",user.displayName)
    setLoggedEmail(user.email)
  }else{
    setLoggedEmail("")
  }
 })
  },[])

  return (
    <div>
      <div className="flex flex-row sm:flex-col sm:gap-0 gap-24">
      <BrowserRouter>
      <Routes>
          <Route path="/signUp" element={ <SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home email={loggedEmail}/>} />
      </Routes>
    </BrowserRouter>
      <Design email={loggedEmail} />
      </div>
    </div>
  );
}
