const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card">
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Full-Stack Developer
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a dedicated full-stack developer with a strong foundation in modern web technologies. 
                My journey in software development began during my university studies, where I discovered 
                my passion for creating innovative solutions to complex problems.
              </p>
              <p>
                Throughout my academic career and internships, I've gained hands-on experience with 
                React, TypeScript, Node.js, and various databases. I enjoy the challenge of building 
                applications from the ground up, from designing intuitive user interfaces to 
                architecting robust backend systems.
              </p>
              <p>
                When I'm not coding, I enjoy staying up-to-date with the latest technologies, 
                contributing to open-source projects, and sharing knowledge with the developer community. 
                I believe in writing clean, maintainable code and following best practices to deliver 
                high-quality software solutions.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Based in Your City, Country
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Available for internships and full-time positions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Strong problem-solving and analytical skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Team player with excellent communication skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
