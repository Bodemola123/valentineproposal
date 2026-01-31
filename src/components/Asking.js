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
const Asking = ({
  gif,
  altText,
  handleAccept,
  noButtonText,
}) => {
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  const moveNoButton = () => {
    const padding = 80; // keeps button within screen bounds
    const maxWidth = window.innerWidth - padding;
    const maxHeight = window.innerHeight - padding;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

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

      {/* Yes button stays put */}
      <button
        className="App-button"
        onClick={handleAccept}
        style={{ marginRight: "1rem" }}
      >
        Yes 🥰
      </button>

      {/* No button runs away */}
      <button
        className="App-button"
        onClick={moveNoButton}
        style={{
          position: "absolute",
          left: position.left,
          top: position.top,
          transition: "all 0.25s ease",
        }}
      >
        {noButtonText}
      </button>
    </div>
  );
};

export default Asking;
