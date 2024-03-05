import React from "react";
import "./social.css"; // Ensure you create this CSS file for styling

import Fb from "../assets/social/fb.png";
import LinkedIn from "../assets/social/linkedin.png";
import Insta from "../assets/social/insta.png";
import X from "../assets/social/x.png";
import Git from "../assets/social/githubicon.png";

function Social() {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/arhamsss",
      logo: Fb,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syed-arham-21525921b/",
      logo: LinkedIn,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arhamimrann/",
      logo: Insta,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/arhamss2",
      logo: X,
    },
    { name: "GitHub", url: "https://github.com/Arhamss", logo: Git },
  ];

  return (
    <div>
      <div className="social-media-links">
        {socials.map((social, index) => (
          <React.Fragment key={index}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={social.logo}
                alt={social.name}
                className="social-logo"
              />
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Social;
