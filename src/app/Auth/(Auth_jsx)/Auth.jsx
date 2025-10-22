'use client'
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Login from "../(Deshboard_Login)/Login/(Login_Jsx)/Login";
import SignUp from "../(Dashboard_SignUp)/Sign-Up/(Signup.jsx)/SignUp";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../../../Context/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // ✅ Only for signup toggle
  const [isSignup, setIsSignup] = useState(false);

  // ✅ Get all AuthContext values
  const { SignInwithGoogle, Logout, setUsers } = useAuth();
  const router = useRouter();

  const handleGoogleSubmit = async () => {
    try {
      const result = await SignInwithGoogle();
      const user = result.user;

      setUsers(user);
      router.push('/Dashboard');  // ✅ should now work
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(0,75,126)]">
      <div className="grid grid-cols-2 rounded-2xl shadow-2xl h-96 bg-[rgb(5,92,150)]">
        {/* Left */}
        <div
          className="w-full relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=870&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-3xl font-medium leading-relaxed">TRUST WAY GLOBAL</h1>
            <div className="flex mt-4 space-x-4">
              <ul className="flex gap-x-5">
                <li className="text-white text-2xl cursor-pointer">
                  <FcGoogle onClick={handleGoogleSubmit} />
                </li>
                <li className="text-white text-2xl"><FaTwitter /></li>
                <li className="text-white text-2xl"><FaInstagram /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-full bg-[#00395f] flex flex-col items-center justify-center p-10">
          {!isSignup ? (
            <Login onSwitch={() => setIsSignup(true)} />
          ) : (
            <SignUp onSwitch={() => setIsSignup(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
