import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <aside
      className="sticky top-0 flex h-screen w-32 shrink-0 flex-col items-center px-3 py-12 mx-8"
      aria-label="Site navigation"
    >
      <div className="shrink-0">
        <img src={logo} alt="logo" className="h-10 w-10" />
      </div>

      <nav className="flex min-h-0 min-w-0 flex-1 items-center justify-center py-6">
        <div className="-rotate-90 flex flex-row items-center gap-6 whitespace-nowrap text-xl font-semibold text-gray-700">

          <a href="#detail" className="hover:line-through">
            Detail
          </a>
          <a href="#projects" className="hover:line-through">
            Projects
          </a>
          <a href="#hero" className="hover:line-through">
            Home
          </a>
        </div>
      </nav>

      <div className="flex shrink-0 flex-col items-center gap-6 text-2xl text-gray-600">
        <a href='mailto:shhreyasrivastava@gmail.com'
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-500 transition"
        ><IoIosMail /></a>
        <a href="https://github.com/chiyaw"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition"
        >< FaGithub /></a>
        <a href="https://www.linkedin.com/in/shreya-s-08b2bb214/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        ><FaLinkedin /></a>
      </div>
    </aside>
  );
}