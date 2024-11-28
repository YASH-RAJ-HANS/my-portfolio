import React from "react";
import FlickeringGrid from "../@/components/magicui/flickering-grid";
import {
  FaCoffee,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import WaveFooter from "../app/FooterWave.svg";
const Footer = () => {
  const socialIcons = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/yourprofile",
      message: "Check out my GitHub",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com/yourprofile",
      message: "Watch my YouTube",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/yourprofile",
      message: "Follow on Instagram",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/yourprofile",
      message: "Follow on Twitter",
    },
    {
      name: "Reddit",
      icon: <FaReddit />,
      url: "https://reddit.com/user/yourprofile",
      message: "Join on Reddit",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourprofile",
      message: "Connect on LinkedIn",
    },
    {
      name: "BuyMeACoffee",
      icon: <FaCoffee />,
      url: "https://buymeacoffee.com/yourprofile",
      message: "Support me",
    },
  ];
  return (
    <div className="w-full relative overflow-hidden">
      {/* <FlickeringGrid
        className="z-2 absolute inset-0  w-[50vw]"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={600}
      /> */}
      <footer className="footer footer-center text-white  z-1">
        <img
          src={WaveFooter}
          alt="Wave Footer"
          className="w-full min-h-[300px] relative"
        />
        <aside className="absolute bottom-20">
          {/* <img className="h-12 w-40" src="./Logo.png" alt="" /> */}
          <p className="font-bold text-xl">
            YASH RAJ HANS
            <br />
            {/* In tech since 5 years. */}
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <div className=" flex items-center space-x-4 absolute bottom-10">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
            >
              <div className="w-4 text-[1.2rem]">{social.icon}</div>
              {/* <span>{social.message}</span> */}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
