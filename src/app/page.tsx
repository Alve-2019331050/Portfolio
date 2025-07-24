/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Preloader from "@/components/Preloader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaChalkboardTeacher,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMedal,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";

// Client-side only component for animations
const AnimatedBackground = () => {
  const [particles, setParticles] = useState<
    Array<{ top: string; left: string; duration: number }>
  >([]);
  const [orbs, setOrbs] = useState<
    Array<{ width: number; height: number; left: string }>
  >([]);

  useEffect(() => {
    setParticles(
      [...Array(5)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 4,
      }))
    );

    setOrbs(
      [...Array(20)].map(() => ({
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        left: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amethyst-400 rounded-full opacity-20"
            style={{
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.duration}s linear infinite`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amethyst-500/3"
            style={{
              width: orb.width,
              height: orb.height,
              left: orb.left,
              top: "-20%",
            }}
            animate={{
              top: ["-20%", "120%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * -2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default function Home() {
  const [orbs, setOrbs] = useState<
    Array<{ width: number; height: number; left: string }>
  >([]);

  useEffect(() => {
    setOrbs(
      [...Array(20)].map(() => ({
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        left: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-obsidian-950 to-amethyst-950 text-white relative overflow-hidden">
      <Preloader />
      {/* Animated background effects */}
      <AnimatedBackground />
      {/* Hero Section with enhanced animations */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        {/* Blooming backlight effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-[1000px] h-[600px] bg-gradient-radial from-pink-500/18 via-sapphire-500/15 to-sapphire-700/10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-[800px] h-[500px] bg-gradient-radial from-sapphire-400/12 via-pink-400/8 to-transparent blur-2xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          style={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-2xl sm:text-3xl md:text-4xl text-pink-300 font-light tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold relative mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
                MD. Shibly Rahman Alve
              </span>
            </motion.h1>

            <motion.div
              className="mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p
                className="text-lg sm:text-xl md:text-2xl relative inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-obsidian-300">
                  Competitive Programmer
                </span>
                <span className="mx-3 text-pink-300">|</span>
                <span className="text-obsidian-300">Technology Enthusiast</span>
              </motion.p>
            </motion.div>
            <div className="flex justify-center space-x-6 flex-wrap gap-6">
              <a
                href="https://github.com/Alve-2019331050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-3xl text-[#efefef] hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alverahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-3xl text-[#0077B5] hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:alverohman2000@gmail.com"
                className="text-4xl sm:text-3xl text-[#EA4335] hover:text-[#BB001B] transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.facebook.com/alve.rahman.699672"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-3xl text-[#1877F2] hover:text-[#165ECA] transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://codeforces.com/profile/AlveRahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-3xl transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <Image
                  src="/codeforces.svg"
                  alt="Codeforces Logo"
                  width={37}
                  height={37}
                  className="rounded-lg w-[37px] sm:w-[31px] md:w-[34px] lg:w-[37px] h-auto relative top-[-5px]"
                />
              </a>
              <a
                href="https://www.codechef.com/users/alve2000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-3xl text-[#D2691E] hover:text-[#DEB887] transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <SiCodechef />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              My journey in the tech industry with hands-on experience in AI and
              software development.
            </p>

            {/* Clean Timeline Design */}
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amethyst-500 to-sapphire-500 rounded-full"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* Current Role - Chaldal */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-amethyst-500 to-sapphire-500 rounded-full border-4 border-obsidian-950 shadow-lg shadow-amethyst-500/40">
                    <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="glass p-6 rounded-xl group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-amethyst-300 mb-1">
                          Software Engineer L2
                        </h3>
                        <p className="text-sapphire-300 font-medium">Chaldal</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm">
                          June 2025 - Present
                        </div>
                        <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                          Current
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-sapphire-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-obsidian-300 text-sm leading-relaxed">
                          Diagnosed and resolved high-impact production issues
                          such as duplicated analysis requests and invalid audio
                          processing, reducing operational cost
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amethyst-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-obsidian-300 text-sm leading-relaxed">
                          Contributing to the design and enhancement of
                          Chaldal's internal AI-driven call analysis platform
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI/ML",
                        "System Design",
                        "Production Support",
                        "Call Analysis",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-amethyst-500/20 text-amethyst-200 px-3 py-1 rounded-full text-xs border border-amethyst-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Previous Role - Micro1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-amethyst-500 rounded-full border-4 border-obsidian-950 shadow-lg shadow-pink-500/40">
                    <div className="absolute inset-1 bg-gradient-to-r from-pink-300 to-amethyst-300 rounded-full"></div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="glass p-6 rounded-xl group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-pink-300 mb-1">
                          AI Trainer
                        </h3>
                        <p className="text-amethyst-300 font-medium">
                          Micro1 (Remote)
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                        April 2025 - June 2025
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-obsidian-300 text-sm leading-relaxed">
                          Designed comprehensive testcase suites for competitive
                          programming prompts
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amethyst-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-obsidian-300 text-sm leading-relaxed">
                          Maintained FNR (False Negative Rate) and FPR (False
                          Positive Rate) benchmarks below 10%
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "C++",
                        "Testlib",
                        "Algorithm Design",
                        "Quality Assurance",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-xs border border-pink-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              My academic journey and achievements.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* SUST Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl group"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/sust.png"
                        alt="SUST Logo"
                        width={120}
                        height={120}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-2xl font-bold text-amethyst-300">
                        Shahjalal University of Science and Technology
                      </h3>
                      <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                        2020 - 2025
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg text-sapphire-300 font-medium">
                        Bachelor of Science in Computer Science and Engineering
                      </p>
                      <p className="text-obsidian-300">Sylhet, Bangladesh</p>
                    </div>

                    {/* CGPA Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-amethyst-500/20 border border-pink-500/30 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-pink-300 font-medium">
                        CGPA: 3.90
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Notre Dame College Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl group"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* College Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/ndc.png"
                        alt="Notre Dame College Logo"
                        width={120}
                        height={120}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-amethyst-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-2xl font-bold text-pink-300">
                        Notre Dame College
                      </h3>
                      <div className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        2017 - 2019
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg text-amethyst-300 font-medium">
                        Higher Secondary Certificate
                      </p>
                      <p className="text-obsidian-300">Dhaka, Bangladesh</p>
                    </div>

                    {/* GPA and Achievement Badges */}
                    <div className="flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-amethyst-500/20 border border-pink-500/30 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-pink-300 font-medium">
                          GPA: 5.00
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sapphire-500/20 to-pink-500/20 border border-sapphire-500/30 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-sapphire-400 rounded-full"></div>
                        <span className="text-sapphire-300 font-medium">
                          Board Merit Scholarship
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Accomplishments
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              Competitive programming achievements and recognition in the tech
              community.
            </p>

            <div className="max-w-7xl mx-auto">
              {/* Competitive Programming Ratings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Codeforces */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src="/codeforces.svg"
                        alt="Codeforces Logo"
                        width={60}
                        height={60}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amethyst-300 mb-1">
                        Expert in Codeforces
                      </h3>
                      <p className="text-sapphire-300 font-medium">
                        Max Rating: 1866
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Expert
                    </div>
                  </div>
                </motion.div>

                {/* Codechef */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src="/codechef.svg"
                        alt="Codechef Logo"
                        width={60}
                        height={60}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-amethyst-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-pink-300 mb-1">
                        5★ Rated in Codechef
                      </h3>
                      <p className="text-amethyst-300 font-medium">
                        Max Rating: 2031
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      5★
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contest Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* SUST Contest */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src="/sust.png"
                        alt="SUST Logo"
                        width={50}
                        height={50}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-gradient-to-r from-sapphire-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      5th Position
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-sapphire-300 mb-2">
                    SUST Inter University Programming Contest 2024
                  </h3>
                  <p className="text-obsidian-300 text-sm">
                    Competitive programming excellence
                  </p>
                </motion.div>

                {/* DUET Contest */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src="/duet logo.png"
                        alt="DUET Logo"
                        width={50}
                        height={50}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      7th Position
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-amethyst-300 mb-2">
                    DUET Inter University Programming Contest 2025
                  </h3>
                  <p className="text-obsidian-300 text-sm">
                    Competitive programming excellence
                  </p>
                </motion.div>

                {/* NCPC */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src="/ncpc.png"
                        alt="NCPC Logo"
                        width={50}
                        height={50}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-amethyst-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      9th Position
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-pink-300 mb-2">
                    National Collegiate Programming Contest 2023
                  </h3>
                  <p className="text-obsidian-300 text-sm">
                    National level competition
                  </p>
                </motion.div>

                {/* ICPC */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src="/icpc-logo.png"
                        alt="ICPC Logo"
                        width={50}
                        height={50}
                        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-gradient-to-r from-sapphire-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      13th Position
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-sapphire-300 mb-2">
                    ICPC Dhaka Regional 2024
                  </h3>
                  <p className="text-obsidian-300 text-sm">
                    International competition
                  </p>
                </motion.div>

                {/* Prothom Alo */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaTrophy className="text-2xl text-amethyst-300" />
                    </div>
                    <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Champion
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-amethyst-300 mb-2">
                    Prothom Alo Bondhushova Programming Contest
                  </h3>
                  <p className="text-obsidian-300 text-sm">
                    First place achievement
                  </p>
                </motion.div>

                {/* Smart Bangladesh Day */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500/20 to-amethyst-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaMedal className="text-2xl text-pink-300" />
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      2nd Runners Up
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-pink-300 mb-2">
                    Smart Bangladesh Day 2023 Programming Contest
                  </h3>
                  <p className="text-obsidian-300 text-sm">
                    Government initiative competition
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          {/* Floating Background Elements */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-amethyst-400 to-pink-400 rounded-full opacity-60 blur-sm"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-sapphire-400 to-amethyst-400 rounded-full opacity-40 blur-sm"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-3 h-3 bg-gradient-to-r from-pink-400 to-sapphire-400 rounded-full opacity-50 blur-sm"
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-6 h-full">
              {Array.from({ length: 32 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-amethyst-500 to-sapphire-500 rounded-lg"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Tech Particles */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-70"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-3 h-3 bg-sapphire-400 rounded-full opacity-60"
            animate={{
              y: [0, 35, 0],
              x: [0, -25, 0],
              scale: [1, 0.7, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amethyst-400 rounded-full opacity-80"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              Innovative solutions and applications showcasing my technical
              expertise.
            </p>

            <div className="max-w-7xl mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                {/* Combinatorial Game Visualizer */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl overflow-hidden group relative"
                  whileHover={{
                    y: -8,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amethyst-500 via-pink-500 to-sapphire-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #a770ff, #ec4899, #60a5fa)",
                        "linear-gradient(45deg, #60a5fa, #a770ff, #ec4899)",
                        "linear-gradient(45deg, #ec4899, #60a5fa, #a770ff)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="absolute inset-[2px] rounded-2xl bg-obsidian-950"></div>

                  <div className="relative z-10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/game-visualizer.webp"
                        alt="Combinatorial Game Visualizer"
                        width={800}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent"></div>

                      {/* Floating Tech Icons */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-amethyst-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      >
                        <span className="text-amethyst-300 text-sm font-bold">
                          JS
                        </span>
                      </motion.div>

                      {/* Animated Corner Accent */}
                      <motion.div
                        className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-amethyst-500/20 to-transparent rounded-br-2xl"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-amethyst-300 group-hover:text-amethyst-200 transition-colors duration-300">
                          Combinatorial Game Visualizer
                        </h3>
                        <motion.div
                          className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Web App
                        </motion.div>
                      </div>
                      <p className="text-obsidian-300 mb-4 leading-relaxed group-hover:text-obsidian-200 transition-colors duration-300">
                        A visualizer for various combinatorial games like Nim,
                        Misere Nim, and Staircase Nim with interactive gameplay.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <motion.span
                          className="bg-amethyst-500/20 text-amethyst-200 px-3 py-1 rounded-full text-xs border border-amethyst-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(167, 112, 255, 0.3)",
                          }}
                        >
                          JavaScript
                        </motion.span>
                        <motion.span
                          className="bg-sapphire-500/20 text-sapphire-200 px-3 py-1 rounded-full text-xs border border-sapphire-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(96, 165, 250, 0.3)",
                          }}
                        >
                          Tailwind CSS
                        </motion.span>
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://github.com/Alve-2019331050/CombinatorialGame-Visualizer",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(167, 112, 255, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5,
                            }}
                          />
                          <span className="relative z-10">GitHub</span>
                        </motion.button>
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://alve-2019331050.github.io/CombinatorialGame-Visualizer/",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1,
                            }}
                          />
                          <span className="relative z-10">Live Demo</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Proxy Killer */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl overflow-hidden group relative"
                  whileHover={{
                    y: -8,
                    rotateY: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-amethyst-500 to-sapphire-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #ec4899, #a770ff, #60a5fa)",
                        "linear-gradient(45deg, #60a5fa, #ec4899, #a770ff)",
                        "linear-gradient(45deg, #a770ff, #60a5fa, #ec4899)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <div className="absolute inset-[2px] rounded-2xl bg-obsidian-950"></div>

                  <div className="relative z-10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/proxy-killer.png"
                        alt="Proxy Killer"
                        width={800}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent"></div>

                      {/* Floating Tech Icons */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-pink-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 1,
                        }}
                      >
                        <span className="text-pink-300 text-sm font-bold">
                          FL
                        </span>
                      </motion.div>

                      {/* Animated Corner Accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-bl-2xl"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
                          Proxy Killer
                        </h3>
                        <motion.div
                          className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Mobile App
                        </motion.div>
                      </div>
                      <p className="text-obsidian-300 mb-4 leading-relaxed group-hover:text-obsidian-200 transition-colors duration-300">
                        A Flutter-based mobile app to automate university
                        attendance systems using IoT devices and smart
                        technology.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <motion.span
                          className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-xs border border-pink-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(236, 72, 153, 0.3)",
                          }}
                        >
                          Flutter
                        </motion.span>
                        <motion.span
                          className="bg-amethyst-500/20 text-amethyst-200 px-3 py-1 rounded-full text-xs border border-amethyst-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(167, 112, 255, 0.3)",
                          }}
                        >
                          Firebase
                        </motion.span>
                        <motion.span
                          className="bg-sapphire-500/20 text-sapphire-200 px-3 py-1 rounded-full text-xs border border-sapphire-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(96, 165, 250, 0.3)",
                          }}
                        >
                          IoT
                        </motion.span>
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://github.com/Alve-2019331050/Proxy-Killer",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1.5,
                            }}
                          />
                          <span className="relative z-10">GitHub</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Paper Watch */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl overflow-hidden group relative"
                  whileHover={{
                    y: -8,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sapphire-500 via-pink-500 to-amethyst-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #60a5fa, #ec4899, #a770ff)",
                        "linear-gradient(45deg, #a770ff, #60a5fa, #ec4899)",
                        "linear-gradient(45deg, #ec4899, #a770ff, #60a5fa)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                  <div className="absolute inset-[2px] rounded-2xl bg-obsidian-950"></div>

                  <div className="relative z-10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/exam-paper-tracker.svg"
                        alt="Paper Watch"
                        width={800}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent"></div>

                      {/* Floating Tech Icons */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-sapphire-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                        animate={{
                          y: [0, -12, 0],
                          rotate: [0, 8, 0],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: 0.8,
                        }}
                      >
                        <span className="text-sapphire-300 text-sm font-bold">
                          R
                        </span>
                      </motion.div>

                      {/* Animated Corner Accent */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-sapphire-500/20 to-transparent rounded-tr-2xl"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-sapphire-300 group-hover:text-sapphire-200 transition-colors duration-300">
                          Paper Watch
                        </h3>
                        <motion.div
                          className="bg-gradient-to-r from-sapphire-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Full Stack
                        </motion.div>
                      </div>
                      <p className="text-obsidian-300 mb-4 leading-relaxed group-hover:text-obsidian-200 transition-colors duration-300">
                        A web-based application for tracking exam paper status
                        online with real-time updates and notifications.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <motion.span
                          className="bg-sapphire-500/20 text-sapphire-200 px-3 py-1 rounded-full text-xs border border-sapphire-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(96, 165, 250, 0.3)",
                          }}
                        >
                          React
                        </motion.span>
                        <motion.span
                          className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-xs border border-pink-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(236, 72, 153, 0.3)",
                          }}
                        >
                          Node.js
                        </motion.span>
                        <motion.span
                          className="bg-amethyst-500/20 text-amethyst-200 px-3 py-1 rounded-full text-xs border border-amethyst-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(167, 112, 255, 0.3)",
                          }}
                        >
                          MongoDB
                        </motion.span>
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://github.com/Fahad-Bin-Mahbub/Project_350_Frontend",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-sapphire-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 2,
                            }}
                          />
                          <span className="relative z-10">Frontend</span>
                        </motion.button>
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://github.com/Fahad-Bin-Mahbub/Project_350_Backend",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 2.5,
                            }}
                          />
                          <span className="relative z-10">Backend</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Recycle Bin */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl overflow-hidden group relative"
                  whileHover={{
                    y: -8,
                    rotateY: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amethyst-500 via-sapphire-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #a770ff, #60a5fa, #ec4899)",
                        "linear-gradient(45deg, #ec4899, #a770ff, #60a5fa)",
                        "linear-gradient(45deg, #60a5fa, #ec4899, #a770ff)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                  />
                  <div className="absolute inset-[2px] rounded-2xl bg-obsidian-950"></div>

                  <div className="relative z-10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/recycle-bin.png"
                        alt="Recycle Bin"
                        width={800}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent"></div>

                      {/* Floating Tech Icons */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-amethyst-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, -8, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: 1.2,
                        }}
                      >
                        <span className="text-amethyst-300 text-sm font-bold">
                          N
                        </span>
                      </motion.div>

                      {/* Animated Corner Accent */}
                      <motion.div
                        className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-amethyst-500/20 to-transparent rounded-tl-2xl"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 4 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-amethyst-300 group-hover:text-amethyst-200 transition-colors duration-300">
                          Recycle Bin
                        </h3>
                        <motion.div
                          className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          E-commerce
                        </motion.div>
                      </div>
                      <p className="text-obsidian-300 mb-4 leading-relaxed group-hover:text-obsidian-200 transition-colors duration-300">
                        A web-based marketplace for buying and selling used
                        products.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <motion.span
                          className="bg-amethyst-500/20 text-amethyst-200 px-3 py-1 rounded-full text-xs border border-amethyst-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(167, 112, 255, 0.3)",
                          }}
                        >
                          Next.js
                        </motion.span>
                        <motion.span
                          className="bg-sapphire-500/20 text-sapphire-200 px-3 py-1 rounded-full text-xs border border-sapphire-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(96, 165, 250, 0.3)",
                          }}
                        >
                          Express
                        </motion.span>
                        <motion.span
                          className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-xs border border-pink-500/30"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(236, 72, 153, 0.3)",
                          }}
                        >
                          MySQL
                        </motion.span>
                      </div>
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://github.com/Alve-2019331050/recycle-bin-frontend",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(167, 112, 255, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 3,
                            }}
                          />
                          <span className="relative z-10">Frontend</span>
                        </motion.button>
                        <motion.button
                          onClick={() =>
                            window.open(
                              "https://github.com/Alve-2019331050/recycle-bin-backend",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-sapphire-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 3.5,
                            }}
                          />
                          <span className="relative z-10">Backend</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Research Publications
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              Academic contributions and research work in the field of computer
              science.
            </p>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Conference Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/iccit.jpg"
                        alt="ICCIT Logo"
                        width={120}
                        height={120}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Publication Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        IEEE Conference
                      </div>
                      <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
                        Accepted
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-amethyst-300 group-hover:text-amethyst-200 transition-colors duration-300 leading-tight">
                      Relevancy Classification of Bangla Social Media Comments
                      Using Transformer Architecture
                    </h3>

                    <div className="space-y-2">
                      <p className="text-sapphire-300 font-medium">
                        IEEE ICCIT 2024
                      </p>
                      <p className="text-obsidian-300">
                        International Conference on Computer and Information
                        Technology
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amethyst-500/20 text-amethyst-200 px-3 py-1 rounded-full text-xs border border-amethyst-500/30">
                        Natural Language Processing
                      </span>
                      <span className="bg-sapphire-500/20 text-sapphire-200 px-3 py-1 rounded-full text-xs border border-sapphire-500/30">
                        Transformer Architecture
                      </span>
                      <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-xs border border-pink-500/30">
                        Bangla Language
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ProblemSetting and Judgement Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Problem Setting & Judgement
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              Experience in creating and evaluating competitive programming
              problems.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Codechef */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/codechef.svg"
                        alt="Codechef Logo"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-amethyst-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
                        Codechef Starter145
                      </h3>
                      <div className="bg-gradient-to-r from-pink-500 to-amethyst-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Problem Setter
                      </div>
                    </div>
                    <p className="text-obsidian-300">
                      Global competitive programming platform
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Leading University */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/leading-university.jpg"
                        alt="Leading University Logo"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-sapphire-300 group-hover:text-sapphire-200 transition-colors duration-300">
                        Leading University Inter University Junior Programming
                        Contest 2024
                      </h3>
                      <div className="bg-gradient-to-r from-sapphire-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                        Problem Setter & Tester
                      </div>
                    </div>
                    <p className="text-obsidian-300">
                      University-level competitive programming event
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Father Timm Memorial Programming Contest */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/ndc.png"
                        alt="NDC Logo"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-amethyst-300 group-hover:text-amethyst-200 transition-colors duration-300">
                        Father Timm Memorial Programming Contest 5.0
                      </h3>
                      <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Problem Setter
                      </div>
                    </div>
                    <p className="text-obsidian-300">
                      Memorial programming competition
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SUST */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/sust.png"
                        alt="SUST Logo"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-sapphire-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-amethyst-300 group-hover:text-amethyst-200 transition-colors duration-300">
                        Intra SUST Programming Contest 2023
                      </h3>
                      <div className="bg-gradient-to-r from-amethyst-500 to-sapphire-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Problem Setter, Tester & Judge
                      </div>
                    </div>
                    <p className="text-obsidian-300">
                      Internal university programming competition
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voluntary Activities Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-amethyst-200 via-pink-200 to-sapphire-200 bg-clip-text text-transparent">
              Voluntary Activities
            </h2>
            <p className="text-obsidian-300 text-center text-lg mb-16 max-w-2xl mx-auto">
              Contributing to the community through teaching and mentorship.
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Training Camp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-pink-500/20 to-amethyst-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaChalkboardTeacher className="w-10 h-10 text-pink-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-amethyst-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
                      Trainer
                    </h3>
                    <p className="text-obsidian-300 leading-relaxed">
                      SUST Competitive Programming Training Camp
                    </p>
                    <div className="bg-gradient-to-r from-pink-500/20 to-amethyst-500/20 border border-pink-500/30 px-4 py-2 rounded-full text-sm">
                      <span className="text-pink-300 font-medium">
                        Teaching & Mentoring
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mentorship */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-sapphire-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="w-10 h-10 text-sapphire-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sapphire-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-sapphire-300 group-hover:text-sapphire-200 transition-colors duration-300">
                      Appointed Mentor for Juniors
                    </h3>
                    <p className="text-obsidian-300 leading-relaxed">
                      SUST Competitive Programming Community
                    </p>
                    <div className="bg-gradient-to-r from-sapphire-500/20 to-pink-500/20 border border-sapphire-500/30 px-4 py-2 rounded-full text-sm">
                      <span className="text-sapphire-300 font-medium">
                        Leadership & Guidance
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to collaborate!
            </p>
            <a
              href="mailto:alverohman2000@gmail.com"
              className="inline-block bg-gradient-to-r from-amethyst-600 to-sapphire-600 hover:from-amethyst-700 hover:to-sapphire-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-amethyst-500/40 btn-professional border border-amethyst-500/20"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>

      {/* Copyright Footer */}
      <div className="w-full py-4 sm:py-6 text-center bg-black/30 backdrop-blur-sm mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-sm sm:text-base px-4">
          <FiCopy className="text-lg" />
          <span>&copy; 2025 MD. Shibly Rahman Alve. All rights reserved.</span>
        </div>
      </div>
    </main>
  );
}
