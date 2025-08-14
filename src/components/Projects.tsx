import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Bagify is a modern full-stack e-commerce platform built with React.js,Node.js, Express.js, TypeScript, PostgreSQL, Prisma, and Razorpay. Features include secure authentication(JWT), product browsing, shopping cart, checkout, order tracking, and a fully responsive UI.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'PrismaORM', 'RazorPay', 'Tailwind CSS'],
      github: 'https://github.com/codingpratham/Bagify-E-Commerce-website',
      live: 'https://bagify-e-commerce-website-codingprathams-projects.vercel.app/login',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'TaskFlow is a full-stack task management platform built with TypeScript and a clean client-server architecture. It enables users to create, update, and manage tasks in real-time with an intuitive interface and responsive design. Deployed seamlessly via Vercel for fast performance.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL' , "PrismaORM", 'Tailwind CSS'],
      github: 'https://github.com/codingpratham/TaskFlow',
      live: 'https://task-flow-nu-two.vercel.app/login',
      featured: true
    },
    {
      title: 'Expense Tracker App',
      description: 'finanSmart is a modern financial management web application featuring a sleek, responsive interface and intelligent insights. Built with Next.js, this app offers a clean UI, modular architecture, and real-time features to help users track and manage their finances effortlessly.',
      image: 'https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS' , 'OpenAI' ],
      github: 'https://github.com/codingpratham/finanSmart',
      live: 'https://finan-smart-myd2.vercel.app/',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700/80 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        className="p-3 bg-blue-600/80 backdrop-blur-sm rounded-full hover:bg-blue-500/80 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies &&
                      project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full text-sm border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300"
                    >
                      <Eye size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700/80 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-blue-600/80 backdrop-blur-sm rounded-full hover:bg-blue-500/80 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies &&
                      project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;