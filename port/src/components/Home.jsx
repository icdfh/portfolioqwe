import React from 'react';
import avatar from '../assets/images/avatar.png';

const Home = ({ setShowPortfolio }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col justify-center items-center text-center p-20 bg-[#1B1E1C]">
        <h1 className="text-5xl font-bold text-white mb-3">Do what you love - freedom</h1>
        <h2 className="text-4xl font-bold text-white mb-3">Loving what you do is happiness</h2>
        <p className="text-xl text-white mb-3">Frontend-developer and UX/UI designer</p>
        <p className="text-xl text-white mb-3">My eyes see the eyes of the developer and the eyes of users</p>
        <button onClick={() => setShowPortfolio(true)} className="py-2 px-4 bg-white text-black rounded-lg font-bold text-lg">Portfolio</button>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-black">
        <img src={avatar} alt="Avatar" className="glow" />
      </div>
    </div>
  );
}

export default Home;
