import React, { useState } from "react";
import { Library } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";



  const HeroLeft = ({ showPlaylist, setShowPlaylist , artist , setArtist })=>{
  
  return (
    <div className="h-screen w-[25%] overflow-hidden bg-neutral-900 flex flex-col gap-4 pt-4">
      <div className="h-[70px] w-full flex justify-between text-white flex items-center px-4">
        <a className="flex font-bold">
          <Library color="#ffffff" />
          Your Library
        </a>
        <MoveRight color="#ffffff" />
      </div>
      {showPlaylist &&(
        <div className="h-[150px] w-full bg-gray-800 text-white flex flex-col p-3 gap-4">
        <h3 className="font-bold"> Create Your Playlist now</h3>
        <p> Create your personal playlist and enjoy.</p>
        <button
        onClick={()=>{
          
          setShowPlaylist(false)
          
          
        }}
         className="bg-green-500 w-[120px] h-[40px] rounded-full text-black font-bold ">
          Get Started
        </button>
      </div>
      )}
      <div className="h-[150px] w-full bg-gray-800 text-white flex flex-col p-3 gap-4">
        <h3 className="font-bold"> Find Some Podcast</h3>
        <p> Explore top trending podcast.</p>
        <Link to ="/podcast">
        <button className="bg-green-500 w-[150px] h-[40px] rounded-full text-black font-bold">
          Browse Podcasts
        </button></Link>
      </div>
      
      <div className="w-full  text-white text-sm flex flex-wrap gap-6 p-4">
        <a href="#" className="hover:underline">
          Legal
        </a>
        <a href="#" className="hover:underline">
          Privacy Center
        </a>
        <a href="#" className="hover:underline">
          Cookies
        </a>
        <a href="#" className="hover:underline">
          About Ads
        </a>
        <a href="#" className="hover:underline">
          Accessibility
        </a>
        <a href="#" className="hover:underline">
          Cookies
        </a>
        <a href="#" className="hover:underline">
          Terms & Condition
        </a>
        
        <button className="bg-white w-[150px] h-[40px] rounded-full text-black font-bold flex items-center justify-center gap-2">
         English<Globe color="#000000" />
        </button> 
      </div>
      {/* {!showPlaylist &&(
       
      )} */}
    </div>
  );
};

export default HeroLeft;
