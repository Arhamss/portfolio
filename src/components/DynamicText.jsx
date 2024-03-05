import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./dynamictext.css"; // Make sure to create this CSS file
import { styles } from "../styles";

const DynamicText = () => {
  const textOptions = [
    "an App Developer",
    "a Content Writer",
    "a SEM Specialist",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= textOptions.length) {
      setIndex(0);
      return;
    }

    if (subIndex === textOptions[index].length + 1 && !reverse) {
      setTimeout(() => {
        setReverse(true);
      }, 1000); // pause at the end of typing each word
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % textOptions.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150
    ); // faster backspace, slower typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, textOptions]);

  return (
    <div
      className={`typing-animation text-jetLight text-[26px] font-bold font-beckman tracking-[2px] mt-2`}
    >
      I'm <h1>{`${textOptions[index].substring(0, subIndex)}`}</h1>
      <span className="cursor"></span>
    </div>
  );
};

export default DynamicText;
