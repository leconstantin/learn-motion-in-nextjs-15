"use client";
// import * as motion from "motion/react-client";
import { motion } from "motion/react";
import { useState } from "react";
// import { Button } from "@/components/ui/button";

// const variants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.5 },
// };

export default function Home() {
  // const [isVisible, setIsVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  // const boxVariants = {
  //   initial: { scale: 1, rotate: 0, skew: 0 },
  //   hover: {
  //     scale: 1.2,
  //     rotate: 15,
  //     skew: "10deg",
  //     transition: { duration: 0.3 },
  //   },
  //   click: {
  //     scale: 0.9,
  //     rotate: -15,
  //     skew: "0deg",
  //     transition: { duration: 0.3 },
  //   },
  // };

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <div>
        {/* <motion.div
        className="size-28 bg-yellow-300 rounded-full" */}
        {/* // animate={{ x: -100 }}
        // animate={{ y: 20 }}
        // animate={{ rotate: 60 }}
        // animate={{ scale: 2 }}
        // animate={{ skewX: 20 }}
      // /> */}

        {/* FIXME:Transition properties are duration, easing and delay */}

        {/* <motion.div
        className="size-28 bg-yellow-300 rounded-full"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 2, ease: "easeIn", delay: 0.5 }}
      /> */}

        {/* FIXME:Keyframes */}

        {/* <motion.div
        className="size-28 bg-yellow-300 rounded-ful"
        animate={{
          // scale: [1, 2, 2, 3, 4, 3, 2, 1],
          // rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "50%", "20%", "50%"],
        }}
        transition={{ duration: 4, ease: "easeIn" }}
      /> */}

        {/* <motion.button
        className="px-3 py-1 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-lg outline-none"
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ["#fff", "#101828", "#fff"],
        }}
        transition={{ duration: 0.8, ease: "easeInOut", repeat: 4 }}
      >
        Click me
      </motion.button> */}
        {/* <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="size-8 bg-teal-400 rounded-full"
            // initial={{ x: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.2 * i,
            }}
          />
        ))}
      </div> */}

        {/* FIXME: Variants */}

        {/* <motion.div
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="size-28 bg-yellow-300"
      /> */}
      </div>
      {/* <motion.div
        className="size-40 bg-blue-500 rounded-lg"
        variants={boxVariants}
        initial="initial"
        whileHover="hover"
        whileTap="click"
      /> */}

      <motion.div
        className="perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-64 h-40 bg-primary text-primary-foreground rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
          variants={cardVariants}
          initial="front"
          animate={isFlipped ? "back" : "front"}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div className="absolute inset-0 flex items-center text-xl font-bold">
            Front Side
          </motion.div>
          <motion.div className="absolute inset-0 flex items-center text-xl font-bold bg-blue-500">
            Back Side
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
