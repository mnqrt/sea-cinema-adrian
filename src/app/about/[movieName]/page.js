import React from 'react';

export default function Users({ params }) {
  const movieTitle = params.movieName;
  const jsonFilenames = [movieTitle];

  const movieLinks = jsonFilenames.map((filename) => {
    const movieData = require(`films/${filename}`);
    return (
      <div key={movieData.key} className="flex flex-col justify-center items-center h-screen w-screen gap-2 ">
        <img src={movieData.posterUrl} alt={movieData.title} className="w-1/2 h-1/3 opacity-80"/>
        <div className='flex gap-7'>
          <div className="w-100 h-7">{movieData.title}</div>
          <a href={`../../order/${movieTitle}`}>
            <button className='group relative w-20 rounded-lg bg-neutral-800 shadow'>
              <span className='absolute inset-0 w-2 bg-yellow-500  rounded-lg transition-all duration-[500ms] ease-out group-hover:w-full'></span>
              <div className='relative text-white hover:text-orange-700 font-bold'>Pesan</div>
            </button>
          </a>
          {/* <button className='w-30vw bg-orange-600 border border-x-yellow-500 shadow rounded-lg'>Pesan</button> */}
          
        </div>
        <div>Category: {movieData.category}</div>
        <div>Age Rating: {movieData.ageRating}</div>
        <div>Description: {movieData.description}</div>
      </div>
    );
  });

  return <div>{movieLinks}</div>;
}
/*
bikin gap diantaranya
foto taro tengah terus bikin transparan (opacity)
title kiri, kanan tombol buat pesen
bawah title category (tulisan category sama age rating dibold) (dikiri) age rating (dikanan)
tulisan description nya bold, justify
*/