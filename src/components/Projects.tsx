import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.vercel.app",
      imageUrl: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Express"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskmanager-demo.vercel.app",
      imageUrl: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities using external APIs.",
      technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.vercel.app",
      imageUrl: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "University Course Planner",
      description: "A web application to help students plan their course schedules, track progress, and manage academic requirements.",
      technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
      githubUrl: "https://github.com/yourusername/course-planner",
      liveUrl: "https://your-course-planner.vercel.app",
      imageUrl: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my studies and internships
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="card hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
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
                
                <div className="flex space-x-4 text-sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
