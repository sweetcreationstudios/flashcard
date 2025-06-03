import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div
      className="relative w-80 h-48 cursor-pointer perspective my-6"
      onClick={handleFlip}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 transform-style ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Front side */}
        <div className="absolute backface-hidden w-full h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center justify-center text-lg font-semibold rounded-xl shadow-xl p-4">
          {flashcard.question}
        </div>

        {/* Back side */}
        <div className="absolute backface-hidden w-full h-full bg-indigo-200 dark:bg-indigo-900 text-black dark:text-white flex items-center justify-center text-lg rounded-xl shadow-xl p-4 rotate-y-180">
          {flashcard.answer}
        </div>
      </div>
    </div>
  );
}
