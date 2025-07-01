import { motion } from "framer-motion";

const AnimatedSpan = ({ direction }) => {
  const common = {
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "linear",
    },
  };

  const variants = {
    top: {
      hidden: { x: "-200px" },
      visible: { x: "200px", ...common },
    },
    right: {
      hidden: { y: "-70px" },
      visible: { y: "70px", ...common },
    },
    bottom: {
      hidden: { x: "200px" },
      visible: { x: "-200px", ...common },
    },
    left: {
      hidden: { y: "70px" },
      visible: { y: "-70px", ...common },
    },
  };

  const positionClasses = {
    top: "absolute top-0 left-0 w-[200px] h-[3px] bg-gradient-to-r from-transparent to-[#f6e58d]",
    right:
      "absolute top-0 right-0 w-[3px] h-[70px] bg-gradient-to-b from-transparent to-[#f6e58d]",
    bottom:
      "absolute bottom-0 right-0 w-[200px] h-[3px] bg-gradient-to-l from-transparent to-[#f6e58d]",
    left: "absolute bottom-0 left-0 w-[3px] h-[70px] bg-gradient-to-t from-transparent to-[#f6e58d]",
  };

  return (
    <motion.span
      className={positionClasses[direction]}
      animate="visible"
      variants={{
        visible: variants[direction].visible,
      }}
    />
  );
};

const AnimatedButton = () => {
  return (
    <div>
      <motion.button
        whileHover={{
          rotate: -3,
          scale: 1.1,
          boxShadow: "0px 3px 5px rgba(0,0,0,0.4)",
        }}
        className="w-full rounded-lg bg-gradient-to-tl bg-[#5c2ede] border text-white text-[23px] font-semibold tracking-wider font-sans overflow-hidden shadow-md transition-all duration-300"
      >
        Details
        <AnimatedSpan direction="top" />
        <AnimatedSpan direction="right" />
        <AnimatedSpan direction="bottom" />
        <AnimatedSpan direction="left" />
      </motion.button>
    </div>
  );
};

export default AnimatedButton;

//
