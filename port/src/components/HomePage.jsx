import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import avatar from '../assets/images/avatar.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      {/* Левая часть экрана */}
      <motion.div
        className="w-1/2 flex flex-col justify-center items-center text-center p-20 bg-[#1B1E1C]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-white mb-3">Do what you love - freedom</h1>
        <h2 className="text-4xl font-bold text-white mb-3">Loving what you do is happiness</h2>
        <p className="text-xl text-white mb-3">Frontend-developer and UX/UI designer</p>
        <p className="text-xl text-white mb-3">My eyes see the eyes of the developer and the eyes of users</p>
        <button onClick={() => navigate('/portfolio')} className="py-2 px-4 bg-white text-black rounded-lg font-bold text-lg">Portfolio</button>
      </motion.div>
      {/* Правая часть экрана */}
      <motion.div
        className="w-1/2 flex items-center justify-center bg-black"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img src={avatar} alt="Avatar" className="glow" />
      </motion.div>
    </div>
  );
}

export default HomePage;
