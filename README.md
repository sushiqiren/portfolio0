# Henry Zhang's Portfolio Website

A modern, responsive full-stack portfolio website showcasing my skills, projects, and professional experience as a Full-Stack Developer and recent IT graduate from Swinburne University.

## 🌐 Live Demo

**[Visit Portfolio Website](https://portfolio-beta-gold-69.vercel.app/)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎯 About

This portfolio website serves as a comprehensive showcase of my professional journey, technical skills, and project accomplishments. Built with modern web technologies, it demonstrates my capabilities in full-stack development while providing an intuitive user experience across all devices.

### Key Highlights
- **Recent Graduate**: Master of IT from Swinburne University (2024, GPA 3.8)
- **Professional Experience**: Software development internship and teaching roles
- **Technical Expertise**: Full-stack development, cloud technologies, and database management
- **Certifications**: Oracle Cloud, Microsoft Azure, CompTIA Security+, and more

## ✨ Features

### 🎨 User Interface
- **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Accessibility**: WCAG compliant with proper focus indicators and semantic HTML
- **Dark Mode Ready**: Prepared for future dark theme implementation

### 📱 Mobile Optimization
- **Touch-Friendly**: Minimum 44px touch targets for optimal mobile usability
- **Progressive Enhancement**: Enhanced experience on larger screens
- **Fast Loading**: Optimized images and efficient code splitting
- **Cross-Browser**: Compatible with all modern browsers

### 🎯 Sections
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Me**: Personal summary and quick facts
- **Education**: Academic background and achievements
- **Featured Projects**: Showcase of key development projects
- **Skills & Expertise**: Technical and soft skills categorization
- **Work Experience**: Professional journey and accomplishments
- **Certifications**: Professional credentials and training
- **Contact Form**: Functional contact form with backend integration

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Backend type safety
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Concurrently** - Run multiple npm scripts

### Deployment
- **Vercel** - Frontend and serverless functions hosting
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sushiqiren/portfolio0.git
cd portfolio0
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file in the root directory
cp .env.example .env

# Add your configuration
VITE_API_BASE_URL=http://localhost:3001
NODE_ENV=development
PORT=3001
```

4. **Start development servers**
```bash
# Start both frontend and backend simultaneously
npm run dev:full

# Or start them separately
npm run dev          # Frontend (Vite)
npm run dev:server   # Backend (Node.js)
```

5. **Open your browser**
- Frontend: `http://localhost:5174`
- Backend API: `http://localhost:3001`

## 📖 Usage

### For Visitors

#### 🌐 Browsing the Website
- **Navigation**: Use the top navigation menu or scroll through sections
- **Mobile Users**: Tap the hamburger menu (☰) for mobile navigation
- **Smooth Scrolling**: Click navigation links for smooth section transitions
- **Interactive Elements**: Hover effects on cards, buttons, and links

#### 📬 Contact Form
1. **Navigate** to the Contact section at the bottom of the page
2. **Fill in the form** with the following information:
   - **Name**: Your full name
   - **Email**: Valid email address for response
   - **Message**: Your inquiry, project details, or collaboration proposal
3. **Submit**: Click "Send Message" button
4. **Confirmation**: You'll see a success message upon successful submission
5. **Response Time**: Expect a response within 24-48 hours

#### 📱 Mobile Experience
- **Touch Navigation**: Optimized for touch devices with proper spacing
- **Responsive Images**: Images automatically adjust to screen size
- **Fast Loading**: Optimized for mobile networks
- **Easy Reading**: Typography scales appropriately for mobile screens

### For Developers

#### 🔧 Local Development
```bash
# Install dependencies
npm install

# Start development mode
npm run dev:full

# Build for production
npm run build

# Preview production build
npm run preview
```

#### 🧪 Testing
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── profile.jpg        # Profile image
│   └── vite.svg          # Favicon
├── server/                # Backend API
│   └── index.ts          # Express server and API routes
├── src/                  # Frontend source code
│   ├── components/       # React components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Hero.tsx     # Landing section
│   │   ├── About.tsx    # About me section
│   │   ├── Education.tsx# Education background
│   │   ├── Projects.tsx # Project showcase
│   │   ├── TechStack.tsx# Skills and expertise
│   │   ├── Experience.tsx# Work experience
│   │   ├── Certifications.tsx# Professional certifications
│   │   ├── Contact.tsx  # Contact form
│   │   └── Footer.tsx   # Site footer
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🔌 API Endpoints

The portfolio includes a backend API with the following endpoints:

### Public Endpoints
- `GET /api/portfolio` - Complete portfolio data
- `GET /api/portfolio/personal` - Personal information
- `GET /api/portfolio/education` - Education history
- `GET /api/portfolio/projects` - Projects list
- `GET /api/portfolio/tech-stack` - Skills and technologies
- `GET /api/portfolio/experience` - Work experience and volunteer work
- `GET /api/portfolio/certifications` - Professional certifications
- `POST /api/contact` - Contact form submission

### API Usage Example
```javascript
// Fetch all projects
const response = await fetch('/api/portfolio/projects');
const projects = await response.json();

// Submit contact form
const contactData = {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello, I'd like to discuss a project."
};

const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(contactData)
});
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy to Vercel**
```bash
vercel login
vercel --prod
```

3. **Configure Environment Variables**
```bash
# Set environment variables in Vercel dashboard
VITE_API_BASE_URL=https://your-domain.vercel.app
NODE_ENV=production
```

### Alternative Deployment Options
- **Netlify**: Frontend with Netlify Functions
- **Railway**: Full-stack deployment
- **GitHub Pages**: Static site deployment

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Commit** your changes (`git commit -am 'Add some improvement'`)
4. **Push** to the branch (`git push origin feature/improvement`)
5. **Create** a Pull Request

## 📧 Contact

**Henry Zhang**
- **Email**: [henryzhang3192@gmail.com](mailto:henryzhang3192@gmail.com)
- **LinkedIn**: [henry-zhang-melbourne](https://www.linkedin.com/in/henry-zhang-melbourne)
- **GitHub**: [sushiqiren](https://github.com/sushiqiren)
- **Location**: Melbourne, Australia

### Professional Inquiries
I'm actively seeking opportunities in:
- **Full-Stack Development** positions
- **Software Engineering** roles
- **Cloud Architecture** projects
- **Database Development** opportunities
- **Technical Consulting** engagements

Feel free to reach out for:
- 💼 **Job Opportunities**
- 🤝 **Collaboration Projects**
- 💡 **Technical Discussions**
- 📚 **Knowledge Sharing**
- ☕ **Coffee Chats** (Melbourne locals)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- **Swinburne University** - For excellent IT education and foundation
- **DARQ Room** - For internship opportunity and practical experience
- **Open Source Community** - For amazing tools and libraries
- **Tailwind CSS** - For beautiful and efficient styling
- **Vercel** - For seamless deployment platform

---

**Built with ❤️ by Henry Zhang**

*This portfolio demonstrates modern web development practices, responsive design principles, and full-stack development capabilities. It serves as both a personal showcase and a practical example of contemporary web development techniques.*
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
