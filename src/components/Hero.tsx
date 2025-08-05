import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600">Henry Zhang</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-medium px-2">
            Full-Stack Developer & Recent IT Graduate
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed px-2 max-w-3xl mx-auto">
            Recently graduated with a Master of IT from Swinburne University. I create modern, 
            responsive web applications using React, TypeScript, Node.js, and more. 
            Passionate about delivering innovative software solutions and exceptional user experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a
              href="#projects"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-8">
            <a
              href="https://github.com/sushiqiren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github size={28} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/henry-zhang-melbourne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:henryzhang3192@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              aria-label="Email Contact"
            >
              <Mail size={28} className="sm:w-6 sm:h-6" />
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
