import React from "react";
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaReddit, FaLinkedin, FaCoffee } from "react-icons/fa";

const SocialLinks = () => {
  const socialIcons = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/yourprofile", message: "Check out my GitHub" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/yourprofile", message: "Watch my YouTube" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/yourprofile", message: "Follow on Instagram" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/yourprofile", message: "Follow on Twitter" },
    { name: "Reddit", icon: <FaReddit />, url: "https://reddit.com/user/yourprofile", message: "Join on Reddit" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile", message: "Connect on LinkedIn" },
    { name: "BuyMeACoffee", icon: <FaCoffee />, url: "https://buymeacoffee.com/yourprofile", message: "Support me" }
  ];

  return (
    <div className="flex flex items-center space-x-4 ml-30">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
        >
          <div className="w-10 text-[2rem]">{social.icon}</div>
          <span>{social.message}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
