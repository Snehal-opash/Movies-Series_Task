import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Navbar = () => {
  const animation = {
    
    Link: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div className="navbar">
        <div className="head">
          <h1 className="title">
            <Typewriter
              options={{
                strings: ["DEMO Streaming"],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriterpara",
                cursor: "",
              }}
            />
          </h1>
          <motion.div {...animation.Link} className="nav_right">
            <a href="/">Log In</a>
            <button className="bt1">
              <span>Start your free trial</span>
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
