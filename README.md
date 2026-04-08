# JobWatch Frontend

A modern, animated Next.js frontend for the JobWatch job tracking application. Features real-time job tracking, application management, and interactive dashboards with smooth Framer Motion animations.

##  Quick Start

### Prerequisites
- Node.js 24+
- npm or yarn
- Backend Flask server running on `localhost:5000`

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Dashboard with statistics
│   ├── jobs/               # Job listings page
│   ├── applications/       # Application tracking
│   ├── settings/           # User settings
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
│   └── MenuVertical.tsx    # Animated navigation
└── lib/
    └── api.ts              # Backend API client
```

##  Technology Stack

| Category | Tools |
|----------|-------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion, Paper Design Shaders |
| **Icons** | Lucide React |
| **Backend** | Flask API |
| **Deployment** | Docker + Render |

##  Features

-  Smooth animations with Framer Motion
-  Interactive job dashboard
-  Smart search and filtering
-  Fully responsive design
-  Dynamic shader background animations
-  Docker deployment ready

## 📡 Backend Integration

Connects to Flask API on port 5000:
- `GET /api/jobs` - Fetch job listings
- `GET /api/stats` - Dashboard statistics
- `POST /api/jobs/<id>/applied` - Mark as applied
- `POST /api/cv/process` - Process CV uploads

##  Docker & Deployment

Build locally:
```bash
docker build -t jobwatch-frontend .
docker run -p 3000:3000 jobwatch-frontend
```

Deploy to Render:
```bash
git push origin main
# Auto-deploys via render.yaml
```

##  Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

##  Commands

| Command | Purpose |
|---------|----------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Production server |
| `npm run lint` | Run ESLint |


