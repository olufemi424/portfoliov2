"use client";

import { GlassCard } from "../ui/GlassCard";
import Image from "next/image";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaGlobe,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

// Define image paths
const IMAGES = {
  profile: "/assets/profileimage/profileImage.jpg",
  niniwise: "/assets/project-img/niniwise-company.png",
  aiContent: "/assets/project-img/career-bridge-app.png",
  devops: "/assets/project-img/moti-app.png",
};

const projects = [
  {
    title: "Niniwise - Product Hub",
    description:
      "An innovative technology company pioneering solutions across AI, blockchain, and IoT. Their flagship product suite includes smart city infrastructure management, advanced supply chain optimization tools, and enterprise-grade security systems. Known for leveraging cutting-edge tech to tackle complex real-world challenges with measurable impact.",
    image: IMAGES.niniwise,
    technologies: [
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "TradingView API",
    ],
    liveUrl: "https://streaming-structured-output-nine.vercel.app/",
    githubUrl: "https://github.com/{}/niniwise",
  },
  {
    title: "Career Bridge",
    description:
      "A platform that helps job seekers find their dream jobs and employers find the right talent. It provides a comprehensive suite of tools for job seekers, including resume builder, job search, and interview preparation.",
    image: IMAGES.aiContent,
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
    ],
    liveUrl:
      "https://streaming-structured-output-nine.vercel.app/career-bridge",
    githubUrl: "https://github.com/{}/career-bridge",
  },
  {
    title: "Moti App",
    description:
      "This app takes input from the user and generate a quote based on the input, the quote is generated using the OpenAI API, the model used is gpt-3.5-turbo, the app is built with Next.js and Tailwind CSS",
    image: IMAGES.devops,
    technologies: [
      "Next.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "Redis",
    ],
    liveUrl: "https://moti.niniwise.com",
    githubUrl: "https://github.com/{}/devops-dashboard",
  },
];

const skills = [
  {
    name: "FrontEnd",
    icon: "🎨",
  },
  {
    name: "BackEnd",
    icon: "⚙️",
  },
  {
    name: "DevOps",
    icon: "🔄",
  },
  {
    name: "AI",
    icon: "🤖",
  },
  {
    name: "Cloud",
    icon: "☁️",
  },
  {
    name: "Blockchain",
    icon: "⛓️",
  },
];

/**
 * Enhanced hero section component that combines about, skills, and contact
 * Features a creative layout with depth and responsive design
 */
export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "contact">(
    "about"
  );

  const tabs = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <>
      <section className="hero pt-4 pb-12 sm:py-4 md:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero__content grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Left Column - Profile */}
            <div className="hero__profile p-6">
              <div className="flex flex-col items-center lg:items-start animate-fade-in">
                <div className="hero__profile-image">
                  <div className="hero__profile-image-wrapper">
                    <Image
                      src={IMAGES.profile}
                      alt="Profile"
                      priority
                      width={192}
                      height={192}
                      className="hero__profile-img"
                    />
                  </div>
                  <div
                    className="hero__profile-status"
                    title="Available for opportunities"
                  />
                </div>
                <div className="text-center lg:text-left animate-fade-in-delay">
                  <h1 className="hero__title">Olufemi Afolabi</h1>
                  <p className="hero__subtitle">
                    Software Engineer & Solutions Architect
                  </p>
                  <div className="hero__social-links">
                    <Link
                      href="https://github.com/olufemi424"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/olufemiafolabi91"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link
                      href="https://twitter.com/afofm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter Profile"
                    >
                      <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Tabbed Content */}
            <div className="hero__content-tabs flex">
              <GlassCard className="hero__content-card flex-1 flex flex-col p-0 overflow-hidden">
                <div className="hero__tabs-nav flex border-b border-black/10">
                  {tabs.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`hero__tab-btn flex-1 px-4 py-3 text-sm md:text-base transition-colors
                        ${
                          activeTab === id
                            ? "bg-black/10 text-black"
                            : "text-black/60 hover:text-black/80"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="hero__tab-content flex-1 p-4 md:p-6 lg:p-8">
                  <div key={activeTab} className="h-full animate-fade-in-fast">
                    {activeTab === "about" && (
                      <div className="hero__about h-full flex flex-col space-y-4">
                        <p className="hero__about-text text-black/80 text-base md:text-lg leading-relaxed">
                          I&apos;m a tech enthusiast who finds endless wonder in
                          the possibilities of computing. Each day, I&apos;m
                          grateful for the opportunity to craft solutions that
                          make a difference in people&apos;s lives. When
                          I&apos;m not exploring the fascinating world of code,
                          you&apos;ll find me cherishing moments with my amazing
                          wife and two wonderful daughters who bring joy and
                          purpose to everything I do.
                        </p>
                      </div>
                    )}

                    {activeTab === "skills" && (
                      <div className="hero__skills h-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 content-start">
                        {skills.map((skill, index) => (
                          <div
                            key={skill.name}
                            className="hero__skill-item p-3 md:p-4"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <span className="hero__skill-icon">
                              {skill.icon}
                            </span>
                            <span className="hero__skill-name">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "contact" && (
                      <div className="hero__contact h-full flex flex-col">
                        <div className="hero__contact-content flex flex-col items-center justify-center flex-1">
                          <div className="flex items-center gap-3 text-black/80 hover:text-black transition-colors">
                            <MdEmail className="text-2xl md:text-3xl" />
                            <Link
                              href="mailto:olufemiaf@gmail.com"
                              className="text-lg md:text-xl hover:text-black transition-colors"
                            >
                              olufemiaf@gmail.com
                            </Link>
                          </div>
                          <p className="mt-4 text-black/60 text-center">
                            Feel free to reach out for collaborations or just to
                            say hi!
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects pb-12 sm:py-4 md:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="projects__grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlassCard className="hero__project-item">
                  <div className="hero__project-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="hero__project-content">
                    <h3 className="hero__project-title">{project.title}</h3>
                    <p className="hero__project-description">
                      {project.description}
                    </p>
                    <div className="hero__project-tech">
                      <div
                        className="hero__project-tech-list"
                        aria-label="Technologies used"
                      >
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="hero__project-tech-item"
                            title={tech}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="hero__project-links">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hero__project-link"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>View Live Demo</span>
                          <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 opacity-70" />
                        </Link>
                        {/* <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hero__project-link"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Source Code</span>
                          <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 opacity-70" />
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
