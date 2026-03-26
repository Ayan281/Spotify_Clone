// import React, { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroPage = ({ showPlaylist, setShowPlaylist, artist, setArtist ,inpt, setCurrentSong}) => {
  // const [showPlaylist, setShowPlaylist] = useState(true);
  

  return (
    <div className="h-screen w-full flex">
      <HeroLeft showPlaylist={showPlaylist} setShowPlaylist={setShowPlaylist} />
      <HeroRight
        setCurrentSong={setCurrentSong}
        showPlaylist={showPlaylist}
        setShowPlaylist={setShowPlaylist}
        artist={artist}
        setArtist={setArtist}
        inpt={inpt}
        
      />
    </div>
  );
};

export default HeroPage;
