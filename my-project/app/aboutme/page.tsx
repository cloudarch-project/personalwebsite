"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2024",
    title: "Senior Cloud Engineer @ XYZ Tech",
    description:
      "Progettazione di architetture AWS, pipeline CI/CD, automazione con Terraform e Kubernetes.",
  },
  {
    year: "2022",
    title: "DevOps Specialist @ ABC Solutions",
    description:
      "Implementazione CI/CD, containerizzazione, gestione cluster EKS e monitoraggio con Prometheus/Grafana.",
  },
  {
    year: "2020",
    title: "Junior Developer @ Startup Cloudy",
    description:
      "Primi progetti in AWS, scripting e automazione deploy.",
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Il mio percorso</h1>
        <div className="relative border-l border-gray-700 pl-6" ref={ref}>
          <motion.div
            className="absolute left-0 top-0 w-1 bg-blue-500 origin-top"
            style={{ height: `100%`, scaleY: scrollYProgress }}
          />

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[15px] w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div>
                <h3 className="text-xl font-semibold">{exp.year} — {exp.title}</h3>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
