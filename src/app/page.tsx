import { ThemeDropdown } from "@/components/ThemeDropdown";
import Image from "next/image";

const relevantCourses = [
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
    <main className="mx-auto min-h-screen max-w-7xl bg-background px-6 py-8 text-foreground sm:px-10 sm:py-12 lg:px-12">
      {/* ─── HEADER ───────────────────────────────────────────────────────── */}
      <header className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
        {/* Site title / your name */}
        <p className="text-lg font-semibold tracking-tight">Ananth Ram Tekkalakota</p>

        {/* Top‐right nav: X (if you add one), GitHub, LinkedIn, theme toggle */}
        <nav aria-label="Social and contact links" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <a
            href="https://github.com/AnanthRamTekkalakota"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ananth-rt/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            LinkedIn ↗
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            Resume ↗
          </a>
          <a href="mailto:ananthram.tekk@gmail.com" className="portfolio-link">Email ↗</a>
          <ThemeDropdown />
        </nav>
      </header>

      {/* ─── INTRO + PHOTO ───────────────────────────────────────────────── */}
      <section className="mt-12 grid items-start gap-x-12 gap-y-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_240px] lg:gap-x-20 lg:grid-cols-[minmax(0,1fr)_280px]">
        {/* LEFT: your intro text + “what I’ve been up to” */}
        <div className="flex-1">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Hi. I&apos;m A. R. T.</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            Studying Computer Science with a minor in Finance at UT Dallas.
            Graduating December 2026.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            I build across web, mobile, and AI. Currently working on
            CarnaticTranslate, an iOS app that turns handwritten Carnatic music
            into editable notation.
          </p>

          {/* "What I&apos;ve been up to:" list */}
          <div className="mt-12 sm:mt-16">
            <ul role="list" aria-label="Projects and experience" className="space-y-8 sm:space-y-9">
              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight">
                  <a href="https://testflight.apple.com/join/XdHuceH9" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    CarnaticTranslate ↗
                  </a>
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Jun 2026 – Present · TestFlight beta</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                  Photograph handwritten Carnatic music and turn it into editable
                  transcriptions. Built with Swift and SwiftUI.
                </p>
              </li>
              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight">Smart Data Solutions – Backend Lead & AI Developer</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Aug 2025 – Dec 2025</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight"><a href="https://github.com/dp019/4375-project" target="_blank" rel="noopener noreferrer" className="portfolio-link">Sentiment Analysis Classifier ↗</a></h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">May 2025</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight"><a href="https://github.com/AnanthRamTekkalakota/object-segmentation" target="_blank" rel="noopener noreferrer" className="portfolio-link">Object Segmentation App ↗</a></h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">June 2024</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight">Spark My Sport – Full Stack Internship (API & Search Enhancements)</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Jan 2024 – Mar 2024</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight"><a href="https://devpost.com/software/medai" target="_blank" rel="noopener noreferrer" className="portfolio-link">MedAI – Emergency Response Assistant ↗</a></h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">August 2023</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight"><a href="https://github.com/AnanthRamTekkalakota/paysplit" target="_blank" rel="noopener noreferrer" className="portfolio-link">PaySplit – Bill Splitting App ↗</a></h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">June 2023</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight">EPICS – UTDesign Procurement System</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Jan 2023 – May 2023</p>
              </li>

              <li>
                <h2 className="text-lg font-medium leading-7 tracking-tight"><a href="https://github.com/RailgunDotEnc/Recipe-Snapshot" target="_blank" rel="noopener noreferrer" className="portfolio-link">AIS – Food to Recipe System using Python ↗</a></h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Feb 2023 – Apr 2023</p>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: profile picture + coursework */}
        <div className="flex w-full flex-col gap-8">
          {/* Profile image card */}
          <div className="max-w-[280px] overflow-hidden rounded-xl">
            <Image
              src="/profilePicture.png"
              alt="Ananth Ram Tekkalakota"
              width={400}
              height={223}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 280px, 240px"
              priority
            />
          </div>

          {/* Coursework card */}
          <div className="pt-1">
            <h2 className="mb-3 text-sm font-medium">Relevant Coursework</h2>
            <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-muted-foreground">
              {relevantCourses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="mt-20 text-xs text-muted-foreground sm:mt-24">
        <p>©2026 Ananth Ram Tekkalakota.</p>
      </footer>
    </main>
  );
}
