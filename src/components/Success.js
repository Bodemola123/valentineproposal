import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component with a soft, playful love note
 * and a WhatsApp DM call-to-action.
 *
 * @returns {JSX.Element}
 */
const Success = () => {
  const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const phoneNumber = "2348127565607";

  const message = encodeURIComponent(
    "Hey you 😊💖 I just wanted to say yes, I’d love to be your Valentine. You already have my heart 🥰"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      className="App-success"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "4rem",
      }}
    >
      {/* Tiny kisses, big feelings */}
      <img className="App-gif" src={kisses} alt="Kisses just for you" />

      {/* Soft, playful words */}
      <p className="App-text-success">
        You’re my favorite thought, my happy place, and the sweetest part of my
        every day. Being with you just feels right. I swear God let one of His
        angels walk the earth… and I found her.
      </p>

      <p className="App-text-success">
        I’m really looking forward to Valentine’s Day with you, Adeola. Laughs,
        cuddles, soft kisses, and all the little moments that make us, us.
      </p>

      {/* Our little timestamp */}
      <p className="App-text-date">{today}</p>

      {/* WhatsApp DM button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
        }}
      >
        <button className="App-button">
          💬 DM me on WhatsApp
        </button>
      </a>
    </div>
  );
};

export default Success;


