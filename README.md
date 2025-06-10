# Installation and Setup Instructions

## 1. Initialize the Workspace

```bash
# Create the directory structure
mkdir my-nx-workspace
cd my-nx-workspace

# Initialize as a new git repository
git init

# Create the basic folder structure
mkdir -p apps/site/src/app
mkdir -p libs/ui/src/lib/ui
mkdir -p node_modules/.vite
```

## 2. Install Dependencies

```bash
# Install all dependencies
npm install

# Install additional dependencies for shadcn/ui components
cd libs/ui
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install -D autoprefixer postcss tailwindcss vite-plugin-dts
```

## 3. Build the UI Library

```bash
# From the root directory
nx build ui
```

## 4. Start the Development Server

```bash
# Start the site application
nx serve site
# or
npm run dev
```

## 5. Build for Production

```bash
# Build all projects
nx build:all
# or build specific project
nx build site
```

---

# Available Scripts

- `npm run dev` – Start the site development server  
- `npm run build` – Build the current project  
- `npm run build:all` – Build all projects  
- `npm run test` – Run tests  
- `npm run lint` – Lint all projects  
- `nx serve site` – Start the site app  
- `nx build ui` – Build the UI library  
- `nx test ui` – Test the UI library  

---

# Project Features

### ✅ Nx Workspace
- Monorepo setup with smart caching  
- Code sharing between applications and libraries  
- Consistent tooling and configuration  

### ✅ React 18 + TypeScript
- Latest React with concurrent features  
- Full TypeScript support with strict mode  
- Type-safe component development  

### ✅ Vite Configuration
- Lightning-fast development server  
- Hot module replacement (HMR)  
- Optimized production builds  
- Plugin ecosystem integration  

### ✅ shadcn/ui Integration
- Pre-built accessible components  
- Tailwind CSS integration  
- Customizable design system  
- CVA (Class Variance Authority) for variants  

### ✅ Development Experience
- ESLint for code quality  
- Prettier for code formatting  
- Path aliases for clean imports  
- TypeScript strict mode  
