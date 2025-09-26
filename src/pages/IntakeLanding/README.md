# Intake Landing Page Component

A complete, responsive landing page component for Intake - a corporate food solutions company. Built with React and vanilla CSS, this component faithfully recreates the provided Figma design.

## Features

- **Complete Landing Page**: Hero section, About Us, Services, Process, Why Choose Us, Our Story, and Footer
- **Pixel-Perfect Design**: Matches the exact specifications from the Figma design
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern CSS**: Uses CSS custom properties (variables) for consistent theming
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Smooth Interactions**: Hover effects and transitions

## Structure

```
src/pages/IntakeLanding/
├── IntakeLanding.jsx      # Main component
├── IntakeLanding.css      # Styles
├── index.js              # Export file
├── demo.jsx              # Demo implementation
└── README.md             # This file
```

## Usage

### Basic Usage

```jsx
import IntakeLanding from './pages/IntakeLanding';

function App() {
  return <IntakeLanding />;
}
```

### With Demo

```jsx
import IntakeLandingDemo from './pages/IntakeLanding/demo';

function App() {
  return <IntakeLandingDemo />;
}
```

## Sections

### 1. Header
- Fixed header with logo and navigation buttons
- Contact Us and Partner with Us CTAs
- Responsive mobile menu

### 2. Hero Section
- Large hero banner with gradient background
- Compelling headline and description
- Call-to-action button
- Hero image with decorative elements

### 3. About Us
- Company introduction
- Mission statement
- Value proposition

### 4. Services
Six main service offerings:
- Corporate Snacks
- Beverage Solutions
- Corporate Meals
- Cakes for Corporate Celebrations
- Vending Solutions
- Corporate Gift Kits

### 5. Bites and Moments
Feature cards highlighting:
- Quick Bites
- Interactive Counters
- On-the-Go Options
- Sweet Finishes

### 6. Our Process
Four-step process explanation:
- 3 Days Trial Run
- Customized Menus
- Easy Pre-Orders
- Feedback-Driven

### 7. Why Choose Us
Six key advantages:
- Flexible vendor network & menu variety
- Premium ingredients & strict hygiene
- Tailored solutions for corporate needs
- Dedicated coordination team
- Professional, approachable service

### 8. Our Story
Company background and mission

### 9. Footer
- Contact information
- Service links
- Social media links
- Legal links

## Styling

The component uses a comprehensive CSS custom properties system based on the Figma design tokens:

```css
:root {
  --color-white-solid: #FFF;
  --color-orange-50: #FF6900;
  --color-accent: #F54900;
  --color-azure-11: #101828;
  --font-family-Font-1: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  /* ... and many more */
}
```

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- React 18+
- No external CSS frameworks (vanilla CSS)

## Notes

- Images are currently using placeholder URLs (`/api/placeholder/...`)
- Replace placeholder images with actual assets
- Update contact information and links as needed
- The component is fully self-contained with no external dependencies

## Customization

To customize the component:

1. **Colors**: Update CSS custom properties in `:root`
2. **Typography**: Modify font-family variables
3. **Spacing**: Adjust spacing variables
4. **Content**: Update text content in the JSX
5. **Images**: Replace placeholder images with actual assets

## Performance

The component is optimized for performance:
- Minimal external dependencies
- Efficient CSS with custom properties
- Optimized images (when using real assets)
- Semantic HTML for better SEO
