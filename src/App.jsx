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
      question: 'What is JSX?',
      answer: 'A syntax extension for JavaScript used with React.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      
      <h1 className="text-red-600">Tailwind is working</h1>     
      
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Flashcard App</h2>
      
      <div className="space-y-6">

      
      {flashcards.map(card => (
    <Flashcard key={card.id} flashcard={card} />
  ))}
    </div>
    </div>
  );
}
