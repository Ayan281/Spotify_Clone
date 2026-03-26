import React, { useState } from "react";
import { Search } from "lucide-react";
import { House } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({
  showPlaylist,
  setShowPlaylist,
  artist,
  setArtist,
  inpt,
  SetInpt,
}) => {
  return (
    <div>
      <div className="h-[80px] border-b-1 border-gray-300 bg-black flex items-center gap-8 px-4 text-white">
        <div className="flex items-center gap-8 px-4">
          <Link to="/">
            <button
              onClick={() => {
                setShowPlaylist(true);
                setArtist(true);
              }}
              className="flex font-bold items-center gap-2"
            >
              <House color="#ffffff" />
              Home
            </button>
          </Link>

          <input
            type="text"
            value={inpt}
            onChange={(e) => {
              SetInpt(e.target.value);
              setShowPlaylist(true);
              setArtist(true);
            }}
            placeholder="Enter the Song"
            className="w-full max-w-md bg-neutral-700 text-white placeholder-gray-400 
             border border-gray-600 focus:border-green-500 
             outline-none text-xl rounded-xl px-4 py-2 transition-all"
          />

          <a className="flex font-bold ">
            <Search color="#ffffff" />
            Search
          </a>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <Link to="/premium">
            <button className="bg-white font-bold w-[200px] text-black px-4 py-2 rounded-full">
              Explore Preimium
            </button>
          </Link>
          <button
            onClick={() => {
              window.open("https://www.spotify.com/download/full/", "_blank");
            }}
            className="bg-white font-bold w-[200px] text-black px-4 py-2 rounded-full"
          >
            Install App
          </button>
          <Link to="/login">
            <button className="bg-cyan-200  rounded-full w-[50px] h-[50px] text-black px-4 py-2 rounded-full">
              AA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
