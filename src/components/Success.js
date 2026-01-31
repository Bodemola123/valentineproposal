import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component with a soft, playful love note.
 *
 * @returns {JSX.Element}
 */
const Success = () => {
  const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="App-success">
      {/* Tiny kisses, big feelings */}
      <img className="App-gif" src={kisses} alt="Kisses just for you" />

      {/* Soft, playful words */}
      <p className="App-text-success">
        You’re my favorite thought, my happy place, and the sweetest part of my
        every day. Being with you just feels right.
      </p>

      <p className="App-text-success">
        I’m really looking forward to Valentine’s Day with you, Adeola.  Laughs,
        cuddles, soft kisses, and all the little moments that make us, us.
      </p>

      {/* Our little timestamp */}
      <p className="App-text-date">{today}</p>
    </div>
  );
};

export default Success;

