import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Henry Zhang</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
            Full-Stack Developer & Recent IT Graduate
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Recently graduated with a Master of IT from Swinburne University. I create modern, 
            responsive web applications using React, TypeScript, Node.js, and more. 
            Passionate about delivering innovative software solutions and exceptional user experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="btn-primary text-lg px-8 py-3"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary text-lg px-8 py-3"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
