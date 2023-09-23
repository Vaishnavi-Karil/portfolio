"use client"
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
  </main>
  )
}
