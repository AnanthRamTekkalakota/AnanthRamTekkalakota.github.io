// pages/index.tsx
//todo light and dark mode

//import { useEffect, useState } from "react";
//import { Inter } from "next/font/google";
import { ThemeDropdown } from "@/components/ThemeDropdown";
import Image from "next/image";
//import Link from "next/link";

//const inter = Inter({ subsets: ["latin"] });

const experiences = [
  {
    name: "Object Segmentation App",
    date: "June 2024",
    href: "https://github.com/AnanthRamTekkalakota/object-segmentation",
  },
  {
    name: "Spark My Sport - Full Stack Internship (API & Search Enhancements)",
    date: "Jan 24 - Mar 24",
  },
  {
    name: "MedAI - Emergency Response Assistant",
    date: "August 2023",
    href: "https://devpost.com/software/medai",
  },
  {
    name: "PaySplit - Bill Splitting App",
    date: "June 2023",
    href: "https://github.com/AnanthRamTekkalakota/paysplit",
  },
  {
    name: "EPICS - UTDesign Procurement System",
    date: "Jan 23 - May 23",
  },
  {
    name: "AIS - Food to Recipe System using Python",
    date: "Feb 23 - Apr 23",
    href: "https://github.com/RailgunDotEnc/Recipe-Snapshot",
  },
];

//todo express intrests in computer science and finance

const relavantCourses = [
  "Data Structures and Algorithms ",
  "System Programming and UNIX",
  "Computer Architecture",
  "Software Engineering",
  "Probability and Statistics",
  "Artificial Intelligence",
  "Advanced Algorithms Design and Analysis ",
  "Intro to Machine Learning",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-8 py-12">
      {/* ─── HEADER ───────────────────────────────────────────────────────── */}
      <header className="flex justify-between items-center">
        {/* Site title / your name */}
        <h1 className="text-xl font-bold">Ananth Ram Tekkalakota</h1>

        {/* Top‐right nav: X (if you add one), GitHub, LinkedIn, theme toggle */}
        <nav className="flex items-center space-x-4">
          <a
            href="https://github.com/AnanthRamTekkalakota"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ananth-rt/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn ↗
          </a>
          <a
            href="/nextjs-github-pages/AnanthramTekk_V4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Resume ↗
          </a>
          <ThemeDropdown />
        </nav>
      </header>

      {/* ─── INTRO + PHOTO ───────────────────────────────────────────────── */}
      <section className="mt-12 flex flex-col-reverse md:flex-row items-start gap-8">
        {/* LEFT: your intro text + “what I’ve been up to” */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold">Hi. I’m A. R. T.</h1>
          <p className="mt-4 text-lg">
            Currently at Richardson, Texas, studying computer science and
            finance at the University of Texas at Dallas.
          </p>

          {/* “What I’ve been up to:” list */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">What I’ve been up to:</h3>
            {experiences.map((exp, idx) => (
              <a
                key={idx}
                href={exp.href}
                className="
                  group flex justify-between items-center
                  block p-2 rounded-xl transition-colors duration-200
                  
                  /* text colors */
                  text-black dark:text-white
                  
                  /* hover in light */
                  hover:bg-black hover:text-white
                  
                  /* hover in dark */
                  dark:hover:bg-white dark:hover:text-black
                "
              >
                <span className="underline group-hover:no-underline">
                  {exp.name} ↗
                </span>
                <span className="text-sm opacity-60">{exp.date}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: profile picture */}
        <div className="w-full md:w-1/3 lg:w-1/4 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="./profilePicture.png"
            alt="Ananth Ram Tekkalakota"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </section>

      {/* ─── COURSEWORK ───────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h3 className="font-bold">Relevant Coursework:</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {relavantCourses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
        <p className="mt-10">
          Working on a CS Major and Finance Minor for my final year at UTD.
        </p>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="mt-24 text-sm text-gray-500">
        <p>©2025 Ananth Ram Tekkalakota.</p>
      </footer>
    </main>
  );
}
