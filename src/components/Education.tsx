import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Information Technology",
      gpa: "3.8",
      institute: "Swinburne University",
      location: "Melbourne",
      year: "2024",
      type: "Master's Degree"
    },
    {
      degree: "Master of Environmental Engineering",
      institute: "Tongji University",
      location: "China",
      year: "2006",
      type: "Master's Degree"
    },
    {
      degree: "Bachelor of Water Supply and Sewerage Engineering",
      institute: "Tongji University",
      location: "China",
      year: "2003",
      type: "Bachelor's Degree"
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {edu.degree}
                        {edu.gpa && (
                          <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        {edu.type}
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-16 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="font-medium">{edu.institute}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Completed in {edu.year}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {edu.year}
                    </div>
                    <div className="text-sm text-gray-500">
                      Year Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="card bg-blue-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Educational Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-700">Degrees Earned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-700">Master's Degrees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">3.8</div>
                <div className="text-gray-700">Latest GPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
