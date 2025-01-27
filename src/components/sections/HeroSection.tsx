"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import Image from "next/image";
import { useState } from "react";
import profileImage from "@/assets/profileimage/profileImage.jpg";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import niniwiseImage from "@/assets/project-img/niniwise-company.png";
import aiContentImage from "@/assets/project-img/career-bridge-app.png";
import devopsImage from "@/assets/project-img/moti-app.png";
import { MdEmail } from "react-icons/md";

const projects = [
  {
    title: "Niniwise - Product Hub",
    description:
      "An innovative technology company pioneering solutions across AI, blockchain, and IoT. Their flagship product suite includes smart city infrastructure management, advanced supply chain optimization tools, and enterprise-grade security systems. Known for leveraging cutting-edge tech to tackle complex real-world challenges with measurable impact.",
    image: niniwiseImage,
    technologies: [
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "TradingView API",
    ],
    liveUrl: "https://niniwise.com",
    githubUrl: "https://github.com/{}/niniwise",
  },
  {
    title: "Career Bridge",
    description:
      "A platform that helps job seekers find their dream jobs and employers find the right talent. It provides a comprehensive suite of tools for job seekers, including resume builder, job search, and interview preparation.",
    image: aiContentImage,
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
    ],
    liveUrl: "https://niniwise.com/career-bridge",
    githubUrl: "https://github.com/{}/career-bridge",
  },
  {
    title: "DevOps Dashboard",
    description:
      "A centralized dashboard for DevOps teams to monitor infrastructure, track deployments, and manage cloud resources across multiple providers. Features real-time alerts and automated incident response.",
    image: devopsImage,
    technologies: [
      "Next.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "Redis",
    ],
    liveUrl: "https://devops-dashboard.com",
    githubUrl: "https://github.com/{}/devops-dashboard",
  },
];

const skills = [
  {
    name: "FrontEnd",
    gradient: "from-[#FF6B6B] to-[#ee0979]",
    icon: "🎨",
  },
  {
    name: "BackEnd",
    gradient: "from-[#4834d4] to-[#686de0]",
    icon: "⚙️",
  },
  {
    name: "DevOps",
    gradient: "from-[#2ecc71] to-[#27ae60]",
    icon: "🔄",
  },
  {
    name: "AI",
    gradient: "from-[#9b59b6] to-[#8e44ad]",
    icon: "🤖",
  },
  {
    name: "Cloud",
    gradient: "from-[#3498db] to-[#2980b9]",
    icon: "☁️",
  },
  {
    name: "Blockchain",
    gradient: "from-[#f1c40f] to-[#f39c12]",
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="hero__profile-image">
                  <div className="hero__profile-image-wrapper">
                    <Image
                      src={profileImage}
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
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
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Tabbed Content */}
            <div className="hero__content-tabs flex">
              <GlassCard className="hero__content-card flex-1 flex flex-col p-0 overflow-hidden backdrop-blur-md">
                <div className="hero__tabs-nav flex border-b border-white/10">
                  {tabs.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`hero__tab-btn flex-1 px-4 py-3 text-sm md:text-base transition-colors
                        ${
                          activeTab === id
                            ? "bg-[rgba(0,108,255,0.2)] text-white"
                            : "text-white/60 hover:text-white/80"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="hero__tab-content flex-1 p-4 md:p-6 lg:p-8">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    {activeTab === "about" && (
                      <div className="hero__about h-full flex flex-col space-y-4">
                        <h2 className="hero__about-title text-xl md:text-2xl font-semibold mb-4 text-[rgba(0,108,255,0.8)]">
                          About Me
                        </h2>
                        <p className="hero__about-text text-white/80 text-base md:text-lg leading-relaxed">
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
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="hero__skill-item p-3 md:p-4 rounded-lg"
                            style={
                              {
                                "--skill-gradient-from":
                                  skill.gradient.match(/from-\[(.*?)\]/)?.[1] ||
                                  "#000000",
                                "--skill-gradient-to":
                                  skill.gradient.match(/to-\[(.*?)\]/)?.[1] ||
                                  "#000000",
                              } as React.CSSProperties
                            }
                          >
                            <span className="hero__skill-icon">
                              {skill.icon}
                            </span>
                            <span className="hero__skill-name">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeTab === "contact" && (
                      <div className="hero__contact h-full flex flex-col">
                        <h2 className="hero__contact-title text-xl md:text-2xl font-semibold mb-4 text-[rgba(0,108,255,0.8)]">
                          Get in Touch
                        </h2>
                        <div className="hero__contact-content flex flex-col items-center justify-center flex-1">
                          <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                            <MdEmail className="text-2xl md:text-3xl" />
                            <Link
                              href="mailto:olufemiaf@gmail.com"
                              className="text-lg md:text-xl hover:text-[rgba(0,108,255,0.8)] transition-colors"
                            >
                              olufemiaf@gmail.com
                            </Link>
                          </div>
                          <p className="mt-4 text-white/60 text-center">
                            Feel free to reach out for collaborations or just to
                            say hi!
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects pt-4 pb-12 sm:py-4 md:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="projects__grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <GlassCard className="hero__project-item">
                  <div className="hero__project-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(2,32,60)]/90 to-transparent" />
                  </div>
                  <div className="hero__project-content">
                    <h3 className="hero__project-title text-[rgba(0,108,255,0.8)]">
                      {project.title}
                    </h3>
                    <p className="hero__project-description">
                      {project.description}
                    </p>
                    <div className="hero__project-tech">
                      <div className="hero__project-tech-list">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="hero__project-tech-item">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="hero__project-links">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="hero__project-link"
                        >
                          Live Preview
                        </Link>
                        {/* <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="hero__project-link"
                        >
                          View Code
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
