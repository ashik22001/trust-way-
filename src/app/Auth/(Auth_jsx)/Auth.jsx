import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Login from "../(Deshboard_Login)/Login/(Login_Jsx)/Login";
import { Button } from "@/components/ui/button";
import SignUp from "../(Dashboard_SignUp)/Sign-Up/(Signup.jsx)/SignUp";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#004b7e] ">
      <div className="w-[850px] flex rounded-2xl overflow-hidden shadow-2xl h-96">
        
        {/* Left  */}
        <div className="w-1/2 relative bg-cover bg-center " 
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=870&q=80')",
          }}>
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-lg font-medium leading-relaxed">
              TRUST WAY GLOBAL
            </h1>
            <div className="flex mt-50 space-x-4">
              <a href="" className="text-white text-2xl"><FaFacebookF /></a>
              <a href="" className="text-white text-2xl"><FaTwitter /></a>
              <a href="" className="text-white text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div class="md:w-1/2 bg-[#00395f] flex flex-col items-center justify-center p-10">
      
        {/* <Login></Login> */}
        <SignUp></SignUp>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

