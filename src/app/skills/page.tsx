"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Footer from "../components/footer"

interface Skill {
  name: string
  percentage: number
}

const skills: Skill[] = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 70 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "Next.js", percentage: 75 },
]

const CircularProgressBar: React.FC<Skill> = ({ name, percentage }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 1000)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="flex flex-col items-center shadow-black shadow-xl p-6 ">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current "
            strokeWidth="5"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-gray-500 progress-ring__circle stroke-current "
            strokeWidth="16"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
            style={{ transition: "stroke-dashoffset 0.5s ease 0s" }}
          ></circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold text-gray-400 ">{`${Math.round(progress)}%`}</span>
        </div>
      </div>
      <span className="text-[#CA5900] font-sans mt-2 text-lg font-bold">{name}</span>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className=" text-gray-500 text-4xl font-sans font-bold text-center mb-8">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {skills.map((skill) => (
            <CircularProgressBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>

    <Footer/>
    </div>
  )
}

