"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const socialWins = [
  {
    title: "Instagram Content Grid",
    before: "Reach 22K per month",
    after: "Reach 84K per month",
    note: "Built a story first posting rhythm with clear calls to action and stronger visual hierarchy"
  },
  {
    title: "Festival Campaign",
    before: "Engagement 2.4 percent",
    after: "Engagement 7.1 percent",
    note: "Designed a creator led series that turned product moments into share worthy stories"
  }
];

const posterSet = [
  "Launch poster for seasonal sale",
  "Product spotlight creative",
  "Event invite social visual",
  "Brand voice awareness layout"
];

const caseStudy = {
  role: "Sales Intern at Tata Class Edge",
  headline: "Turned outreach into a repeatable lead engine",
  metrics: [
    "Generated 140 plus qualified follow ups in one quarter",
    "Coordinated 18 campus level engagement activities",
    "Improved response time through organized lead tracking"
  ],
  summary:
    "Worked closely with sales and support teams to create clear follow up loops. This helped move conversations faster and improved trust with prospects."
};

const tools = [
  { icon: "🎬", name: "Adobe Premiere" },
  { icon: "🎨", name: "Canva" },
  { icon: "📣", name: "Meta Ads Manager" },
  { icon: "📈", name: "Google Analytics" },
  { icon: "🧭", name: "Power BI" },
  { icon: "✍️", name: "Content Strategy" }
];

const designSkills = [
  "Frontend UI Design",
  "Responsive Web Design",
  "Landing Page Design",
  "Design Systems",
  "Figma Prototyping",
  "Wireframing",
  "HTML and CSS",
  "React and Next",
  "Interaction Design",
  "Visual Storytelling"
];

export default function Home() {
  return (
    <main className="page">
      <section className="statusBar">
        <span className="pulse" />
        <p>Status Open for freelance and full time roles</p>
      </section>

      <motion.section className="hero card" initial="hidden" animate="show" variants={stagger}>
        <motion.div className="heroCopy" variants={reveal}>
          <span className="badge">Available for Work</span>
          <h1>Scaling Brands through Data Driven Marketing and Creative Storytelling</h1>
          <p>
            I am Aswanth S Kumar, an MBA Marketing candidate and creative marketing strategist.
            I design campaigns that attract attention, build trust, and move people to action.
          </p>
          <div className="heroActions">
            <a className="btn primary" href="mailto:skaswanth4@gmail.com">
              Contact Me
            </a>
            <a className="btn" href="https://calendly.com" target="_blank" rel="noreferrer">
              Book a Discovery Call
            </a>
            <a className="btn" href="/AswanthPortfolio.pdf" download>
              Download Portfolio PDF
            </a>
          </div>
        </motion.div>

        <motion.div className="heroVisual" variants={reveal}>
          <Image
            src="/marketing-illustration.svg"
            alt="Creative marketing illustration"
            width={420}
            height={420}
            priority
          />
        </motion.div>
      </motion.section>

      <motion.section className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>Portfolio of Impact</motion.h2>
        <motion.p className="lead" variants={reveal}>
          Proof of work that shows growth, creativity, and execution across digital campaigns.
        </motion.p>
        <div className="workGrid">
          {socialWins.map((win) => (
            <motion.article key={win.title} className="workCard" variants={reveal}>
              <h3>{win.title}</h3>
              <p className="metric"><strong>Before</strong> {win.before}</p>
              <p className="metric"><strong>After</strong> {win.after}</p>
              <p>{win.note}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>Visual Design Carousel</motion.h2>
        <motion.div className="carousel" variants={reveal}>
          {posterSet.map((item) => (
            <article key={item} className="posterFrame">
              <div className="posterGlow" />
              <p>{item}</p>
            </article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>Video Reel</motion.h2>
        <motion.div className="videoMock" variants={reveal}>
          <div className="videoScreen">
            <span>Showreel Preview</span>
            <p>Add your edited campaign clips here for recruiters and clients.</p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>Experience as Narrative</motion.h2>
        <motion.article className="caseStudy" variants={reveal}>
          <p className="caseRole">{caseStudy.role}</p>
          <h3>{caseStudy.headline}</h3>
          <ul>
            {caseStudy.metrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{caseStudy.summary}</p>
        </motion.article>
      </motion.section>

      <motion.section className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>The Full Stack Marketer Toolkit</motion.h2>
        <motion.div className="bento" variants={reveal}>
          {tools.map((tool) => (
            <article key={tool.name} className="bentoItem">
              <span>{tool.icon}</span>
              <p>{tool.name}</p>
            </article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>Frontend Design Skills</motion.h2>
        <motion.p className="lead" variants={reveal}>
          Skills in interface design and frontend execution presented as a motion marquee.
        </motion.p>
        <div className="marqueeWrap">
          <motion.div
            className="marqueeTrack"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {[...designSkills, ...designSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="marqueeItem">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="card contact" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <motion.h2 variants={reveal}>Let us build growth together</motion.h2>
        <motion.p variants={reveal}>
          Email skaswanth4@gmail.com to discuss brand growth, campaign execution, and
          creative marketing strategy.
        </motion.p>
      </motion.section>
    </main>
  );
}
