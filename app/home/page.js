"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 text-white">
      <section className="relative w-full h-screen overflow-hidden">
        {/* Water-like rippling background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Increased number of droplets falling from top to bottom */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-300 rounded-full"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: -50, opacity: 0.8 }}
            animate={{ y: 800, opacity: 0 }}
            transition={{ duration: Math.random() * 4 + 2, repeat: Infinity }}
          />
        ))}

        {/* Cloud effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-t from-gray-300 to-transparent rounded-full opacity-50"
            style={{
              width: `${Math.random() * 200 + 150}px`,
              height: `${Math.random() * 100 + 80}px`,
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ x: '-150%' }}
            animate={{ x: '150%' }}
            transition={{ duration: Math.random() * 10 + 8, repeat: Infinity }}
          />
        ))}

        {/* Realistic wave effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                top: `${i * 10}%`,
                transform: `translateY(${i * 5}px)`
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 8 - i * 2, repeat: Infinity }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full h-full"
              >
                <path
                  fill="rgba(30, 144, 255, 0.5)"
                  d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            Flow with Creativity
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-200 mb-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.8 }}
          >
            Immerse yourself in innovation and inspiration.
          </motion.p>
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-125"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push('/dashboard')}
          >
            Dive In
          </motion.button>
        </div>
      </section>
    </main>
  );
}
