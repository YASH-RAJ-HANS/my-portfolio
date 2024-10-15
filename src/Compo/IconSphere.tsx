import React, { useEffect, useState, useRef } from "react";
import {
    FaReact, FaNode, FaPython, FaAws, FaDocker, FaGithub, FaJsSquare, FaCss3, FaGit, FaDatabase, FaJava, FaHtml5,
    FaLinux, FaFigma, FaNpm, FaYarn, FaRust, FaSass, FaAngular, FaVuejs, FaPhp, FaWordpress, FaSlack, FaStripe, FaGoogle, FaShopify
} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMongodb, SiFlask, SiSpringboot, SiRedis, SiVercel, SiD3Dotjs, SiKubernetes, SiJenkins, SiGraphql, SiTailwindcss, SiWebpack } from "react-icons/si";

const IconSphere = () => {
    const iconList = [
        { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} />, size: "text-4xl" },
        { name: "Node.js", icon: <FaNode style={{ color: "#8CC84B" }} />, size: "text-4xl" },
        { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} />, size: "text-4xl" },
        { name: "AWS", icon: <FaAws style={{ color: "#FF9900" }} />, size: "text-4xl" },
        { name: "Docker", icon: <FaDocker style={{ color: "#2496ED" }} />, size: "text-4xl" },
        { name: "GitHub", icon: <FaGithub style={{ color: "#181717" }} />, size: "text-4xl" },
        { name: "JavaScript", icon: <FaJsSquare style={{ color: "#F7DF1E" }} />, size: "text-4xl" },
        { name: "HTML5", icon: <FaHtml5 style={{ color: "#E34F26" }} />, size: "text-4xl" },
        { name: "CSS3", icon: <FaCss3 style={{ color: "#1572B6" }} />, size: "text-4xl" },
        { name: "Git", icon: <FaGit style={{ color: "#F05032" }} />, size: "text-4xl" },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} />, size: "text-4xl" },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} />, size: "text-4xl" },
        { name: "Flask", icon: <SiFlask style={{ color: "#000000" }} />, size: "text-4xl" },
        { name: "Spring Boot", icon: <SiSpringboot style={{ color: "#6DB33F" }} />, size: "text-4xl" },
        { name: "Redis", icon: <SiRedis style={{ color: "#D82C20" }} />, size: "text-4xl" },
        { name: "Vercel", icon: <SiVercel style={{ color: "#000000" }} />, size: "text-4xl" },
        { name: "D3.js", icon: <SiD3Dotjs style={{ color: "#F9B24E" }} />, size: "text-4xl" },
        { name: "Linux", icon: <FaLinux style={{ color: "#FCC624" }} />, size: "text-4xl" },
        { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#38B2AC" }} />, size: "text-4xl" },
        { name: "Webpack", icon: <SiWebpack style={{ color: "#8DD6F9" }} />, size: "text-4xl" },
        { name: "Kubernetes", icon: <SiKubernetes style={{ color: "#326CE5" }} />, size: "text-4xl" },
        { name: "Jenkins", icon: <SiJenkins style={{ color: "#D24939" }} />, size: "text-4xl" },
        { name: "GraphQL", icon: <SiGraphql style={{ color: "#E535AB" }} />, size: "text-4xl" },
        { name: "Java", icon: <FaJava style={{ color: "#007396" }} />, size: "text-4xl" },
        { name: "SASS", icon: <FaSass style={{ color: "#CC6699" }} />, size: "text-4xl" },
        { name: "Angular", icon: <FaAngular style={{ color: "#DD0031" }} />, size: "text-4xl" },
        { name: "Vue.js", icon: <FaVuejs style={{ color: "#4FC08D" }} />, size: "text-4xl" },
        { name: "PHP", icon: <FaPhp style={{ color: "#8993BE" }} />, size: "text-4xl" },
        { name: "WordPress", icon: <FaWordpress style={{ color: "#21759B" }} />, size: "text-4xl" },
        { name: "Slack", icon: <FaSlack style={{ color: "#4A154B" }} />, size: "text-4xl" },
        { name: "Stripe", icon: <FaStripe style={{ color: "#6772E5" }} />, size: "text-4xl" },
        { name: "Google Cloud", icon: <FaGoogle style={{ color: "#4285F4" }} />, size: "text-4xl" },
        { name: "Shopify", icon: <FaShopify style={{ color: "#96BF48" }} />, size: "text-4xl" },
        { name: "Figma", icon: <FaFigma style={{ color: "#F24E1E" }} />, size: "text-4xl" },
        { name: "NPM", icon: <FaNpm style={{ color: "#CB3837" }} />, size: "text-4xl" },
        { name: "Yarn", icon: <FaYarn style={{ color: "#2C8EBB" }} />, size: "text-4xl" },
        { name: "Rust", icon: <FaRust style={{ color: "#000000" }} />, size: "text-4xl" },
    ];

    const [rotationY, setRotationY] = useState(0);
    const [rotationx, setRotationX] = useState(0);
    const sphereRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotationY((prev) => prev + 0.5); // Rotate around Y-axis
            setRotationX((prev) => prev + 0.5);
        }, 30); // Adjust rotation speed

        return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, []);

    // Handle Mouse Drag Interaction
    const handleMouseMove = (event:any) => {
        const { movementX, movementY } = event;
        setRotationY((prev) => prev + movementX * 0.2); // Adjust rotation based on mouse movement
        // Remove X-axis rotation interaction to keep it fixed
    };
    
   

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div
                className="relative w-[600px] h-[600px] perspective-2000 cursor-grab"
                onMouseMove={handleMouseMove}
                ref={sphereRef}
            >
                {/* Sphere Wrapper */}
                <div
    className="absolute inset-0 w-full h-full transform-style-3d"
    style={{
        transform: `rotateY(${rotationY}deg)`, // Only rotate around Y-axis
    }}
>
                    {/* Map Icons on Sphere */}
                    {iconList.map((item, index) => {
                        const phi = Math.acos(-1 + (2 * index) / iconList.length); // Angle from the vertical
                        const theta = Math.sqrt(iconList.length * Math.PI) * phi; // Angle around the sphere

                        const x = 250 * Math.sin(phi) * Math.cos(theta); // X position
                        const y = 250 * Math.cos(phi); // Y position
                        const z = 250 * Math.sin(phi) * Math.sin(theta); // Z position

                        return (
                            <div
                                key={index}
                                className={`absolute ${item.size}`}
                                style={{
                                    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                                }}
                            >
                                {item.icon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default IconSphere;
