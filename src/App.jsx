import React from 'react';
import Flashcard from './Flashcard';

export default function App() {
  const flashcards = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'A JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What is Tailwind CSS?',
      answer: 'A utility-first CSS framework for rapid UI development.',
    },
    { 
      id: 3,
      question: "What is JSX?", 
      answer: "A syntax extension for JavaScript used with React."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Flashcard App</h1>
      {flashcards.map(card => (
        <Flashcard key={card.id} flashcard={card} />
      ))}
    </div>
  );
}
