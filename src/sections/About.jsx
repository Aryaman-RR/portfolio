import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";

const About = () => {
  const [animationName, setAnimationName] = useState("idle");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTechBackgroundColor = (tech) => {
    const colors = {
      "react.js": "bg-blue-700", // Lighter blue instead of bg-blue-500
      "node.js": "bg-green-800", // Darker green
      html: "bg-red-800", // Darker red
      css: "bg-blue-400", // Lighter blue
      javascript: "bg-yellow-600", // Lighter yellow
      flutter: "bg-blue-600", // Slightly toned down blue
      dart: "bg-teal-700", // Slightly darker teal
      docker: "bg-blue-700", // Darker blue
      "c++": "bg-blue-800", // Darker blue
      java: "bg-green-900", // Slightly muted orange
      sass: "bg-pink-700", // SCSS - Pink shade
      tailwind: "bg-teal-700", // Tailwind - Teal
      postman: "bg-orange-700", // Postman - Darker orange
      python: "bg-yellow-600", // Python - Yellow (a bit muted)
      typescript: "bg-blue-700", // TypeScript - Blue (darker)
    };

    return colors[tech.toLowerCase()] || "bg-gray-500";
  };

  const animationsList = ["victory", "clapping", "salute"];

  const Tag = ({ index, tag_name, img_path, background_clr }) => {
    const bgColor = background_clr || getTechBackgroundColor(tag_name);

    return (
      <span
        className={`inline-flex items-center px-3 py-1 text-sm font-medium text-white ${bgColor} rounded-full
                    transform transition-all duration-300 ease-in-out
                    hover:scale-110 hover:brightness-110`}
        onClick={() =>
          setAnimationName(animationsList[index % animationsList.length])
        }
        onPointerOver={() =>
          setAnimationName(animationsList[index % animationsList.length])
        }
        onPointerOut={() => setAnimationName("idle")}
      >
        <img
          src={import.meta.env.BASE_URL + img_path}
          alt={tag_name}
          className="w-4 h-4 mr-2"
        />
        {tag_name}
      </span>
    );
  };

  const techs = [
    { name: "React.js", img: "assets/icons/react.svg" },
    { name: "Node.js", img: "assets/icons/node-js-icon.svg" },
    { name: "HTML", img: "assets/icons/html-icon.svg" },
    { name: "CSS", img: "assets/icons/css-icon.svg" },
    { name: "JavaScript", img: "assets/icons/javascript-icon.svg" },
    { name: "Flutter", img: "assets/icons/flutter-icon.svg" },
    { name: "Dart", img: "assets/icons/dart-icon.svg" },
    { name: "Docker", img: "assets/icons/docker-icon.svg" },
    { name: "C++", img: "assets/icons/c-plus-plus-icon.svg" },
    { name: "Java", img: "assets/icons/java-icon.svg" },
    { name: "SASS", img: "assets/icons/sass-icon.svg" },
    { name: "Tailwind", img: "assets/icons/tailwind-css-icon.svg" },
    { name: "Postman", img: "assets/icons/postman-icon.svg" },
    { name: "Python", img: "assets/icons/python-icon.svg" },
    { name: "TypeScript", img: "assets/icons/typescript-icon.svg" },
  ];

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-[800px]">
        <div className="work-canvas grid sm:block hidden">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={<CanvasLoader />}>
              <Developer
                position-y={-3}
                scale={3}
                animationName={animationName}
              />
            </Suspense>
          </Canvas>
        </div>
        <div className="flex flex-col gap-5">
          <div className="col-span-1 xl:row-span-3 ">
            <div
              className="grid-container flex flex-col transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5;"
              onClick={() => setAnimationName("salute")}
              onPointerOver={() => setAnimationName("salute")}
              onPointerOut={() => setAnimationName("idle")}
            >
              <img
                src={import.meta.env.BASE_URL + "assets/ghibli-cropped.png"}
                alt="portrait"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">Hi, I am Aryaman</p>
                <p className="grid-subtext">
                  I’m a Software Developer with a passion for building scalable
                  and efficient applications. With experience in React, Flutter,
                  and Node.js, I’ve developed and maintained applications that
                  deliver seamless user experiences. Whether it’s crafting
                  intuitive frontends or optimizing backend systems, I’m always
                  eager to tackle new challenges and learn along the way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 xl:row-span-3" style={{ flexGrow: 1 }}>
            <div className="grid-container">
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <div className="flex flex-wrap gap-3 ">
                  {techs.map((tech, index) => (
                    <Tag
                      key={index}
                      index={index}
                      tag_name={tech.name}
                      img_path={tech.img}
                      background_clr={getTechBackgroundColor(tech.name)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
