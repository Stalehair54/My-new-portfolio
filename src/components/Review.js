import React, { useState } from "react";
import people from "../components/data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="p-7 w-full h-full flex gap-1 flex-col justify-center rounded text-center shadow-lg transition ease-in-out delay-150 bg-slate-200 hover:bg-slate-300 duration-300">
      <h1 className="m-1">{name}</h1>
      <p className="mb-1">{text}</p>
      <div className="flex justify-between">
        <button className="prev-btn" onClick={prevPerson}>
          {/* <FaChevronLeft /> */} Left
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Suprise Me
        </button>
        <button className="next-btn" onClick={nextPerson}>
          {/* <FaChevronRight /> */} Right
        </button>
      </div>
    </article>
  );
};

export default Review;
