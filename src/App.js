import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Code, Cpu, Wrench, Calendar, ChevronRight, FileText } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      company: "Paradigm Engineering (Student Design Team)",
      role: "Software Developer",
      period: "September 2025 - Present",
      location: "St. John's, NL",
      description: "Developing embedded systems using C programming and Arduino IDE. Working on microcontroller projects and hardware-software integration for engineering solutions.",
      logo: "PE",
      logoUrl: "https://th.bing.com/th/id/OIP.x_SRn5deMk6G2jgMw921PgAAAA?w=159&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      color: "from-blue-500 to-cyan-500",
      skills: ["C Programming", "Arduino IDE", "Embedded Systems", "Hardware Integration"]
    },
    {
      company: "Nasdaq Verafin",
      role: "Summer Intern",
      period: "Summer 2021 - Summer 2022",
      location: "St. John's, NL",
      description: "Programmed facial recognition security systems and contributed to software development projects. Gained hands-on experience with enterprise-level security solutions and collaborative development practices.",
      logo: "NV",
      logoUrl: "https://th.bing.com/th/id/OIP.G5tst3okQQOHnJezBySjLwAAAA?w=182&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      color: "from-purple-500 to-pink-500",
      skills: ["Python", "Linux", "Security Systems", "Team Collaboration", "GUIZERO"]
    }
  ];

  const projects = [
    {
      title: "Professional Portfolio Website",
      tech: "React, Tailwind CSS",
      description: "Designed and developed a modern, responsive portfolio website to showcase engineering projects and technical skills. Implemented clean UI/UX principles with a focus on performance and accessibility. Features project showcases, skills overview, and contact integration.",
      highlight: "Built with modern web technologies",
      tags: ["React", "Tailwind CSS", "Web Development"],
      image: "data:image/webp;base64,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"
    },
    {
      title: "AI Study Planner",
      tech: "Python, Tkinter, Arduino, OLED Display",
      description: "Designed and coded an AI-based study planner that helps first-year students organize study schedules and improve productivity. Applied the Engineering Design Process to test, debug, and refine the system. Integrated a rotary dial, button, and OLED display for interactive input.",
      highlight: "Selected as a Top Project Nominee for the Verafin Innovation Competition",
      tags: ["Python", "Tkinter", "Arduino", "AI"],
      image: "https://image2url.com/images/1761392125744-99c3e0e9-5046-4497-a60a-01b0b6a61d4e.png" 
    },
    {
      title: "Wind Turbine Prototype Project",
      tech: "Onshape (3D CAD), Bambu Studio (3D Printing)",
      description: "Developed a functional wind turbine prototype as part of a team project. Utilized Onshape for 3D CAD modeling and Bambu Studio for 3D printing components. Collaborated on design iterations to optimize performance and durability.",
      highlight: "Learned and applied 3D CAD modeling and 3D printing techniques to create functional prototypes",
      tags: ["Onshape", "3D CAD Modeling", "3D Printing"],
      image: "https://image2url.com/images/1761393239597-602923ff-e611-496a-b2dc-11f61b1e32c8.png" 
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "C/C++", "JavaScript", "HTML", "CSS"] },
    { category: "Embedded", items: ["Arduino IDE", "Raspberry Pi"] },
    { category: "Tools & Development", items: ["Git", "Github", "Visual Studio", "Visual Studio Code", "Pycharm", "Bambu Studio", "Onshape", "MATLAB"] },
    { category: "Professional", items: ["Project Management", "Teamwork", "Documentation (Mircosoft Office)", "Presentation Skills", "Communication"] }
  ];

  const awards = [
    "Brown's Scholarship - $10,000",
    "Technology Career Pathway Scholarship - $2,500",
    "Memorial University Transforming Our Horizons - $2,000",
    "Waterford Valley Exemplary Leadership Award - $100"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-lg' : 'bg-slate-900 border-b border-slate-800'}`}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UC
            </button>
            <div className="flex gap-6 flex-wrap">
              {['About', 'Experience', 'Projects', 'Skills', 'Awards', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Uriel Chilaka
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">Computer Engineering Student</p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Welcome to my portfolio! I'm Uriel Chilaka, a Computer Engineering student at Memorial University. I'm orginally from Nigeria and currently based in Paradise, NL. Explore my projects, skills, and experience on my journey in the world of engineering and technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://github.com/uriel-chilaka" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/urielchilaka/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-slate-800 text-slate-100 px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:scale-105">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="YOUR_RESUME_URL_HERE" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-slate-800 text-slate-100 px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:scale-105">
                <FileText size={20} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* About Section */}
        <section id="about">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 space-y-4 hover:border-purple-500/50 transition-all">
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a Computer Engineering student at Memorial University (Class of 2029) I have a strong intrest in both software development and embedded systems. With hands-on experience gained through internships and academic projects, I have developed skills in programming languages such as Python and C++, as well as proficiency in systems like Arduino IDE and Raspberry Pi.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              My passion lies in creating innovative solutions that bridge hardware and software, enhancing user experiences through technology. I'm eager to apply my skills in real-world projects and continue learning in the ever-evolving field of computer engineering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 group">
                <Code className="text-purple-400 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-100">Software Development</h3>
                  <p className="text-slate-400 text-sm">Python, C++, GUI Design, Web Development</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Cpu className="text-pink-400 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-100">Embedded Systems</h3>
                  <p className="text-slate-400 text-sm">Arduino, Raspberry Pi, Microcontrollers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-500/50 transition-all group hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform overflow-hidden`}>
                    {exp.logoUrl ? (
                      <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-full h-full object-cover" style={{mixBlendMode: 'screen', opacity: 0.9}} />
                    ) : (
                      exp.logo
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:border-purple-500/50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-500/50 transition-all group hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Image */}
                  {project.image && (
                    <div className="md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                      <img 
                        src={project.image} 
                        alt={`${project.title} preview`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Project Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                      <p className="text-purple-400 font-medium mt-1">{project.tech}</p>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-lg w-fit border border-emerald-500/20">
                      <Award size={18} />
                      <span className="font-medium text-sm">{project.highlight}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:border-purple-500/50 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
                <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Wrench className="text-purple-400" size={20} />
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-purple-500/50 hover:scale-105 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-500/50 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <Award className="text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-slate-300 font-medium">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-slate-100 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Me!
          </h2>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur rounded-xl border border-purple-500/30 p-8">
            <p className="text-xl mb-6 text-slate-200">
              I'm always open to discussing new opportunities, projects, or collaborations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:uchilaka@mun.ca" className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-4 border border-slate-700 hover:scale-105 hover:border-purple-500/50">
                <Mail size={24} className="text-purple-400" />
                <div>
                  <p className="font-semibold text-slate-100">Email</p>
                  <p className="text-slate-400 text-sm">uchilaka@mun.ca</p>
                </div>
              </a>
              <a href="tel:+17097715649" className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-4 border border-slate-700 hover:scale-105 hover:border-purple-500/50">
                <Phone size={24} className="text-purple-400" />
                <div>
                  <p className="font-semibold text-slate-100">Phone</p>
                  <p className="text-slate-400 text-sm">(709) 771-5649</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/urielchilaka/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 transition-all rounded-lg p-4 border border-slate-700 hover:scale-105 hover:border-purple-500/50">
                <Linkedin size={24} className="text-purple-400" />
                <div>
                  <p className="font-semibold text-slate-100">LinkedIn</p>
                  <p className="text-slate-400 text-sm">urielchilaka</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <MapPin size={24} className="text-purple-400" />
                <div>
                  <p className="font-semibold text-slate-100">Location</p>
                  <p className="text-slate-400 text-sm">Paradise, NL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur border-t border-slate-800 py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="mb-2 text-slate-300">© 2025 Uriel Chilaka</p>
          <p className="text-slate-500 text-sm">Computer Engineering Student @ Memorial University</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Scroll to top"
        >
          <ChevronRight size={24} className="rotate-[-90deg]" />
        </button>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}