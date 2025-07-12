<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Project Instructions

This is a full-stack portfolio website built with React, TypeScript, and Node.js.

## Frontend
- React with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling

## Backend
- Node.js with Express
- TypeScript
- CORS enabled for cross-origin requests
- RESTful API endpoints

## Key Features
- Responsive design
- Professional portfolio sections (Hero, About, Tech Stack, Projects, Contact)
- Contact form with backend integration
- Modern UI components with hover effects and animations
- Placeholder image integration

## Development Guidelines
- Use functional components with TypeScript
- Follow Tailwind CSS utility-first approach
- Maintain consistent spacing and color scheme
- Ensure accessibility best practices
- Keep components modular and reusable

## API Endpoints
- GET /api/portfolio - Full portfolio data
- GET /api/portfolio/personal - Personal information
- GET /api/portfolio/projects - Projects list
- GET /api/portfolio/tech-stack - Technology stack
- POST /api/contact - Contact form submission

## Customization
Update the portfolio data in `server/index.ts` to personalize:
- Personal information (name, title, contact details)
- Professional summary
- Technology stack
- Project details
- Social media links
