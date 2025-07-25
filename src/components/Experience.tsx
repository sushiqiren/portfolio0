import { Briefcase, Calendar, MapPin, Award, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "The DARQ Room",
      location: "Melbourne, Australia",
      period: "Jul - Oct 2024",
      type: "Internship",
      responsibilities: [
        "Developed solutions for an interactive diagram representing action flow steps contributing to a key feature of the platform",
        "Actively participated in team discussions to identify areas for improvement and integrate new features",
        "Attended daily development meetings to report on progress and discuss upcoming tasks",
        "Created documentation detailing functionalities and potential future enhancements for the project"
      ],
      achievements: [
        "Successfully completed an interactive diagram project that allows users to visualize and interact with the flow of actions within the system",
        "Enhanced platform usability by improving user interaction with complex action flow structures"
      ]
    },
    {
      title: "Casual Instructor",
      company: "Edvantage Institute of Australia/Global Business College of Australia",
      location: "Melbourne, Australia",
      period: "May - Nov 2024, Nov - Dec 2023",
      type: "Part-time",
      responsibilities: [
        "Delivered online classes on data acquisition, web crawling, and artificial intelligence (3 hours per week)",
        "Develop and structure unit and session content to ensure comprehensive learning outcomes",
        "Encouraged students to participate in discussions, fostering a collaborative learning environment and promoting self-directed learning"
      ],
      achievements: [
        "Deepened expertise in artificial intelligence through curriculum development and teaching",
        "Consistently received positive feedback from students for clear, engaging, and insightful lessons",
        "Effectively conducted bilingual (English and Chinese) instruction, enhancing accessibility for diverse student backgrounds",
        "Created interactive learning activities that enhanced student engagement and improved knowledge retention"
      ]
    },
    {
      title: "Hose Technician",
      company: "Enzed Moorabbin",
      location: "Melbourne, Australia",
      period: "Apr - Sep 2021",
      type: "Full-time",
      responsibilities: [
        "Managed inventory and data entry, ensuring accuracy in stock records",
        "Delivered excellent customer service in a fast-paced setting, focusing on hydraulic and pneumatic machinery hose repairs",
        "Enhanced communication skills by developing an efficient system for interacting with customers and team members"
      ],
      achievements: [
        "Boosted fitting sales over five months by implementing a clear labeling system and enabling customer self-service"
      ]
    },
    {
      title: "Senior Government Officer",
      company: "Hangzhou Municipal Committee Office",
      location: "Hangzhou, China",
      period: "Mar 2006 - May 2019",
      type: "Full-time",
      responsibilities: [
        "Collaborated with stakeholders to produce and analyse government data reports, supporting decision-making",
        "Conducted data trend analysis and developed visual presentations to support municipal council decision-making"
      ],
      achievements: [
        "Received three commendations from senior management for exceptional work quality",
        "Played a key role in cross-departmental collaboration, proactively coordinating between teams to streamline data collection and reporting"
      ]
    }
  ];

  const volunteering = {
    title: "Search Engine Optimization Specialist",
    company: "Australian Multi-Cultural Communities United Ltd",
    location: "Melbourne, Australia",
    period: "Sep 2022 - Mar 2023",
    type: "Volunteer",
    description: "Worked for AMCCU for more than half year and got the great experience of SEO, useful for web application and data analysis. Leveraged creative techniques to optimize search visibility and streamline user engagement"
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and key contributions across different roles and industries
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-blue-600 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-16 space-y-6">
                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-green-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteering Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Volunteer Experience
          </h3>
          <div className="card bg-green-50 border-green-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {volunteering.title}
                </h4>
                <p className="text-md font-medium text-green-600 mb-2">
                  {volunteering.company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {volunteering.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {volunteering.period}
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {volunteering.type}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {volunteering.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="card bg-blue-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Experience Highlights
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-700">Years Total Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-700">Technical Roles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-700">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-700">Management Commendations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
