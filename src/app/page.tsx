"use client";
// pages/index.tsx
//todo light and dark mode
import { ThemeDropdown } from "@/components/ThemeDropdown";
import Image from "next/image";

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
            href="/AnanthramTekk_Resumev5.1.pdf"
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
          <h1 className="text-4xl font-extrabold">Hi. I&apos;m A. R. T.</h1>
          <p className="mt-4 text-lg">
            Currently at Richardson, Texas, studying computer science and
            finance at the University of Texas at Dallas.
          </p>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Computer Science student at UT Dallas with hands-on development
            experience in Python, Java, JavaScript/TypeScript, and modern
            frameworks. Demonstrated ability to lead backend architecture, build
            machine learning systems processing 100K+ data points, and develop
            full-stack applications. Proven track record optimizing APIs,
            implementing AI-powered solutions, and collaborating in Agile team
            environments.
          </p>

          {/* "What I&apos;ve been up to:" list */}
          <div className="mt-8">
            <ul role="list" className="mt-20 space-y-4">
              <li>
                <a className="rounded-md p-3">
                  <h3 className="text-lg font-semibold leading-8">
                    Smart Data Solutions – Backend Lead & AI Developer
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Aug 2025 – Dec 2025
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/dp019/4375-project"
                  className="underline rounded-md p-3"
                >
                  <h3 className="text-lg font-semibold leading-8">
                    Sentiment Analysis Classifier ↗
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    May 2025
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AnanthRamTekkalakota/object-segmentation"
                  className="underline rounded-md p-3"
                >
                  <h3 className="text-lg font-semibold leading-8">
                    Object Segmentation App ↗
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    June 2024
                  </p>
                </a>
              </li>

              <li>
                <a className="rounded-md p-3 ">
                  <h3 className="text-lg font-semibold leading-8">
                    Spark My Sport – Full Stack Internship (API & Search
                    Enhancements)
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Jan 24 – Mar 24
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://devpost.com/software/medai"
                  className="underline rounded-md p-3 "
                >
                  <h3 className="text-lg font-semibold leading-8">
                    MedAI – Emergency Response Assistant↗
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    August 2023
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AnanthRamTekkalakota/paysplit"
                  className="underline rounded-md p-3 "
                >
                  <h3 className="text-lg font-semibold leading-8">
                    PaySplit – Bill Splitting App ↗
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    June 2023
                  </p>
                </a>
              </li>

              <li>
                <a className="rounded-md p-3 ">
                  <h3 className="text-lg font-semibold leading-8">
                    EPICS – UTDesign Procurement System
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Jan 23 – May 23
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/RailgunDotEnc/Recipe-Snapshot"
                  className="underline rounded-md p-3 "
                >
                  <h3 className="text-lg font-semibold leading-8">
                    AIS – Food to Recipe System using Python ↗
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Feb 23 – Apr 23
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: profile picture + coursework */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-6">
          {/* Profile image card */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/profilePicture.png"
              alt="Ananth Ram Tekkalakota"
              width={400}
              height={223}
              className="object-cover"
            />
          </div>

          {/* Coursework card */}
          <div className=" p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Relevant Coursework</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {relavantCourses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="mt-24 text-sm text-gray-500">
        <p>©2025 Ananth Ram Tekkalakota.</p>
      </footer>
    </main>
  );
}
