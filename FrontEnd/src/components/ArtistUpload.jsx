import React from 'react'
import Navbar from './Navbar'
import axios from "axios";

const ArtistUpload = () => {
    function submitHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post("https://spotify-clone-dz95.onrender.com/api/music/upload", formData, {
            withCredentials: true,
        }).
        then((res)=>{
            console.log(res.data);
            
        }).catch((err)=>{
            console.log(err);
        })
        
    }

  return (
    <div className='min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black pb-12'>
        <Navbar />
        
        {/* Page Header */}
        <div className='w-full max-w-3xl mx-auto px-4 mt-12 mb-8'>
            <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3'>
                Upload Music
            </h1>
            <p className='text-neutral-400 text-lg'>
                Add a new track to your artist profile and share it with the world.
            </p>
        </div>

        {/* Form Card Container */}
        <div className='w-full max-w-3xl mx-auto px-4'>
            <div className='bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl'>
                <form onSubmit={submitHandler} className='space-y-6'>
                    
                    {/* Grid for grouping inputs cleanly */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        
                        {/* Title Input */}
                        <div className='md:col-span-2'>
                            <label htmlFor="title" className='block text-sm font-bold text-neutral-300 mb-2'>
                                Song Title
                            </label>
                            <input 
                                id="title"
                                name="title" 
                                type="text" 
                                placeholder="e.g. Blinding Lights" 
                                className='w-full bg-neutral-800 border border-transparent rounded-md px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all' 
                            />
                        </div>

                        {/* Artist Input */}
                        <div>
                            <label htmlFor="artist" className='block text-sm font-bold text-neutral-300 mb-2'>
                                Artist Name
                            </label>
                            <input 
                                id="artist"
                                name="artist"
                                type="text" 
                                placeholder="e.g. The Weeknd" 
                                className='w-full bg-neutral-800 border border-transparent rounded-md px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all' 
                            />
                        </div>

                        {/* Album Input */}
                        <div>
                            <label htmlFor="album" className='block text-sm font-bold text-neutral-300 mb-2'>
                                Album Name
                            </label>
                            <input 
                                id="album"
                                name="album" 
                                type="text" 
                                placeholder="e.g. After Hours" 
                                className='w-full bg-neutral-800 border border-transparent rounded-md px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all' 
                            />
                        </div>
                    </div>

                    {/* Styled File Input Zone */}
                    <div className='pt-4'>
                        <label className='block text-sm font-bold text-neutral-300 mb-2'>
                            Audio File
                        </label>
                        <div className='relative group flex justify-center px-6 pt-8 pb-10 border-2 border-neutral-700 border-dashed rounded-xl hover:border-green-500 bg-neutral-800/30 hover:bg-neutral-800/60 transition-colors cursor-pointer'>
                            <div className='space-y-2 text-center'>
                                {/* Music Icon SVG */}
                                <svg className="mx-auto h-12 w-12 text-neutral-500 group-hover:text-green-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                <div className='flex text-sm text-neutral-400 justify-center'>
                                    <span className='font-semibold text-green-500 group-hover:text-green-400'>Upload a file</span>
                                    <span className='pl-1'>or drag and drop</span>
                                </div>
                                <p className='text-xs text-neutral-500 font-medium'>
                                    MP3, WAV, or OGG up to 50MB
                                </p>
                            </div>
                            
                            {/* The actual input is stretched over the whole box and made invisible */}
                            <input 
                                name="music" 
                                type="file" 
                                accept="audio/*"
                                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' 
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='pt-6'>
                        <button 
                            type='submit' 
                            className='w-full flex justify-center py-4 px-4 rounded-full shadow-sm text-base font-bold text-black bg-green-500 hover:bg-green-400 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-green-500 transition-all duration-200'>
                            Upload Track
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default ArtistUpload
