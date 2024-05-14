import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServicesCards from "./ServicesCards";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  const [showScrollDownText, setShowScrollDownText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollDownText(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src='/tele-logo.png' alt="Logo" className="logo-img" />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{fontWeight:'300',}}
          ></motion.h1>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{fontWeight:'300',}}
          >
            Welcome to <span style={{ color: "#fff", fontWeight: "bold", color:'#fff' }}>OK</span>
            <span style={{ color: "#fff", fontWeight: 200 }}>Guitar Tech</span>
          </motion.h1>
          {/* <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Oklahoma's friendliest destination for professional guitar services
          </motion.p> */}
        </motion.div>
      </div>
      <ServicesCards />
      {showScrollDownText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5, type: "spring", stiffness: 200, damping: 10 }}
          className="scroll-down-container"
          style={{
            position: "fixed",
            zIndex: 3,
            bottom: "20px",
            left: "50px",
            right:'50px',
            transform: "translateX(-50%)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 100,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            margin:'0px',
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "10px" }}>Scroll down</div>
          <ArrowDownwardIcon fontSize="small" />
        </motion.div>
      )}
    </>
  );
};

export default Home;
