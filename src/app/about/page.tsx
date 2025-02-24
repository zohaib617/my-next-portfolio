"use client";

import Footer from "../components/footer";



export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src="/pic.png" alt="Profile" className="w-full lg:w-[500px] h-auto lg:h-[500px] rounded-lg object-cover" />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-sans font-bold text-gray-500 mb-12 text-center">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I am a passionate web developer skilled in modern technologies including
            <span className="text-[#CA5900]"> HTML, CSS, TypeScript, Tailwind CSS, and Next.js</span>. I specialize in
            crafting responsive and dynamic web applications that deliver a seamless user experience.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            My expertise lies in building scalable front-end applications with clean and efficient code.
            I strive to create visually appealing designs and intuitive user interfaces that enhance user engagement.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            I have a deep understanding of UI/UX principles and always aim to bridge the gap between design and functionality.
            My experience includes working on multiple projects that involve complex problem-solving and performance optimization.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            Continuous learning is a core value for me, and I stay updated with the latest trends and technologies in web development.
            Whether it's improving website performance, integrating third-party APIs, or enhancing accessibility, I always look for ways to innovate.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            My goal is to contribute to impactful projects that provide value to users and businesses alike. I am open to collaborations,
            freelancing, and exciting opportunities that challenge my skills and help me grow as a developer.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
