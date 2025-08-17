import { Code, Database, Globe, Wrench, Cloud, Users } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      technologies: ["JavaScript", "Python", "C#", "Java", "PHP"]
    },
    {
      category: "Frameworks & Libraries",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      technologies: ["React", "Blazor", ".NET", "Express.js", "Node.js"]
    },
    {
      category: "Databases",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      technologies: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      technologies: ["Microsoft Azure", "Amazon AWS", "Oracle Cloud Infrastructure", "Docker"]
    },
    {
      category: "Version Control & Tools",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      technologies: ["Git", "GitHub", "Data Management", "Large Dataset Analysis"]
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      technologies: ["Problem-Solving", "Team Collaboration", "Project Management", "Communication", "Adaptability", "Customer Service"]
    }
  ];

  return (
    <section id="tech-stack" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            My comprehensive skill set spanning technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex p-2 sm:p-3 bg-blue-50 rounded-full mb-3 sm:mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
            Key Highlights
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              "Full-Stack Development",
              "Large Dataset Analysis",
              "Cloud Architecture",
              "Agile Methodology",
              "Cross-Platform Development",
              "API Development",
              "Database Design",
              "DevOps Practices",
              "Quality Assurance",
              "Technical Leadership"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-white rounded-full border border-gray-200 text-gray-700 font-medium hover:border-blue-300 hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base"
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
