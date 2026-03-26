import React, { useEffect, useState } from "react";
import { Shuffle, Download, Ellipsis, Play, Clock2 } from "lucide-react";

const API_HEADERS = {
  "x-rapidapi-key": "771602b102msh57211c4608703d4p1977d3jsne271b7db67a8",
  "x-rapidapi-host": "spotify23.p.rapidapi.com",
};

const Playlist = ({ inpt }) => {
  const [apiData, setApiData] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [coverImg, setCoverImg] = useState("");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch(
          "https://spotify23.p.rapidapi.com/search/?q=top50india&type=tracks&limit=20",
          { headers: API_HEADERS }
        );

        const data = await res.json();

        setApiData(data);
        setTracks(data.tracks.items);

        setCoverImg(
          data.tracks.items[4].data.albumOfTrack.coverArt.sources[0].url
        );

      } catch (err) {
        console.error(err);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <div className=" flex items-center p-2.5 gap-3 h-[300px] w-full bg-linear-to-b from-emerald-600 to-emerald-900 border-b-1 border-b-amber-50 rounded-t-xl">
        <div
          className="h-[250px] w-[250px] bg-cover rounded-xl"
          style={{ backgroundImage: `url(${coverImg})` }}
        ></div>

        <div className="flex flex-col gap-5">
          <h2 className="text-white text-8xl font-extrabold">Top-50-India</h2>
          <p className="text-gray-200 text-xl pl-2">
            Create Your Playlist from the Top Trending Songs in India
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

      <div className="h-screen overflow-y-auto backdrop-blur-md bg-linear-to-b from-emerald-900/70 to-gray-900/80">
        <div className="h-[100px] w-full flex items-center p-2 gap-6">
          <button
            className="h-[60px] w-[60px] rounded-full bg-green-500 flex items-center justify-center hover:scale-105 transition"
          >
            <Play className="text-black" size={28} fill="black" />
          </button>

          <div
            className="h-[60px] w-[50px] rounded-xl bg-cover hover:scale-105 transition"
            style={{ backgroundImage: `url(${coverImg})` }}
          ></div>

          <Shuffle color="#ffffff" />
          <Download color="#ffffff" />
          <Ellipsis color="#ffffff" />
        </div>

        <div className="flex flex-col gap-1">
          {tracks.map((item, index) => (
            <div
              key={item.data.id}
              className="group grid grid-cols-[50px_1.5fr_1fr_150px_60px]
              px-6 py-3 text-sm text-white rounded-md
              hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-center text-gray-400">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play size={16} className="hidden group-hover:block text-white" />
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={item.data.albumOfTrack.coverArt.sources[1].url}
                  className="h-10 w-10 rounded"
                />
                <div>
                  <p className="font-medium">{item.data.name}</p>
                  <p className="text-gray-400 text-xs">
                    {item.data.artists.items[0].profile.name}
                  </p>
                </div>
              </div>

              <span className="text-gray-400 truncate">
                {item.data.albumOfTrack.name}
              </span>

              <span className="text-gray-400">
                {Math.floor(item.data.duration.totalMilliseconds / 60000)}:
                {Math.floor(
                  (item.data.duration.totalMilliseconds % 60000) / 1000
                ).toString().padStart(2, "0")}
              </span>

              <Clock2 size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
