import { motion } from 'framer-motion';
import { useState } from 'react';

const Phone = () => {
  const [currentTime] = useState(() => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  });

  const apps = [
    { id: 1, name: 'Plans', color: 'bg-gradient-to-br from-green-400 via-green-500 to-teal-500' },
    { id: 2, name: 'Photos', color: 'bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400' },
    { id: 3, name: 'Santé', color: 'bg-gradient-to-br from-white via-pink-100 to-red-200' },
    { id: 4, name: 'Musique', color: 'bg-gradient-to-br from-pink-500 via-red-500 to-orange-500' },
    { id: 5, name: 'Fichiers', color: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600' },
    { id: 6, name: 'Notes', color: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400' },
    { id: 7, name: 'Contacts', color: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600' },
    { id: 8, name: 'Réglages', color: 'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800' },
    { id: 9, name: 'Calendrier', color: 'bg-white border-2 border-red-500' },
    { id: 10, name: 'Mail', color: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700' },
    { id: 11, name: 'Horloge', color: 'bg-gradient-to-br from-gray-900 via-black to-gray-900' },
    { id: 12, name: 'Météo', color: 'bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <motion.div
        className="w-[390px] h-[844px] bg-black rounded-[60px] shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ boxShadow: '0 0 0 12px #1a1a1a, 0 0 0 14px #000' }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[40px] z-50 shadow-inner" />

        {/* Screen */}
        <div
          className="h-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 100%)'
          }}
        >
          {/* Status Bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 pt-[54px] px-8 pb-2 flex items-center justify-between text-white text-[15px] font-semibold z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="tracking-tight">{currentTime}</span>
            <div className="flex items-center gap-[6px]">
              <svg className="w-4 h-3" viewBox="0 0 16 12" fill="white">
                <path d="M2 2h1v8H2V2zm3-1h1v10H5V1zm3 2h1v6H8V3zm3-1h1v8h-1V2z"/>
              </svg>
              <svg className="w-4 h-3" viewBox="0 0 16 12" fill="white">
                <path d="M1 4a3 3 0 013-3h8a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3V4z"/>
              </svg>
              <span className="text-xs">100%</span>
              <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
                <rect x="1" y="1" width="18" height="10" rx="2" stroke="white" strokeWidth="1.5" fill="white"/>
                <path d="M21 4v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </motion.div>

          {/* Time Widget */}
          <motion.div
            className="absolute top-[100px] left-8 right-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-white/90 text-7xl font-light tracking-tighter">
              {currentTime}
            </div>
            <div className="text-white/70 text-xl font-medium mt-1">
              {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </div>
          </motion.div>

          {/* App Grid */}
          <motion.div
            className="absolute bottom-[180px] left-0 right-0 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-4 gap-4">
              {apps.map((app, index) => (
                <motion.div
                  key={app.id}
                  className="flex flex-col items-center gap-2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.03,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <motion.button
                    className={`w-[70px] h-[70px] ${app.color} rounded-[18px] shadow-lg flex items-center justify-center relative overflow-hidden`}
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                  </motion.button>
                  <span className="text-white text-[11px] font-medium drop-shadow-lg max-w-[70px] truncate">
                    {app.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dock */}
          <motion.div
            className="absolute bottom-[40px] left-6 right-6 bg-white/20 backdrop-blur-2xl rounded-[28px] p-3 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-around gap-3">
              {[
                'bg-gradient-to-br from-green-400 to-green-600',
                'bg-gradient-to-br from-blue-500 to-blue-700',
                'bg-gradient-to-br from-orange-400 to-orange-600',
                'bg-gradient-to-br from-purple-500 to-pink-500'
              ].map((color, i) => (
                <motion.button
                  key={i}
                  className={`w-[70px] h-[70px] ${color} rounded-[18px] shadow-lg relative overflow-hidden`}
                  whileTap={{ scale: 0.85 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Home Indicator */}
          <motion.div
            className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-[140px] h-[5px] bg-white/80 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Phone;
