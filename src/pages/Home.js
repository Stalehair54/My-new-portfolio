import { useEffect } from "react";
import ContactForm from "../components/Contactform";
import Projectgal from "../components/projectgal";

const Home = () => {
  return (
    <section className="bg-[#1a1a1a] mr-4 h-full overflow-x-hidden ml-36 shadow-4xl rounded-md mt-4 mb-4 snap-y snap-proximity">
      <header className=" h-screen mt-20 shadow-2xl rounded-lg snap-center">
        <article className="text-left top-40 relative text-[#f4f4f4] text-7xl font-sans px-20 before:content-['<h1>'] before:text-2xl before:text-[#373737] ml-[-28px] before:font-bella ">
          <h5>Hi,</h5>
          <h1>I'm Nick,</h1>
          <h2>A web developer.</h2>
          <h1 className="after:content-['</h1>'] after:text-xl ml-[-28px] after:text-[#373737] after:font-bella"></h1>
        </article>
        <p className="text-left top-40 relative text-[#818181] text-2xl font-sans px-20 py-5   ">
          <p className="before:content-['<p>'] before:text-2xl before:text-[#373737] ml-[-28px] before:font-bella"></p>
          Front End Developer / WordPress Expert
          <p className="after:content-['<p>'] ml-[-28px] after:text-[#373737] after:font-bella"></p>
        </p>
        <button
          className="ml-20 mt-40 border border-sky-500 text-[#08fdd8] active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Let's connect
        </button>
      </header>
      <div className=" flex  pt-60 shadow-2xl shrink-0 w-50 h-screen px-20 snap-always snap-start">
        <div className="flex flex-col">
          <h1 className=" h-40 text-8xl w-7/12 text-[#08fdd8] capitalize">
            Hey I'm nick
          </h1>
          <h1 className=" h-full text-3xl text-left w-7/12 text-[#f9f9f9]">
            I'm a young up start programmer making websites and perfecting my
            craft. Starting since i was a young child i always would fiddle and
            deconstruct computers. When I was a little older I started fixing
            them but also learning about the software on it as well. Fast
            forward until high school and was making website and writing code
            better than anyone I knew! As of now my goal is to perfect my craft
            while providing perfect service. In the future I dream of starting
            my own business and helping the youth of tomorrow do what I do know!
          </h1>
        </div>
      </div>
      <div className=" flex flex-col w-50 h-full shrink-0 shadow-2xl snap-center">
        <div className="flex py-10">
          <Projectgal />
        </div>
      </div>

      <div className="flex justify-between h-full shrink-0 ml-20 mt-60 mb-40 snap-center">
        <div className="w-5/12 h-full ">
          <h2 className="text-8xl py-20  text-center text-[#08fdd8]">
            Contact me
          </h2>
          <p className="text-xl mb-10 ml-10 text-[#CCECF3]">
            I'm interested in freelance opportunities especially ambitious
            projects.
            <br /> However, if you have other request or question, don't
            hesitate to use the form.
          </p>
          <ContactForm />
        </div>
        <div className="w-6/12 hover:shadow-4xl py-10 mr-10 ">
          <img src={require("../components/image/contact.jpg")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
