# AQUAS - Autonomous Water Quality Monitoring

AQUAS is an autonomous water quality monitoring system designed to protect New York's waterways through Columbia University's innovative robotics technology. This website showcases the project's mission, technology, and impact on environmental conservation.

## 🌊 About AQUAS

AQUAS (Autonomous Water Quality Monitoring) addresses the growing threat of harmful algal blooms (HABs) across New York's waterways. Our modular system combines autonomous robotics, environmental sensing, and targeted treatment to monitor and mitigate algal blooms, driving community-centric water quality management solutions.

### Key Features

-   **Environmental Sensing**: Deployment-ready sensor buoy with 5 calibrated environmental sensors
-   **Water Sampling System**: Autonomous water sampling for HAB-rich sample collection
-   **Dispersal System**: Novel algaecide deployment for targeted treatment
-   **Autonomous Navigation**: LiDAR and computer vision obstacle detection

## 🚀 Technology Stack

-   **Framework**: React 18 with TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS with custom design system
-   **UI Components**: Radix UI primitives with shadcn/ui
-   **Routing**: React Router DOM
-   **State Management**: TanStack Query
-   **Icons**: Lucide React
-   **Forms**: React Hook Form with Zod validation
-   **Deployment**: GitHub Pages

## 🎨 Design System

### Color Palette

The site uses a sophisticated ocean-inspired color scheme:

```css
/* Primary Colors */
--primary: 201 100% 30%; /* Deep Ocean Blue #006B95 */
--secondary: 162 100% 35%; /* Muted Seafoam Green #00B38A */
--accent: 48 100% 67%; /* Eco Yellow #FFE156 */

/* Background Colors */
--background: 210 100% 8%; /* Midnight Navy #0D1B2A */
--foreground: 195 60% 96%; /* Soft White-Blue #F5F9FA */

/* Surface Colors */
--card: 212 25% 17%; /* Slate Blue-Grey #1B263B */
--surface: 212 25% 17%; /* Slate Blue-Grey #1B263B */

/* Semantic Colors */
--destructive: 0 84% 60%; /* Error Red */
--muted: 212 25% 17%; /* Muted backgrounds */
--border: 212 25% 25%; /* Border colors */
```

### Typography

-   **Primary Font**: DM Sans (300, 400, 500, 600, 700)
-   **Heading Font**: Space Grotesk (400, 500, 600, 700)
-   **Font Stack**: `"Space Grotesk", "DM Sans", sans-serif`

### Component Styling

#### Buttons

```css
.btn-ocean {
	@apply bg-primary text-primary-foreground px-10 py-5 rounded-2xl 
         font-semibold text-lg transition-all duration-300 
         hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl;
}

.btn-secondary {
	@apply bg-transparent border-2 border-foreground/20 text-foreground 
         px-10 py-5 rounded-2xl font-semibold text-lg 
         transition-all duration-300 hover:bg-foreground/5 
         hover:scale-[1.02] hover:border-foreground/40;
}
```

#### Gradients

```css
.ocean-gradient {
	background: linear-gradient(
		135deg,
		hsl(var(--primary)),
		hsl(var(--secondary))
	);
}

.section-gradient {
	background: linear-gradient(
		180deg,
		hsl(var(--background)),
		hsl(var(--surface))
	);
}
```

#### Shadows

```css
.shadow-ocean {
	box-shadow: 0 25px 50px -12px hsl(var(--primary) / 0.4);
}

.shadow-float {
	box-shadow: 0 12px 35px -10px hsl(var(--foreground) / 0.15);
}
```

### Animations

-   **Fade-in**: Smooth opacity and transform transitions
-   **Hover Effects**: Scale and shadow transitions
-   **Scroll Animations**: Intersection Observer-based reveals

## 📱 Responsive Design

The site is fully responsive with breakpoints:

-   **Mobile**: Default (320px+)
-   **Tablet**: `md:` (768px+)
-   **Desktop**: `lg:` (1024px+)
-   **Large Desktop**: `2xl:` (1400px+)

### Container System

```css
.container {
	@apply mx-auto px-8 lg:px-12;
	max-width: 1400px;
}
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Landing hero section
│   ├── ProblemSection.tsx # Problem statement
│   ├── SolutionSection.tsx # Technology showcase
│   ├── ContactSection.tsx # Contact form
│   └── Navbar.tsx      # Navigation
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd aquas-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint
-   `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

The site is deployed on GitHub Pages at [https://aquasrobotics.com](https://aquasrobotics.com)

### Build Configuration

-   **Framework**: Vite
-   **Output Directory**: `dist/`
-   **Base Path**: Configured for GitHub Pages
-   **Environment**: Production optimizations enabled

## 🎯 Key Features

### 1. Hero Section

-   Full-screen landing with ocean background
-   Animated scroll indicator
-   Call-to-action buttons
-   Responsive typography scaling

### 2. Problem Section

-   Statistics cards with icons
-   Economic impact data
-   Health crisis information
-   Environmental damage metrics

### 3. Solution Section

-   Technology feature grid
-   Step-by-step process explanation
-   Interactive elements
-   Visual technology representation

### 4. Contact Section

-   Email integration with EmailJS
-   Form validation
-   Success/error handling
-   Responsive design

## 🔧 Customization

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Follow existing styling patterns
4. Add intersection observer for animations

### Modifying Colors

Update CSS variables in `src/index.css`:

```css
:root {
	--primary: [new-hue] [new-saturation] [new-lightness];
	/* ... other variables */
}
```

### Adding Animations

Use the existing animation classes:

```css
.fade-in {
	opacity: 0;
	transform: translateY(40px);
	transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

## 📄 License

This project is part of Columbia University's AQUAS initiative for autonomous water quality monitoring.

## 🤝 Contributing

For contributions to the AQUAS project, please contact the Columbia University team.

---

**AQUAS** - Protecting New York's waterways with autonomous technology.
