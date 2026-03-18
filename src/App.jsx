import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Menu } from "lucide-react";
import {
  FaGithub,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiDart,
  SiTailwindcss,
  SiVite,
  SiCanva,
} from "react-icons/si";

const projects = [
  {
    title: "VORA",
    category: "Study Related Platform Mobile App",
    description:
      "A study-focused mobile application designed to support students through features such as a dashboard, AI study chatbot, mood tracker, notes section, motivation and quotes, coursework breakdown, task management, calendar integration, and a Pomodoro timer, all within a centralized and user-friendly digital platform.",
    role: "Team Leader",
    tech: ["Flutter", "Firebase"],
    status: "Completed",
    github: "https://github.com/VB701k/VORA",
  },
  {
    title: "RAPT",
    category: "Rental Agreements and Payments Platform",
    description:
      "A web-based platform developed to assist landlords and tenants in managing rental agreements, tracking rent payments securely, and maintaining digital contract records in an organized manner. The system aims to streamline rental management workflows by improving accessibility, reducing manual record-keeping, and supporting a more efficient and reliable property management process.",
    role: "Leader",
    tech: ["React (Vite)", "Java Spring Boot"],
    status: "Ongoing",
    github: "https://github.com/Shri-1019/RAPT",
  },
  {
    title: "Climate Action Platform",
    category: "Front-End Development",
    description:
      "Developed a responsive website focused on climate change awareness in alignment with Sustainable Development Goal 13 (Climate Action). The project emphasized user-friendly front-end design, responsive layout implementation, and effective presentation of environmental content to ensure accessibility and engagement across multiple screen sizes.",
    role: "Group Leader",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    github: "https://github.com/Shri-1019/Earth-In-Force-web-development-",
  },
  {
    title: "GUI Task Manager",
    category: "Python Desktop Application",
    description:
      "Created a modern task manager application using Python Tkinter for quick and efficient task handling.",
    role: "Individual Project",
    tech: ["Python", "Tkinter", "Multithreading"],
    status: "Completed",
    github: "",
  },
  {
    title: "Plane Ticket Booking System",
    category: "Java Console Application",
    description:
      "Built a Java console-based airline reservation system to search flights, select seats, confirm bookings, and generate tickets with passenger and route details.",
    role: "Individual Project",
    tech: ["Java", "OOP", "Console UI"],
    status: "Completed",
    github: "",
  },
];

const skills = [
  "React (Vite)",
  "JavaScript",
  "Python",
  "Java",
  "SQL",
  "Git",
  "HTML/CSS",
  "Spring Boot",
  "Firebase",
  "Flutter",
  "Dart",
  "Figma",
  "UI/UX",
  "OOP",
];

const navItems = ["Home", "Projects", "Skills", "About", "Contact"];

