import React, { useEffect, useState } from "react";

const Api = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      const url =
        "https://spotify-web2.p.rapidapi.com/seed_to_playlist/?uri=spotify:artist:2w9zwq3AktTeYYMuhMjju8";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "771602b102msh57211c4608703d4p1977d3jsne271b7db67a8",
          "x-rapidapi-host": "spotify-web2.p.rapidapi.com",
        },
      };

      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setTracks(data.tracks);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 Recommended Songs</h1>

      {/* Songs List */}
      <div className="space-y-4">
        {tracks?.map((track, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition"
          >
            <div>
              <p className="font-semibold">{track.name}</p>
              <p className="text-sm text-gray-400">{track.artists[0].name}</p>
            </div>

            <button
              className="bg-green-500 text-black px-4 py-2 rounded-full font-semibold"
              onClick={() => setCurrentTrack(track)}
            >
              ▶ Play
            </button>
          </div>
        ))}
      </div>

      {/* Now Playing Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 p-4">
          <p className="mb-2 font-semibold">
            Now Playing: {currentTrack.name} - {currentTrack.artists[0].name}
          </p>
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
              currentTrack.name + " " + currentTrack.artists[0].name
            )}&autoplay=1`}
            title={currentTrack.name}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Api;
