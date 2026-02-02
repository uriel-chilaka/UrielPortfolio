import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Award, Code, Cpu, Wrench, Calendar, ChevronRight, FileText, ExternalLink } from 'lucide-react';

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
      company: "Memorial University",
      role: "Co-op Engineering Student",
      period: "Jan 2026 - Apr 2026",
      location: "St. John's, NL",
      description: "Worked as a co-op engineering student delivering hands-on STEM and engineering workshops to youth through school visits, camps, and community outreach events. Collaborated with team members to plan engaging activities while clearly explaining technical concepts to non-technical audiences. Supported coding-based learning by introducing fundamental Python programming and engineering principles.",
      logo: "MU",
      logoUrl: "https://www.sciencerendezvous.ca/wp-content/uploads/2017/03/logo-memorial.jpg",
      color: "from-slate-600 to-slate-700",
      skills: ["Python", "Leadership", "Problem-solving", "Project Management"]
    },
    {
      company: "Paradigm Engineering (Student Design Team)",
      role: "Software Team Member",
      period: "Sept 2025 - Present",
      location: "St. John's, NL",
      description: "Contributed to the software development of the autonomous vehicle system as part of a multidisciplinary student design team. Assisting with implementing STM32-based firmware development and testing for braking control systems, and upgraded RC control mappings using a Pixhawk flight controller to support both manual and autonomous operation.",
      logo: "PE",
      logoUrl: "https://th.bing.com/th/id/OIP.x_SRn5deMk6G2jgMw921PgAAAA?w=159&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      color: "from-slate-600 to-slate-700",
      skills: ["C++", "STM32", "Debugging", "Git/Github"]
    },
    {
      company: "Nasdaq Verafin",
      role: "Student Intern",
      period: "(Jul 2021 - Aug 2021), (Jul 2022 - Aug 2022)",
      location: "St. John's, NL",
      description: "Completed two summer internships focused on developing foundational programming and problem-solving skills. Built experience in Python through applied development tasks and participated in collaborative hackathons, contributing code and ideas under tight deadlines while working within a team environment.",
      logo: "NV",
      logoUrl: "https://th.bing.com/th/id/OIP.G5tst3okQQOHnJezBySjLwAAAA?w=182&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      color: "from-slate-700 to-slate-800",
      skills: ["Python", "Raspberry Pi", "Quality Assurance", "Team Collaboration"]
    },
    {
      company: "Sportchek",
      role: "Footwear Associate (Part-time)",
      period: "(July 2023 - Present)",
      location: "St. John's, NL",
      description: "Provided customer-focused sales support in a fast-paced retail environment while maintaining inventory accuracy and product presentation. Demonstrated leadership by supporting team operations, communicating effectively with customers, and contributing to daily sales goals.",
      logo: "SC",
      logoUrl: "https://i.ibb.co/HLqsdXjY/sportchek.webp",
      color: "from-slate-700 to-slate-800",
      skills: ["Leadership", "Inventory Management", "Communication", "Sales"]
    }
  ];

  const projects = [
    {
      title: "UriTasks",
      tech: "Dart, Flutter",
      description: "An android task management mobile app designed to help me organize daily goals, track productivity, and stay focused. Built with Flutter for smooth performance and a clean, intuitive user experience across android devices.",
      highlight: "Designed for productivity with a clean, responsive Flutter UI",
      tags: ["Dart", "Flutter", "Mobile Applications"],
      image: "https://i.ibb.co/Q7CvJDnq/Screenshot-2026-01-31-195450.png"
    },
    {
      title: "Professional Portfolio Website",
      tech: "React, Tailwind CSS",
      description: "A modern, fully responsive portfolio website showcasing my projects, skills, and experience. Built with React and styled using Tailwind CSS to ensure fast performance, scalability, and a polished user interface.",
      highlight: "Built with modern web technologies and responsive design principles",
      tags: ["React", "Tailwind CSS", "Web Development"],
      image: "https://i.ibb.co/GfzL3LC8/AIGen-Logo.png"
    },
    {
      title: "Study Planner",
      tech: "Python, Tkinter, Arduino, OLED Display",
      description: "An AI-assisted study planner that combines software and hardware to help students manage study sessions more effectively. Features automated scheduling, progress tracking, and real-time reminders using an Arduino-powered OLED display.",
      highlight: "Bridging software, and hardware to enhance student productivity",
      tags: ["Python", "Tkinter", "Arduino", "AI"],
      image: "https://image2url.com/images/1761392125744-99c3e0e9-5046-4497-a60a-01b0b6a61d4e.png" 
    },
    {
      title: "Wind Turbine Prototype Project",
      tech: "Onshape (3D CAD), Bambu Studio (3D Printing)",
      description: "A hands-on engineering project involving the design and fabrication of a small-scale wind turbine prototype. Created detailed 3D CAD models in Onshape and manufactured components using 3D printing techniques.",
      highlight: "From concept to physical prototype using CAD and 3D printing",
      tags: ["Onshape", "3D CAD Modeling", "3D Printing"],
      image: "https://image2url.com/images/1761393239597-602923ff-e611-496a-b2dc-11f61b1e32c8.png" 
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "Dart", "C++", "JavaScript", "HTML/CSS"] },
    { category: "Embedded", items: ["Arduino IDE", "Raspberry Pi", "STM32"] },
    { category: "Tools & Development", items: ["Git", " Flutter", "Github", "VS Code", "Pycharm", "Bambu Studio", "Onshape", "MATLAB"] },
    { category: "Professional", items: ["Project Management", "Teamwork", "Documentation (Microsoft Office)", "Presentation Skills", "Communication"] }
  ];

  const awards = [
    "Brown's Scholarship - $10,000",
    "verafin Computer Engineering Scholarship - $3,000",
    "Technology Career Pathway Scholarship - $2,500",
    "Memorial University Transforming Our Horizons - $2,000"
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/uriel-chilaka",
      color: "hover:bg-slate-700"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/urielchilaka/",
      color: "hover:bg-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:uchilaka@mun.ca",
      color: "hover:bg-red-600"
    },
    {
      name: "Resume",
      icon: FileText,
      url: "https://drive.google.com/file/d/1tCW8p5MFLTK9yN96WgDPAAUdcaYsGDLD/preview",
      color: "hover:bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-800 shadow-lg' : 'bg-neutral-900/80 backdrop-blur border-b border-neutral-800'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent hover:from-white hover:to-slate-200 transition-all">
              Uriel Chilaka
            </button>
            <div className="flex gap-6 flex-wrap">
              {['About', 'Experience', 'Projects', 'Skills', 'Awards', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200'
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
      <header id="home" className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center gap-12">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-neutral-800 bg-gradient-to-br from-slate-700 to-slate-800">
                <img 
                  src="https://i.ibb.co/jZkpsZ86/Uriel-Headshot.jpg" 
                  alt="Uriel Chilaka" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="space-y-6 text-center max-w-3xl">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  Uriel Chilaka
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-light">Computer Engineering Student</p>
              </div>
              
              <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto">
                Welcome to my portfolio! 
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg font-medium transition-all ${link.color} hover:scale-105 hover:border-neutral-600 group`}
                    title={link.name}
                  >
                    <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-slate-400 justify-center">
                <MapPin size={18} />
                <span className="text-sm">Paradise, NL, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* About Section */}
        <section id="about">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded"></div>
            About Me
          </h2>
          <div className="bg-neutral-900/50 backdrop-blur rounded-2xl border border-neutral-800 p-8 hover:border-neutral-700 transition-all">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a Computer Engineering student at Memorial University (Class of 2029) with a strong interest in Artificial Intelligence, Backend Development and Embedded Systems. I have developed skills in programming languages such as Python, Dart, and C++.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-slate-600 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Software Development</h3>
                    <p className="text-slate-400 text-sm">Python, Dart, C++</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-slate-600 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Cpu className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Embedded Hardware</h3>
                    <p className="text-slate-400 text-sm">Arduino, Raspberry Pi, STM32</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded"></div>
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-neutral-900/50 backdrop-blur rounded-2xl border border-neutral-800 p-8 hover:border-neutral-700 transition-all group">
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
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <p className="text-slate-300 font-semibold">{exp.company}</p>
                        <span className="text-neutral-600">•</span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="text-neutral-600">•</span>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-neutral-800 text-slate-300 rounded-lg text-sm font-medium border border-neutral-700 hover:border-slate-600 transition-colors">
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded"></div>
            Featured Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-neutral-900/50 backdrop-blur rounded-2xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all group">
                <div className="flex flex-col md:flex-row">
                  {/* Project Image */}
                  {project.image && (
                    <div className="md:w-72 h-64 md:h-auto flex-shrink-0 bg-neutral-800 border-b md:border-b-0 md:border-r border-neutral-700">
                      <img 
                        src={project.image} 
                        alt={`${project.title} preview`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  {/* Project Content */}
                  <div className="flex-1 p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-slate-400 font-medium mt-1">{project.tech}</p>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-lg w-fit border border-emerald-500/20">
                      <Award size={18} />
                      <span className="font-medium text-sm">{project.highlight}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-neutral-800 text-slate-300 rounded-lg text-sm font-medium border border-neutral-700 hover:border-slate-600 transition-colors">
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded"></div>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-neutral-900/50 backdrop-blur rounded-2xl border border-neutral-800 p-6 hover:border-neutral-700 transition-all">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    <Wrench className="text-white" size={16} />
                  </div>
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((item, i) => (
                    <span key={i} className="px-3 py-2 bg-neutral-800 text-slate-300 rounded-lg text-sm font-medium border border-neutral-700 hover:border-slate-600 hover:scale-105 transition-all">
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded"></div>
            Awards & Recognition
          </h2>
          <div className="bg-neutral-900/50 backdrop-blur rounded-2xl border border-neutral-800 p-8 hover:border-neutral-700 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-neutral-800/30 rounded-xl border border-neutral-700 hover:border-slate-600 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={20} />
                  </div>
                  <p className="text-slate-300 font-medium pt-1">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded"></div>
            Let's Connect
          </h2>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 backdrop-blur rounded-2xl border border-neutral-800 p-8">
            <p className="text-xl mb-8 text-slate-200">
              I'm always open to discussing new opportunities. Feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="mailto:uchilaka@mun.ca" className="flex items-center gap-4 bg-neutral-800/50 hover:bg-neutral-800 transition-all rounded-xl p-5 border border-neutral-700 hover:scale-105 hover:border-slate-600 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400 text-sm">uchilaka@mun.ca</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/urielchilaka/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-neutral-800/50 hover:bg-neutral-800 transition-all rounded-xl p-5 border border-neutral-700 hover:scale-105 hover:border-blue-600 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-slate-400 text-sm flex items-center gap-1">
                    urielchilaka
                    <ExternalLink size={12} className="opacity-50" />
                  </p>
                </div>
              </a>
              
              <a href="https://github.com/uriel-chilaka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-neutral-800/50 hover:bg-neutral-800 transition-all rounded-xl p-5 border border-neutral-700 hover:scale-105 hover:border-slate-600 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-slate-400 text-sm flex items-center gap-1">
                    uriel-chilaka
                    <ExternalLink size={12} className="opacity-50" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900/50 backdrop-blur border-t border-neutral-800 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-300 font-medium">© 2025 Uriel Chilaka</p>
              <p className="text-slate-500 text-sm">Computer Engineering Student @ Memorial University</p>
            </div>
            
            {/* Footer Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:bg-neutral-700 hover:scale-110 transition-all"
                  title={link.name}
                >
                  <link.icon size={18} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrolled && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-slate-600 to-slate-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50 border border-neutral-700"
          aria-label="Scroll to top"
        >
          <ChevronRight size={24} className="rotate-[-90deg]" />
        </button>
      )}
    </div>
  );
}