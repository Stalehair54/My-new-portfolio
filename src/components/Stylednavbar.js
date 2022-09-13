import { findByLabelText } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Stylednavbar = () => {
  return (
    <div className=" fixed flex flex-col bg-[#151515] h-full w-32 mr-8 shadow-4xl justify-between">
      <div>
        <Link to="/">
          <img src={require("../components/image/Logo.png")} alt="my logo" />
        </Link>
      </div>
      <nav className="flex flex-col gap-5 font-mono  text-lg px-5">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "text-[#08fdd8]"
              : "text-[#818181]" + " hover:text-[#08fdd8]  "
          }
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive
              ? " text-[#08fdd8]"
              : "text-[#818181]" + " hover:text-[#08fdd8] "
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? " text-[#08fdd8]"
              : "text-[#818181]" + " hover:text-[#08fdd8]"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="resume"
          className={({ isActive }) =>
            isActive
              ? " text-[#08fdd8]"
              : "text-[#818181]" + " hover:text-[#08fdd8]"
          }
        >
          Resume
        </NavLink>
      </nav>
      <div className="flex gap-3 mb-60 mt-[] px-4">
        <a
          className="transition ease-in-out delay-150 text-[#818181] hover:text-[#08fdd8] duration-200 text-xl"
          href="https://www.linkedin.com/in/nicholas-stevens-6371b4220/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="transition ease-in-out delay-150 text-[#818181] hover:text-[#08fdd8] duration-200 text-xl"
          href="https://github.com/Stalehair54"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="transition ease-in-out delay-150 text-[#818181] hover:text-[#08fdd8] duration-200 text-xl"
          href="https://www.facebook.com/people/Nicholas-Stevens/100073749530418/"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};

export default Stylednavbar;
