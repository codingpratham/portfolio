
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'GoSoft Pvt. Ltd.',
      position: 'Trainee',
      duration: 'Aug-2022 - Sep-2023',
      location: 'Ujjain(M.P), India',
      description: 'Assisted in the development of web applications using React and Node.js while gaining hands-on experience PostgreSQL and Prisma. Learned core web development concepts, collaborated with the development team, and contributed to small-scale features and bug fixes.',
      achievements: [
        'Built basic responsive web pages using React and Tailwind CSS',
        'Gained foundational knowledge of backend development with Node.js and Express',
        'Learned to integrate PostgreSQL databases and perform CRUD operations'
      ],
      technologies: ['React', 'Node.js', 'Prisma' , 'JavaScript', 'TypeScript', 'PostgreSQL']
    },
    {
  company: 'Freelance',
  position: 'Full Stack Developer',
  duration: 'Dec-2023 - present',
  location: 'Remote',
  description: 'Designed and developed responsive, visually appealing websites for local vendors and small businesses, helping them establish a professional online presence.',
  achievements: [
    'Delivered 10+ custom websites tailored to client branding and business needs',
    'Optimized site performance for fast loading and mobile responsiveness',
    'Integrated contact forms, maps, and basic e-commerce features as per client requirements'
  ],
  technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL']
}

  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((experience) => (
                <div key={experience.company} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>

                  <div className="ml-20">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{experience.position}</h3>
                          <h4 className="text-xl text-blue-400 mb-2">{experience.company}</h4>
                        </div>
                        <div className="flex flex-col md:items-end text-gray-400">
                          <div className="flex items-center mb-1">
                            <Calendar size={16} className="mr-2" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-lg font-semibold mb-3 flex items-center">
                          <Briefcase size={18} className="mr-2 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-3">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;