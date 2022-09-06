const projectgal = () => {
  return (
    <section className="  py-10">
      <div>
        <h1 className="capitalize text-8xl text-[#08fdd8] px-20">
          My Portfolio
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-3  py-10">
        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500 p-3 flex flex-col ">
          <div className="flex w-full">
            <a
              href="https://codepen.io/Blackrose54/full/bGrBwZN"
              target="blank_"
            >
              <img src={require("../components/image/p1.png")} alt="" />
            </a>
            <footer className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
            </footer>
          </div>
        </div>

        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col  ">
          <div className="flex w-full flex-col">
            <a href="https://stalehair54.github.io/" target="blank_">
              <img src={require("../components/image/p3.png")} alt="" />
            </a>
            <footer>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
            </footer>
          </div>
        </div>

        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col  w-96">
          <div className="flex flex-col w-full ">
            <a href="https://nicholas-react-menu.netlify.app/" target="blank_">
              <img src={require("../components/image/p4.png")} alt="" />
            </a>
            <footer>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
            </footer>
          </div>
        </div>
        <div class="transition ease-in-out delay-1500 bg-[#252525] hover:bg-[#313131] duration-1500  p-3 flex flex-col">
          <div className="flex flex-col w-full ">
            <a href="https://nicholas-react-tours.netlify.app/" target="blank_">
              <img src={require("../components/image/p7.png")} alt="" />
            </a>
            <footer>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quisquam.
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projectgal;
