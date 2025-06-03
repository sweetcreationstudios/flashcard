import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-48 my-6 mx-auto cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`w-full h-full transition-transform duration-500 transform-style ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-xl shadow-lg flex items-center justify-center p-4 text-center text-lg font-semibold">
          {flashcard.question}
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden bg-indigo-600 text-white rounded-xl shadow-lg flex items-center justify-center p-4 text-center text-lg font-semibold rotate-y-180">
          {flashcard.answer}
        </div>
      </div>
    </div>
  );
}
