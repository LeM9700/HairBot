import React from "react";
import "../styles/ThankYou.css"; // à créer à l'étape suivante

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/toncompte",
    className: "card1",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="30px" height="30px" className="instagram">
        <g transform="scale(8,8)">
          <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@toncompte",
    className: "card2",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="tiktok">
        <path d="M41,17.5c-3.59,0-6.5-2.91-6.5-6.5V7h-5v24.5c0,3.59-2.91,6.5-6.5,6.5s-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5c0.17,0,0.33,0.01,0.5,0.02V25c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4V11h3.02c0.24,4.13,3.6,7.49,7.73,7.73V17.5z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/toncompte",
    className: "card3",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="snapchat">
        <path d="M24 4C13.06 4 4 13.06 4 24s9.06 20 20 20 20-9.06 20-20S34.94 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm0-28c-6.63 0-12 5.37-12 12 0 3.31 1.34 6.31 3.51 8.49C17.69 36.66 20.69 38 24 38s6.31-1.34 8.49-3.51C36.66 30.31 38 27.31 38 24c0-6.63-5.37-12-12-12z" fill="#fffc00"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/tonnumero", // Remplace tonnumero par ton numéro sans le +
    className: "card4",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="whatsapp">
        <path d="M24 4C12.95 4 4 12.95 4 24c0 4.25 1.31 8.19 3.56 11.44L4 44l8.81-3.44C15.81 42.69 19.75 44 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.73 0-7.22-1.09-10.18-2.97l-.73-.44-5.23 2.04 1.99-5.1-.46-.75C7.09 31.22 6 27.73 6 24c0-9.94 8.06-18 18-18s18 8.06 18 18-8.06 18-18 18zm9.43-13.06c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.28-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.8-1.91-.21-.51-.43-.44-.58-.45-.15-.01-.32-.01-.5-.01s-.45.06-.68.32c-.23.26-.89.87-.89 2.13s.91 2.47 1.04 2.64c.13.17 1.79 2.74 4.34 3.73.61.21 1.09.33 1.46.42.61.13 1.16.11 1.6.07.49-.05 1.53-.62 1.75-1.22.22-.6.22-1.12.15-1.22-.07-.1-.24-.16-.5-.29z" fill="#25D366"/>
      </svg>
    ),
  },
];

const ThankYou = () => (
  <div className="main">
    <h1>Merci pour votre réservation !</h1>
    <p>Nous vous contacterons pour confirmer votre rendez-vous.</p>
    <div className="up">
      {socialLinks.slice(0, 2).map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={link.className}
          aria-label={link.name}
        >
          {link.svg}
        </a>
      ))}
    </div>
    <div className="down">
      {socialLinks.slice(2).map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={link.className}
          aria-label={link.name}
        >
          {link.svg}
        </a>
      ))}
    </div>
  </div>
);

export default ThankYou;