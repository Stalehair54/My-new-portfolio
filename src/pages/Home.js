import { Link } from "react-router-dom";
import ContactForm from "../components/Contactform";
import Projectgal from "../components/projectgal";

const Home = () => {
  return (
    <section
      className="bg-[#1a1a1a] mr-4 h-full overflowhidden ml-36 shadow-4xl rounded-md mt-4 mb-4 snap-y snap-proximity before:content-['<html>'] before:text-lg before:ml-3 before:text-[#373737]  before:font-bella
    after:content-['</html>']  after:text-[#373737] after:font-bella after:ml-3 after:text-lg"
    >
      <section className="before:content-['<body>'] before:text-xl before:ml-7 before:text-[#373737] before:font-bella after:content-['</body>']  after:text-[#373737] after:text-xl after:font-bella after:ml-7">
        <header className=" h-screen mt-20 shadow-2xl rounded-lg">
          <article className="text-left top-40 relative text-[#f4f4f4] text-7xl font-semibold font-title px-20 before:content-['<h1>'] before:text-lg before:text-[#373737] ml-[-28px] before:font-bella after:content-['</h1>'] after:text-lg  after:text-[#373737] after:font-bella">
            <h5 className="">Hi,</h5>
            <h1>I'm Nick,</h1>
            <h2>A web developer.</h2>
          </article>
          <p className="text-left top-40 relative text-[#818181] text-2xl font-sans px-20 py-5   ">
            <p className="before:content-['<p>'] before:text-lg before:text-[#373737] ml-[-15px] before:font-bella "></p>
            Front End Developer / WordPress Expert
            <p className="after:content-['<p>'] ml-[-15px] after:text-[#373737] after:text-lg after:font-bella"></p>
          </p>
          <Link to="/contact">
            <button
              className="ml-20 mt-40 border border-sky-500 text-[#08fdd8] active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Let's connect
            </button>
          </Link>
        </header>
        <div className=" flex justify-around pt-60  shadow-2xl shrink-0 w-50 h-screen px-20 snap-always snap-start">
          <div className="flex flex-col gap-16 mt-[-150px]">
            <h1 className=" h-40 text-8xl w-9/12 text-[#08fdd8] capitalize after:content-['</h1>'] after:text-lg ml-[-28px] after:text-[#373737] after:font-bella ">
              <h1 className="before:content-['<h1>'] before:text-lg before:text-[#373737] ml-[-28px] before:font-bella "></h1>
              Hey I'm nick
            </h1>
            <h1 className=" h-full text-3xl text-left w-9/12 text-[#f9f9f9]  ">
              <p className="before:content-['<p>'] before:text-lg before:text-[#373737] ml-[-28px] before:font-bella"></p>
              I'm a young up start programmer making websites and perfecting my
              craft. Starting since i was a young child i always would fiddle
              and deconstruct computers. When I was a little older I started
              fixing them but also learning about the software on it as well.
              Fast forward until high school and was making website and writing
              code better than anyone I knew! As of now my goal is to perfect my
              craft while providing perfect service. In the future I dream of
              starting my own business and helping the youth of tomorrow do what
              I do know!
              <p className="after:content-['<p>'] ml-[-28px] after:text-lg after:text-[#373737] after:font-bella"></p>
            </h1>
          </div>
          <img
            className="w-5/12 mt-[-150px] h-[800px] shadow-4xl"
            src={require("../components/image/me.jpg")}
            alt=""
          />
        </div>
        <div className=" flex flex-col w-50 h-full shrink-0 shadow-2xl snap-center">
          <div className="flex py-10">
            <Projectgal />
          </div>
        </div>

        <div className="flex justify-between h-full shrink-0 ml-20 mt-60 mb-40 snap-center">
          <div className="w-5/12 h-full ">
            <h2 className="text-8xl py-20  text-center text-[#08fdd8] mb-[-50px]">
              <h1 className="before:content-['<h1>'] before:text-lg before:text-[#373737] ml-[-470px] before:font-bella"></h1>
              Contact me
              <h1 className="after:content-['</h1>'] after:text-lg ml-[-470px] after:text-[#373737] after:font-bella"></h1>
            </h2>
            <p className="text-xl mb-10 ml-10 text-[#CCECF3] ">
              <p className="before:content-['<p>'] before:text-lg before:text-[#373737] ml-[-20px] before:font-bella"></p>
              I'm interested in freelance opportunities especially ambitious
              projects.
              <br /> However, if you have other request or question, don't
              hesitate to use the form.
              <p className="after:content-['</p>'] after:text-lg  after:text-[#373737] ml-[-25px] after:font-bella"></p>
            </p>
            <h1 className="before:content-['<form>'] before:text-lg before:text-[#373737] ml-[-20px] before:font-bella"></h1>
            <ContactForm />
            <h1 className="after:content-['</form>'] after:text-lg  after:text-[#373737] ml-[-25px] after:font-bella"></h1>
          </div>
          <div className="w-6/12 py-10 mr-10 ">
            <img
              className="shadow-4xl mt-[150px] h-[650px]"
              src={require("../components/image/contact.jpg")}
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
