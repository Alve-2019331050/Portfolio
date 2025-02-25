/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaMedal, FaReact, FaNodeJs, FaJava, FaCss3Alt, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiFlutter, SiFirebase, SiArduino } from 'react-icons/si';
import { GiPodium } from 'react-icons/gi';
import { TbBrandNextjs } from 'react-icons/tb';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
      {/* Animated background effects */}
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4 glow-text animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Hi, I'm MD. Shibly Rahman Alve
            </h1>
            <p className="text-2xl text-blue-200 mb-8 floating">
              Competitive Programmer, Technology Enthusiast
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Alve-2019331050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-[#333] hover:text-[#24292e] dark:text-[#efefef] dark:hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alverahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-[#0077B5] hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:alverohman2000@gmail.com"
                className="text-4xl text-[#EA4335] hover:text-[#BB001B] transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform cursor-pointer"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 relative z-10">
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
                  className="text-lg text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  I am a passionate problem solver with five years of experience in competitive programming, consistently tackling algorithmic challenges and optimizing solutions. With a strong foundation in data structures, algorithms, and mathematical reasoning, I have ranked in multiple national-level contests. Alongside my problem-solving expertise, I have worked on machine learning projects, applying AI techniques to real-world datasets. I am always eager to learn, innovate, and take on challenging problems in software development and AI.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Beyond competition, I'm deeply involved in nurturing the next generation of programmers through mentoring and training camps. My technical expertise spans across modern web technologies, and I'm always excited to tackle new challenges and create innovative solutions.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
        <AnimatedBackground />
      </section>

      {/* Education Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-3 md:px-6 lg:px-8">
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
                <div className="p-6 flex items-center gap-6">
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
                <div className="p-6 flex items-center gap-6">
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
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Accomplishments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {/* Codeforces */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/codeforces.svg"
                    alt="Codeforces Logo"
                    width={55}
                    height={55}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Expert in Codeforces
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Max Rating: 1866
                </p>
              </motion.div>

              {/* Codechef */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/codechef.svg"
                    alt="Codechef Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  5★ Rated in Codechef
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Max Rating: 2031
                </p>
              </motion.div>

              {/* SUST Contest */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/sust.png"
                    alt="SUST Logo"
                    width={55}
                    height={55}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  SUST Inter University Programming Contest 2024
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Secured 5th Position
                </p>
              </motion.div>

              {/* NCPC */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-70 group-hover:opacity-85 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/ncpc.png"
                    alt="NCPC Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  National Collegiate Programming Contest 2023
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Secured 9th Position
                </p>
              </motion.div>

              {/* ICPC */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/icpc-logo.png"
                    alt="ICPC Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  ICPC Dhaka Regional 2024
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Secured 13th Position
                </p>
              </motion.div>

              {/* Prothom Alo */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <FaTrophy />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Prothom Alo Bondhushova Programming Contest
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Champion
                </p>
              </motion.div>

              {/* Smart Bangladesh Day */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <FaMedal />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Smart Bangladesh Day 2023 Programming Contest
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  2nd Runners Up
                </p>
              </motion.div>

              {/* SEC */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <FaMedal />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  SEC Inter University Junior Programming Contest 2022
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Secured 11th Position
                </p>
              </motion.div>

              {/* Problem Solving */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src="/idea.svg"
                    alt="Idea Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  Problem Solving
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Solved 2500+ problems across various online judges
                </p>
              </motion.div>

              {/* Country Rank */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                }}
                className="glass card-hover p-6 rounded-xl relative group"
              >
                <div className="absolute right-4 top-4 text-4xl text-[#FFD700] opacity-50 group-hover:opacity-80 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <GiPodium />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  National Rankings
                </h3>
                <p className="text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                  Ranked 1st nationwide in Codeforces, Codechef, and Atcoder contests
                </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90rem] mx-auto">
              {/* First row with 3 projects */}
              <motion.a
                href="https://github.com/Alve-2019331050/CombinatorialGame-Visualizer"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block"
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
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Alve-2019331050/proxy-killer"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block"
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
                  <p className="text-gray-300 mb-4">A flutter based mobile app to automate attendance system of universities.</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <SiFlutter className="text-2xl text-[#02569B]" title="Flutter" />
                    <SiFirebase className="text-2xl text-[#FFCA28]" title="Firebase" />
                    <SiArduino className="text-2xl text-[#00979D]" title="Arduino/IoT" />
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Alve-2019331050/Ahiri"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block"
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
                  <p className="text-gray-300 mb-4">A music player built using JavaFx</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <FaJava className="text-2xl text-[#007396]" title="Java" />
                    <FaCss3Alt className="text-2xl text-[#1572B6]" title="CSS" />
                  </div>
                </div>
              </motion.a>

              {/* Second row with 2 projects - centered */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center gap-8">
                <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[calc((100%-2rem)/3*2+1rem)]">
                  <motion.a
                    href="https://github.com/Alve-2019331050/paper-watch"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block"
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
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Alve-2019331050/recycle-bin-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 block"
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
                    </div>
                  </motion.a>
                </div>
              </div>
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
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-[140px]"
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
                  <div>
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
            <div className="max-w-[60rem] mx-auto space-y-6">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-[150px]"
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="flex-shrink-0">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-[150px]"
              >
                <div className="p-6 flex items-center gap-6">
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
    </main>
  );
}
