import { Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      provider: "Oracle",
      year: "2024",
      category: "Cloud & AI",
      level: "Professional",
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      provider: "Oracle", 
      year: "2024",
      category: "Cloud Infrastructure",
      level: "Associate",
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      name: "Microsoft Azure AI Engineer Associate",
      provider: "Microsoft",
      year: "2024",
      category: "AI & Machine Learning",
      level: "Associate",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      name: "Microsoft Azure Fundamental",
      provider: "Microsoft",
      year: "2023",
      category: "Cloud Fundamentals",
      level: "Fundamental",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      name: "General Assembly Front-end Web Development",
      provider: "General Assembly",
      year: "2022",
      category: "Web Development",
      level: "Certificate",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      name: "Holmesglen Cyber Security Certificate IV",
      provider: "Holmesglen",
      year: "2020",
      category: "Cybersecurity",
      level: "Certificate IV",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      name: "CompTIA Security+",
      provider: "CompTIA",
      year: "2020",
      category: "Security",
      level: "Professional",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];
  const recentCertifications = certifications.filter(cert => parseInt(cert.year) >= 2023);

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise across cloud platforms, AI, cybersecurity, and web development
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{certifications.length}</div>
            <div className="text-gray-600">Total Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{recentCertifications.length}</div>
            <div className="text-gray-600">Recent (2023-2024)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length}</div>
            <div className="text-gray-600">Specializations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Cloud Platforms</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{cert.year}</div>
                  <div className="text-sm text-gray-500">Obtained</div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-3">
                {cert.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span className="text-sm font-medium">{cert.provider}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${cert.color}`}>
                    {cert.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                    {cert.level}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Certified in {cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Categories */}
        <div className="card bg-blue-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-sm">{category}</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {certifications.filter(cert => cert.category === category).length} cert{certifications.filter(cert => cert.category === category).length !== 1 ? 's' : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
