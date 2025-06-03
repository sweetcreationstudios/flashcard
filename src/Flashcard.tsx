import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer select-none border rounded-lg p-6 max-w-md mx-auto shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? (
        <div className="text-xl">{flashcard.answer}</div>
      ) : (
        <div className="text-xl font-bold">{flashcard.question}</div>
      )}
    </div>
  );
}
