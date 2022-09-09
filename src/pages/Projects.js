const Projects = () => {
  return (
    <section
      className="bg-[#1a1a1a] mr-4 h-full overflowhidden ml-36 shadow-4xl rounded-md mt-4 mb-4 snap-y snap-proximity before:content-['<html>'] before:text-lg before:ml-3 before:text-[#373737]  before:font-bella
    after:content-['</html>']  after:text-[#373737] after:font-bella after:ml-3 after:text-lg"
    >
      <section className="before:content-['<body>'] before:text-xl before:ml-7 before:text-[#373737] before:font-bella after:content-['</body>']  after:text-[#373737] after:text-xl after:font-bella after:ml-7">
        <section className="  py-10">
          <div className="pt-[100px]">
            <h1 className="before:content-['<h1>'] before:text-2xl before:text-[#373737] ml-[570px] before:font-bella"></h1>
            <h1 className="capitalize text-center text-8xl text-[#08fdd8] px-20  ">
              My Portfolio
            </h1>
            <h1 className="after:content-['</h1>'] after:text-xl ml-[570px] after:text-[#373737] after:font-bella mb-10"></h1>
            <p className="text-4xl text-center mb-10 ml-[-100px] text-[#CCECF3] ">
              <p className="before:content-['<p>'] before:text-lg before:text-[#373737] ml-[-400px] before:font-bella"></p>
              More on the way soon!
              <p className="after:content-['</p>'] after:text-lg  after:text-[#373737] ml-[-400px] after:font-bella"></p>
            </p>
          </div>
          <div className="before:content-['<section>'] before:text-2xl before:text-[#373737] ml-[28px] before:font-bella"></div>
          <div className="grid grid-cols-4 gap-3 py-10 mt-[-40px]">
            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500 p-3 flex flex-col ">
              <div className="flex w-full">
                <a
                  href="https://codepen.io/Blackrose54/full/bGrBwZN"
                  target="blank_"
                >
                  <img src={require("../components/image/p1.png")} alt="" />
                </a>
                <footer className="text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>

            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col ">
              <div className="flex w-full flex-col">
                <a
                  href="https://stalehair54.github.io/Template-landing-page/"
                  target="blank_"
                >
                  <img src={require("../components/image/p2.png")} alt="" />
                </a>
                <footer>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>

            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col  ">
              <div className="flex w-full flex-col">
                <a href="https://stalehair54.github.io/" target="blank_">
                  <img src={require("../components/image/p3.png")} alt="" />
                </a>
                <footer>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>

            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col  w-96">
              <div className="flex flex-col w-full ">
                <a
                  href="https://nicholas-react-menu.netlify.app/"
                  target="blank_"
                >
                  <img src={require("../components/image/p4.png")} alt="" />
                </a>
                <footer>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>
            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col">
              <div className="flex flex-col w-full ">
                <a
                  href="https://nicholas-react-questions.netlify.app/"
                  target="blank_"
                >
                  <img src={require("../components/image/p5.png")} alt="" />
                </a>
                <footer>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>
            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col">
              <div className="flex flex-col w-full ">
                <a
                  href="https://nicholas-react-reviews.netlify.app/"
                  target="blank_"
                >
                  <img src={require("../components/image/p6.png")} alt="" />
                </a>
                <footer>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>
            <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col">
              <div className="flex flex-col w-full ">
                <a
                  href="https://nicholas-react-tours.netlify.app/"
                  target="blank_"
                >
                  <img src={require("../components/image/p7.png")} alt="" />
                </a>
                <footer>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, quisquam.
                </footer>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Projects;
