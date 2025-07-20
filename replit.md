# Prachi Harsh & Associates - Chartered Accountancy Firm Website

## Overview

This is a full-stack web application for Prachi Harsh & Associates, a chartered accountancy firm based in Gujarat, India. The application features both a static HTML website and a modern React-based single-page application with a Node.js/Express backend, PostgreSQL database integration, and comprehensive contact form functionality.

## System Architecture

The application follows a hybrid architecture combining:

1. **Static HTML Website**: Traditional multi-page website with Bootstrap styling
2. **Modern React SPA**: Single-page application built with React, TypeScript, and Tailwind CSS
3. **Node.js Backend**: Express.js server handling API requests and database operations
4. **PostgreSQL Database**: Data persistence with Drizzle ORM for schema management

### Frontend Architecture

**Static HTML Pages:**
- Traditional HTML pages with Bootstrap 5 for styling
- Responsive design with mobile-first approach
- JavaScript for interactive elements and smooth scrolling
- Pages: Home, About, Services, Team, Contact

**React SPA:**
- Built with React 18, TypeScript, and Vite
- Tailwind CSS with shadcn/ui component library
- React Hook Form for form validation
- TanStack Query for API state management
- Wouter for client-side routing

### Backend Architecture

**Express.js Server:**
- RESTful API endpoints for contact form submissions
- Middleware for request logging and error handling
- Development mode with Vite integration for hot module replacement
- Production-ready build process with esbuild

**Database Layer:**
- PostgreSQL database with Neon serverless integration
- Drizzle ORM for type-safe database operations
- Schema migrations and database push capabilities
- Connection pooling for optimal performance

## Key Components

### Database Schema
- **contact_submissions**: Stores contact form data (name, email, phone, subject, message, timestamp)
- **users**: User authentication table (for future admin functionality)

### API Endpoints
- `POST /api/contact`: Submit contact form data
- `GET /api/contact`: Retrieve all contact submissions (admin)

### UI Components
- Comprehensive shadcn/ui component library integration
- Custom theme with professional color palette
- Responsive design components
- Form validation with React Hook Form and Zod

### Key Features
- Contact form with validation and submission handling
- Professional responsive design
- SEO-optimized meta tags and Open Graph integration
- Smooth animations and transitions
- Mobile-first responsive design

## Data Flow

1. **Contact Form Submission:**
   - User fills out contact form on frontend
   - Form data validated using Zod schema
   - API request sent to `/api/contact` endpoint
   - Backend validates data and stores in PostgreSQL
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Static Content Delivery:**
   - HTML pages served directly for traditional navigation
   - React SPA handles dynamic routing and interactions
   - Assets optimized and bundled via Vite

## External Dependencies

### Frontend Libraries
- React 18 with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- React Hook Form for form handling
- TanStack Query for API management
- Wouter for routing
- Lucide React for icons

### Backend Dependencies
- Express.js web framework
- Drizzle ORM with PostgreSQL adapter
- Neon serverless PostgreSQL
- Zod for schema validation
- CORS and security middleware

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- PostCSS with Tailwind CSS

## Deployment Strategy

**Development Environment:**
- Vite dev server with hot module replacement
- Express server with TypeScript execution via tsx
- PostgreSQL database connection via environment variables
- Port 5000 for development server

**Production Build:**
- Vite builds React app to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static assets served from Express server
- Environment variables for database connection
- Autoscale deployment target on Replit

**Environment Configuration:**
- `NODE_ENV=development` for dev mode
- `DATABASE_URL` for PostgreSQL connection
- Separate development and production configurations

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Updated website images with custom provided assets:
  * Hero section: Replaced with general.jpeg (company building exterior)
  * Vision & Mission section: Replaced with Outside view.png (office building)
  * About us page: Replaced with Mam in cabin.jpeg (professional in office)
  * Our Story section: Replaced with Selfie.jpeg (team photo)
- June 27, 2025. Enhanced Our Story section with office media showcase:
  * Added office lobby video (Lobby video.mp4)
  * Added office area image (Office area.png)
  * Added reception area image (Receptionist.jpeg)
  * Created multimedia gallery layout with descriptions
- June 27, 2025. Added hover animations to partner cards:
  * Card lift effect on hover (translateY(-5px))
  * Enhanced shadow effect on hover
  * Image scale effect (1.05x) on hover
  * Smooth transitions matching team member cards
- July 20, 2025. Migration to Replit environment completed:
  * Set up PostgreSQL database with proper configuration
  * Created database tables for contact submissions and users
  * Fixed all dependencies and server startup issues
  * Verified application running successfully on port 5000
- July 20, 2025. Added Google Maps embed to "Our Location" section:
  * Integrated custom Google Maps iframe in React Contact component
  * Added same map embed to static HTML contact page
  * Enhanced styling with rounded corners and shadow effects
  * Responsive design with 100% width and 480px height
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```