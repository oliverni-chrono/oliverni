// ===================================
// Weather App - JavaScript Logic
// ===================================

// Configuration
const CONFIG = {
  API_KEY: 'YOUR_OPENWEATHERMAP_API_KEY', // Replace with your API key
  API_URL: 'https://api.openweathermap.org/data/2.5/weather',
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  DEFAULT_UNITS: 'metric', // 'metric' for Celsius, 'imperial' for Fahrenheit
};

// State
const state = {
  currentWeather: null,
  lastFetchTime: null,
  currentLocation: null,
};

// DOM Elements
const elements = {
  loadingState: document.getElementById('loadingState'),
  errorState: document.getElementById('errorState'),
  weatherContent: document.getElementById('weatherContent'),
  errorMessage: document.getElementById('errorMessage'),
  weatherIcon: document.getElementById('weatherIcon'),
  temperature: document.getElementById('temperature'),
  weatherCondition: document.getElementById('weatherCondition'),
  locationName: document.getElementById('locationName'),
  feelsLike: document.getElementById('feelsLike'),
  humidity: document.getElementById('humidity'),
  windSpeed: document.getElementById('windSpeed'),
  refreshBtn: document.getElementById('refreshBtn'),
  retryBtn: document.getElementById('retryBtn'),
  searchInput: document.getElementById('searchInput'),
  searchBtn: document.getElementById('searchBtn'),
};

// Weather icon mapping
const weatherIcons = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Smoke: '🌫️',
  Haze: '🌫️',
  Dust: '🌫️',
  Fog: '🌫️',
  Sand: '🌫️',
  Ash: '🌫️',
  Squall: '💨',
  Tornado: '🌪️',
};

// ===================================
// Utility Functions
// ===================================

function showLoading() {
  elements.loadingState.classList.remove('hidden');
  elements.errorState.classList.add('hidden');
  elements.weatherContent.classList.add('hidden');
}

function showError(message = 'Unable to load weather data. Please try again.') {
  elements.loadingState.classList.add('hidden');
  elements.errorState.classList.remove('hidden');
  elements.weatherContent.classList.add('hidden');
  elements.errorMessage.textContent = message;
}

function showWeather() {
  elements.loadingState.classList.add('hidden');
  elements.errorState.classList.add('hidden');
  elements.weatherContent.classList.remove('hidden');
}

function getWeatherIcon(condition) {
  return weatherIcons[condition] || '🌡️';
}

function formatTemperature(temp) {
  return `${Math.round(temp)}°`;
}

function formatWindSpeed(speed) {
  // Convert m/s to km/h
  return `${Math.round(speed * 3.6)} km/h`;
}

function isCacheValid() {
  if (!state.lastFetchTime) return false;
  return Date.now() - state.lastFetchTime < CONFIG.CACHE_DURATION;
}

// ===================================
// API Functions
// ===================================

async function fetchWeatherByCoords(lat, lon) {
  try {
    const url = `${CONFIG.API_URL}?lat=${lat}&lon=${lon}&units=${CONFIG.DEFAULT_UNITS}&appid=${CONFIG.API_KEY}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch weather error:', error);
    throw error;
  }
}

async function fetchWeatherByCity(city) {
  try {
    const url = `${CONFIG.API_URL}?q=${encodeURIComponent(city)}&units=${CONFIG.DEFAULT_UNITS}&appid=${CONFIG.API_KEY}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please try another city.');
      }
      throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch weather by city error:', error);
    throw error;
  }
}

// ===================================
// Geolocation
// ===================================

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        let message = 'Unable to get your location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access denied. Please search for a city instead.';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information unavailable.';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out.';
            break;
        }
        reject(new Error(message));
      },
      {
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  });
}

// ===================================
// Weather Data Processing
// ===================================

function updateWeatherDisplay(data) {
  state.currentWeather = data;
  state.lastFetchTime = Date.now();
  
  // Update UI
  const icon = getWeatherIcon(data.weather[0].main);
  elements.weatherIcon.textContent = icon;
  elements.temperature.textContent = formatTemperature(data.main.temp);
  elements.weatherCondition.textContent = data.weather[0].description;
  elements.locationName.textContent = `${data.name}, ${data.sys.country}`;
  elements.feelsLike.textContent = formatTemperature(data.main.feels_like);
  elements.humidity.textContent = `${data.main.humidity}%`;
  elements.windSpeed.textContent = formatWindSpeed(data.wind.speed);
  
  showWeather();
}

// ===================================
// Main Functions
// ===================================

async function loadWeatherByLocation() {
  // Check cache first
  if (state.currentWeather && isCacheValid()) {
    updateWeatherDisplay(state.currentWeather);
    return;
  }
  
  showLoading();
  
  try {
    // Check if API key is set
    if (CONFIG.API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
      throw new Error('Please set your OpenWeatherMap API key in app.js');
    }
    
    // Get user location
    const location = await getUserLocation();
    state.currentLocation = location;
    
    // Fetch weather data
    const weatherData = await fetchWeatherByCoords(location.lat, location.lon);
    
    // Update display
    updateWeatherDisplay(weatherData);
  } catch (error) {
    console.error('Load weather error:', error);
    showError(error.message);
  }
}

async function loadWeatherByCity(city) {
  if (!city || city.trim() === '') {
    showError('Please enter a city name');
    return;
  }
  
  showLoading();
  
  try {
    // Check if API key is set
    if (CONFIG.API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
      throw new Error('Please set your OpenWeatherMap API key in app.js');
    }
    
    // Fetch weather data
    const weatherData = await fetchWeatherByCity(city);
    
    // Update display
    updateWeatherDisplay(weatherData);
    
    // Clear search input
    elements.searchInput.value = '';
  } catch (error) {
    console.error('Load weather by city error:', error);
    showError(error.message);
  }
}

function refreshWeather() {
  // Clear cache
  state.lastFetchTime = null;
  
  // Add spinning animation
  elements.refreshBtn.classList.add('spinning');
  
  // Reload weather
  loadWeatherByLocation().finally(() => {
    // Remove spinning animation after a minimum duration
    setTimeout(() => {
      elements.refreshBtn.classList.remove('spinning');
    }, 500);
  });
}

// ===================================
// Event Listeners
// ===================================

elements.refreshBtn.addEventListener('click', refreshWeather);

elements.retryBtn.addEventListener('click', () => {
  loadWeatherByLocation();
});

elements.searchBtn.addEventListener('click', () => {
  const city = elements.searchInput.value.trim();
  loadWeatherByCity(city);
});

elements.searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = elements.searchInput.value.trim();
    loadWeatherByCity(city);
  }
});

// ===================================
// Initialization
// ===================================

// Load weather on page load
document.addEventListener('DOMContentLoaded', () => {
  loadWeatherByLocation();
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('ServiceWorker registration successful');
      },
      (error) => {
        console.log('ServiceWorker registration failed:', error);
      }
    );
  });
}


