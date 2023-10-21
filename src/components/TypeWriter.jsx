import React, { useState, useEffect } from "react";

const TypeWriter = ({ words, delay = 6000, typingSpeed = 100 }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
      setCurrentText("");
      setCurrentIndex(0);
    }, delay);
    return () => clearInterval(intervalId);
  }, [words, delay]);

  useEffect(() => {
    if (currentIndex < currentWord.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(currentText + currentWord[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [currentText, currentIndex, currentWord, delay, typingSpeed]);

  return (
    <div className="text-accent sm:text-6xl text-2xl h-24">
      {currentText}
      <span className="animate-ping">|</span>
    </div>
  );
};

export default TypeWriter;
