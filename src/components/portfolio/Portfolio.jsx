import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cuisine Courier",
    img: "https://media.istockphoto.com/id/1287152859/photo/asian-chinese-delivery-man-with-helmet-press-door-bell-for-grocery-food-delivery.jpg?b=1&s=612x612&w=0&k=20&c=RasGZw5VIZpAeLiR-jBtS2bLIYovoN2WG4qCkqKAq2o=",
    desc: "Developed a full stack Food Ordering Application using MERN stack to streamline the process of booking online food delivery. This application provides an intuitive interface for people to book food online",
    url: "https://cuisine-courier.vercel.app/",
  },

  {
    id: 2,
    title: "Edugate- React Website",
    img: "/project-2.png",
    desc: "Developed a full stack Food Ordering Application using MERN stack to streamline the process of booking online food delivery. This application provides an intuitive interface for people to book food online",
    url: "https://edugate-nine.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.url} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
