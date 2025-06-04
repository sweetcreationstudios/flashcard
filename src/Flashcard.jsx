import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-80 h-48 perspective cursor-pointer my-6 mx-auto"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white text-black border border-gray-300 rounded-xl shadow-lg flex items-center justify-center p-4 text-center">
          <p>{flashcard.question}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-indigo-100 text-black border border-gray-300 rounded-xl shadow-lg flex items-center justify-center p-4 text-center rotate-y-180">
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
}
