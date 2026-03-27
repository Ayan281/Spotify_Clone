import React, { useEffect, useState } from "react";
import Playlist from "./Playlist";
import Artists from "./Artists";
import axios from "axios";

const API_HEADERS = {
  "x-rapidapi-key": "771602b102msh57211c4608703d4p1977d3jsne271b7db67a8",
  "x-rapidapi-host": "spotify23.p.rapidapi.com",
};

const DEFAULT_QUERY = "aashiqui";

const HeroRight = ({ showPlaylist, artist, setArtist, inpt , setCurrentSong}) => {
  const [songs, setSongs] = useState([]);
  const [defaultTracks, setDefaultTracks] = useState([]);
  const [searchTracks, setSearchTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  //Real Backend API Call
  useEffect(() => {
    axios
      .get("https://spotify-clone-dz95.onrender.com/api/music/")
      .then((res) => {
        setSongs(res.data.musics);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* 🔹 LOAD DEFAULT SONGS (ONCE) */
  useEffect(() => {
    const fetchDefault = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://spotify23.p.rapidapi.com/search/?q=${DEFAULT_QUERY}&type=tracks&limit=20`,
          { headers: API_HEADERS },
        );
        const data = await res.json();
        setDefaultTracks(data?.tracks?.items ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDefault();
  }, []);

  useEffect(() => {
    if (!inpt || !inpt.trim()) {
      setSearchTracks([]);
      return;
    }

    const fetchSearch = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
            inpt,
          )}&type=tracks&limit=20`,
          { headers: API_HEADERS },
        );
        const data = await res.json();
        setSearchTracks(data?.tracks?.items ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [inpt]);

  /* 🔹 CHOOSE WHICH TRACKS TO SHOW */
  const tracks = inpt?.trim() ? searchTracks : defaultTracks;

  /* 🔹 SAFE TRACK PARSER */
  const getTrackInfo = (item, fallbackImg) => {
    const track = item.data || item;
    const album = track.album;

    return {
      name: track.name || "Unknown Track",
      artists:
        track.artists?.items?.map((a) => a.profile.name).join(", ") ||
        "Unknown Artist",
      coverImg: album?.coverArt?.sources?.[0]?.url || fallbackImg,
    };
  };

  const defaultImg =
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070";
  return (
    <div className="h-screen w-[75%] bg-neutral-800 flex flex-col gap-4 pt-4 overflow-y-auto">
      {showPlaylist && artist && (
        <>
          {/* TRENDING SONGS */}
          <div className="h-[350px] w-full">
            <h2 className="text-2xl font-bold text-white p-3">
              Trending Songs
            </h2>
            <div className="flex gap-4 p-3 overflow-x-auto">
              {songs.map((item , _id)=>{
                return (  
                  <div key={_id}
                  onClick={()=>{
                    setCurrentSong(item);
                  }}
                   className="flex-shrink-0 w-[200px] bg-neutral-700 rounded-lg p-3 cursor-pointer">
                    <img src={item.cover
                      ? item.cover
                      : defaultImg} alt={item.title} className="h-[150px] w-full object-cover rounded-md" />
                    <p className="mt-2 text-white font-semibold">{item.title}</p>
                    <p className="text-neutral-400 text-sm">{item.artist.username}</p>
                  </div>
                )
              })}
              {/* {songs.map((item , _id)=>{
                return (  
                  <div key={_id} className="flex-shrink-0 w-[200px] bg-neutral-700 rounded-lg p-3 cursor-pointer">
                    <img src={item.cover
                      ? item.cover
                      : defaultImg} alt={item.title} className="h-[150px] w-full object-cover rounded-md" />
                    <p className="mt-2 text-white font-semibold">{item.title}</p>
                    <p className="text-neutral-400 text-sm">{item.artist.username}</p>
                  </div>
                )
              })} */}
            </div>
          </div>

          {/* POPULAR ARTISTS */}
          <div className="h-[350px] w-full">
            <h2 className="text-2xl font-bold text-white p-3">
              Popular Artists
            </h2>
            <div className="flex gap-6 p-4 overflow-x-auto no-scrollbar">
              {loading ? (
                <p className="text-white">Loading...</p>
              ) : (
                songs.map((item, index) => {
                 
                  const artistName =
                    item.artist?.username||
                    "Unknown";
                  const img = item.cover ||
                    defaultImg;

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex flex-col items-center"
                    >
                      <div
                        className="h-[200px] w-[200px] rounded-full bg-cover bg-center cursor-pointer"
                        style={{ backgroundImage: `url(${img})` }}
                        onClick={() => setArtist(false)}
                      ></div>
                      <p className="mt-2 text-white text-lg font-medium">
                        {artistName}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}

      {/* CONDITIONAL RENDERING FOR PLAYLIST & ARTIST */}
      {!showPlaylist && (
        <div className="h-screen w-full bg-neutral-800 flex flex-col gap-4 pt-4 overflow-y-auto">
          <Playlist />
        </div>
      )}
      {!artist && (
        <div className="h-screen w-full bg-neutral-800 flex flex-col gap-4 pt-4 overflow-y-auto">
          <Artists />
        </div>
      )}
    </div>
  );
};

export default HeroRight;
