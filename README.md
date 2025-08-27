# Modern Portfolio Website

A fully responsive, highly interactive, and dynamic portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop)

## 🚀 Features

- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Highly Interactive**: Smooth animations and transitions using Framer Motion
- **Fast & Lag-Free**: Built with Vite for lightning-fast development and build times
- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Dynamic Content**: Interactive sections with hover effects and animations
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Structured for search engine optimization

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: React Intersection Observer

## 📋 Sections

1. **Hero Section**: Introduction with animated code block
2. **About**: Personal information, education, and experience
3. **Projects**: Showcase of development projects with filtering
4. **Skills**: Technical skills organized by categories
5. **Achievements**: Awards and certifications carousel
6. **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code linting

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── package.json
└── README.md
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color variations
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content

Update the personal information in each component:

- **Hero.tsx**: Name, title, and introduction
- **About.tsx**: Bio, education, and experience
- **Projects.tsx**: Project details and links
- **Skills.tsx**: Technical skills and categories
- **Achievements.tsx**: Awards and certifications
- **Contact.tsx**: Contact information and form

### Animations

Customize animations in the component files using Framer Motion variants.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy to GitHub Pages
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Vite**: Fast build tool and development server
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images for web
- **CSS Optimization**: Purged unused CSS in production

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Datt Patel - [dattpatel2020@gmail.com](mailto:dattpatel2020@gmail.com)

Project Link: [https://github.com/dattpatel/portfolio](https://github.com/dattpatel/portfolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ by Datt Patel**
