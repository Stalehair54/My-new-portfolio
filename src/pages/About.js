const About = () => {
  return (
    <section
      className="bg-[#1a1a1a] mr-4 h-full overflowhidden ml-36 shadow-4xl rounded-md mt-4 mb-4 snap-y snap-proximity before:content-['<html>'] before:text-lg before:ml-3 before:text-[#373737]  before:font-bella
    after:content-['</html>']  after:text-[#373737] after:font-bella after:ml-3 after:text-lg"
    >
      <section className="before:content-['<body>'] before:text-xl before:ml-7 before:text-[#373737] before:font-bella after:content-['</body>']  after:text-[#373737] after:text-xl after:font-bella after:ml-7">
        <div className=" flex justify-around pt-60  shadow-2xl shrink-0 w-50 h-screen px-20">
          <div className="flex flex-col gap-16 mt-[-150px] ml-[150px]">
            <h1 className=" h-40 text-8xl w-10/12 text-[#08fdd8] capitalize after:content-['</h1>'] after:text-lg ml-[-28px] after:text-[#373737] after:font-bella ">
              <h1 className="before:content-['<h1>'] before:text-lg before:text-[#373737] ml-[-28px] before:font-bella "></h1>
              Hey I'm nick
            </h1>
            <h1 className=" h-full text-2xl ml-[-25px] w-10/12 text-[#f9f9f9]  ">
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
      </section>
    </section>
  );
};

export default About;
