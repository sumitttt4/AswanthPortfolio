"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Inline Custom SVGs for premium visuals
function IconMail() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconGraduation() {
  return (
    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

function IconTrending() {
  return (
    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function IconCpu() {
  return (
    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IconCopy() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("skaswanth4@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:skaswanth4@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pb-24">
      {/* Navbar */}
      <nav className="border-b border-border-light backdrop-blur-md sticky top-0 bg-background/95 z-50">
        <div className="flex justify-between items-center py-6">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-tight leading-none">Aswanth</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-secondary">
            <a href="#about" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-26px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-accent after:transition-all">Bio</a>
            <a href="#skills" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-26px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-accent after:transition-all">Skills</a>
            <a href="#experience" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-26px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-accent after:transition-all">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-26px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-accent after:transition-all">Projects</a>
            <a href="#contact" className="bg-brand-primary text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity">Let&apos;s Talk</a>
          </div>
          {/* Mobile menu CTA and Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#contact" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-semibold">Let&apos;s Talk</a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-1.5 text-black hover:bg-neutral-100 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-neutral-100 flex flex-col gap-4 text-sm font-medium text-neutral-600 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-1 transition-colors">Bio</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-1 transition-colors">Skills</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-1 transition-colors">Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-1 transition-colors">Projects</a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <motion.section 
        className="text-center pt-24 pb-20 flex flex-col items-center border-b border-border-light"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Status Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold tracking-wide mb-8 shadow-xs"
          style={{ color: '#4B5563' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Open to Opportunities
        </div>

        {/* Avatar Container */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 mb-8 rounded-full border border-neutral-200/80 p-1 bg-white shadow-xs">
          <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100">
            <img 
              src="/aswanth_headshot.jpeg" 
              alt="Aswanth S Kumar" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* H1 Layout System */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tighter leading-tight max-w-4xl"
          style={{ color: '#000000' }}
        >
          Aswanth S Kumar
        </h1>
        <p 
          className="text-lg sm:text-xl md:text-2xl font-serif italic tracking-tight mt-3 mb-8"
          style={{ color: '#4B5563' }}
        >
          Marketing Strategist &amp; Video Editor
        </p>
        
        {/* Professional Paragraph */}
        <p 
          className="text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed font-sans font-light hyphens-none"
          style={{ color: '#4B5563' }}
        >
          MBA candidate combining analytical sales execution with digital content creation. Specializing in retail activations, target growth, and high-impact visual storytelling.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4 sm:px-0">
          <a 
            href="#contact" 
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-black border border-black text-white text-xs font-mono uppercase tracking-widest rounded-none transition-all duration-300 hover:bg-neutral-900 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            Let&apos;s Collaborate
          </a>
          <a 
            href="#projects" 
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent border border-neutral-300 text-black text-xs font-mono uppercase tracking-widest rounded-none transition-all duration-300 hover:border-black hover:bg-neutral-50 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            View Case Studies
          </a>
        </div>
      </motion.section>

      {/* About / Bio */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-b border-border-light items-start">
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Professional Bio</h2>
          <h3 className="text-3xl font-display font-bold mb-6">Driven by brand building, informed by market research.</h3>
          <p className="text-brand-secondary text-[1rem] mb-6 leading-relaxed font-light">
            I am a results-oriented MBA candidate specializing in marketing and operations, with a strong foundation in digital marketing, consumer research, and sales coordination. My background combines corporate sales experience at Tata Class Edge and digital execution at Brand Blueprint with the entrepreneurial grit of founding and launching my own apparel brand.
          </p>
          <p className="text-brand-secondary text-[1rem] leading-relaxed font-light">
            I thrive at the intersection of analytical insights and creative storytelling. I am eager to apply my skills in brand building, campaign management, and retail promotion to drive growth for leading consumer organizations.
          </p>
        </motion.div>
        
        {/* Recruiter Cheat Sheet (Frameless) */}
        <motion.div 
          className="lg:col-span-5 pt-2 lg:pt-14"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-900 mb-6 border-b border-border-light pb-2">Recruiter Cheat Sheet</h3>
          <ul className="space-y-4 text-sm font-sans">
            <li className="flex justify-between items-start py-2 border-b border-border-light">
              <span className="text-neutral-500 font-medium">Target Roles</span>
              <span className="text-right font-semibold text-black max-w-[240px]">Marketing Executive, Brand Associate, Sales Operations Analyst, Advertising Executive</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-border-light">
              <span className="text-neutral-500 font-medium">Education</span>
              <span className="font-semibold text-black">MBA - IFIM, Bengaluru</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-border-light">
              <span className="text-neutral-500 font-medium">Current Location</span>
              <span className="font-semibold text-black">Bengaluru</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-border-light">
              <span className="text-neutral-500 font-medium">Relocation</span>
              <span className="font-semibold text-brand-accent bg-brand-accent-light px-2 py-0.5 rounded text-xs">Open to relocate</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <span className="text-neutral-500 font-medium">Core Advantage</span>
              <span className="font-semibold text-black italic">Combines B2B Sales + Direct Entrepreneurship</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 border-b border-border-light">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Competencies</h2>
          <h3 className="text-3xl font-display font-bold text-black">Skills &amp; Business Expertise</h3>
          <p className="text-neutral-500 text-sm mt-3 max-w-xl font-light">A breakdown of my technical, strategic, and practical skills compiled through corporate internships and startup experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Skill Block 1 */}
          <motion.div 
            className="border-t border-neutral-200 pt-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-sans font-bold text-black mb-3">Digital Marketing &amp; Analytics</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4 font-light hyphens-none">
              Designing and analyzing marketing campaigns with a focus on metrics, channel execution, and digital performance tracking.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Campaign Execution", "Social Media Analytics", "Content Strategy", "Competitor Research"].map((tag) => (
                <span key={tag} className="text-xs font-mono text-neutral-600 border border-neutral-200 px-2.5 py-1 bg-white">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Skill Block 2 */}
          <motion.div 
            className="border-t border-neutral-200 pt-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-sans font-bold text-black mb-3">Strategy &amp; Sales Operations</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4 font-light hyphens-none">
              Building pipeline efficiency, conducting consumer insights research, and engaging clients directly to coordinate sales.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Lead Nurturing", "Customer Interaction", "Sales Coordination", "Retail Promotion", "FMCG Activation"].map((tag) => (
                <span key={tag} className="text-xs font-mono text-neutral-600 border border-neutral-200 px-2.5 py-1 bg-white">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Skill Block 3 */}
          <motion.div 
            className="border-t border-neutral-200 pt-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-sans font-bold text-black mb-3">Tools &amp; Dashboard Analytics</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4 font-light hyphens-none">
              Leveraging quantitative tools to visualize business metrics, analyze customer feedback surveys, and compile reporting.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "MS Excel", "Customer Feedback Systems", "Analytics Dashboards"].map((tag) => (
                <span key={tag} className="text-xs font-mono text-neutral-600 border border-neutral-200 px-2.5 py-1 bg-white">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Skill Block 4 */}
          <motion.div 
            className="border-t border-neutral-200 pt-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-sans font-bold text-black mb-3">Entrepreneurial &amp; Languages</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4 font-light hyphens-none">
              Hands-on brand bootstrapping experience coupled with multilingual capability for nationwide communication.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Brand Bootstrapping", "Pricing & Pricing Strategy", "English", "Malayalam", "Hindi", "Bengali"].map((tag) => (
                <span key={tag} className="text-xs font-mono text-neutral-600 border border-neutral-200 px-2.5 py-1 bg-white">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 border-b border-border-light">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center border border-border-light">
                <IconBriefcase />
              </div>
              <h3 className="text-2xl font-display font-bold">Professional Experience</h3>
            </div>

            <div className="relative border-l border-border-light pl-6 ml-4 space-y-12">
              {/* Job 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                </div>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h4 className="text-lg font-display font-bold text-brand-primary">Sales Intern</h4>
                  <span className="text-xs px-2 py-0.5 rounded bg-brand-accent-light text-brand-accent font-semibold">01/2026 – Present</span>
                </div>
                <p className="text-sm font-semibold text-brand-secondary mb-3">Tata Class Edge</p>
                <ul className="text-sm text-brand-secondary space-y-2 list-disc list-outside ml-4 font-light">
                  <li>Supporting lead generation pipelines, client engagement, and sales operations.</li>
                  <li>Coordinating sales outreach, scheduling, and client relationship follow-ups.</li>
                  <li>Analyzing customer operational requirements to assist business development pitches.</li>
                </ul>
              </motion.div>

              {/* Job 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                </div>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h4 className="text-lg font-display font-bold text-brand-primary">Digital Marketing Intern</h4>
                  <span className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-brand-secondary font-semibold">Summer 2025</span>
                </div>
                <p className="text-sm font-semibold text-brand-secondary mb-3">Brand Blueprint</p>
                <ul className="text-sm text-brand-secondary space-y-2 list-disc list-outside ml-4 font-light">
                  <li>Formulated and executed digital campaigns, including content scheduling and strategy.</li>
                  <li>Conducted quantitative market research to assess competitor brand positioning.</li>
                  <li>Tracked weekly metrics to optimize reach and audience engagement rates.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right: Education */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center border border-border-light">
                <IconGraduation />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>

            <div className="relative border-l border-border-light pl-6 ml-4 space-y-12">
              {/* Edu 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                </div>
                <div className="mb-2">
                  <h4 className="text-lg font-display font-bold text-brand-primary">MBA in Marketing</h4>
                  <p className="text-xs text-brand-accent font-semibold mt-1">2024 – 2026</p>
                </div>
                <p className="text-sm font-medium text-brand-secondary">IFIM Institution, Bengaluru</p>
                <p className="text-xs text-brand-secondary/70 mt-1 font-light">Specialized in retail promotion, strategic marketing analytics, and sales pipeline operations.</p>
              </motion.div>

              {/* Edu 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                </div>
                <div className="mb-2">
                  <h4 className="text-lg font-display font-bold text-brand-primary">Bachelor of Arts (BA)</h4>
                  <p className="text-xs text-brand-secondary/80 font-semibold mt-1">2020 – 2023</p>
                </div>
                <p className="text-sm font-medium text-brand-secondary">Calcutta University (BESC), Kolkata</p>
                <p className="text-xs text-brand-secondary/70 mt-1 font-light">Focus on human behavioral research and qualitative analytical systems.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-b border-border-light">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Key Projects</h2>
          <h3 className="text-3xl font-display font-bold text-black">Marketing &amp; Entrepreneurship</h3>
          <p className="text-neutral-500 text-sm mt-3 max-w-xl font-light">Concrete demonstrations of marketing operations, product positioning, and startup execution.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Wipro FMCG typography-first editorial layout */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-start border border-neutral-200/85 p-8 bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest border border-neutral-200 text-neutral-600 px-2.5 py-0.5">FMCG Retail Live Project</span>
            </div>
            <h4 className="text-2xl font-sans font-bold text-black mb-4">Wipro FMCG — Product Genesis 2.0</h4>
            <p className="text-neutral-600 text-sm mb-6 leading-relaxed font-light hyphens-none">
              Developed and coordinated retail marketing activations, evaluating sales targets and analyzing customer reactions to refine channel execution.
            </p>
            
            <div className="space-y-6 border-t border-neutral-100 pt-6 text-xs font-sans">
              <div>
                <span className="font-bold text-black uppercase tracking-wider block mb-1">The Challenge</span>
                <span className="text-neutral-500 leading-relaxed block font-light hyphens-none">Analyzing product adoption and coordinating field promotional assets across retail environments.</span>
              </div>
              <div>
                <span className="font-bold text-black uppercase tracking-wider block mb-1">My Strategy</span>
                <span className="text-neutral-500 leading-relaxed block font-light hyphens-none">Implemented consumer feedback loops and localized product positioning strategies at retail counters.</span>
              </div>
              <div>
                <span className="font-bold text-black uppercase tracking-wider block mb-1">Outcome</span>
                <span className="text-brand-accent font-semibold leading-relaxed block hyphens-none">Successfully achieved assigned sales volume targets and identified three key retail friction points.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Zoeyee Apparel Spotlight Card */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="border border-neutral-200/85 p-2 bg-white mb-6">
              <div className="overflow-hidden bg-neutral-100 relative group border border-neutral-100">
                <img 
                  src="/zoeyee_apparel.jpeg" 
                  alt="Zoeyee Apparel Brand Showcase" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest border border-neutral-200 text-neutral-600 px-2.5 py-0.5">Entrepreneurship &amp; Branding</span>
              </div>
              <h4 className="text-2xl font-sans font-bold text-black mb-3">Zoeyee Apparel Brand</h4>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed font-light hyphens-none">
                Founded and bootstrapped a direct-to-consumer apparel brand, handling end-to-end pricing strategy, product curation, and campaign branding.
              </p>
              
              <div className="space-y-4 border-t border-neutral-100 pt-6 text-xs font-sans">
                <div>
                  <span className="font-bold text-black uppercase tracking-wider block mb-1">The Challenge</span>
                  <span className="text-neutral-500 leading-relaxed block font-light hyphens-none">Entering a highly saturated DTC market with low budget and establishing initial consumer traction.</span>
                </div>
                <div>
                  <span className="font-bold text-black uppercase tracking-wider block mb-1">My Strategy</span>
                  <span className="text-neutral-500 leading-relaxed block font-light hyphens-none">Designed targeted micro-influencer campaigns and developed pricing margins focused on student cohorts.</span>
                </div>
                <div>
                  <span className="font-bold text-black uppercase tracking-wider block mb-1">Outcome</span>
                  <span className="text-brand-accent font-semibold leading-relaxed block hyphens-none">Achieved immediate brand recognition within campus groups, managing stock turnover and supply logistics.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Video Campaigns (Instagram Reels Showcase) */}
      <section id="video-work" className="py-20 border-b border-border-light">
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Video Editing</h2>
          <h3 className="text-3xl font-display font-bold text-black">Selected Video Campaigns</h3>
          <p className="text-neutral-500 text-sm mt-3 max-w-xl font-light">Directing, shooting, and editing high-engagement short-form video content for DTC brands and digital campaigns.</p>
        </div>

        <div className="border-t border-neutral-200 divide-y divide-neutral-200">
          {/* Reel 1 */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-neutral-50/40 transition-colors px-2">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-neutral-400 mt-1">01</span>
              <div>
                <h4 className="font-sans font-bold text-black text-base">Brand Visual Narrative</h4>
                <p className="text-neutral-500 text-xs mt-1 font-light hyphens-none">Short-form campaign storytelling focusing on mood, styling, and editorial transitions.</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/reel/DYe9nwaJ_V9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto rounded-none"
            >
              Watch Reel
            </a>
          </div>

          {/* Reel 2 */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-neutral-50/40 transition-colors px-2">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-neutral-400 mt-1">02</span>
              <div>
                <h4 className="font-sans font-bold text-black text-base">Direct-to-Consumer Branding</h4>
                <p className="text-neutral-500 text-xs mt-1 font-light hyphens-none">High-conversion product video designed for social commerce channels and audience retention.</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/reel/DYoKqTNpTfB/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto rounded-none"
            >
              Watch Reel
            </a>
          </div>

          {/* Reel 3 */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-neutral-50/40 transition-colors px-2">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-neutral-400 mt-1">03</span>
              <div>
                <h4 className="font-sans font-bold text-black text-base">Product Action &amp; Motion Design</h4>
                <p className="text-neutral-500 text-xs mt-1 font-light hyphens-none">Dynamic edits featuring fast-paced sound design, jump-cuts, and precise beat matching.</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/reel/DYY1YgSJYgg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto rounded-none"
            >
              Watch Reel
            </a>
          </div>

          {/* Reel 4 */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-neutral-50/40 transition-colors px-2">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-neutral-400 mt-1">04</span>
              <div>
                <h4 className="font-sans font-bold text-black text-base">Urban &amp; Streetwear Creative</h4>
                <p className="text-neutral-500 text-xs mt-1 font-light hyphens-none">Lifestyle video campaign focusing on urban fashion aesthetics and color grading.</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/reel/DTXMigBk9B_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto rounded-none"
            >
              Watch Reel
            </a>
          </div>

          {/* Reel 5 */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-neutral-50/40 transition-colors px-2">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-neutral-400 mt-1">05</span>
              <div>
                <h4 className="font-sans font-bold text-black text-base">Social Activation &amp; Trend Reel</h4>
                <p className="text-neutral-500 text-xs mt-1 font-light hyphens-none">Trend-focused short-form content designed to maximize organic reach and viral metrics.</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/reel/DTsOadmksEV/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto rounded-none"
            >
              Watch Reel
            </a>
          </div>
        </div>
      </section>

      {/* Quote/Motivation (Raw Editorial Text) */}
      <section className="text-center py-32 max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl leading-relaxed italic font-serif text-black font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &quot;I combine my passion for digital marketing and analytical research to deliver strategies that align with clear, measurable business objectives.&quot;
        </motion.h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 flex justify-center">
        <motion.div 
          className="max-w-2xl w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Collaboration</h2>
          <h3 className="text-3xl font-display font-bold mb-4">Let&apos;s Build Something Together</h3>
          <p className="text-brand-secondary text-sm mb-10 font-light">
            I am actively looking for full-time opportunities and collaborative marketing projects. Drop a message below, connect on LinkedIn, or email me directly.
          </p>

          {/* Quick Connect Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="mailto:skaswanth4@gmail.com"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-border-light text-brand-primary text-sm font-semibold hover:border-brand-accent transition-colors w-full sm:w-auto justify-center group"
            >
              <IconMail />
              <span>skaswanth4@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/aswanth-s-kumar?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-border-light text-brand-primary text-sm font-semibold hover:border-brand-accent hover:text-[#0a66c2] transition-all w-full sm:w-auto justify-center"
            >
              <IconLinkedin />
              <span>LinkedIn Profile</span>
            </a>
          </div>
          
          {/* Form */}
          <form onSubmit={handleFormSubmit} className="text-left soft-card p-8 md:p-10 bg-white">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1 flex flex-col">
                <label className="text-xs font-semibold text-brand-primary mb-2 uppercase tracking-wider">Name*</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="p-3 bg-neutral-50/50 rounded-xl border border-border-light text-sm focus:bg-white transition-colors" 
                  required
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-xs font-semibold text-brand-primary mb-2 uppercase tracking-wider">Email*</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-3 bg-neutral-50/50 rounded-xl border border-border-light text-sm focus:bg-white transition-colors" 
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label className="text-xs font-semibold text-brand-primary mb-2 uppercase tracking-wider">Message*</label>
              <textarea 
                rows={5} 
                placeholder="Share a brief summary of the role, project, or opportunity..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="p-3 bg-neutral-50/50 rounded-xl border border-border-light text-sm resize-y focus:bg-white transition-colors" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-primary text-white py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:opacity-95 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-light pt-8 text-center text-xs text-neutral-500 font-light">
        <p>&copy; {new Date().getFullYear()} Aswanth S Kumar.</p>
      </footer>
    </div>
  );
}

