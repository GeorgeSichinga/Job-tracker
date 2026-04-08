# JobWatch Frontend - Copilot Instructions

## Project Overview
Next.js frontend application for JobWatch with TypeScript, Tailwind CSS, and Framer Motion animations. Connected to Flask backend for job data management.

## Technology Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Flask API
- **Package Manager**: npm

## Architecture

### Backend (Flask)
- **Location**: Parent directory (`jobwatch_web/`)
- **Port**: 5000
- **API Endpoints**:
  - `GET /api/jobs` - List jobs with filters (limit, search, applied status)
  - `GET /api/stats` - Get dashboard statistics
  - `POST /api/jobs/<id>/applied` - Mark job as applied
  - `POST /api/cv/process` - Process CV uploads

### Frontend (Next.js)
- **Location**: `job-tracker/`
- **Port**: 3000
- **API Client**: `/src/lib/api.ts` - TypeScript client for backend

## Development Guidelines

### Project Structure
- `/src/app` - Pages and layouts (App Router)
  - `/dashboard` - Dashboard with statistics
  - `/jobs` - Job listings with search and filters
  - `/applications` - Application tracking
  - `/settings` - User settings and preferences
- `/src/components` - Reusable React components
  - `MenuVertical.tsx` - Animated navigation menu
- `/src/lib` - Utility functions
  - `api.ts` - Backend API client

### Code Standards
- Use TypeScript for all files
- Implement responsive design with Tailwind CSS
- Use Framer Motion for smooth animations
- Follow React best practices and hooks
- Use absolute imports with `@/` prefix
- Mark client components with "use client" directive

### API Configuration
- Environment variable: `NEXT_PUBLIC_API_URL`
- Default: `http://localhost:5000`
- Configured in `.env.local`

### Running the Project

**Terminal 1 - Backend (Flask)**:
```bash
cd c:\Users\Mtebetiii\Downloads\Linkedin Scrapper\jobwatch_web
python run_server.py
# Runs on http://localhost:5000
```

**Terminal 2 - Frontend (Next.js)**:
```bash
cd c:\Users\Mtebetiii\Downloads\Linkedin Scrapper\jobwatch_web\job-tracker
npm run dev
# Runs on http://localhost:3000
```

### Available Commands
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - Run ESLint

## Features Implemented

✅ **Dashboard** - Real-time statistics from backend
- Total jobs available
- Applications submitted
- Remote job count
- Malawi job count

✅ **Jobs Page** - Full-featured job browser
- Search by title, company, location
- Filter by applied status
- Toggle job application status
- View job details
- Direct link to job posting

✅ **Applications** - Track submitted applications
- Status filtering
- Application management

✅ **Settings** - User preferences and profile

✅ **MenuVertical Component** - Animated navigation with hover effects

## Setup Status
- [x] Next.js scaffolding
- [x] TypeScript and Tailwind CSS configured
- [x] Framer Motion and Lucide React installed
- [x] MenuVertical component created
- [x] API client integration
- [x] Dashboard connected to backend
- [x] Jobs page with full functionality
- [x] Backend CORS enabled
- [x] Environment configuration

## Troubleshooting

### "ERR_CONNECTION_REFUSED" on Jobs/Dashboard
- Ensure Flask backend is running: `python run_server.py`
- Verify API URL in `.env.local`
- Check CORS is enabled in Flask app

### Jobs not loading
- Check browser console for API errors
- Verify backend has jobs in database
- Check network tab to see API responses

### Styling issues
- Restart dev server: `npm run dev`
- Clear `.next` folder if necessary
- Ensure Tailwind CSS is properly configured
