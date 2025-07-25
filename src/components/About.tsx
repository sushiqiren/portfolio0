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
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-100 object-cover rounded-lg mb-6"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Full-Stack Developer & Recent Graduate
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Recently graduated with a Master of Information Technology from Swinburne University of Technology, 
                I'm equipped with a strong foundation in software engineering and web application development. 
                My journey in software development combines academic excellence with hands-on experience building 
                scalable applications and delivering practical solutions through both academic projects and professional internships.
              </p>
              <p>
                Key accomplishments include developing interactive web applications, implementing data visualization 
                tools, and collaborating with cross-functional teams to enhance user experience and functionality. 
                I'm skilled in modern web application frameworks like React, as well as backend technologies including 
                Python, C#, PHP, .NET, Node.js, and database systems like MySQL.
              </p>
              <p>
                I'm passionate about creating efficient and innovative software solutions, writing clean and maintainable code, 
                and following best practices to deliver high-quality applications. When I'm not coding, I enjoy staying 
                up-to-date with the latest technologies and sharing knowledge with the developer community.
              </p>
              <p>
                I'm actively seeking a role as a Web Developer or Software Engineer where I can contribute my technical 
                expertise, problem-solving abilities, and enthusiasm for delivering exceptional user experiences.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Based in Melbourne, Australia
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Master of IT Graduate (GPA: 3.8)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Seeking Web Developer/Software Engineer roles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Strong problem-solving and analytical skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Experience with cross-functional team collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Passionate about innovative software solutions
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
