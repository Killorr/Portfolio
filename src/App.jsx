import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Photo from "./images/knight.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./components/UI/TimelineData.jsx";
import { Projects } from "./components/UI/ProjectsData.jsx";
import { SocialMedia } from "./components/UI/ContactData.jsx";
import { AnimatePresence, motion } from "framer-motion";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleDownload = () => {
    const resumeUrl = "../src/images/MyResume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Arthur_Bridges_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/*Navigation Bar */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Arthur Bridges</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Home
              </a>

              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                About
              </a>

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>

              <a
                href="#"
                className="ml-auto text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                onClick={handleDownload}
              >
                Download Resume
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
                onClick={() => setIsActive(!isActive)}
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  About
                </a>

                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  Contact
                </a>

                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="#download"
                  className="ml-auto text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>
        <div className="relative" id="home">
          <Spline scene="https://prod.spline.design/esNnLYmXpMhZ7JtO/scene.splinecode" />

          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
              <p className="text-textBase">
                Press WASD to navigate, Space bar to jump, and drag to orbit
              </p>
            </div>
          </div>
        </div>
        {/* MAIN */}
        <main className="w-[80%] mt-5">
          {/*About section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/*Image Container also change background color*/}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={Photo}
                  alt="Knight surrounded by roses."
                />
              </div>
            </div>

            {/*Content of about Container */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                Hello! I'm Arthur Duncan Bridges, an aspiring software developer
                from the University of Texas at San Antonio. My passion for
                technology drives me to constantly explore and learn new skills.
                Beyond coding, I enjoy reading and immersing myself in the
                vibrant worlds of anime. I have developed proficiency in a
                variety of technologies including Typescript, Javascript, C/C++,
                MySQL, MongoDB, React JS, Three JS, HTML, CSS, and many more!
                Feel free to check out my Github to see some of the projects
                I've been excited to work on!
              </p>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
            text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
            hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50
            hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                onClick={handleDownload}
              >
                <span
                  className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                group-hover:bg-opacity-0"
                >
                  Download Resume
                </span>
              </motion.button>
            </div>
          </section>

          {/* Timeline */}

          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {/* Change the content of the vertical timeline */}
              {Experience &&
                Experience.map((el) => (
                  <VerticalTimelineElement
                    key={el.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date={el.date}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={el.iconSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {el.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {el.location}
                    </h4>
                    <p>{el.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          {/*Projects Section */}
          <section
            id="projects"
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
          >
            {Projects &&
              Projects.map((p) => (
                <div
                  key={p.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {p.name.length > 25 ? `${p.name.slice(0, 25)}...` : p.name}
                  </p>
                  <a href={p.github} alt="Github link">
                    <img
                      src={p.image}
                      className="w-full h-full object-cover rounded-md my-4"
                      alt=""
                    />
                  </a>
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm to-gray-500">
                        {p.techs}
                      </span>
                    </p>

                    <a href={p.github}>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>

          {/* Contact */}

          <section
            id="contact"
            className="flex flex-col items-center justify-center w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">
              Follow me on the following Social Media
            </p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialMedia &&
                SocialMedia.map((d) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={d.id}
                    href={d.link}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {d.iconSrc}
                    <p className="text-lg text-textBase">{d.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
