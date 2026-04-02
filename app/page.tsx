"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const experiences = [
  {
    role: "Sales Intern",
    company: "Tata Class Edge",
    period: "Jan 2026 — Present",
    details:
      "Lead follow-ups, customer interaction, sales coordination, and business development support."
  },
  {
    role: "Digital Marketing Intern",
    company: "Brand Blueprint",
    period: "Previous",
    details:
      "Executed social media campaigns, market research, content scheduling, and analytics tracking."
  }
];

const projects = [
  {
    name: "Wipro FMCG Live Project",
    subtitle: "Product Genesis 2.0",
    details:
      "Supported retail promotions, sales target achievement, and customer feedback analysis for optimized outcomes."
  },
  {
    name: "Founder — Zoyee Apparel",
    subtitle: "D2C Brand Project",
    details:
      "Launched and scaled a T-shirt brand with pricing, promotions, and sales growth strategy."
  }
];

export default function Home() {
  return (
    <main className="page">
      <motion.section className="hero" initial="hidden" animate="show" variants={stagger}>
        <motion.p className="eyebrow" variants={fadeUp}>
          MBA Marketing Candidate
        </motion.p>
        <motion.h1 variants={fadeUp}>
          Aswanth S Kumar
          <span>Building modern marketing and sales growth strategies.</span>
        </motion.h1>
        <motion.p className="intro" variants={fadeUp}>
          Bengaluru-based marketer with hands-on experience in digital campaigns,
          sales operations, retail activation, and brand building.
        </motion.p>
        <motion.div className="cta" variants={fadeUp}>
          <a href="mailto:skaswanth4@gmail.com" className="button primary">
            Contact Me
          </a>
          <a href="tel:+919051573811" className="button ghost">
            +91 90515 73811
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.article className="card" variants={fadeUp}>
          <h2>Professional Summary</h2>
          <p>
            Entrepreneurial marketer skilled in market research, campaign execution,
            customer engagement, and brand promotion. Seeking entry-level roles in
            Marketing, Sales, FMCG, Retail, or Advertising.
          </p>
        </motion.article>

        <motion.article className="card" variants={fadeUp}>
          <h2>Education</h2>
          <ul className="timeline">
            <li>
              <strong>MBA (Marketing)</strong>
              <span>IFIM Institution, Bengaluru · 2024 — 2026</span>
            </li>
            <li>
              <strong>BA</strong>
              <span>Calcutta University (BESC), Kolkata · 2020 — 2023</span>
            </li>
          </ul>
        </motion.article>
      </motion.section>

      <motion.section
        className="card block"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>Experience</motion.h2>
        <div className="stack">
          {experiences.map((item) => (
            <motion.article className="experience" key={item.role} variants={fadeUp}>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <small>{item.period}</small>
              <p>{item.details}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.article className="card" variants={fadeUp}>
          <h2>Skills</h2>
          <div className="pills">
            {[
              "Digital Marketing",
              "Market Research",
              "Customer Engagement",
              "Power BI",
              "Sales Operations",
              "Campaign Planning"
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </motion.article>

        <motion.article className="card" variants={fadeUp}>
          <h2>Languages</h2>
          <div className="pills">
            {["English", "Malayalam", "Hindi", "Bengali"].map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </motion.article>
      </motion.section>

      <motion.section
        className="card block"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>Featured Projects</motion.h2>
        <div className="projects">
          {projects.map((project) => (
            <motion.article className="project" key={project.name} variants={fadeUp}>
              <h3>{project.name}</h3>
              <p className="project-tag">{project.subtitle}</p>
              <p>{project.details}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
