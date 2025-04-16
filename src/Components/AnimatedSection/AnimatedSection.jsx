import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./AnimatedSection.css";

const AnimatedSection = ({ children, className = "", index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const sectionPosition = index * windowHeight;
        const threshold = windowHeight * 0.5;

        if (
          scrollPosition >= sectionPosition - threshold &&
          scrollPosition <= sectionPosition + threshold
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index]);

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default AnimatedSection;
