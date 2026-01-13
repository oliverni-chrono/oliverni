# Weather Now ☀️

A beautiful, modern weather app built with world-class UI/UX design principles. Features real-time weather data, automatic location detection, and a clean, responsive interface.

## ✨ Features

- **Real-time Weather Data** - Current temperature, conditions, humidity, wind speed, and feels-like temperature
- **Automatic Location Detection** - Uses geolocation API for automatic weather updates
- **City Search** - Search weather for any city worldwide
- **Beautiful UI** - Modern, clean design following mobile-first principles
- **Dark Mode Support** - Automatic dark mode based on system preferences
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Loading States** - Skeleton screens for smooth loading experience
- **Error Handling** - Clear error messages with retry functionality
- **PWA Ready** - Can be installed as a Progressive Web App

## 🚀 Quick Start

### 1. Get Your API Key

This app uses the OpenWeatherMap API. You'll need a free API key:

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Click "Sign Up" and create a free account
3. Navigate to "API Keys" section
4. Copy your API key

### 2. Configure the App

Open `app.js` and replace the API key on line 8:

```javascript
const CONFIG = {
  API_KEY: 'YOUR_ACTUAL_API_KEY_HERE', // Replace this
  // ... other config
};
```

### 3. Run the App

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### 4. Allow Location Access

When prompted, allow location access for automatic weather detection. If you deny access, you can still search for cities manually.

## 🎨 Design System

This app follows world-class UI/UX design principles:

### Spacing
- **Mobile Padding**: 24px from screen edges
- **Spacing Scale**: 8px base unit (4, 8, 16, 24, 32, 48, 64px)
- **Touch Targets**: Minimum 48x48px for all interactive elements

### Typography
- **Font Scale**: 12px to 64px with proper hierarchy
- **Line Height**: 1.2 for headings, 1.5 for body text
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Colors
- **Primary**: #3B82F6 (blue)
- **Background**: #F8FAFC (light), #0F172A (dark)
- **Text**: Proper contrast ratios (4.5:1 minimum)

### Components
- **Cards**: 16px border radius, elevated shadows
- **Buttons**: 52px height, 12px border radius
- **Inputs**: 52px height, 12px border radius
- **States**: Proper loading, error, and success states

## 📱 Responsive Breakpoints

- **Mobile**: 0-767px (single column, 24px padding)
- **Tablet**: 768-1023px (adjusted spacing)
- **Desktop**: 1024px+ (centered, max-width 600px)

## 🌙 Dark Mode

Dark mode automatically activates based on your system preferences. The app uses CSS custom properties for seamless theme switching.

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Minimum 4.5:1 contrast ratios
- **Touch Friendly**: All interactive elements are minimum 48x48px
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader support for all interactive elements
- **Keyboard Navigation**: Full keyboard support

## 🔧 Customization

### Change Temperature Units

In `app.js`, modify the `DEFAULT_UNITS` config:

```javascript
const CONFIG = {
  // ...
  DEFAULT_UNITS: 'metric', // 'metric' for Celsius, 'imperial' for Fahrenheit
};
```

### Change Cache Duration

Weather data is cached for 5 minutes by default. To change:

```javascript
const CONFIG = {
  // ...
  CACHE_DURATION: 10 * 60 * 1000, // 10 minutes
};
```

### Customize Colors

All colors are defined as CSS custom properties in `styles.css`:

```css
:root {
  --color-primary: #3B82F6;
  --color-background: #F8FAFC;
  /* ... modify as needed */
}
```

## 📦 Files Structure

```
weather/
├── index.html          # Main HTML structure
├── styles.css          # Complete design system & styles
├── app.js             # Weather logic & API integration
├── manifest.json      # PWA manifest
└── README.md          # This file
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### "Please set your OpenWeatherMap API key"
- Make sure you replaced `YOUR_OPENWEATHERMAP_API_KEY` in `app.js` with your actual API key

### Location access denied
- Use the search function to manually enter a city name
- Check your browser's location permissions

### Weather data not loading
- Verify your API key is correct and active
- Check your internet connection
- Open browser console (F12) to see error messages
- API keys may take a few minutes to activate after registration

### Dark mode not working
- Make sure your browser supports `prefers-color-scheme` media query
- Check your system's dark mode settings

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

- Weather data powered by [OpenWeatherMap API](https://openweathermap.org)
- Icons: Emoji weather icons for cross-platform compatibility
- Design: Based on world-class mobile UI/UX principles

## 🚀 Future Enhancements

Potential features to add:
- 7-day weather forecast
- Hourly forecast
- Weather alerts
- Multiple location favorites
- Weather maps
- Custom weather icons
- Offline support with service worker
- Weather history graphs
- Share weather functionality

---

Enjoy your beautiful weather app! ☀️🌧️❄️


