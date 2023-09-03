import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function WelcomeText(){
  return (
    <div className="mb-2.5">Welcome to Sea Cinema</div>
  );
}

function ImageTrack(){
  //get all the json file
  const filmsDirectory = path.join(process.cwd(), 'films');
  const jsonFilenames = fs.readdirSync(filmsDirectory).filter(filename => filename.endsWith('.json'));

  const movieLinks = jsonFilenames.map((filename) => {
    const movie = require(`films/${filename}`);
    const movieName = filename.replace(".json","");
    return (
      <Link href={`/about/${movieName}`} key={movieName}>
          <div className="flex-shrink-0 w-[100px] lg:w-[300px] h-[300px] lg:h-[275px] bg-neutral-800 rounded-[8px] border border-sky-900 transition-transform transform hover:scale-105">
            <div className="relative">
              <img
                src={movie.posterUrl}
                className="w-full object-cover h-[100px] lg:h-[200px] rounded-t-[8px]"
                alt={movie.title}
              />

              <div className="text-center text-orange-700">{movie.title}</div>
              <div className="text-center text-stone-500">Category: {movie.category}</div>
              <div className='text-center inset-x-0 bottom-0 text-yellow-500 border border-yellow-500 rounded-[8px]'>Rating: {movie.ageRating}</div>
            </div>
          </div>
      </Link>
    );
  })

  return (
    <div className="flex gap-3">
        {movieLinks}
    </div>
  );

}
/*
SU (All Ages/Semua Umur): Suitable for all viewers from kids to adults, equivalent to TV-G.
BO (Parental Guidance/Bimbingan Orang Tua): Parental guidance suggested. Equivalent to TV-PG.
R (Teenager/Remaja): Suitable for viewers aged 13-17, equivalent to TV-14 (low end).
D (Mature Audience/Dewasa): Suitable for viewers over 17, equivalent to TV-MA.
*/

function SEACinemaHomePage(){
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <WelcomeText/>
      <ImageTrack/>
    </div>
  );
}

export default function Home() {
  return (
    <SEACinemaHomePage/>
  )
}
