import React from "react";
import Navbar from "./Navbar";
import { VolumeX, AudioLines, Shuffle, WifiOff } from "lucide-react";

const Premium = () => {
  return (
    <>
    <Navbar />
    <div className="h-screen w-full bg-black ">
      <div className=" flex justify-center items-center">
        <div className="h-[550px] w-[98%] bg-black flex flex-col  items-center gap-8 text-white rounded-lg">
          <p className=" text-green-500 text-2xl pt-4 font-bold">Get Premium</p>
          <h2 className="text-6xl font-extrabold">
            Made For Fans Who Wants More
          </h2>
          <div className="flex gap-3 items-center py-10">
            <div className="h-[150px] w-[300px] bg-black flex flex-col  gap-4 translate-0 hover:scale-105 transition-all">
              <VolumeX size={36} color="#64cb10" />
              <p className="font-extrabold text-lg">Ad-Free Music</p>
              <p>All the music, without all the ads. Just nonstop beats.</p>
            </div>

            <div className="h-[150px] w-[300px] bg-black flex flex-col  gap-4 translate-0 hover:scale-105 transition-all">
              <AudioLines size={36} color="#64cb10" />
              <p className="font-extrabold text-lg">Very High Audio Quality</p>
              <p>
                Dive deeper into music with sound quality up to ~320 kbps. .
              </p>
            </div>
            <div className="h-[150px] w-[300px] bg-black flex flex-col  gap-4 translate-0 hover:scale-105 transition-all">
              <WifiOff size={36} color="#64cb10" />
              <p className="font-extrabold text-lg">Offline Listening</p>
              <p>
                Download thousands of songs, or let Offline Backup do it for
                you.
              </p>
            </div>
            <div className="h-[150px] w-[300px] bg-black flex flex-col  gap-4 translate-0 hover:scale-105 transition-all">
              <Shuffle size={36} color="#64cb10" />
              <p className="font-extrabold text-lg">Repeat & Skip</p>
              <p>
                Repeat songs, play albums in order, and skip as many times as
                you want.
              </p>
            </div>
          </div>
          <div className="h-[400px] w-[500px]  bg-black flex items-center justify-center gap-6">
            <button className="bg-green-500  w-[200px] h-[60px] rounded-full text-black font-bold translate-0 hover:scale-105 transition-all">
              Try 3 months free for $99
            </button>

            <button className="bg-white font-bold w-[200px] h-[60px] text-black rounded-full translate-0 hover:scale-105 transition-all">
              Explore Premium
            </button>
          </div>
        </div>
      </div>
      <div className="h-[800px] w-full bg-black flex items-center justify-center gap-6">
        {/* GO PLAN */}
        <div className="h-auto w-[350px] bg-[#0B122B] text-white flex flex-col items-center p-8 rounded-[32px] border border-slate-800 shadow-2xl transition-transform hover:scale-105">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500/30 flex items-center justify-center bg-[#151C3D]">
              <div className="w-6 h-6 rounded-full border-4 border-blue-400"></div>
            </div>
          </div>

          {/* Badge */}
          <span className="px-4 py-1 rounded-full border border-slate-700 text-[10px] font-bold tracking-widest text-blue-300 mb-4 uppercase">
            Go
          </span>

          {/* Pricing */}
          <div className="flex items-baseline mb-2">
            <span className="text-6xl font-bold">₹99</span>
            <span className="text-slate-400 ml-1 text-lg">/ MO</span>
          </div>
          <p className="text-slate-400 text-sm mb-8">For casual listeners</p>

          <div className="w-full h-[1px] bg-slate-800 mb-8"></div>

          {/* Features */}
          <div className="w-full space-y-4 mb-10">
            {[
              "Ad-free music",
              "Shuffle play",
              "Standard audio quality",
              "Mobile access only",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/50">
                  <svg
                    className="w-3 h-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Button (same as first card) */}
          <button className="w-full py-4 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl font-bold text-sm hover:brightness-125 transition-all flex items-center justify-center gap-2 border border-blue-400/30">
            <div className="w-4 h-4 rounded-full border-2 border-white/50"></div>
            GET STARTED
          </button>
        </div>

        {/* PRO PLAN */}
        <div className="h-auto w-[350px] bg-[#0B122B] text-white flex flex-col items-center p-8 rounded-[32px] border border-slate-800 shadow-2xl transition-transform hover:scale-105">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-green-500/30 flex items-center justify-center bg-[#151C3D]">
              <div className="w-6 h-6 rounded-full border-4 border-green-400"></div>
            </div>
          </div>

          <span className="px-4 py-1 rounded-full border border-slate-700 text-[10px] font-bold tracking-widest text-green-300 mb-4 uppercase">
            Pro
          </span>

          <div className="flex items-baseline mb-2">
            <span className="text-6xl font-bold">₹149</span>
            <span className="text-slate-400 ml-1 text-lg">/ MO</span>
          </div>
          <p className="text-slate-400 text-sm mb-8">
            Best for daily streaming
          </p>

          <div className="w-full h-[1px] bg-slate-800 mb-8"></div>

          <div className="w-full space-y-4 mb-10">
            {[
              "Everything in Go",
              "Offline downloads",
              "High audio quality",
              "Multi-device support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center border border-green-500/50">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-green-900 to-green-700 rounded-xl font-bold text-sm hover:brightness-125 transition-all flex items-center justify-center gap-2 border border-green-400/30">
            <div className="w-4 h-4 rounded-full border-2 border-white/50"></div>
            UPGRADE
          </button>
        </div>

        {/* ELITE PLAN */}
        <div className="h-auto w-[350px] bg-[#0B122B] text-white flex flex-col items-center p-8 rounded-[32px] border border-slate-800 shadow-2xl transition-transform hover:scale-105">
          <div className="mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-purple-500/30 flex items-center justify-center bg-[#151C3D]">
              <div className="w-6 h-6 rounded-full border-4 border-purple-400"></div>
            </div>
          </div>

          <span className="px-4 py-1 rounded-full border border-slate-700 text-[10px] font-bold tracking-widest text-purple-300 mb-4 uppercase">
            Elite
          </span>

          <div className="flex items-baseline mb-2">
            <span className="text-6xl font-bold">₹199</span>
            <span className="text-slate-400 ml-1 text-lg">/ MO</span>
          </div>
          <p className="text-slate-400 text-sm mb-8">
            Ultimate music experience
          </p>

          <div className="w-full h-[1px] bg-slate-800 mb-8"></div>

          <div className="w-full space-y-4 mb-10">
            {[
              "Everything in Pro",
              "Lossless audio quality",
              "Unlimited downloads",
              "Priority support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500/50">
                  <svg
                    className="w-3 h-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl font-bold text-sm hover:brightness-125 transition-all flex items-center justify-center gap-2 border border-purple-400/30">
            <div className="w-4 h-4 rounded-full border-2 border-white/50"></div>
            GO ELITE
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Premium;
