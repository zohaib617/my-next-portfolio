"use client";

import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/pic.png"
            alt="Profile"
            className="w-full lg:w-[500px] h-auto lg:h-[500px] rounded-lg object-cover"
          />
        </div>

        {/* About Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-sans font-bold text-gray-500 mb-12 text-center lg:text-left">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I am a passionate and results-driven developer with strong expertise in both{" "}
            <span className="text-[#CA5900]">
              Oracle E-Business Suite (EBS) XML Reports, Oracle Fusion BIP Reports, and SQL / PL/SQL
            </span>. Along with a solid foundation in{" "}
            <span className="text-[#CA5900]">
              web technologies like HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS
            </span>, I build dynamic and efficient web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            I also have hands-on experience in{" "}
            <span className="text-[#CA5900]">Python</span> and{" "}
            <span className="text-[#CA5900]">n8n</span> for automation and backend process optimization.
            My background allows me to bridge enterprise reporting solutions with modern full-stack development,
            ensuring reliability, scalability, and great performance.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            With a deep understanding of data-driven systems and UI/UX principles, I focus on crafting solutions that
            are both technically robust and visually engaging. My Oracle expertise helps organizations generate
            insightful reports, while my frontend skills enhance the user experience.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            I strongly believe in continuous learning and staying updated with new technologies. Whether it’s
            developing enterprise-grade reports, automating workflows with n8n, or building full-stack web apps,
            I always aim to deliver innovative and impactful results.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            In addition to my technical expertise, I take pride in my{" "}
            <span className="text-[#CA5900]">communication and time management skills</span>, which help me
            collaborate effectively with teams and clients to deliver projects on time.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            My goal is to continue growing as a developer and contribute to projects that combine data, automation,
            and modern web development to create real business value.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
