import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ServicesCards from "./ServicesCards";

const Home = () => {
  return (
    <>
      <div className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to OK Guitar Tech
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Oklahoma's go-to destination for professional guitar services
          </motion.p>
        </motion.div>
      </div>
      <ServicesCards />
    </>
  );
};

export default Home;
