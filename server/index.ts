import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact submission interface
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
  status: 'new' | 'read' | 'replied';
}

// File path for storing submissions
const CONTACT_FILE = path.join(process.cwd(), 'contact-submissions.json');

// Helper functions for file operations
async function loadSubmissions(): Promise<ContactSubmission[]> {
  try {
    const data = await fs.readFile(CONTACT_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveSubmissions(submissions: ContactSubmission[]): Promise<void> {
  await fs.writeFile(CONTACT_FILE, JSON.stringify(submissions, null, 2));
}

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
      title: "ShopOnline - Web-based Auction System",
      description: "A complete web-based selling and buying system implementing English Auction strategy. Features five key components: registration, login, listing, bidding, and maintenance. Successfully increased user engagement by 25%.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Auction System"],
      githubUrl: "https://github.com/sushiqiren/shop-online",
      imageUrl: "/PHPProject.png",
      featured: true
    },
    {
      id: 2,
      title: "EventEase - Blazor Event Management System",
      description: "A comprehensive event management platform built with Blazor framework. Features event discovery, registration, user dashboard, and event management capabilities. Provides a modern web application experience with server-side rendering and interactive UI components.",
      technologies: ["Blazor", "C#", ".NET", "Entity Framework", "Bootstrap", "SQL Server"],
      githubUrl: "https://github.com/sushiqiren/blazorProject1",
      imageUrl: "/blazorProject.png",
      featured: true
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
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }
  
  try {
    // Create new submission
    const submission: ContactSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date(),
      status: 'new'
    };

    // Save to file
    const submissions = await loadSubmissions();
    submissions.push(submission);
    await saveSubmissions(submissions);

    // Send email notification to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${submission.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${submission.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> 
              <a href="mailto:${submission.email}" style="color: #3b82f6;">${submission.email}</a>
            </p>
            <p style="margin: 10px 0;"><strong>Submission Time:</strong> ${submission.timestamp.toLocaleString()}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${submission.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              <strong>Reply to:</strong> ${submission.email}<br>
              <strong>Submission ID:</strong> ${submission.id}
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    console.log('Contact form submission processed:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      timestamp: submission.timestamp
    });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.',
      submissionId: submission.id
    });
    
  } catch (error) {
    console.error('Error processing contact submission:', error);
    
    // Still log the submission even if email fails
    console.log('Contact form submission (email failed):', { name, email, message });
    
    res.status(500).json({
      success: false,
      message: 'There was an issue sending your message. Please try again or contact me directly.'
    });
  }
});

// Get all contact submissions (for your own use)
app.get('/api/contact/submissions', async (req, res) => {
  try {
    const submissions = await loadSubmissions();
    res.json({
      success: true,
      submissions: submissions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ),
      total: submissions.length
    });
  } catch (error) {
    console.error('Error loading submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to load submissions'
    });
  }
});

// Get a specific submission
app.get('/api/contact/submissions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const submissions = await loadSubmissions();
    const submission = submissions.find(s => s.id === id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    res.json({
      success: true,
      submission
    });
  } catch (error) {
    console.error('Error fetching submission:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submission'
    });
  }
});

// Update submission status
app.patch('/api/contact/submissions/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: new, read, or replied'
      });
    }
    
    const submissions = await loadSubmissions();
    const submissionIndex = submissions.findIndex(s => s.id === id);
    
    if (submissionIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    submissions[submissionIndex].status = status;
    await saveSubmissions(submissions);
    
    res.json({
      success: true,
      submission: submissions[submissionIndex]
    });
  } catch (error) {
    console.error('Error updating submission status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update submission status'
    });
  }
});

// Serve dashboard for contact submissions
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dashboard.html'));
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
