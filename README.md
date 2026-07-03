# Ella's Cinematic Portfolio

A stunning, cinematic portfolio website built with React, featuring smooth animations and modern design patterns.

## 🎬 Features

- **Cinematic Animations**: Smooth, film-like transitions using Framer Motion
- **Modern Design**: Glass morphism effects, gradients, and dark theme
- **Responsive**: Fully responsive layout for all devices
- **Interactive**: Hover effects, scroll animations, and engaging interactions
- **Clean Code**: Well-organized, maintainable component structure

## 📁 Project Structure

```
ella-s-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and static resources
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.jsx   # Landing section with cinematic intro
│   │   │   ├── About.jsx  # About me with skill bars
│   │   │   ├── Projects.jsx # Portfolio grid with project cards
│   │   │   ├── Contact.jsx # Contact form and info
│   │   │   └── Footer.jsx # Page footer
│   │   └── ui/            # Reusable UI components
│   │       └── Navigation.jsx # Sticky navigation bar
│   ├── styles/
│   │   └── index.css      # Global styles and Tailwind imports
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Application entry point
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technologies Used

- **React**: UI library
- **Vite**: Build tool and dev server
- **Framer Motion**: Animation library
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS**: CSS post-processor
- **Autoprefixer**: CSS vendor prefixing

## 📝 Customization

### Updating Content

- **Hero Section**: Edit `src/components/sections/Hero.jsx`
- **About Section**: Edit `src/components/sections/About.jsx` (update skills and bio)
- **Projects**: Edit the `projects` array in `src/components/sections/Projects.jsx`
- **Contact**: Update contact info in `src/components/sections/Contact.jsx`

### Styling

- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles are inline using Tailwind classes

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/ui/Navigation.jsx`

## 🎨 Design Features

- **Glass Morphism**: Frosted glass effect on cards and navigation
- **Gradient Backgrounds**: Animated gradient backgrounds
- **Smooth Scroll**: Native smooth scrolling
- **Hover Effects**: Interactive hover states on cards and buttons
- **Scroll Animations**: Elements animate in as you scroll
- **Responsive Grid**: Adaptive layouts for different screen sizes

## 📱 Sections

1. **Hero**: Cinematic landing with animated orbs and call-to-action
2. **About**: Personal introduction with animated skill bars
3. **Projects**: Grid of project cards with hover effects
4. **Contact**: Contact form and social media links
5. **Footer**: Simple footer with copyright

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available for personal use.
