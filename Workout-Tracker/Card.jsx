import React from 'react';
import StopWatch from './tracker';

const Card = ({ name, reps, sets, exerciseImage, youtubeVideoLink, exerciseTips, generalFormCues }) => {
  return (
    <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
      <h2 className="text-center text-yellow-700 font-bold text-xl md:text-2xl">{name}</h2>
      <div className="flex flex-col md:flex-row items-center my-4">
        <img className="w-full md:w-60 h-60 border-2 border-gray-500 mr-0 md:mr-4 mb-4 md:mb-0" src={exerciseImage} alt={name} />
        <StopWatch />
      </div>
      <div className="text-center md:text-left">
        <p className="text-lg md:text-xl">Reps: {reps}</p>
        <p className="text-lg md:text-xl">Sets: {sets}</p>
        <a className="text-red-800 border-2 border-blue-400 py-1 px-3 rounded inline-block my-2" href={youtubeVideoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
        <p className="text-lg text-gray-900 my-2"><b className="text-yellow-700"> Tips:</b> {exerciseTips}</p>
        <p className="text-lg text-gray-900 my-2"><b className="text-yellow-700">Form Cues:</b> {generalFormCues}</p>
      </div>
    </div>
  );
};

export default Card;