import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import Music from "./components/Music";
import Premium from "./components/Premium";
import SignUp from "./components/SignUp";
import Podcast from "./components/Podcast";
import Login from "./components/Login";
import ArtistUpload from "./components/ArtistUpload";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [artist, setArtist] = useState(true);
  const [inpt, SetInpt] = useState("");

  return (
    <Routes>
     
      <Route
        path="/"
        element={
          <>
            <Navbar
              showPlaylist={showPlaylist}
              setShowPlaylist={setShowPlaylist}
              artist={artist}
              
              setArtist={setArtist}
              inpt={inpt}
              SetInpt={SetInpt}

            />
            <HeroPage
              setCurrentSong={setCurrentSong}
              showPlaylist={showPlaylist}
              setShowPlaylist={setShowPlaylist}
              artist={artist}
              setArtist={setArtist}
              inpt={inpt}
              SetInpt={SetInpt}
            />
            <Music
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
             />
            
          </>
        }
      />

      <Route path="/premium" element={<Premium />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path ="/artistupload" element={<ArtistUpload />} />
      
    </Routes>
  );
};

export default App;
