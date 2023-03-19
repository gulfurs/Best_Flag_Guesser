import React, { useState } from "react";
import './App.css';

const photos = [
  {
    id: 1,
    src: "https://flagpedia.net/data/flags/w580/ax.webp",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0, // index of the correct option
  },
  {
    id: 2,
    src: "https://flagpedia.net/data/flags/w580/af.webp",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 2 // index of the correct option
  },
  // add more photos as needed
];

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleOptionClick = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
    setIsAnswerCorrect(optionIndex === photos[currentPhotoIndex].answer);
  };

  const handleNextPhotoClick = () => {
    setCurrentPhotoIndex(currentPhotoIndex + 1);
    setSelectedOptionIndex(null);
    setIsAnswerCorrect(null);
  };

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <div className="container">
      <img src={currentPhoto.src} alt="Photo" />
      <ul>
        {currentPhoto.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(index)}
            style={{
              cursor: "pointer",
              fontWeight: selectedOptionIndex === index && "bold",
              color:
                isAnswerCorrect !== null &&
                (isAnswerCorrect ? "green" : "red")
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button disabled={selectedOptionIndex === null} onClick={handleNextPhotoClick}>
        Next Photo
      </button>
    </div>
  );
}

export default App;
