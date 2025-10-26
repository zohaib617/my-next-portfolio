"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Footer from "../components/footer"

interface Skill {
  name: string
  percentage: number
}

const skills: Skill[] = [
  { name: "Oracle EBS XML Reports", percentage: 85 },
  { name: "Oracle Fusion BIP Reports", percentage: 80 },
  { name: "SQL / PL/SQL", percentage: 90 },
  { name: "HTML", percentage: 85 },
  { name: "CSS", percentage: 80 },
  { name: "JavaScript", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
  { name: "React.js", percentage: 85 },
  { name: "Next.js", percentage: 80 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "Python", percentage: 70 },
  { name: "n8n", percentage: 75 },
  { name: "Communication & Time Management", percentage: 90 },
]

const CircularProgressBar: React.FC<Skill> = ({ name, percentage }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 1000)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="flex flex-col items-center shadow-black shadow-xl p-6 rounded-2xl bg-white">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="5"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-[#FFD700] progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
            style={{ transition: "stroke-dashoffset 0.6s ease 0s" }}
          ></circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold text-gray-600">{`${Math.round(progress)}%`}</span>
        </div>
      </div>
      <span className="text-[#CA5900] font-sans mt-2 text-lg font-bold text-center">{name}</span>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-700 text-4xl font-sans font-bold text-center mb-12">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <CircularProgressBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
