import { useState, useRef, useEffect, createRef } from "react";
import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
  FaJsSquare,
  FaCss3,
  FaGit,
  FaDatabase,
  FaJava,
  FaHtml5,
  FaLinux,
  FaFigma,
  FaNpm,
  FaYarn,
  FaRust,
  FaSass,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaWordpress,
  FaSlack,
  FaStripe,
  FaGoogle,
  FaShopify,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFlask,
  SiSpringboot,
  SiRedis,
  SiVercel,
  SiD3Dotjs,
  SiKubernetes,
  SiJenkins,
  SiGraphql,
  SiTailwindcss,
  SiWebpack,
} from "react-icons/si";

const defaultConfig = {
  radius: 150,
  maxSpeed: 0.2, // rolling max speed, optional: `slow`, `normal`(default), `fast`
  initSpeed: 100, // rolling init speed, optional: `slow`, `normal`(default), `fast`
  direction: 135, // rolling init direction, unit clockwise `deg`, optional: `0`(top) , `90`(left), `135`(right-bottom)(default)...
  containerClass: "tagsphere",
  itemClass: "tagsphere--item",
};

const computeItemPosition = (index, textsLength, size) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};
/* Text span element */
const createTextItem = (text, name, index, textsLength, size, itemRef,description) => {
  const transformOrigin = "50% 50%";
  const transform = "translate3d(-50%, -50%, 0) scale(1)";
  const styles = {
    willChange: "transform, opacity, filter",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: index + 1,
    filter: "alpha(opacity:0)",
    opacity: 0,
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform,
  };

  const itemEl = (
    <span
      ref={itemRef}
      key={index}
      className={defaultConfig.itemClass}
      style={styles}
    >
      <span className="text-2xl ">{text} </span>
      
    </span>
  );
  return {
    ref: itemRef,
    el: itemEl,
    ...computeItemPosition(index, textsLength, size),
  };
};
const texts = [
  {
    name: "React",
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    size: "text-4xl",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    icon: <FaNode style={{ color: "#8CC84B" }} />,
    size: "text-4xl",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for server-side applications.",
  },
  {
    name: "Python",
    icon: <FaPython style={{ color: "#3776AB" }} />,
    size: "text-4xl",
    description:
      "A high-level programming language used for back-end and automation.",
  },
  {
    name: "AWS",
    icon: <FaAws style={{ color: "#FF9900" }} />,
    size: "text-4xl",
    description:
      "Amazon Web Services, a cloud platform for scalable application deployment.",
  },
  {
    name: "Docker",
    icon: <FaDocker style={{ color: "#2496ED" }} />,
    size: "text-4xl",
    description:
      "A platform for developing, shipping, and running applications in containers.",
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub
        style={{
          color: "#181717",
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
        }}
      />
    ),
    size: "text-4xl",
    description:
      "A web-based platform for version control and collaboration using Git.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare style={{ color: "#F7DF1E" }} />,
    size: "text-4xl",
    description:
      "A versatile scripting language primarily used for web development.",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 style={{ color: "#E34F26" }} />,
    size: "text-4xl",
    description:
      "A markup language used for structuring and presenting content on the web.",
  },
  {
    name: "CSS3",
    icon: <FaCss3 style={{ color: "#1572B6" }} />,
    size: "text-4xl",
    description:
      "A styling language used to describe the presentation of web pages.",
  },
  {
    name: "Git",
    icon: <FaGit style={{ color: "#F05032" }} />,
    size: "text-4xl",
    description:
      "A version control system that tracks changes in source code during software development.",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql style={{ color: "#336791" }} />,
    size: "text-4xl",
    description: "A powerful, open-source object-relational database system.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#47A248" }} />,
    size: "text-4xl",
    description: "A NoSQL database designed for flexibility and scalability.",
  },
  {
    name: "Flask",
    icon: (
      <SiFlask
        style={{
          color: "#000000",
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
        }}
      />
    ),
    size: "text-4xl",
    description: "A lightweight Python micro-framework for web development.",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot style={{ color: "#6DB33F" }} />,
    size: "text-4xl",
    description:
      "A Java framework that simplifies the creation of stand-alone, production-ready applications.",
  },
  {
    name: "Redis",
    icon: <SiRedis style={{ color: "#D82C20" }} />,
    size: "text-4xl",
    description:
      "An in-memory data structure store used as a database, cache, and message broker.",
  },
  {
    name: "Vercel",
    icon: (
      <SiVercel
        style={{
          color: "#000000",
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
        }}
      />
    ),
    size: "text-4xl",
    description:
      "A platform for static site hosting and front-end development.",
  },
  {
    name: "D3.js",
    icon: <SiD3Dotjs style={{ color: "#F9B24E" }} />,
    size: "text-4xl",
    description:
      "A JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
  },
  {
    name: "Linux",
    icon: <FaLinux style={{ color: "#FCC624" }} />,
    size: "text-4xl",
    description:
      "An open-source operating system kernel widely used for servers and development.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
    size: "text-4xl",
    description:
      "A utility-first CSS framework for building custom designs quickly.",
  },
  {
    name: "Webpack",
    icon: <SiWebpack style={{ color: "#8DD6F9" }} />,
    size: "text-4xl",
    description: "A module bundler for JavaScript applications.",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes style={{ color: "#326CE5" }} />,
    size: "text-4xl",
    description:
      "A container orchestration system for automating application deployment, scaling, and management.",
  },
  {
    name: "Jenkins",
    icon: <SiJenkins style={{ color: "#D24939" }} />,
    size: "text-4xl",
    description:
      "An automation server used for continuous integration and delivery.",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql style={{ color: "#E535AB" }} />,
    size: "text-4xl",
    description:
      "A query language for APIs, and a runtime for executing those queries.",
  },
  {
    name: "Java",
    icon: <FaJava style={{ color: "#007396" }} />,
    size: "text-4xl",
    description:
      "A high-level, class-based programming language for building enterprise applications.",
  },
  {
    name: "SASS",
    icon: <FaSass style={{ color: "#CC6699" }} />,
    size: "text-4xl",
    description:
      "A preprocessor scripting language that is interpreted or compiled into CSS.",
  },
  {
    name: "Angular",
    icon: <FaAngular style={{ color: "#DD0031" }} />,
    size: "text-4xl",
    description: "A front-end framework for building web applications.",
  },
  {
    name: "Vue.js",
    icon: <FaVuejs style={{ color: "#4FC08D" }} />,
    size: "text-4xl",
    description:
      "A progressive JavaScript framework used to build user interfaces.",
  },
  {
    name: "PHP",
    icon: <FaPhp style={{ color: "#8993BE" }} />,
    size: "text-4xl",
    description:
      "A scripting language widely used for server-side web development.",
  },
  {
    name: "WordPress",
    icon: <FaWordpress style={{ color: "#21759B" }} />,
    size: "text-4xl",
    description:
      "A content management system (CMS) for building websites and blogs.",
  },
  {
    name: "Slack",
    icon: <FaSlack style={{ color: "#4A154B" }} />,
    size: "text-4xl",
    description: "A collaboration and communication tool for teams.",
  },
  {
    name: "Stripe",
    icon: <FaStripe style={{ color: "#6772E5" }} />,
    size: "text-4xl",
    description: "A payment processing platform for businesses.",
  },
  {
    name: "Google Cloud",
    icon: <FaGoogle style={{ color: "#4285F4" }} />,
    size: "text-4xl",
    description: "A suite of cloud computing services offered by Google.",
  },
  {
    name: "Shopify",
    icon: <FaShopify style={{ color: "#96BF48" }} />,
    size: "text-4xl",
    description:
      "An e-commerce platform for online stores and retail point-of-sale systems.",
  },
  {
    name: "Figma",
    icon: <FaFigma style={{ color: "#F24E1E" }} />,
    size: "text-4xl",
    description: "A collaborative design tool for UI/UX and graphic design.",
  },
  {
    name: "NPM",
    icon: <FaNpm style={{ color: "#CB3837" }} />,
    size: "text-4xl",
    description: "A package manager for JavaScript programming.",
  },
  {
    name: "Yarn",
    icon: <FaYarn style={{ color: "#2C8EBB" }} />,
    size: "text-4xl",
    description: "A JavaScript package manager alternative to NPM.",
  },
  {
    name: "Rust",
    icon: (
      <FaRust
        style={{
          color: "#000000",
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
        }}
      />
    ),
    size: "text-4xl",
    description:
      "A programming language focused on performance and memory safety.",
  },
];
const options = {
  radius: 200,
  maxSpeed: 0.8,
};
/* Main tag sphere element */
const TagSphere = () => {
  const containerRef = useRef(null);
  const config = { ...defaultConfig, ...options };
  const { radius, maxSpeed, initSpeed, direction } = config;
  const depth = 1 * radius; // rolling depth (defalt 2)
  const size = 1.6 * radius; // rolling area size with mouse (default 1.5)
  // const keep = config.keep // whether to keep rolling after mouse out area
  // const paused = false // keep state to pause the animation
  const itemHooks = texts.map(() => createRef()); // create ref for each text item
  const [active, setActive] = useState(false); // whether the mouse is activated
  const [mouseX, setMouseX] = useState(0); // mouse X coordinate
  const [mouseY, setMouseY] = useState(0); // mouse Y coordinate
  const [items, setItems] = useState([]);

  //   calculate the next state
  const next = () => {
    // if (paused) return //
    // if (!keep && !active) {
    //   setMouseX(() => (Math.abs(mouseX - mouseX0) < 1 ? mouseX0 : (mouseX + mouseX0) / 2)) // reset distance between the mouse and rolling center x axis
    //   setMouseY(() => (Math.abs(mouseY - mouseY0) < 1 ? mouseY0 : (mouseY + mouseY0) / 2)) // reset distance between the mouse and rolling center y axis
    // }     // if keep `false`, pause rolling after moving mouse out area
    if (!items) return;
    setItems((items) => {
      // calculate text items move speed
      const a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
      const b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause when mouse on the center
      // calculate offset
      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];
      return items.map((item) => updateItem(item, sc, depth));
    });
  };
  // update the text items position, direction, styles
  const updateItem = (item, sc, depth) => {
    const newItem = { ...item };
    const rx1 = item.x;
    const ry1 = item.y * sc[1] + item.z * -sc[0];
    const rz1 = item.y * sc[0] + item.z * sc[1];

    const rx2 = rx1 * sc[3] + rz1 * sc[2];
    const ry2 = ry1;
    const rz2 = rz1 * sc[3] - rx1 * sc[2];

    const per = (2 * depth) / (2 * depth + rz2); // todo

    newItem.x = rx2;
    newItem.y = ry2;
    newItem.z = rz2;
    if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z)
      return item;

    newItem.scale = per.toFixed(3);
    let alpha = per * per - 0.25;
    alpha = (alpha > 1 ? 1 : alpha).toFixed(3);

    if (!newItem.ref.current) return item;
    const itemEl = newItem.ref.current;
    const left = (item.x - itemEl.offsetWidth / 2).toFixed(2);
    const top = (item.y - itemEl.offsetHeight / 2).toFixed(2);
    const transform = `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`;
    itemEl.style.WebkitTransform = transform;
    itemEl.style.MozTransform = transform;
    itemEl.style.OTransform = transform;
    itemEl.style.transform = transform;
    itemEl.style.filter = `alpha(opacity=${100 * alpha})`;
    itemEl.style.opacity = alpha;
    return newItem;
  };

  const init = () => {
    setActive(false);
    const mouseX0 = initSpeed * Math.sin(direction * (Math.PI / 180));
    const mouseY0 = -initSpeed * Math.cos(direction * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);
    window.addEventListener("mousemove", handleMouseMove);
    next();
  };

  const handleMouseMove = (ev) => {
    if (containerRef.current === null) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(() => (ev.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (ev.clientY - (rect.top + rect.height / 2)) / 5);
  };

  /* Set item elements and init the main element */
  useEffect(() => {
    const containerEL = containerRef.current;
    // console.log(containerEL)
    setItems(
      texts.map((text, index) =>
        createTextItem(
          text.icon,
          text.name,
          index,
          texts.length,
          size,
          itemHooks[index],
          text.description,


        )
      )
    );
    init();
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, active, items, radius]);

  return (
    <div
      ref={containerRef}
      className={config.containerClass}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      // onMouseMove={(e) => handleMouseMove(e)}
      style={{
        position: "relative",
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
        // backgroundColor:"black"
      }}
    >
      {items.map((item) => item.el)}
    </div>
  );
};

export default TagSphere;
