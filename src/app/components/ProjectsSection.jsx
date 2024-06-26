"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Weather Forecasting Website",
    description: "A weather forecasting website that uses API and location access from the user and tells the weather of any location using the input city name or pincode.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vamshi1905/Weather-report",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Film Harbour",
    description: "A website where you buy, rent or sell your movies and users can add reviews to it",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vamshi1905/Film-Harbour",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Nuntius Website",
    description: "A messaging web application which connects people through the website working similar to other social media platforms.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://nuntius-website.onrender.com/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "My Portfolio Website through which you can reach me",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vamshi1905/My-portfolio",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio App",
    description: "My Portfolio App through which you can reach me",
    image: "/images/projects/5.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/vamshi1905/Portfolio-App",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
