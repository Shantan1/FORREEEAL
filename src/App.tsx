import React, { useState } from 'react';

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const phrases = [
    "No 💔",
    "Are you sure Rani? 🥺",
    "Really sure?? 🥺",
    "Think again! 🌹",
    "Last chance! 😭",
    "Surely not? 💔",
    "You might regret this! 😢",
    "Give it another thought! ✨",
    "Are you absolutely certain? 💖",
    "This could be a mistake! 😭",
    "Have a heart! ❤️",
    "Don't be so cold! 🥶",
    "Change of heart? 🥺",
    "Wouldn't you reconsider? 🌸",
    "Is that your final answer? 💔",
    "You're breaking my heart ;(",
  ];

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800 p-4 font-sans select-none"