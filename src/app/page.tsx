/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaMedal, FaReact, FaNodeJs, FaJava, FaCss3Alt, FaUsers, FaChalkboardTeacher, FaFacebook } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiFlutter, SiFirebase, SiArduino, SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from 'react-icons/si';
import { GiPodium } from 'react-icons/gi';
import { TbBrandNextjs } from 'react-icons/tb';
import { FiCopy } from 'react-icons/fi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';

// Client-side only component for animations
const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ top: string; left: string; duration: number }>>([]);
  const [orbs, setOrbs] = useState<Array<{ width: number; height: number; left: string }>>([]);

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
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.duration}s linear infinite`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5"
            style={{
              width: orb.width,
              height: orb.height,
              left: orb.left,
              top: '-20%',
            }}
            animate={{
              top: ['-20%', '120%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * -2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default function Home() {
  const [orbs, setOrbs] = useState<Array<{ width: number; height: number; left: string }>>([]);

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
    <main className="min-h-screen bg-gradient-to-br from-black via-navy-900 to-blue-900 text-white relative overflow-hidden">
      <Preloader />
      {/* Animated background effects */}
      <AnimatedBackground />
      {/* Hero Section with enhanced animations */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
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
              className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-light tracking-wider"
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-slow relative">
                MD. Shibly Rahman Alve
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-xl -z-10"
                  animate={{
                    opacity: [0.5, 0.3, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
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
                  ease: "easeInOut"
                }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-slow">
                  Competitive Programmer
                </span>
                <span className="mx-3 text-cyan-400">&</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-slow">
                  Technology Enthusiast
                </span>
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

      {/* About Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 sm:px-4  relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass p-8 rounded-2xl shadow-2xl backdrop-blur-lg relative overflow-hidden group"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <motion.p
                  className="text-lg sm:text-base text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  I am a passionate problem solver with five years of experience in competitive programming, consistently tackling algorithmic challenges and optimizing solutions. With a strong foundation in data structures, algorithms, and mathematical reasoning, I have ranked in multiple national-level contests. Alongside my problem-solving expertise, I have worked on machine learning projects, applying AI techniques to real-world datasets. I am always excited to explore new technologies, collaborate on impactful projects, and solve real-world challenges through innovative software solutions.
                </motion.p>
                <motion.p
                  className="text-lg sm:text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Beyond competitions, I have maintained strong academic performance throughout my undergraduate studies, consistently excelling in coursework while balancing my passion for problem-solving. With a CGPA of around 3.9, I have demonstrated a deep understanding of core computer science subjects, including algorithms, machine learning, and object-oriented programming. My ability to manage both competitive programming and academics reflects my dedication, time management skills, and commitment to continuous learning.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
        <AnimatedBackground />
      </section>

      {/* Education Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-[60rem] mx-auto space-y-6">
              {/* SUST Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex items-center gap-6 flex-col sm:flex-row">
                  <div className="flex-shrink-0">
                    <Image
                      src="/sust.png"
                      alt="SUST Logo"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Shahjalal University of Science and Technology</h3>
                    <p className="text-gray-300">Bachelor of Science in Computer Science and Engineering</p>
                    <p className="text-gray-300">February 2020 - May 2025 (Expected)</p>
                    <p className="text-gray-300">Sylhet, Bangladesh</p>
                    <p className="text-gray-300">CGPA: 3.89 (up to 6th Semester)</p>
                  </div>
                </div>
              </motion.div>

              {/* Notre Dame College Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex items-center gap-6 flex-col sm:flex-row">
                  <div className="flex-shrink-0">
                    <Image
                      src="/ndc.png"
                      alt="Notre Dame College Logo"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Notre Dame College</h3>
                    <p className="text-gray-300">Higher Secondary Certificate</p>
                    <p className="text-gray-300">2017 - 2019</p>
                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                    <p className="text-gray-300">Board Merit Scholarship</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Accomplishments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {/* Codeforces */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/codeforces.svg"
                    alt="Codeforces Logo"
                    width={55}
                    height={55}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    Expert in Codeforces
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Max Rating: 1866
                  </p>
                </div>
              </motion.div>

              {/* Codechef */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/codechef.svg"
                    alt="Codechef Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    5★ Rated in Codechef
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Max Rating: 2031
                  </p>
                </div>
              </motion.div>

              {/* SUST Contest */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/sust.png"
                    alt="SUST Logo"
                    width={55}
                    height={55}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    SUST Inter University Programming Contest 2024
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Secured 5th Position
                  </p>
                </div>
              </motion.div>

              {/* NCPC */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-70 group-hover:opacity-85 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/ncpc.png"
                    alt="NCPC Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    National Collegiate Programming Contest 2023
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Secured 9th Position
                  </p>
                </div>
              </motion.div>

              {/* ICPC */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/icpc-logo.png"
                    alt="ICPC Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    ICPC Dhaka Regional 2024
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Secured 13th Position
                  </p>
                </div>
              </motion.div>

              {/* Prothom Alo */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <FaTrophy />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    Prothom Alo Bondhushova Programming Contest
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Champion
                  </p>
                </div>
              </motion.div>

              {/* Smart Bangladesh Day */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <FaMedal />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    Smart Bangladesh Day 2023 Programming Contest
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    2nd Runners Up
                  </p>
                </div>
              </motion.div>

              {/* SEC */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <FaMedal />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    SEC Inter University Junior Programming Contest 2022
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Secured 11th Position
                  </p>
                </div>
              </motion.div>

              {/* Problem Solving */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/idea.svg"
                    alt="Idea Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    Problem Solving
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Solved 2500+ problems across various online judges
                  </p>
                </div>
              </motion.div>

              {/* Country Rank */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group flex flex-col sm:flex-row justify-start items-center sm:items-start"
              >
                <div className="flex mb-4 sm:mb-0 sm:mr-4 justify-center sm:justify-end w-full sm:w-auto text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <GiPodium />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    National Rankings
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    Ranked 1st nationwide in Codeforces, Codechef, and Atcoder contests
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-3 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-[90rem] mx-auto">

              {/* Combinatorial Game Visualizer Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block w-full sm:w-5/12 lg:w-3/10"
              >
                <div className="relative w-full h-[300px] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/game-visualizer.webp"
                      alt="Combinatorial Game Visualizer"
                      width={800}
                      height={300}
                      className="w-full h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Combinatorial Game Visualizer</h3>
                  <p className="text-gray-300 mb-4">A visualizer for various combinatorial games like Nim, Misere Nim, Staircase Nim.</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <SiJavascript className="text-2xl text-[#F7DF1E]" title="JavaScript" />
                    <SiTailwindcss className="text-2xl text-[#06B6D4]" title="Tailwind CSS" />
                  </div>
                  {/* Hover Effects for Links */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2 justify-end">
                      <span
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Alve-2019331050/CombinatorialGame-Visualizer', '_blank')}
                      >
                        Github Repo
                      </span>
                      <span
                        className="btn bg-purple-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://alve-2019331050.github.io/CombinatorialGame-Visualizer/', '_blank')}
                      >
                        Live Demo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Proxy Killer Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block w-full sm:w-5/12 lg:w-3/10"
              >
                <div className="relative w-full h-[300px] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/proxy-killer.png"
                      alt="Proxy Killer"
                      width={800}
                      height={300}
                      className="w-full h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Proxy Killer</h3>
                  <p className="text-gray-300 mb-4">A flutter-based mobile app to automate the attendance system of universities using IOT devices.</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <SiFlutter className="text-2xl text-[#02569B]" title="Flutter" />
                    <SiFirebase className="text-2xl text-[#FFCA28]" title="Firebase" />
                    <SiArduino className="text-2xl text-[#00979D]" title="Arduino/IoT" />
                  </div>
                  {/* Hover Effects for Links */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1 justify-end">
                      <span
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Alve-2019331050/Proxy-Killer', '_blank')}
                      >
                        Github Repo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ahiri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block w-full sm:w-5/12 lg:w-3/10"
              >
                <div className="relative w-full h-[300px] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/ahiri.png"
                      alt="Ahiri"
                      width={800}
                      height={300}
                      className="w-full h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Ahiri</h3>
                  <p className="text-gray-300 mb-4">A music player built using JavaFx.</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <FaJava className="text-2xl text-[#007396]" title="Java" />
                    <FaCss3Alt className="text-2xl text-[#1572B6]" title="CSS" />
                  </div>
                  {/* Hover Effects for Links */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1 justify-end">
                      <span
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Alve-2019331050/Ahiri', '_blank')}
                      >
                        Github Repo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Paper Watch Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block w-full sm:w-5/12 lg:w-3/10"
              >
                <div className="relative w-full h-[300px] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/exam-paper-tracker.svg"
                      alt="Paper Watch"
                      width={800}
                      height={300}
                      className="w-full h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Paper Watch</h3>
                  <p className="text-gray-300 mb-4">A web-based application developed for tracking the status of exam papers online.</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <FaReact className="text-2xl text-[#61DAFB]" title="React.js" />
                    <SiExpress className="text-2xl text-[#000000]" title="Express.js" />
                    <FaNodeJs className="text-2xl text-[#339933]" title="Node.js" />
                    <SiMongodb className="text-2xl text-[#47A248]" title="MongoDB" />
                    <SiTailwindcss className="text-2xl text-[#06B6D4]" title="Tailwind CSS" />
                  </div>
                  {/* Hover Effects for Links */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2 justify-end">
                      <span
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Fahad-Bin-Mahbub/Project_350_Frontend', '_blank')}
                      >
                        Frontend Repo
                      </span>
                      <span
                        className="btn bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Fahad-Bin-Mahbub/Project_350_Backend', '_blank')}
                      >
                        Backend Repo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Recycle Bin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block w-full sm:w-5/12 lg:w-3/10"
              >
                <div className="relative w-full h-[300px] bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/recycle-bin.png"
                      alt="Recycle Bin"
                      width={800}
                      height={300}
                      className="w-full h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Recycle Bin</h3>
                  <p className="text-gray-300 mb-4">A web-based application to buy and sell old products.</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <TbBrandNextjs className="text-2xl text-white" title="Next.js" />
                    <SiTailwindcss className="text-2xl text-[#06B6D4]" title="Tailwind CSS" />
                    <SiExpress className="text-2xl text-[#000000]" title="Express.js" />
                    <Image
                      src="/mysql.svg"
                      alt="MySQL"
                      width={24}
                      height={24}
                      className="object-contain"
                      title="MySQL"
                    />
                  </div>
                  {/* Hover Effects for Links */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2 justify-end">
                      <span
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Alve-2019331050/recycle-bin-frontend', '_blank')}
                      >
                        Frontend Repo
                      </span>
                      <span
                        className="btn bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => window.open('https://github.com/Alve-2019331050/recycle-bin-backend', '_blank')}
                      >
                        Backend Repo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Research Publications Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-3 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Research Publications</h2>
            <div className="max-w-[60rem] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/iccit.jpg"
                      alt="ICCIT Logo"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1 mt-4 sm:mt-0">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      Relevancy Classification of Bangla Social Media Comments Using Transformer Architecture
                    </h3>
                    <p className="text-gray-300">Accepted at IEEE ICCIT 2024</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ProblemSetting and Judgement Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-3 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">ProblemSetting & Judgement</h2>
            <div className="max-w-[60rem] mx-auto space-y-6 sm:space-y-6 md:space-y-8">
              {/* Codechef Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <Image
                      src="/codechef.svg"
                      alt="Codechef Logo"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Codechef Starter145</h3>
                    <p className="text-gray-300">Problem Setter</p>
                  </div>
                </div>
              </motion.div>

              {/* Leading University Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <Image
                      src="/leading-university.jpg"
                      alt="Leading University Logo"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Leading University Inter University Junior Programming Contest 2024</h3>
                    <p className="text-gray-300">Problem Setter & Tester</p>
                  </div>
                </div>
              </motion.div>

              {/* SUST Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <Image
                      src="/sust.png"
                      alt="SUST Logo"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Intra SUST Programming Contest 2023</h3>
                    <p className="text-gray-300">Problem Setter, Tester & Judge</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Voluntary Activities Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-3 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Voluntary Activities</h2>
            <div className="max-w-[60rem] mx-auto space-y-6">
              {/* Training Camp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <FaChalkboardTeacher className="w-20 h-20 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Trainer</h3>
                    <p className="text-gray-300">SUST Competitive Programming Training Camp</p>
                  </div>
                </div>
              </motion.div>

              {/* Mentorship */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <FaUsers className="w-20 h-20 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Appointed Mentor for Juniors</h3>
                    <p className="text-gray-300">SUST Competitive Programming Community</p>
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
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
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
