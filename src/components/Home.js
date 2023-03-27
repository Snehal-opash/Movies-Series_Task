import React from "react";
import image from "../images/movie_icon.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const animation = {
   
    Link: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };
  return (
    
    <div className="container">
      <motion.div
        {...animation.Link}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="data"
      >
        <Link to="/series" className="box">
          <img src={image} alt="..." />
          <div className="center">SERIES</div>
        </Link>

        <Link to="/movies" className="h">
          <motion.h4 {...animation.h4}>SERIES</motion.h4>
        </Link>
      </motion.div>
      <motion.div
        {...animation.Link}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="data"
      >
        <Link to="/movies" className="box">
          <img src={image} alt="..." />
          <div className="center">MOVIES</div>
        </Link>

        <Link to="/movies" className="h">
          <motion.h4 {...animation.h4}>MOVIES</motion.h4>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
