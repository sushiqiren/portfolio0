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
    title: "Full-Stack Developer",
    email: "henryzhang3192@gmail.com",
    phone: "+61 0451685482",
    location: "Cheltenham, Victoria, Australia",
    github: "https://github.com/sushiqiren",
    linkedin: " https://www.linkedin.com/in/henry-zhang-melbourne",
    avatar: "/api/placeholder/400/400"
  },
  summary: "Passionate full-stack developer with experience in modern web technologies. Skilled in React, TypeScript, Node.js, and database management. Committed to writing clean, efficient code and creating exceptional user experiences.",
  techStack: [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack", "Vite"]
    }
  ],
  projects: [
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
