import React, { useState } from "react";

/**
 * Asking component for proposing the Valentine's Day question.
 *
 * @param {string} gif - The URL or import path of the chosen gif.
 * @param {string} altText - The alt text for the displayed gif.
 * @param {function} handleAccept - Callback function for accepting the proposal.
 * @param {function} handleReject - Callback function for rejecting the proposal.
 * @param {string} noButtonText - The text to be displayed on the rejection button.
 * @returns {JSX.Element} JSX element representing the Asking component.
 */



/**
 * Asking component for proposing the Valentine's Day question.
 */
const Asking = ({ gif, altText, handleAccept }) => {
  const [position, setPosition] = useState({ top: "0px", left: "0px" });
  const [noText, setNoText] = useState("No 😅");
  const [noColor, setNoColor] = useState("#ff4d4f");

  const noTexts = ["Are you sure?", "For real??", "Why na 🥲", "Please now 😭", "Don’t do this 😩"];
  const noColors = ["#ff4d4f", "#ff7a00", "#6a5acd", "#e91e63", "#009688"];

  const moveNoButton = () => {
    const padding = 80;
    const maxWidth = window.innerWidth - padding;
    const maxHeight = window.innerHeight - padding;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // pick random text & color
    const randomText =
      noTexts[Math.floor(Math.random() * noTexts.length)];
    const randomColor =
      noColors[Math.floor(Math.random() * noColors.length)];

    setNoText(randomText);
    setNoColor(randomColor);

    setPosition({
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <div
      className="Asking-container"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      {/* Cute gif */}
      <img className="App-gif" src={gif} alt={altText} />

      {/* The big question */}
      <p className="App-text">Adeola, will you be my Valentine? 💖</p>

      {/* Yes button */}
      <button
        className="App-button"
        onClick={handleAccept}
        style={{ marginRight: "1rem" }}
      >
        Yes 🥰
      </button>

      {/* No button (chaotic & dramatic) */}
      <button
        className="App-button"
        onClick={moveNoButton}
        style={{
          position: "absolute",
          left: position.left,
          top: position.top,
          backgroundColor: noColor,
          color: "#fff",
          transition: "all 0.25s ease",
        }}
      >
        {noText}
      </button>
    </div>
  );
};

export default Asking;
