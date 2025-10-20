import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Login from "../(Deshboard_Login)/Login/(Login_Jsx)/Login";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#085080]">
      <div className="w-[850px] flex rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Left  */}
        <div className="w-1/2 relative bg-cover bg-center" 
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
      <h2 class="text-white text-xl font-bold mb-6 border-b-2 border-white pb-2"> TRUST WAY GLOBAL</h2>
        <Button className=" bg-white text-[#1E3A8A] font-semibold py-1.5 rounded-full mb-4  transition" >SingUp</Button>

      <form class="w-full max-w-sm space-y-4">
        <div>
          <input type="email" placeholder="Email"
                 class="w-full px-4 py-2 rounded bg-transparent border border-white text-white placeholder-gray-200 ">
                  </input>
        </div>
        <div>
          <input type="password" placeholder="Password" 
                 class="w-full px-4 py-2 rounded bg-transparent border border-white text-white placeholder-gray-200">
                  </input>
          <a href="" class="text-white hover:underline">Forgot Your Password?</a>
        </div>
        <Button  className="w-full bg-white text-[#1E3A8A] font-semibold py-2 rounded-full mt-6 hover:bg-gray-200 transition">
          ENTER

        </Button>
      </form>
        <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

