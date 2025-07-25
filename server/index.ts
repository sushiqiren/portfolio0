import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Portfolio data
const portfolioData = {
  personal: {
    name: "Henry Zhang",
    title: "Full-Stack Developer & Recent IT Graduate",
    email: "hzfulilove@hotmail.com",
    phone: "+61 0451685482",
    location: "Cheltenham, Victoria, Australia",
    github: "https://github.com/sushiqiren",
    linkedin: "https://www.linkedin.com/in/henry-zhang-melbourne",
    avatar: "/api/placeholder/400/400"
  },
  summary: "Recently graduated with a Master of Information Technology from Swinburne University of Technology, equipped with a strong foundation in software engineering and web application development. Hands-on experience building scalable applications and delivering practical solutions through academic projects and professional internships. Key accomplishments include developing interactive web applications, implementing data visualization tools, and collaborating with cross-functional teams. Skilled in modern frameworks like React, backend technologies including Python, C#, PHP, .NET, Node.js, and MySQL. Passionate about creating efficient and innovative software solutions, seeking a role as a Web Developer or Software Engineer.",
  education: [
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
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      provider: "Oracle",
      year: "2024",
      category: "Cloud & AI",
      level: "Professional"
    },
    {
      name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      provider: "Oracle", 
      year: "2024",
      category: "Cloud Infrastructure",
      level: "Associate"
    },
    {
      name: "Microsoft Azure AI Engineer Associate",
      provider: "Microsoft",
      year: "2024",
      category: "AI & Machine Learning",
      level: "Associate"
    },
    {
      name: "Microsoft Azure Fundamental",
      provider: "Microsoft",
      year: "2023",
      category: "Cloud Fundamentals",
      level: "Fundamental"
    },
    {
      name: "General Assembly Front-end Web Development",
      provider: "General Assembly",
      year: "2022",
      category: "Web Development",
      level: "Certificate"
    },
    {
      name: "Holmesglen Cyber Security Certificate IV",
      provider: "Holmesglen",
      year: "2020",
      category: "Cybersecurity",
      level: "Certificate IV"
    },
    {
      name: "CompTIA Security+",
      provider: "CompTIA",
      year: "2020",
      category: "Security",
      level: "Professional"
    }
  ],
  experience: [
    {
      id: 1,
      position: "Software Developer Intern",
      company: "DARQ Room",
      location: "Melbourne, Australia",
      period: "June 2024 - August 2024",
      type: "Internship",
      description: "Developed web applications and gained hands-on experience with modern development tools and practices.",
      responsibilities: [
        "Collaborated with development team on web application projects",
        "Implemented frontend features using modern JavaScript frameworks",
        "Participated in code reviews and agile development processes",
        "Gained practical experience with version control and deployment workflows"
      ],
      technologies: ["JavaScript", "React", "Git", "Web Development"]
    },
    {
      id: 2,
      position: "Casual Instructor",
      company: "StudyLinks Education Centre",
      location: "Melbourne, Australia",
      period: "2023 - 2024",
      type: "Part-time",
      description: "Provided educational instruction and support to students in various subjects.",
      responsibilities: [
        "Delivered engaging lessons to students of different age groups",
        "Developed customized learning materials and assessments",
        "Maintained clear communication with students and parents",
        "Adapted teaching methods to accommodate diverse learning styles"
      ],
      technologies: ["Educational Technology", "Communication", "Curriculum Development"]
    },
    {
      id: 3,
      position: "Casual Instructor",
      company: "Multiple Education Centers",
      location: "Melbourne, Australia",
      period: "2022 - 2024",
      type: "Part-time",
      description: "Provided instruction across multiple educational institutions, demonstrating adaptability and diverse teaching skills.",
      responsibilities: [
        "Managed classes across different educational centers",
        "Developed flexible teaching approaches for various curricula",
        "Maintained consistent quality of instruction across multiple venues",
        "Built strong relationships with students and educational staff"
      ],
      technologies: ["Teaching Methodologies", "Classroom Management", "Educational Assessment"]
    },
    {
      id: 4,
      position: "Senior Government Officer",
      company: "Government Agency",
      location: "China",
      period: "2006 - 2021",
      type: "Full-time",
      description: "Senior administrative role with extensive experience in government operations, policy implementation, and public service.",
      responsibilities: [
        "Managed complex administrative processes and policy implementation",
        "Supervised junior staff and coordinated departmental activities",
        "Liaised with various stakeholders and government departments",
        "Ensured compliance with regulations and administrative standards",
        "Led initiatives for process improvement and efficiency enhancement"
      ],
      technologies: ["Administrative Systems", "Policy Management", "Team Leadership", "Project Coordination"]
    }
  ],
  volunteerExperience: [
    {
      id: 1,
      organization: "AMCCU (Australia Melbourne Chinese Christians Union)",
      role: "Volunteer",
      period: "2022 - Present",
      description: "Active community volunteer contributing to cultural and religious activities.",
      activities: [
        "Participated in community outreach programs",
        "Assisted with cultural events and celebrations",
        "Provided support for community members and new immigrants",
        "Contributed to organizational activities and fundraising efforts"
      ]
    }
  ],
  techStack: [
    {
      category: "Programming Languages",
      technologies: ["JavaScript", "Python", "C#", "Java", "PHP"]
    },
    {
      category: "Frameworks & Libraries",
      technologies: ["React", ".NET", "Express.js", "Node.js"]
    },
    {
      category: "Databases",
      technologies: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["Microsoft Azure", "Amazon AWS", "Oracle Cloud Infrastructure", "Docker"]
    },
    {
      category: "Version Control & Tools",
      technologies: ["Git", "GitHub", "Data Management", "Large Dataset Analysis"]
    },
    {
      category: "Soft Skills",
      technologies: ["Problem-Solving", "Team Collaboration", "Project Management", "Communication", "Adaptability", "Customer Service"]
    }
  ],
  projects: [
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
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities using external APIs.",
      technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.vercel.app",
      imageUrl: "/api/placeholder/600/400",
      featured: false
    }
  ]
};

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/personal', (req, res) => {
  res.json(portfolioData.personal);
});

app.get('/api/portfolio/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/portfolio/tech-stack', (req, res) => {
  res.json(portfolioData.techStack);
});

app.get('/api/portfolio/education', (req, res) => {
  res.json(portfolioData.education);
});

app.get('/api/portfolio/certifications', (req, res) => {
  res.json(portfolioData.certifications);
});

app.get('/api/portfolio/experience', (req, res) => {
  res.json({
    experience: portfolioData.experience,
    volunteerExperience: portfolioData.volunteerExperience
  });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }
  
  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Use a service like SendGrid, Nodemailer, etc.
  
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

// Placeholder image endpoint
app.get('/api/placeholder/:width/:height', (req, res) => {
  const { width, height } = req.params;
  res.redirect(`https://via.placeholder.com/${width}x${height}/3b82f6/ffffff?text=Portfolio+Image`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
