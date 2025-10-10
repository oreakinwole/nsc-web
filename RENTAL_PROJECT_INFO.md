# Nigerian Shortlet Community (NSC) - Shortlet Rentals Website

This project has been transformed into a modern shortlet rentals platform for apartments.

## Brand Identity
- **Primary Color**: #049b35 (Green)
- **Website Name**: Nigerian Shortlet Community (NSC)
- **Logo**: [assets/logo.jpg](assets/logo.jpg)
- **Purpose**: Community-driven shortlet apartment rentals across Nigeria

## Project Structure

### New Components Created

All rental-specific components are located in `/components/rental/`:

1. **NavBar.vue** - Fixed navigation with mobile responsiveness
2. **HeroSection.vue** - Hero section with search functionality
3. **PropertyCard.vue** - Reusable property card component
4. **FeaturedProperties.vue** - Grid of featured apartments
5. **WhyChooseUs.vue** - Benefits and features section
6. **HowItWorks.vue** - Step-by-step booking process
7. **Testimonials.vue** - Customer reviews section
8. **Footer.vue** - Comprehensive footer with links and contact info

### Updated Files

1. **tailwind.config.cjs** - Updated color scheme with brand colors
2. **app.vue** - Changed loading indicator to brand color (#049b35)
3. **layouts/default.vue** - Integrated NavBar and Footer
4. **pages/index.vue** - New homepage with all rental sections

## Features

### Homepage Sections
1. **Hero Section** with integrated property search
2. **Featured Properties** - Showcasing 6 sample apartments
3. **Why Choose Us** - 6 key benefits with icons
4. **How It Works** - 4-step booking process
5. **Testimonials** - Customer reviews
6. **Footer** - Contact info and links

### Design Features
- Responsive design (mobile, tablet, desktop)
- Brand color (#049b35) consistently applied
- Smooth transitions and hover effects
- Modern card-based layouts
- Fixed navigation bar
- Mobile-friendly menu

## Color Palette

- **Primary**: #049b35 (Brand Green)
- **Primary Dark**: #037a29
- **Primary Light**: #05c442
- **Secondary**: #1a1a1a (Dark text)
- **Accent**: #f59e0b (Gold for ratings)
- **Gray Light**: #f3f4f6
- **Gray Color**: #6b7280
- **Text Muted**: #9ca3af

## Technology Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Language**: Vue 3 (Composition API)
- **Icons**: Inline SVG (Heroicons style)

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Customization Guide

### Updating Property Listings

Edit `/components/rental/FeaturedProperties.vue` and modify the `properties` array:

```javascript
const properties = ref([
  {
    id: 1,
    title: 'Your Property Title',
    location: 'Location',
    price: 45000,
    rating: 4.9,
    image: '/path/to/image.jpg',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Security']
  }
])
```

### Updating Testimonials

Edit `/components/rental/Testimonials.vue` and modify the `testimonials` array.

### Changing Brand Colors

Edit `/tailwind.config.cjs` and update the color values in the `extend.colors` section.

### Updating Contact Information

Edit `/components/rental/Footer.vue` to update:
- Email address (currently: info@nsc.ng)
- Phone number (currently: +234 800 000 0000)
- Physical address (currently: Lagos, Nigeria)
- Social media links

## Next Steps

1. **Add Real Property Data** - Replace placeholder data with actual properties
2. **Image Integration** - Add real property images
3. **Backend Integration** - Connect to API for property listings
4. **Search Functionality** - Implement working search with filters
5. **Booking System** - Add booking flow and payment integration
6. **User Authentication** - Add login/signup functionality
7. **Admin Dashboard** - Create property management interface
8. **Reviews System** - Implement real user reviews

## Notes

- All components use the Composition API (Vue 3 style)
- Responsive breakpoints: mobile (default), md (768px), lg (1024px)
- Image placeholders need to be replaced with real property photos
- Property data is currently hardcoded - needs backend integration
