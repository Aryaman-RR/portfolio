import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import Projects from "./Projects";

const workExperiences = [
  {
    company: "Innoplexus Pvt Ltd",
    position: "Associate Software Developer",
    duration: "2023 - Present",
    role_description:
      "At Innoplexus, I’ve been working on some pretty exciting web apps for the pharma space. I collaborated to create interactive, user-friendly interfaces and secure platforms that help companies analyze and make decisions about drug assets.  I also got to build cool data visualizations and automate some workflows to make life easier for users.",
    projects: [
      {
        name: "MetaD3",
        description_points: [
          "Worked on a ReactJS platform that analyzes the financial side of drug assets—think dashboards and deep insights.",
          "Used Redux Toolkit for clean and efficient state management across the app.",
          "Implemented Auth0 for secure logins, which improved the user experience and protected data for over 10,000 users.",
          "Added lazy loading to cut initial load times in half, and built an automated email system to send out reports—led to a 30% spike in user engagement.",
        ],
      },
      {
        name: "Asset42",
        description_points: [
          "Built a Flutter web app that helps pharma companies visualize potential drug assets based on financial opportunities.",
          "Set up secure and seamless user authentication using Auth0, making sign-ins smooth and reliable.",
          "Designed interactive visualizations like an Investment vs Value graph and a world map showing region-wise asset distribution—made data way easier to digest.",
          "These features led to a 25% boost in user engagement, helping users quickly spot trends and make smarter decisions.",
        ],
      },
    ],
  },
];

const WorkExperience = () => {
  const globeRef = useRef(null);

  const [globeHover, setGlobeHover] = useState(false);

  const [clickedProjectIndex, setClickedProjectIndex] = useState(0);
  const projectsRef = useRef(null);

  const handleProjectClick = (index) => {
    setClickedProjectIndex(index);
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const rotateGlobe = () => {
      if (globeRef.current) {
        const currentView = globeRef.current.pointOfView();
        globeRef.current.pointOfView(
          {
            lat: currentView.lat,
            lng: currentView.lng - 1,
            altitude: currentView.altitude,
          },
          100 // transition duration in ms
        );
      }
    };
    if (!globeHover) {
      const interval = setInterval(rotateGlobe, 100); // Rotate every 100ms
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [globeHover]);

  const gData = [
    {
      lat: 18.5,
      lng: 73.8,
      size: 25,
      color: "white",
    },
  ];

  const markerSvg = `<svg viewBox="-4 0 36 36">
      <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
      <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;

  return (
    <>
      <section className="c-space my-20" id="work">
        <div className="w-full text-white-600">
          <p className="head-text">My Work Experience</p>

          <div className="work-container">
            <div className="h-full">
              <div className="grid-container h-full">
                <div
                  onMouseEnter={() => setGlobeHover(true)}
                  onMouseLeave={() => setGlobeHover(false)}
                  className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
                >
                  <Globe
                    ref={globeRef}
                    height={326}
                    width={326}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    htmlElementsData={gData}
                    htmlElement={(d) => {
                      const el = document.createElement("div");
                      el.innerHTML = markerSvg;
                      el.style.color = d.color;
                      el.style.width = `${d.size}px`;
                      el.style.transition = "opacity 250ms";
                      return el;
                    }}
                    htmlElementVisibilityModifier={(el, isVisible) =>
                      (el.style.opacity = isVisible ? 1 : 0)
                    }
                    // labelsData={[
                    //   {
                    //     lat: 18.5,
                    //     lng: 73.8,
                    //     text: "I,m here!",
                    //     color: "white",
                    //     size: 10000,
                    //   },
                    // ]}
                  />
                </div>
                <div>
                  <p className="grid-subtext text-center">
                    I'm currently based in Pune, India.
                  </p>
                  <a href="#contact" className="w-fit">
                    <Button
                      name="Connect with me"
                      isBeam={true}
                      containerClass="w-full mt-10"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {/* {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))} */}
                {workExperiences.map((item, index) => (
                  <div className="flex flex-col">
                    <div className="company-container p-3 rounded-lg shadow-md">
                      <div className="subhead-text text-xl font-semibold mb-4 text-white-800">
                        {item.company}
                      </div>

                      <div className="company-subheader flex justify-between items-center mb-4 text-white-800">
                        <p className="text-sm">{item.position}</p>
                        <p className="text-sm">
                          <span>{item.duration}</span>
                        </p>
                      </div>

                      <div className="role-description text-sm">
                        {item.role_description}
                      </div>
                    </div>

                    <div className="projects-box">
                      {item.projects.map((project, index) => (
                        <div
                          key={index}
                          className="work-content_container group"
                          onClick={() => handleProjectClick(index)}
                        >
                          <div className="flex flex-col h-full justify-start items-center py-2 group-hover:text-white transition-all ease-in-out duration-500">
                            {/* <div className="work-content_logo">
                            <img
                              className="w-full h-full"
                              src={item.icon}
                              alt=""
                            />
                          </div> */}

                            <div className="work-content_bar" />
                          </div>

                          <div className="sm:p-5 px-2.5 py-5">
                            <p className="font-bold text-white-800">
                              {project.name}
                            </p>
                            <p className="group-hover:text-white transition-all ease-in-out duration-500 text-sm">
                              {project.description_points.map(
                                (point, index) => (
                                  <p
                                    key={index}
                                    className="flex items-start pl-6"
                                  >
                                    <span className="text-gray-500 text-md mr-2 relative top--1">
                                      •
                                    </span>
                                    {point}
                                  </p>
                                )
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={projectsRef}>
        <Projects clickedProjectIndex={clickedProjectIndex} />
      </div>
    </>
  );
};

export default WorkExperience;
