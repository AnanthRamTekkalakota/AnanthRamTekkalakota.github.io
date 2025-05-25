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
            <ul role="list" className="mt-20 space-y-4">
              <li>
                <a
                  href="https://github.com/AnanthRamTekkalakota/object-segmentation"
                  className="underline rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                <a className="rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
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
                  className="underline rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                  className="underline rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                <a className="rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
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
                  className="underline rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
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

        {/* RIGHT SIDE: profile picture */}
        <div className="w-full md:w-1/3 lg:w-1/4 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/profilePicture.png"
            alt="Ananth Ram Tekkalakota"
            width={400}
            height={223}
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