const floatingIcons = [
  { Icon: FaGithub, top: "8%", left: "5%", size: 38, delay: 0, duration: 14, xMove: 220, yMove: 20 },
  { Icon: FaReact, top: "14%", left: "72%", size: 46, delay: 1, duration: 16, xMove: -240, yMove: 25 },
  { Icon: SiFlutter, top: "28%", left: "8%", size: 42, delay: 2, duration: 17, xMove: 260, yMove: -20 },
  { Icon: FaJava, top: "36%", left: "82%", size: 38, delay: 3, duration: 15, xMove: -220, yMove: 18 },
  { Icon: SiFirebase, top: "48%", left: "90%", size: 36, delay: 4, duration: 18, xMove: -260, yMove: 22 },
  { Icon: FaPython, top: "58%", left: "6%", size: 38, delay: 5, duration: 16, xMove: 220, yMove: -18 },
  { Icon: FaGitAlt, top: "70%", left: "18%", size: 34, delay: 6, duration: 19, xMove: 250, yMove: 15 },
  { Icon: FaFigma, top: "82%", left: "78%", size: 34, delay: 7, duration: 16, xMove: -220, yMove: -15 },
  { Icon: SiJavascript, top: "24%", left: "50%", size: 38, delay: 1.5, duration: 15, xMove: 180, yMove: 20 },
  { Icon: SiSpringboot, top: "66%", left: "62%", size: 36, delay: 2.5, duration: 17, xMove: -190, yMove: 18 },
  { Icon: SiMongodb, top: "18%", left: "88%", size: 36, delay: 3.5, duration: 18, xMove: -230, yMove: -20 },
  { Icon: SiMysql, top: "54%", left: "30%", size: 36, delay: 4.5, duration: 16, xMove: 180, yMove: 16 },
  { Icon: SiDart, top: "40%", left: "68%", size: 34, delay: 5.5, duration: 14, xMove: -180, yMove: 18 },
  { Icon: FaHtml5, top: "76%", left: "46%", size: 36, delay: 6.5, duration: 17, xMove: 200, yMove: -15 },
  { Icon: FaCss3Alt, top: "88%", left: "12%", size: 36, delay: 7.5, duration: 18, xMove: 220, yMove: 20 },
  { Icon: SiTailwindcss, top: "32%", left: "18%", size: 34, delay: 2.2, duration: 16, xMove: 170, yMove: -18 },
  { Icon: SiVite, top: "12%", left: "60%", size: 32, delay: 4.2, duration: 15, xMove: -170, yMove: 15 },
  { Icon: SiCanva, top: "92%", left: "64%", size: 32, delay: 5.8, duration: 19, xMove: -210, yMove: -18 },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-sm uppercase tracking-[0.25em] text-red-400/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function SriAbishekPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-200 selection:bg-red-500/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute left-1/3 top-[45%] h-[22rem] w-[22rem] rounded-full bg-red-700/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-[10%] h-[20rem] w-[20rem] rounded-full bg-red-400/5 blur-3xl" />

        {floatingIcons.map(
          ({ Icon, top, left, size, delay, duration, xMove, yMove }, index) => (
            <motion.div
              key={index}
              className="absolute text-red-500/25"
              style={{ top, left, fontSize: `${size}px` }}
              animate={{
                x: [0, xMove, 0],
                y: [0, yMove, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.18, 0.4, 0.18],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <Icon />
            </motion.div>
          )
        )}
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-red-500 md:text-3xl"
          >
            Sri
          </a>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20 md:inline-flex"
          >
            Let’s Connect
          </a>

          <button className="md:hidden text-zinc-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-400/80">
              Personal Portfolio
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Sri Abishek
            </h1>
            <p className="mt-4 text-lg font-medium text-zinc-300 md:text-xl">
              Computer Science Undergraduate (IIT){" "}
              <span className="text-red-400">|</span> Aspiring IT Professional
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
             Computer Science undergraduate with a strong interest in software development, mobile applications, and building practical technology solutions that create real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-medium text-white shadow-lg shadow-red-950/40 transition hover:bg-red-500"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/Sri-Abishek-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-zinc-200 transition hover:border-red-500/40 hover:bg-red-500/10"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500">
              <span>Based in Colombo, Sri Lanka</span>
              <span>Open to IT Opportunities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-[360px] w-[300px] rounded-[2rem] border border-red-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-3 shadow-2xl shadow-black/40 md:h-[430px] md:w-[360px] overflow-hidden">
              <img
                src="/profile.png"
                alt="Sri Abishek"
                className="h-full w-full rounded-[1.6rem] object-cover"
                style={{ objectPosition: "center 18%" }}
              />
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected Projects"
            subtitle="A collection of academic and practical projects that reflect my interests in software engineering, mobile app development, web platforms, and problem solving through technology."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-3xl border border-white/6 bg-white/[0.03] p-6 shadow-xl shadow-black/20 transition hover:border-red-500/20 hover:bg-red-500/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-red-400/80">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 space-y-3 text-sm text-zinc-300">
                  <p>
                    <span className="text-zinc-500">Role:</span> {project.role}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-300 transition hover:bg-red-500/20"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Core Strengths"
            title="Skills & Tools"
            subtitle="A practical skill set built through coursework, collaborative projects, and self-driven development across web, mobile, backend, and design-focused work."
          />

          <div className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-6 md:p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
        >
          <div>
            <SectionTitle
              eyebrow="About Me"
              title="A technical mindset with a collaborative approach"
            />
          </div>
          <div className="rounded-[2rem] border border-white/6 bg-white/[0.03] p-8">
            <p className="text-base leading-8 text-zinc-400">
              Computer Science undergraduate with a growing interest in software development,
               mobile applications, and practical technology solutions that create meaningful
                value. Experience includes academic and project-based work across mobile development,
                 frontend development, backend technologies, and user-focused design.
            </p>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              In addition to technical development, leadership responsibilities in project environments
               have contributed to stronger collaboration, communication, coordination, and problem-solving skills.
                Continuous engagement in team-based projects and real-world development experiences has supported ongoing professional and technical growth.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-red-500/15 bg-[linear-gradient(180deg,rgba(239,68,68,0.07),rgba(255,255,255,0.02))] p-8 md:p-10">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s connect"
              subtitle="I’m open to internship and IT-related opportunities, collaborations, and conversations around technology, projects, and learning."
            />

            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="mailto:abishekbalendran004@gmail.com"
                className="rounded-2xl border border-white/8 bg-black/20 p-5 transition hover:border-red-500/25 hover:bg-red-500/[0.04]"
              >
                <Mail className="h-5 w-5 text-red-400" />
                <p className="mt-4 text-sm text-zinc-500">Email</p>
                <p className="mt-1 font-medium text-white">
                  abishekbalendran004@gmail.com
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/shriabishek/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/8 bg-black/20 p-5 transition hover:border-red-500/25 hover:bg-red-500/[0.04]"
              >
                <Linkedin className="h-5 w-5 text-red-400" />
                <p className="mt-4 text-sm text-zinc-500">LinkedIn</p>
                <p className="mt-1 font-medium text-white">
                  linkedin.com/in/shriabishek
                </p>
              </a>

              <a
                href="https://github.com/Shri-1019"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/8 bg-black/20 p-5 transition hover:border-red-500/25 hover:bg-red-500/[0.04]"
              >
                <Github className="h-5 w-5 text-red-400" />
                <p className="mt-4 text-sm text-zinc-500">GitHub</p>
                <p className="mt-1 font-medium text-white">
                  github.com/Shri-1019
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Sri Abishek. All rights reserved.
      </footer>
    </div>
  );
}