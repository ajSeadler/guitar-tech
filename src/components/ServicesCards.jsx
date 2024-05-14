import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Book from "./Book";

const AnimatedHeading = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="services-heading"
    >
      {children}
    </motion.h1>
  );
};

const ServiceCard = ({ title, subtitle, content, price, image, to }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const nextCardInView = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3, delay: nextCardInView.inView ? 0 : 0.5 }}
      className="card"
      style={{ borderRadius: 0 }}
    >
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="content">{content}</div>
      <img src={image} alt={title} className="card-image" />
      <div className="price" style={{ margin: "10px" }}>
        {price}
      </div>
      <Button
        component={Link}
        to={to}
        variant="contained"
        sx={{
          color: "#fff",
          fontSize:'.8rem',
          fontWeight:'bold',
          backgroundColor: "#b50000",
          padding: "8px",
          borderRadius: '10px',
          "&:hover": {
            backgroundColor: "white",
            color:'#000'
          },
        }}
      >
        Learn More
      </Button>
    </motion.div>
  );
};

const ServicesCards = () => {
  return (
    <>
      <div className="services-container">
        <AnimatedHeading>Quality Services for Your Instruments</AnimatedHeading>
        <ServiceCard
          title="Basic Clean and Restring"
          subtitle="Quick and easy, in and out"
          content="Ensure your guitar stays in top condition with our Basic Clean and Restring service."
          price="$20-25"
          image="/tuning-pic.jpeg"
          to="/clean-and-restring"
        />
        <ServiceCard
          title="The Full Setup"
          subtitle="Full inspection and setup"
          content="Opt for a full setup. A comprehensive service that includes a thorough inspection and setup to optimize your instrument's performance."
          price="$100"
          image="/fretwork.jpeg"
          to="/setup"
        />
        <ServiceCard
          title="Fret Work"
          subtitle="Level, crown, polish (setup included)"
          content="Whether you're dealing with fretboard issues or simply seeking a thorough cleanup, OK Guitars provides an extensive range of services tailored to ensure your guitar plays and feels smoother than ever before."
          price="$175"
          image="/fretw0k.jpeg"
          to="/fret-work"
        />
        <ServiceCard
          title="Pedalboard Maintnence and Customization"
          subtitle="Clean pedals and cable managment"
          content="Ensure your effects pedals stay in top condition with a thorough clean of pots, patch cables, and the pedalboard itself. Opt for a rewire using custom soldered cables."
          price="$100-200"
          image="/pedalboard.jpeg"
          to="/pedalboard"
        />
        <Book />
      </div>
    </>
  );
};

export default ServicesCards;