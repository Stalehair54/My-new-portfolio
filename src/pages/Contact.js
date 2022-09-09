import ContactForm from "../components/Contactform";

const Contact = () => {
  return (
    <section
      className="bg-[#1a1a1a] mr-4 h-full overflowhidden ml-36 shadow-4xl rounded-md mt-4 mb-4 snap-y snap-proximity before:content-['<html>'] before:text-lg before:ml-3 before:text-[#373737]  before:font-bella
    after:content-['</html>']  after:text-[#373737] after:font-bella after:ml-3 after:text-lg"
    >
      <section className="before:content-['<body>'] before:text-xl before:ml-7 before:text-[#373737] before:font-bella after:content-['</body>']  after:text-[#373737] after:text-xl after:font-bella after:ml-7">
        <div></div>{" "}
        <div className="flex justify-between h-full gap-20 shrink-0 ml-40  ">
          <img
            className=" mt-[5px] w-7/12 h-full ml-[-46px]  shadow-4xl"
            src={require("../components/image/contact1.jpg")}
            alt=""
          />
          <div className="w-6/12 h-full shadow-4xl px-10 mr-10 mt-[-20px] ">
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
            <h1 className="after:content-['</form>'] after:text-lg  after:text-[#373737] ml-[-25px] after:font-bella mb-4"></h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
