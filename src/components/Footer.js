import { findByLabelText } from "@testing-library/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="justify-end">
      <nav className="flex gap-4 font-mono bg-[#D3D0CBFF] text-[#964F4CFF] h-11 text-2xl px-5 py-1 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-[#2E5266FF]" : "text-[#6E8898FF]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "underline text-[#2E5266FF]" : "text-[#6E8898FF]"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "underline text-[#2E5266FF]" : "text-[#6E8898FF]"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "underline text-[#2E5266FF]" : "text-[#6E8898FF]"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};
export default Footer;
