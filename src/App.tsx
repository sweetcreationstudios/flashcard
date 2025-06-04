import React from 'react';
import Flashcard from './Flashcard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Flashcard question="What is the capital of France?" answer="Paris" />
    </div>
  );
};

export default App;
