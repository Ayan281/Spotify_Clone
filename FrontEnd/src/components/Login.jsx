import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [nameoremail, setNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
   function submitHandler(e){
    e.preventDefault();
    axios.post("https://spotify-clone-dz95.onrender.com/api/auth/login",{
      username :nameoremail,
      email :nameoremail,
      password},{withCredentials : true}
      
    ).then((res)=>{
      const user = res.data.user.role;
      
      if(user === "artist"){
        navigate("/artistupload");
      }
      else{
        navigate("/");
      }
      
      console.log(res.data);

    }).catch((err) => {
        console.log(err);
      });
    
   }
  return (
    <>
    <Navbar />
    <div className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1650954316234-5d7160b24eed?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#121212] text-white rounded-2xl p-8 shadow-2xl border border-neutral-800">

        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Login for Spotify</h1>
          <p className="text-neutral-400 text-sm">
            Enjoy ad-free music and offline listening
          </p>
        </div>

        
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 border border-neutral-700 rounded-full py-3 font-semibold hover:bg-neutral-800 transition">
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 border border-neutral-700 rounded-full py-3 font-semibold hover:bg-neutral-800 transition">
            Continue with Facebook
          </button>
        </div>

        
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-xs text-neutral-400">OR</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        
        <form 
        onSubmit={submitHandler}
        className="space-y-4">
          <div>
            <label className="text-sm font-semibold block mb-1">
              Email or Username
            </label>
            <input
              type="text"
              onChange={(e)=>{
                setNameOrEmail(e.target.value);
              }}
              placeholder="Enter Your Email or Username "
              className="w-full bg-black border border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:border-green-500"
            />
          </div>
          

          <div>
            <label className="text-sm font-semibold block mb-1">
              Password
            </label>
            <input
              type="password"
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="w-full bg-black border border-neutral-700 rounded-md px-4 py-3 focus:outline-none focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full transition"
          >
            LOG IN
          </button>
        </form>

    
        <div className="text-center mt-6 space-y-2">
          

          <p className="text-sm text-neutral-400">
            Don’t have an account?{" "}
            <Link to ="/signup" className="text-white font-semibold hover:underline">
              Sign Up for Spotify
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
