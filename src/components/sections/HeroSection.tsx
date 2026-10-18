"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaExternalLinkAlt,
  FaCopy,
} from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Define image paths
const IMAGES = {
  profile: "/assets/profileimage/femi-afolabi.jpg",
  niniwise: "/assets/project-img/niniwise-company.png",
  aiContent: "/assets/project-img/career-bridge-app.png",
  devops: "/assets/project-img/moti-app.png",
};

const company = {
  name: "Niniwise",
  founded: "2023",
  description:
    "Niniwise helps small businesses turn messy operations into workflows their teams can actually run.",
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
      <section className="hero flex min-h-[72vh] items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="hero__container grid max-w-7xl mx-auto items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16 lg:px-12">
          {/* Main Content */}
          <div className="hero__content max-w-4xl">
            {/* Name & Title - Large Typography */}
            <div className="hero__intro mb-10 sm:mb-12 animate-fade-in">
              <h1 className="hero__title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 sm:mb-5 md:mb-6 leading-none tracking-tight">
                Femi
                <br />
                Afolabi
              </h1>
              <p className="hero__subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/60 mb-6 sm:mb-7 md:mb-8 font-light max-w-3xl">
                I build practical AI products and workflows for teams that want to move faster without adding complexity.
              </p>

              <p className="text-sm sm:text-base text-black/50 mb-7 sm:mb-8 max-w-2xl">
                I work with founders and small teams to turn messy processes into useful, shipped software.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <a
                  href="#company"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-sm sm:text-base font-medium text-white transition-colors hover:bg-black/80"
                >
                  See what I&apos;m building
                </a>
                <a
                  href="mailto:olufemiaf@gmail.com?subject=Let&apos;s work together"
                  className="inline-flex items-center justify-center rounded-lg border border-black/20 px-5 py-3 text-sm sm:text-base font-medium text-black transition-colors hover:border-black/50 hover:bg-black/5"
                >
                  Work with me
                </a>
              </div>

              <p className="text-xs sm:text-sm uppercase tracking-wider text-black/40 mb-8 sm:mb-10">
                Founder of Niniwise · AI product engineering · Workflow automation
              </p>

              {/* Social Links - Responsive Layout */}
              <div className="hero__social-wrapper flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="hero__social-links flex items-center gap-4 sm:gap-6">
                  <Link
                    href="https://github.com/olufemi424"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hero__social-link hero__social-link--github text-black/60 hover:text-black transition-colors"
                  >
                    <FaGithub className="hero__social-icon w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/olufemiafolabi91"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="hero__social-link hero__social-link--linkedin text-black/60 hover:text-black transition-colors"
                  >
                    <FaLinkedin className="hero__social-icon w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                  <Link
                    href="https://twitter.com/afofm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="hero__social-link hero__social-link--twitter text-black/60 hover:text-black transition-colors"
                  >
                    <FaTwitter className="hero__social-icon w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/olufemiaf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="hero__social-link hero__social-link--instagram text-black/60 hover:text-black transition-colors"
                  >
                    <FaInstagram className="hero__social-icon w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                </div>
                <span className="hidden sm:inline text-black/20">•</span>
                <div className="hero__email-wrapper flex items-center gap-2">
                  <span className="hero__email-text text-sm sm:text-base text-black/60 break-all sm:break-normal">
                    olufemiaf@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email to clipboard"
                    className="hero__email-copy-btn p-1.5 rounded hover:bg-black/5 transition-colors flex-shrink-0"
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
          </div>

          <div className="hero__portrait relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[2/3] rounded-[2rem] border border-white/80 bg-white/35 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-md ring-1 ring-black/5">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black/5">
                <Image
                  src={IMAGES.profile}
                  alt="Portrait of Femi Afolabi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="company py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-t border-black/10">
        <div className="company__container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="company__header max-w-4xl mb-14 sm:mb-16 md:mb-20">
            <p className="text-sm text-black/50 mb-4">{company.name} · Founded {company.founded}</p>
            <h2 className="company__name text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Practical systems for small businesses
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed font-light max-w-3xl">
              {company.description} We design the workflow, connect the tools, and build custom AI agents that work alongside the team.
            </p>
            <a
              href="https://niniwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm sm:text-base font-medium text-black transition-colors hover:text-black/60"
            >
              Visit Niniwise <FaExternalLinkAlt className="h-3 w-3" />
            </a>
          </div>

          <div className="grid gap-8 border-y border-black/10 py-8 sm:grid-cols-3 sm:gap-10 sm:py-10">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Workflow systems</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black/65">
                Turn repeated manual work into a clear process with owners, handoffs, and visible next steps.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Custom AI agents</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black/65">
                Agents prepare lists, draft replies, summarize information, and surface the next action while your team stays in control.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">Operational tools</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black/65">
                Simple dashboards, forms, check-in systems, and internal products built around how the business actually operates.
              </p>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 md:mt-20 grid gap-8 sm:grid-cols-3 sm:gap-10">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/45 mb-3 font-medium">Find the leak</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black/70">Map where leads, follow-ups, payments, or customer activity are being lost.</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/45 mb-3 font-medium">Build the smallest useful system</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black/70">Improve one important workflow before adding more complexity.</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-black/45 mb-3 font-medium">Train and improve</h3>
              <p className="text-sm sm:text-base leading-relaxed text-black/70">Make sure the people using the system can operate it, review it, and improve it over time.</p>
            </div>
          </div>

          <div className="mt-14 sm:mt-16">
            <Link
              href="mailto:olufemiaf@gmail.com?subject=Talk about a workflow"
              className="inline-flex items-center gap-2 text-black hover:text-black/60 transition-colors text-sm sm:text-base font-medium"
            >
              <span>Talk about a workflow</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};
