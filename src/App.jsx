import { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/Photo.jpeg";

export default function App() {
  const [active, setActive] = useState("about");

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">Shikhar Agarwal</h1>

        <div className="space-x-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setActive(s.id);

                const el = document.getElementById(s.id);
                if (!el) return;

                // smooth scroll
                el.scrollIntoView({ behavior: "smooth", block: "start" });

                // add offset for navbar height
                const NAVBAR_HEIGHT = 88; // adjust if your navbar is taller/shorter
                setTimeout(() => {
                  window.scrollBy({ top: -NAVBAR_HEIGHT, left: 0, behavior: "instant" });
                }, 200);
              }}
              className={`font-medium hover:text-blue-600 ${active === s.id ? "text-blue-600" : "text-gray-700"
                }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>


      {/* MAIN CONTENT */}
      <main className="pt-24 space-y-24 px-10 md:px-32">

        {/* ABOUT */}
        <section id="about" className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={profilePic}
            alt="Shikhar Agarwal"
            className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-blue-600 mb-3">
              Aspiring Software Engineer
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Highly motivated and detail-oriented software developer skilled in Java, Web Development, and OOPS. Passionate about building efficient, scalable, and impactful digital solutions.
            </p>
            <div className="mt-5 space-x-4">
              <a
                href="https://www.linkedin.com/in/shikhar-agarwal-5a9a50265/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300">
                  LinkedIn
                </button>
              </a>
            </div>

          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Java", "C", "Python", "HTML", "CSS", "JavaScript", "Bootstrap", "SQL", "MySQL", "Git/GitHub", "OOPS", "DSA"].map((skill) => (
              <motion.div
                key={skill}
                className="p-3 border rounded-xl text-center shadow-sm bg-white hover:shadow-md"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>
        {/* SOFT SKILLS */}
        <section id="softskills">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 mt-10">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Communication",
              "Teamwork",
              "Adaptability",
              "Problem-Solving",
              "Time Management",
              "Creativity",
              "Patience",
              "Critical Thinking"
            ].map((softSkill) => (
              <motion.div
                key={softSkill}
                className="p-3 border rounded-xl text-center shadow-sm bg-white hover:shadow-md"
              >
                {softSkill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Experience</h2>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-lg">Software Development Intern – Softpro India</h3>
            <p className="text-gray-700">Sep 2024 – Oct 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Completed Web Development training and MERN stack fundamentals.</li>
              <li>Learned best practices for scalable and maintainable code.</li>
              <li>Awarded A+ grade for outstanding performance.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Projects</h2>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg">NovaKart – E-Commerce Platform</h3>
            <p className="text-gray-700">Team Size: 4 | Nov 2024 – Dec 2024</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Developed a dynamic e-commerce site with responsive UI and secure back-end.</li>
              <li>Implemented REST APIs, product listing, and MongoDB integration.</li>
              <li>Learned team collaboration and project structure documentation.</li>
            </ul>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Achievements</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>1st Rank among 740+ participants in Coding Competition by Unstop.</li>
            <li>1st Place – BBDITM Chess Competition.</li>
            <li>Qualified for State-Level Round in RBI90 Quiz.</li>
            <li>Elite NPTEL Certification in Design and Analysis of Algorithms.</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="flex flex-col items-center py-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6 text-center max-w-lg">
            I’d love to collaborate on innovative projects or discuss job opportunities.
            Fill out the form below and I’ll get back to you soon!
          </p>

          <form
            action="https://formspree.io/f/mpwkayve"
            method="POST"
            className="bg-white shadow-md rounded-xl p-6 w-full max-w-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md w-full"
            >
              Send Message
            </button>
          </form>
        </section>


        {/* FOOTER */}
        <footer className="text-center py-10 text-gray-500 border-t">
          © 2025 Shikhar Agarwal. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
