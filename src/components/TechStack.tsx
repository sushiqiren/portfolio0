import { Code, Database, Globe, Wrench } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      technologies: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      category: "Tools & Others",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      technologies: ["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack", "Vite"]
    }
  ];

  return (
    <section id="tech-stack" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 bg-blue-50 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center justify-center px-3 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Version Control",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Testing & Debugging"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 font-medium hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
