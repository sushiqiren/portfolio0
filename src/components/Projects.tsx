import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "School Recruitment and Class Allocation Management",
      description: "A comprehensive web application for university staff recruitment and class allocation management. Enables applicants to input details and preferences, while allowing staff to view and manage applications efficiently. Improved scheduling efficiency by 30%.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/sushiqiren/schoolRecruit",
      liveUrl: "#",
      imageUrl: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "ShopOnline - Web-based Auction System",
      description: "A complete web-based selling and buying system implementing English Auction strategy. Features five key components: registration, login, listing, bidding, and maintenance. Successfully increased user engagement by 25%.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Auction System"],
      githubUrl: "https://github.com/sushiqiren/shop-online",
      liveUrl: "#",
      imageUrl: "/api/placeholder/600/400",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Here are the key projects I've developed during my studies and professional experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-12 sm:mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="card hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-600 transition-colors py-2 sm:py-0"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-600 transition-colors py-2 sm:py-0"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Only show if there are any */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="card hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/sushiqiren"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
