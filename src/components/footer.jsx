import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { url: "https://github.com/fordefam12", icon: <VscGithubAlt /> },
    { url: "https://www.linkedin.com/in/fordefam12/", icon: <AiOutlineLinkedin /> },
    { url: "https://www.instagram.com/fordefam12/", icon: <FaInstagram /> },
  ];

  return (
    <footer class="text-center">
      <h2>Made by Brandon Forde</h2>
      <ul className="social-icons ">
        {socialLinks.map((link, index) => (
          <a class='pl-3 m-2' key={index} className="logo">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </a>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
