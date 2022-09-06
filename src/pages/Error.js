const Error = () => {
  return (
    <section className="w-screen h-screen p-8 flex-col justify-center ">
      <div className="text-5xl text-slate-700 flex justify-center ">
        404 Page Not Found
      </div>
      <div className=" pt-6 flex justify-center ">
        <button className="bg-violet-500 hover:shadow-xl hover:rounded rounded-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 flex text-3xl justify-center p-2 ">
          Go back Home
        </button>
      </div>
    </section>
  );
};

export default Error;
