import { Shuffle, Download, Ellipsis, Play } from "lucide-react";

import React, { useEffect, useState } from "react";

const Artists = ({ inpt }) => {
  const [tracks, setTracks] = useState([]);

   

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const query = inpt || "arijit";
        const url =
          `https://shazam-core.p.rapidapi.com/v1/search/multi?query=${query}&search_type=SONGS&offset=0`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "771602b102msh57211c4608703d4p1977d3jsne271b7db67a8",
            "x-rapidapi-host": "shazam-core.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result.data[0].attributes.name);
          setTracks(result.data);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, [inpt]);

  return (
    <div>
      <div className=" flex items-center p-2.5 gap-3 h-[300px] w-full bg-linear-to-b from-orange-400 to-orange-700 border-b-1 border-b-amber-50 rounded-t-xl">
        <div className="h-[250px] w-[250px] bg-[url('https://i.cdn.newsbytesapp.com/images/l3320250915192615.jpeg')] bg-cover rounded-xl "></div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-8xl font-extrabold"> {inpt} Radio</h2>
          <p className="text-gray-200 text-xl pl-2">
            with Pritam , Shreya Ghoshal , Neha Kakkar and more
          </p>
          <div className=" pl-2 flex flex-wrap items-center text-gray-400 text-sm gap-2">
            <button className="text-green-500 font-semibold hover:underline transition-all duration-200">
              Spotify
            </button>

            <span>• 601,437 saves</span>
            <span>• 50 songs, about 3 hr 15 min</span>
            <span>• 14 Dec 2025</span>
            <span>• 2 new entries</span>
          </div>
        </div>
      </div>
      <div className="h-screen overflow-y-auto backdrop-blur-md bg-linear-to-b from-orange-700/70 to-gray-900/80">
        <div className="h-[100px] w-full  flex items-center  p-2 flex gap-6">
          <button
            className="h-[60px] w-[60px] rounded-full bg-green-500 flex items-center justify-center hover:scale-105 transition"
            aria-label="Play"
          >
            <Play className="text-black" size={28} fill="black" />
          </button>
          <div className="h-[60px] w-[50px] rounded-xl bg-[url('https://i.scdn.co/image/ab67616d0000b2736f98a8f3c1fd3ef65f16320d')] bg-cover hover:scale-105 transition"></div>
          <Shuffle className="hover:scale-110 transition" color="#ffffff" />
          <Download className="hover:scale-110 transition" color="#ffffff" />
          <Ellipsis className="hover:scale-125 transition" color="#ffffff" />
        </div>
        <div className="flex flex-col gap-1">
          {/* ROW 1 */}
          {tracks.map((item, index) => (
          <div
            className="group grid grid-cols-[50px_1.5fr_1fr_150px_60px]
                  px-6 py-3 text-sm text-white rounded-md
                  hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-center text-gray-400">
              <span className="group-hover:hidden">{index+1}</span>
              <Play size={16} className="hidden group-hover:block text-white" />
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://i.scdn.co/image/ab67616d0000b2736f98a8f3c1fd3ef65f16320d"
                className="h-10 w-10 rounded"
              />
              <div>
                <p className="font-medium">{item.attributes.name}</p>
                <p className="text-gray-400 text-xs">{item.attributes.artistName}</p>
              </div>
            </div>

            <span className="text-gray-400 truncate">{item.attributes.albumName}</span>
            <span className="text-gray-400">{item.attributes.releaseDate}</span>
            <span className="text-gray-400">{item.attributes.duration}</span>
          </div>
          ))}
          </div>
        
      </div>
    </div>
  );
};

export default Artists;
