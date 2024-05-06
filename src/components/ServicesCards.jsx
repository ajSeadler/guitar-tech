import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const AnimatedHeading = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="services-heading"
    >
      {children}
    </motion.h1>
  );
};

const ServiceCard = ({ title, subtitle, content, price, image, to }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="card"
      style={{ borderRadius: 0 }}
    >
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="content">{content}</div>
      <img src={image} alt={title} className="card-image" />
      <div className="price">{price}</div>
      <Link to={to} className="learn-more" style={{color:"grey"}}>Learn More</Link>
    </motion.div>
  );
};

const ServicesCards = () => {
  return (
    <div>
      <AnimatedHeading>Quality Services for Your Guitars</AnimatedHeading>
      <div className="services-container">
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
      </div>
    </div>
  );
};

export default ServicesCards;
