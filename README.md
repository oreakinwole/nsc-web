# Nigerian Shortlet Community (NSC)

![Brand Color](https://img.shields.io/badge/Brand_Color-%23049b35-049b35?style=for-the-badge)
![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?style=for-the-badge&logo=nuxt.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, community-driven shortlet rental platform connecting guests with comfortable, fully-furnished apartments across Nigeria.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Brand Identity

- **Name**: Nigerian Shortlet Community (NSC)
- **Primary Color**: `#049b35` (Green)
- **Logo**: Located at `assets/logo.jpg`
- **Mission**: Building Nigeria's most trusted community for shortlet rentals

## 📦 Project Structure

```
nsc-web/
├── assets/
│   └── logo.jpg              # NSC Logo
├── components/
│   └── rental/               # All rental components
│       ├── NavBar.vue        # Navigation with logo
│       ├── HeroSection.vue   # Hero with search
│       ├── PropertyCard.vue  # Property card component
│       ├── FeaturedProperties.vue
│       ├── WhyChooseUs.vue
│       ├── HowItWorks.vue
│       ├── Testimonials.vue
│       └── Footer.vue
├── layouts/
│   └── default.vue           # Main layout with nav & footer
├── pages/
│   └── index.vue             # Homepage
└── tailwind.config.cjs       # Brand colors & theme
```

## ✨ Features

### Current Features
- 🏠 Property search with location and date filters
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with smooth animations
- ⭐ Property cards with ratings and amenities
- 💬 Customer testimonials section
- 📍 Featured properties showcase
- 🔄 4-step booking process visualization

### Homepage Sections
1. **Hero** - Search functionality with quick stats
2. **Featured Properties** - 6 sample property listings
3. **Why Choose NSC** - 6 key benefits with icons
4. **How It Works** - Step-by-step booking guide
5. **Testimonials** - Customer reviews
6. **Footer** - Contact info & links

## 🎨 Design System

### Colors
```css
Primary: #049b35       /* Brand Green */
Primary Dark: #037a29  /* Hover states */
Primary Light: #05c442 /* Accents */
Secondary: #1a1a1a     /* Text */
Accent: #f59e0b        /* Ratings */
```

### Typography
- Headings: System default
- Body: Sans-serif
- Responsive: 5xl → 7xl for hero

## 🛠️ Technology Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: Vue 3 with Composition API
- **Icons**: Inline SVG (Heroicons style)

## 📝 Customization

### Update Property Listings
Edit `components/rental/FeaturedProperties.vue`:

```javascript
const properties = ref([
  {
    id: 1,
    title: 'Luxury 2-Bedroom Apartment',
    location: 'Lekki Phase 1, Lagos',
    price: 45000,
    rating: 4.9,
    image: '/path/to/image.jpg',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Security']
  }
])
```

### Update Contact Info
Edit `components/rental/Footer.vue`:
- Email: `info@nsc.ng`
- Phone: `+234 800 000 0000`
- Location: `Lagos, Nigeria`

### Change Brand Colors
Edit `tailwind.config.cjs` in the `colors` section.

## 🚧 Next Steps

### Phase 1: Core Features
- [ ] Add real property database
- [ ] Implement functional search
- [ ] Add property detail pages
- [ ] Integrate real images

### Phase 2: User Features
- [ ] User authentication (signup/login)
- [ ] Booking system
- [ ] Payment integration
- [ ] User dashboard

### Phase 3: Advanced Features
- [ ] Property owner dashboard
- [ ] Reviews & ratings system
- [ ] Real-time availability
- [ ] Email notifications
- [ ] Admin panel

## 📧 Contact

- **Email**: info@nsc.ng
- **Website**: Coming soon
- **Location**: Lagos, Nigeria

## 📄 License

All rights reserved © 2025 Nigerian Shortlet Community (NSC)

---

For detailed documentation, see [RENTAL_PROJECT_INFO.md](RENTAL_PROJECT_INFO.md)
