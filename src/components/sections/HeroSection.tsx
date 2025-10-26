"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaCopy,
} from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

// Define image paths
const IMAGES = {
  profile: "/assets/profileimage/profileImage.jpg",
  niniwise: "/assets/project-img/niniwise-company.png",
  aiContent: "/assets/project-img/career-bridge-app.png",
  devops: "/assets/project-img/moti-app.png",
};

const company = {
  name: "Niniwise",
  founded: "2023",
  description:
    "A technology company building intelligent solutions for modern problems. We create products that bridge the gap between complex technology and everyday users.",
  philosophy: {
    vision: "Technology should empower, not overwhelm",
    mission: "Build tools that people actually want to use",
    approach: "Start simple, iterate fast, deliver value",
  },
  url: "https://niniwise.com",
  image: IMAGES.niniwise,
};

/**
 * Enhanced hero section component that combines about and contact
 * Features a creative layout with depth and responsive design
 */
export const HeroSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("olufemiaf@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      <section className="hero py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="hero__container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Content */}
          <div className="hero__content max-w-4xl">
            {/* Profile Image - Minimal */}
            <div className="hero__profile-image mb-12 animate-fade-in">
              <div className="hero__profile-image-wrapper relative inline-block">
                <Image
                  src={IMAGES.profile}
                  alt="Profile"
                  priority
                  width={120}
                  height={120}
                  className="hero__profile-img rounded-full"
                />
                <div
                  className="hero__profile-status absolute bottom-1 right-1 w-4 h-4 bg-black rounded-full border-2 border-white"
                  title="Available for opportunities"
                />
              </div>
            </div>

            {/* Name & Title - Large Typography */}
            <div className="hero__intro mb-12 animate-fade-in-delay">
              <h1 className="hero__title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-none tracking-tight">
                Olufemi
                <br />
                Afolabi
              </h1>
              <p className="hero__subtitle text-xl sm:text-2xl md:text-3xl text-black/60 mb-8 font-light">
                Software Engineer &<br className="sm:hidden" /> Solutions
                Architect
              </p>

              {/* Social Links - Inline */}
              <div className="hero__social-links flex items-center gap-6">
                <Link
                  href="https://github.com/olufemi424"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="hero__social-link hero__social-link--github text-black/60 hover:text-black transition-colors"
                >
                  <FaGithub className="hero__social-icon w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/olufemiafolabi91"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hero__social-link hero__social-link--linkedin text-black/60 hover:text-black transition-colors"
                >
                  <FaLinkedin className="hero__social-icon w-6 h-6" />
                </Link>
                <Link
                  href="https://twitter.com/afofm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="hero__social-link hero__social-link--twitter text-black/60 hover:text-black transition-colors"
                >
                  <FaTwitter className="hero__social-icon w-6 h-6" />
                </Link>
                <span className="text-black/20">•</span>
                <div className="hero__email-wrapper flex items-center gap-2">
                  <span className="hero__email-text text-base text-black/60">
                    olufemiaf@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email to clipboard"
                    className="hero__email-copy-btn p-1.5 rounded hover:bg-black/5 transition-colors"
                  >
                    {emailCopied ? (
                      <MdCheck className="hero__email-icon w-4 h-4 text-green-600" />
                    ) : (
                      <FaCopy className="hero__email-icon w-4 h-4 text-black/40" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* About - Clean Typography */}
            <div className="hero__about">
              <p className="hero__about-text text-lg sm:text-xl md:text-2xl text-black/70 leading-relaxed mb-16 font-light">
                Tech enthusiast crafting solutions that make a difference.
                Passionate about building scalable systems and exploring
                emerging technologies.
              </p>

              {/* Highlights - Minimal */}
              <div className="hero__highlights space-y-8">
                <div className="hero__highlight hero__highlight--focus">
                  <div className="hero__highlight-title text-xs uppercase tracking-wider text-black/40 mb-2 font-medium">
                    Focus Areas
                  </div>
                  <div className="hero__highlight-text text-base md:text-lg text-black/80">
                    Full-stack Development • Cloud Architecture • AI Integration
                  </div>
                </div>
                <div className="hero__highlight hero__highlight--philosophy">
                  <div className="hero__highlight-title text-xs uppercase tracking-wider text-black/40 mb-2 font-medium">
                    Philosophy
                  </div>
                  <div className="hero__highlight-text text-base md:text-lg text-black/80">
                    Build fast, iterate faster, deliver value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="company py-16 sm:py-20 md:py-24 lg:py-32 border-t border-black/10">
        <div className="company__container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="company__content max-w-4xl">
            {/* Section Label */}
            <div className="company__label mb-12">
              <span className="text-xs uppercase tracking-wider text-black/40 font-medium">
                Founder
              </span>
            </div>

            {/* Company Name & Year */}
            <div className="company__header mb-12">
              <h2 className="company__name text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                {company.name}
              </h2>
              <p className="company__founded text-lg text-black/50">
                Founded {company.founded}
              </p>
            </div>

            {/* Description */}
            <div className="company__description mb-16">
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 leading-relaxed font-light">
                {company.description}
              </p>
            </div>

            {/* Philosophy */}
            <div className="company__philosophy space-y-8 mb-16">
              <div className="company__philosophy-item">
                <div className="text-xs uppercase tracking-wider text-black/40 mb-2 font-medium">
                  Vision
                </div>
                <p className="text-base md:text-lg text-black/80">
                  {company.philosophy.vision}
                </p>
              </div>
              <div className="company__philosophy-item">
                <div className="text-xs uppercase tracking-wider text-black/40 mb-2 font-medium">
                  Mission
                </div>
                <p className="text-base md:text-lg text-black/80">
                  {company.philosophy.mission}
                </p>
              </div>
              <div className="company__philosophy-item">
                <div className="text-xs uppercase tracking-wider text-black/40 mb-2 font-medium">
                  Approach
                </div>
                <p className="text-base md:text-lg text-black/80">
                  {company.philosophy.approach}
                </p>
              </div>
            </div>

            {/* Link */}
            <div className="company__link">
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors text-base"
              >
                <span>Visit {company.name}</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
