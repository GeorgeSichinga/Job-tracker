# JobWatch Frontend - Development Guidelines

## Project Overview
Next.js frontend for JobWatch job tracking application with TypeScript, Tailwind CSS, Framer Motion animations, and Paper Design Shaders for background effects.

## Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion + Paper Design Shaders (Warp)
- **Icons**: Lucide React
- **Backend**: Flask API (port 5000)
- **Deployment**: Docker + Render
- **Package Manager**: npm
- **Node Version**: 24+

## Architecture

### Frontend Structure
- `/src/app` - Next.js App Router pages
  - `/dashboard` - Statistics and overview
  - `/jobs` - Job listings with search/filters
  - `/applications` - Application tracking
  - `/settings` - User preferences
  - `/layout.tsx` - Root layout provider
  - `/page.tsx` - Homepage with Warp background
- `/src/components` - Reusable components
  - `MenuVertical.tsx` - Animated navigation menu
- `/src/lib` - Utilities
  - `api.ts` - Backend API client (TypeScript)

### Backend API (Flask)
- **Host**: localhost:5000 (dev) / production URL (prod)
- **Endpoints**:
  - `GET /api/jobs` - List jobs (supports filters: limit, search, applied)
  - `GET /api/stats` - Dashboard statistics
  - `POST /api/jobs/<id>/applied` - Mark job as applied
  - `POST /api/cv/process` - Process CV uploads

## Code Standards

### General Rules
- ✅ TypeScript for all components and utilities
- ✅ Absolute imports: `@/components`, `@/lib`, etc.
- ✅ "use client" directive for interactive components
- ✅ Responsive design with Tailwind CSS mobile-first
- ✅ Named exports for components

### Component Patterns
```typescript
// Client Component example
"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

export const MyComponent: FC<Props> = ({ title }) => {
  return <motion.div>{title}</motion.div>;
};
```

### Animations
- Use Framer Motion for component animations
- Use Paper Design Shaders (Warp) for background effects
- Smooth transitions: 0.3-0.6s duration
- Easing: default for smooth, "easeInOut" for reversals

### Styling
- Tailwind CSS utilities only (no CSS modules unless necessary)
- Use CSS variables for theme colors
- Follow mobile-first responsive patterns
- Dark mode friendly (bg-black, text-white as defaults)

## Development Workflow

### Starting Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Backend should be running on http://localhost:5000
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## File Organization

### Components Directory
Components should be organized as:
```
components/
├── MenuVertical.tsx     # Navigation menu
└── [future components]
```

### Library/Utils
```
lib/
├── api.ts              # Backend API client
└── [utilities]
```

### App Routes
Each route gets its own directory with page.tsx:
```
app/
├── dashboard/page.tsx
├── jobs/page.tsx
├── applications/page.tsx
├── settings/page.tsx
└── page.tsx            # Home
```

## Environment Configuration

### Development (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_ENV=development
```

### Production (Render)
- Set `NEXT_PUBLIC_API_URL` to production Flask API URL
- Auto-deployed via `render.yaml`

## Deployment

### Docker Build
```bash
docker build -t jobwatch-frontend .
docker run -p 3000:3000 jobwatch-frontend
```

### Render Deployment
1. Push to GitHub: `git push origin main`
2. Render automatically deploys via `render.yaml`
3. Auto-generated domain: `jobwatch-frontend.onrender.com`
4. Optional: Connect custom domain via DNS

## Naming Conventions

- **Components**: PascalCase (`MenuVertical.tsx`)
- **Utils/Hooks**: camelCase (`useJobData.ts`)
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase (e.g., `JobItem`, `MenuItemProps`)
- **CSS Classes**: kebab-case (Tailwind default)

## Common Tasks

### Add New Page
1. Create `/src/app/[route]/page.tsx`
2. Add to MenuVertical items
3. Implement with "use client" if interactive

### Add API Endpoint
1. Update `/src/lib/api.ts` with new fetch call
2. Use TypeScript for type safety
3. Add error handling

### Update Styling
1. Use Tailwind CSS utilities
2. Avoid custom CSS unless necessary
3. Maintain responsive design

## TypeScript Best Practices

- Import React types: `import { FC, ReactNode } from "react"`
- Define component props: `interface MyComponentProps { }`
- Use `typeof` for inferred types when possible
- Avoid `any` type

## Testing & QA

Before deployment:
- ✅ Test all routes load correctly
- ✅ Verify animations smooth on low-end devices
- ✅ Check mobile responsiveness
- ✅ Test backend API connectivity
- ✅ Verify build completes: `npm run build`

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Paper Design Shaders](https://github.com/paper-design/shaders-react)
- [Lucide Icons](https://lucide.dev)

## Support

Questions? Check the project's GitHub issues or documentation in the repo.
