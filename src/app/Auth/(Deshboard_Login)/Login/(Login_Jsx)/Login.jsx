import { Button } from '@/components/ui/button'
import React from 'react'

export default function Login() {
  return (
    <div>
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
    </div>
  )
}
