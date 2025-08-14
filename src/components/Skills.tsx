import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Express', 'Hono'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Tools',
      icon: <Code className="w-8 h-8" />,
      skills: ['Git', 'VS Code', 'Figma', 'Postman'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < (skillIndex % 3 + 3) 
                              ? `bg-gradient-to-r ${category.color}` 
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;