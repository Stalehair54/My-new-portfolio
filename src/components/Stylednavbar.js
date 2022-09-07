import { findByLabelText } from "@testing-library/react";
import { NavLink } from "react-router-dom";

const Stylednavbar = () => {
  return (
    <div className=" fixed flex flex-col bg-[#151515] h-full w-32 mr-8 shadow-4xl">
      <nav className="flex flex-col gap-5 font-mono text-[#964F4CFF] text-lg  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-[#08fdd8]" : "text-[#818181]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-[#08fdd8]" : "text-[#818181]"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? " text-[#08fdd8]" : "text-[#818181]"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? " text-[#08fdd8]" : "text-[#818181]"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Stylednavbar;
