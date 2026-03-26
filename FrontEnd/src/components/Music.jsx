import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const Music = ({ currentSong }) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // 🔥 Auto play when new song is selected
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  // ❌ If no song selected → don't render player
  if (!currentSong) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progressPercent = duration
    ? (currentTime / duration) * 100
    : 0;

  const defaultImg =
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-[#282828] px-6 py-3 text-white">
      
      {/* 🔥 Real Audio */}
      <audio
        ref={audioRef}
        src={currentSong.uri}   // ✅ backend audio URL
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-4 w-[30%]">
          <img
            src={currentSong.cover || defaultImg}
            className="w-14 h-14 rounded-md"
          />
          <div>
            <p className="text-sm font-medium">
              {currentSong.title}
            </p>
            <p className="text-xs text-gray-400">
              {currentSong.artist?.username || "Unknown"}
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="w-[40%] flex flex-col items-center gap-2">
          
          <button
            onClick={togglePlay}
            className="bg-white text-black rounded-full p-2 hover:scale-105"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          {/* Progress */}
          <div className="flex items-center gap-2 w-full text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>

            <div className="flex-1 h-1 bg-gray-600 rounded-full">
              <div
                className="h-1 bg-white rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right */}
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};

export default Music;