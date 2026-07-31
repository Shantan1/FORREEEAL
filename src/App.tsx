import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ArrowRight, Stars, Gift } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [noCount, setNoCount] = useState(0);

  const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again! 🥺",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "Have a heart! ❤️",
  ];

  const handleYes = () => {
    setCurrentSlide(4);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff'],
    });
  };

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
  };

  const yesButtonSize = noCount * 16 + 18;

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 text-center font-sans overflow-hidden">
      {/* Slide Progress Indicator */}
      <div className="fixed top-6 flex gap-2 z-10">
        {[1, 2, 3, 4].map((slideNum) => (
          <div
            key={slideNum}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === slideNum
                ? 'w-8 bg-rose-500'
                : 'w-2 bg-rose-200'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* SLIDE 1: INTRO */}
        {currentSlide === 1 && (
          <motion.div
            key="slide1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-rose-100 max-w-md w-full flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-4 text-rose-500"
            >
              <Gift size={64} className="text-rose-500" />
            </motion.div>

            <h1 className="text-3xl font-extrabold text-rose-600 mb-3">
              Hey Rani! ❤️
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I built something small and special just for you. Ready to check it out?
            </p>

            <button
              onClick={() => setCurrentSlide(2)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-rose-300 transition-all duration-200 flex items-center gap-2"
            >
              Let's go <ArrowRight size={20} />
            </button>
          </motion.div>
        )}

        {/* SLIDE 2: REASONS / MEMORIES */}
        {currentSlide === 2 && (
          <motion.div
            key="slide2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-rose-100 max-w-md w-full flex flex-col items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mb-4 text-rose-500"
            >
              <Stars size={64} className="text-rose-500" />
            </motion.div>

            <h2 className="text-2xl font-bold text-rose-600 mb-3">
              Just a Quick Reminder... ✨
            </h2>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              You bring so much light, smiles, and good vibes into everything around you. Life is simply better with you in it!
            </p>

            <button
              onClick={() => setCurrentSlide(3)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-rose-300 transition-all duration-200 flex items-center gap-2"
            >
              Next <ArrowRight size={20} />
            </button>
          </motion.div>
        )}

        {/* SLIDE 3: THE QUESTION */}
        {currentSlide === 3 && (
          <motion.div
            key="slide3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-rose-100 max-w-md w-full flex flex-col items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="mb-4 text-rose-500"
            >
              <Heart size={64} fill="#f43f5e" />
            </motion.div>

            <h1 className="text-3xl font-extrabold text-rose-600 mb-2">
              For Rani ❤️
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Will you make me the happiest person in the world and be my Valentine?
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <button
                onClick={handleYes}
                style={{ fontSize: `${yesButtonSize}px` }}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-rose-300 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles size={20} /> Yes!
              </button>

              <button
                onClick={handleNo}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-200"
              >
                {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
              </button>
            </div>
          </motion.div>
        )}

        {/* SLIDE 4: SUCCESS CELEBRATION */}
        {currentSlide === 4 && (
          <motion.div
            key="slide4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-rose-200 max-w-md w-full text-center flex flex-col items-center"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart size={80} fill="#f43f5e" className="text-rose-500" />
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold text-rose-600 mb-4">
              Yay! Best decision ever! 🥰
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              You just made my entire day, Rani. Can't wait to celebrate together! ❤️✨
            </p>

            <button
              onClick={() => {
                setNoCount(0);
                setCurrentSlide(1);
              }}
              className="text-sm text-rose-400 hover:text-rose-600 underline mt-2"
            >
              Start over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}