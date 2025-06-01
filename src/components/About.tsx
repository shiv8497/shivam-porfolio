import { Code, Palette, Zap, Users, Award, Target, ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import significo from './images/significo.png'
import obys from './images/obys.png';
import ai from './images/ai.png'
import emp from './images/emp.png'
import dentlo from './images/dentlo.png'
import pokemon from './images/pokemon.png'

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('.fade-in-on-scroll');
    const statElements = statsRef.current?.querySelectorAll('.fade-in-on-scroll');
    const projectElements = projectsRef.current?.querySelectorAll('.fade-in-on-scroll');
    
    skillElements?.forEach((el) => observer.observe(el));
    statElements?.forEach((el) => observer.observe(el));
    projectElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Performance Optimization', level: 88, icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Team Collaboration', level: 92, icon: Users, color: 'from-green-500 to-teal-500' },
  ];

  const achievements = [
    { icon: Award, number: '20+', label: 'Projects Completed', color: 'from-purple-500 to-indigo-500' },
    { icon: Users, number: '10+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, number: '3+', label: 'Years Experience', color: 'from-green-500 to-teal-500' },
    { icon: Target, number: '98%', label: 'Success Rate', color: 'from-orange-500 to-red-500' },
  ];

  const projects = [
    {
      title: 'Significo clone',
      description: 'Recreated Significo’s modern website with responsive design, smooth animations, and interactive UI using React, TailwindCSS, JavaScript, and GSAP.',
       image: significo,
      technologies: ['React', 'Locomotive', 'Tailwind CSS', 'GSAP'],
      liveUrl: 'https://significlone7722.netlify.app/',
      githubUrl: 'https://github.com/shiv8497/significo-clone',
      color: 'from-orange-500 to-orange-500'
    },
    {
      title: 'Obys-Agency-Clone',
      description: 'A visually striking OBYS agency clone showcasing modern design, smooth animations, and responsive layout using HTML, CSS, and JavaScript.',
      image: obys,
      technologies: ['HTML', 'GSAP' , 'Locomotive' ,'CSS'],
      liveUrl: 'https://obys7722.netlify.app/',
      githubUrl: 'https://github.com/shiv8497/Obys-Agency-Clone',
      color: 'from-black-500 to-teal-500'
    },
    {
      title: 'AI Image Enhancer',
      description: 'AI Image Enhancer built with React and PicWish API to instantly improve image quality, sharpness, and resolution in one click',
      image: ai,
      technologies: ['React', 'Picwish', 'TailwindCSS', 'Netlify'],
      liveUrl: 'https://imageenahancer.netlify.app/',
      githubUrl: 'https://github.com/shiv8497/Image-Enahancer',
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Employee Management',
      description: 'A React-based Employee Management System with separate admin and employee dashboards for task assignment, tracking, and performance management',
      image: emp,
      technologies: ['React', 'TailwindCSS', 'LocalStorage' ,'Admin Dashboard', 'Framer Motion'],
      liveUrl: 'https://employee7722.netlify.app/',
      githubUrl: 'https://github.com/shiv8497/Employee',
      color: 'from-black-500 to-blue-500'
    },
    {
      title: 'Dentlo',
      description: 'Designed a professional, responsive website for a doctor to showcase services, qualifications, appointments, and patient-friendly health resources.',
      image: dentlo,
      technologies: ['HTML', 'SCSS', 'Javascript', 'Locomotive'],
      liveUrl: 'https://dentlo7722.netlify.app/',
      githubUrl: 'https://github.com/shiv8497/Doctor',
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Pokemon',
      description: 'A React-based Pokémon search app using PokéAPI to fetch and display detailed information about Pokémon with a clean interface',
      image: pokemon,
      technologies: ['React', 'Express', 'MongoDB',],
      liveUrl: 'https://pokemonreact7722.netlify.app/',
      githubUrl: '#',
      color: 'from-teal-500 to-sky blue-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 slide-up">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-up stagger-2">
            Passionate about creating digital experiences that combine aesthetics with functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left column - Text content */}
          <div className="space-y-6 slide-left stagger-3">
            <h3 className="text-2xl font-bold text-gray-900 text-reveal">
              Crafting Digital Excellence Since 2020
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                I'm a passionate developer and designer with over 3 years of experience 
                creating stunning digital solutions. My journey began with curiosity about 
                how beautiful websites work, and has evolved into a mission to help 
                businesses and individuals establish their digital presence.
              </p>
              
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                I believe that great design should be both beautiful and functional. 
                Every project I work on is approached with attention to detail, 
                user experience, and modern best practices.
              </p>
            </div>

            {/* Achievement stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <Card key={achievement.label} className={`p-6 text-center hover-lift hover-glow fade-in-on-scroll stagger-${index + 1} group`}>
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right column - Skills */}
          <div ref={skillsRef} className="slide-right stagger-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-reveal">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <Card key={skill.name} className={`p-6 hover-lift hover-glow fade-in-on-scroll stagger-${index + 1} group`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out hover-glow`}
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slide-right 1.5s ease-out ${index * 0.2}s forwards`
                      }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Projects Section with Micro-interactions */}
        <div ref={projectsRef} className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 slide-up">
              Featured <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto slide-up stagger-2">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`overflow-hidden hover-lift hover-glow fade-in-on-scroll stagger-${(index % 3) + 1} group cursor-pointer project-card`}>
                <div className="relative overflow-hidden">
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Animated overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500 ease-out`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    
                    {/* Floating action buttons with stagger animation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        <Button
                          size="sm"
                          className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 transform group-hover:translate-x-1">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 delay-100"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
