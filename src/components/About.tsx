import React from 'react';
import { User, Heart, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center mb-4">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                My journey into tech began during my diploma in 2023, where I discovered a deep interest in building applications that solve real-world problems. I chose full-stack development because it allows me to bring ideas to life from both the front and back end, giving me complete creative and technical control. Over time, I’ve worked on freelancing projects ranging from e-commerce sites to custom tools for clients, using technologies like MERN, Next.js, Supabase, Firebase, OpenAI, JavaScript, TypeScript, and Docker. Currently, I’m diving deeper into AI development, aiming to create intelligent, user-focused applications that push boundaries and deliver meaningful impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center mb-4">
                <Heart className="text-red-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">What I Love</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about solving complex problems, learning new technologies, and mentoring 
                fellow developers. When I'm not coding, you'll find me exploring the latest tech trends 
                or contributing to open-source projects.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-8 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-gray-700/50">
                  <User size={120} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 flex flex-col items-center">
                <Coffee className="text-orange-400 mb-2" size={24} />
                <div className="text-gray-400">Coffee Lover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;