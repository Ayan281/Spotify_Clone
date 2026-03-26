import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Play, Shuffle, Download, Ellipsis } from "lucide-react";

const Podcast = ({ inpt }) => {
  const [data, setdata] = useState("");
  useEffect(() => {
    const fetchPodcasts = async () => {
      const url = "https://imdb188.p.rapidapi.com/api/v1/getPopularMovies";
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key":
            "771602b102msh57211c4608703d4p1977d3jsne271b7db67a8",
          "x-rapidapi-host": "imdb188.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: { anyPrimaryCountries: ["IN"] },
          limit: 50,
          releaseDate: {
            releaseDateRange: { start: "2000-01-01", end: "2029-12-31" },
          },
          userRatings: {
            aggregateRatingRange: { min: 1, max: 100 },
            ratingsCountRange: { min: 0 },
          },
          genre: { allGenreIds: ["Action"] },
          runtime: { runtimeRangeMinutes: { min: 0, max: 1200 } },
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setdata(result);
        console.log(result.data.list[0].title.originalTitleText.text);
        console.log(result.data.list[0].title.primaryImage.imageUrl);
        console.log(result.data.list[0].title.releaseYear.year);
        console.log(result.data.list[0].title.ratingsSummary.aggregateRating);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div
          className=" flex items-center p-2.5 gap-3 h-[300px] w-full bg-linear-to-b from-indigo-900 via-purple-900 to-pink-800
 border-b-1 border-b-amber-50 rounded-t-xl"
        >
          <div className="h-[250px] w-[250px] bg-[url('https://images.unsplash.com/photo-1659083725992-9d88c12e719c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover rounded-xl "></div>
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-8xl font-extrabold"> Podcasts</h2>
            <p className="text-gray-200 text-xl pl-2">
              with Raj Shamani , Prakhar Gupta , BeerBiceps and more
            </p>
            <div className=" pl-2 flex flex-wrap items-center text-gray-400 text-sm gap-2">
              <button className="text-green-500 font-semibold hover:underline transition-all duration-200">
                Spotify
              </button>

              <span>• 124,890 followers</span>
              <span>• 86 episodes • Avg 42 min</span>
              <span>• Updated weekly</span>
              <span>• ⭐ 4.8 rating</span>
            </div>
          </div>
        </div>
        <div className="h-screen overflow-y-auto backdrop-blur-md bg-linear-to-b from-pink-800/80 via-purple-900 to-indigo-900/70">
          <div className="flex flex-wrap gap-2 p-4">
            <h2 className="text-white text-4xl font-extrabold">Popular Movies By Ratings</h2>
            {data?.data?.list && data.data.list.map((movie) => (
            <div className="flex flex-wrap gap-4 p-4">
           <div className="h-[200px] w-[200px] bg-amber-200">
            <img src={movie?.title?.primaryImage?.imageUrl} alt={movie?.title?.originalTitleText?.text} className="w-full h-full object-cover rounded-xl" />
            <h3 className="text-black font-bold">{movie?.title?.originalTitleText?.text}</h3>
            <p className="text-black">Year: {movie?.title?.releaseYear?.year}</p>
            <p className="text-black">Rating: {movie?.title?.ratingsSummary?.aggregateRating}</p>
           </div>
           
           </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcast;
