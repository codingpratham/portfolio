import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pratham Koranne
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              and turning innovative ideas into reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:alex.johnson@example.com"
                className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white">Email</p>
                <a 
                  href="mailto:korannepratha@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  korannepratha@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <a 
                  href="tel:+91 7000188012"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  +91 7000188012
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Location</p>
                <p>Ujjain(M.P), India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Pratham Koranne. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;