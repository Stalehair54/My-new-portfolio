const projectgal = () => {
  return (
    <section className="  py-10">
      <div>
        <h1 className="before:content-['<h1>'] before:text-2xl before:text-[#373737] ml-[28px] before:font-bella"></h1>
        <h1 className="capitalize text-8xl text-[#08fdd8] px-20  ">
          My Portfolio
        </h1>
        <h1 className="after:content-['</h1>'] after:text-xl ml-[28px] after:text-[#373737] after:font-bella mb-10"></h1>
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
            <footer className="text-center text-[#818181] px-2 self-center">
              Fully working Calculator with a great background made with
              javascript, html, and css.
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
            <footer className="py-4 text-[#818181]">
              A template landing page made with flebox and sized perfectly with
              plain html and css.
            </footer>
          </div>
        </div>

        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col  ">
          <div className="flex w-full flex-col">
            <a href="https://stalehair54.github.io/" target="blank_">
              <img src={require("../components/image/p3.png")} alt="" />
            </a>
            <footer className="py-4 text-[#818181]">
              My previous portfolio, a testament of how far i came made with
              plain html and css.
            </footer>
          </div>
        </div>

        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col  w-96">
          <div className="flex flex-col w-full ">
            <a href="https://nicholas-react-menu.netlify.app/" target="blank_">
              <img src={require("../components/image/p4.png")} alt="" />
            </a>
            <footer className="py-4 text-[#818181]">
              A Beautiful Menu made with react and done with usestate.
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
            <footer className="py-4 text-[#818181]">
              A Collapsing Q and A page made with react and usestete.
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
            <footer className="py-4 text-[#818181]">
              Amazing Review page with data fetched from an api made Beautifully
              with react.
            </footer>
          </div>
        </div>
        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col">
          <div className="flex flex-col w-full ">
            <a href="https://nicholas-react-tours.netlify.app/" target="blank_">
              <img src={require("../components/image/p7.png")} alt="" />
            </a>
            <footer className="py-4 text-[#818181]">
              Beautiful tour page made with react using usestate and useeffect
              using data fetched from an api.
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projectgal;
