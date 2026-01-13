// ===================================
// PWA Installation & Service Worker
// ===================================

let deferredPrompt;
let isInstalled = false;

// Check if app is already installed
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
  isInstalled = true;
  console.log('PWA: App is installed');
  document.getElementById('installStatus').textContent = 'App installed successfully! ✓';
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('PWA: Service Worker registered successfully', registration.scope);
        
        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute
      })
      .catch((error) => {
        console.error('PWA: Service Worker registration failed:', error);
      });
  });
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA: beforeinstallprompt event fired');
  
  // Prevent the mini-infobar from appearing
  e.preventDefault();
  
  // Save the event for later use
  deferredPrompt = e;
  
  // Show the install prompt
  showInstallPrompt();
});

// Show install prompt
function showInstallPrompt() {
  if (isInstalled) return;
  
  const installPrompt = document.getElementById('installPrompt');
  const installTrigger = document.getElementById('installTrigger');
  
  if (installPrompt) {
    installPrompt.classList.remove('hidden');
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      hideInstallPrompt();
    }, 10000);
  }
  
  if (installTrigger) {
    installTrigger.classList.remove('hidden');
  }
}

// Hide install prompt
function hideInstallPrompt() {
  const installPrompt = document.getElementById('installPrompt');
  if (installPrompt) {
    installPrompt.classList.add('hidden');
  }
}

// Install button click handler
const installBtn = document.getElementById('installBtn');
const installTrigger = document.getElementById('installTrigger');
const closeInstallBtn = document.getElementById('closeInstallBtn');

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
      console.log('PWA: Install prompt not available');
      return;
    }
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`PWA: User response: ${outcome}`);
    
    if (outcome === 'accepted') {
      console.log('PWA: User accepted the install prompt');
      isInstalled = true;
      document.getElementById('installStatus').textContent = 'App installed successfully! ✓';
    } else {
      console.log('PWA: User dismissed the install prompt');
    }
    
    // Clear the deferred prompt
    deferredPrompt = null;
    
    // Hide the install UI
    hideInstallPrompt();
    if (installTrigger) {
      installTrigger.classList.add('hidden');
    }
  });
}

// Manual install trigger
if (installTrigger) {
  installTrigger.addEventListener('click', () => {
    showInstallPrompt();
  });
}

// Close button
if (closeInstallBtn) {
  closeInstallBtn.addEventListener('click', () => {
    hideInstallPrompt();
  });
}

// Listen for app installed event
window.addEventListener('appinstalled', () => {
  console.log('PWA: App was installed successfully');
  isInstalled = true;
  hideInstallPrompt();
  
  if (installTrigger) {
    installTrigger.classList.add('hidden');
  }
  
  document.getElementById('installStatus').textContent = 'App installed successfully! ✓';
  
  // Show success message
  if (typeof showToast === 'function') {
    showToast('App installed successfully! 🎉');
  }
});

// Check for updates
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('PWA: New service worker activated');
    
    // Optionally show update notification
    if (confirm('A new version of Weather Now is available! Reload to update?')) {
      window.location.reload();
    }
  });
}

// Handle offline/online status
window.addEventListener('online', () => {
  console.log('PWA: Back online');
  document.getElementById('installStatus').textContent = isInstalled ? 'App installed successfully! ✓' : 'Install as app for offline access';
});

window.addEventListener('offline', () => {
  console.log('PWA: Offline mode');
  document.getElementById('installStatus').textContent = '📵 Offline mode - using cached data';
});

// iOS standalone mode detection
if (window.navigator.standalone === true) {
  console.log('PWA: Running in iOS standalone mode');
  isInstalled = true;
}

// Display mode detection
const displayMode = window.matchMedia('(display-mode: standalone)').matches ? 'standalone' :
                   window.matchMedia('(display-mode: fullscreen)').matches ? 'fullscreen' :
                   window.matchMedia('(display-mode: minimal-ui)').matches ? 'minimal-ui' :
                   'browser';

console.log('PWA: Display mode:', displayMode);

if (displayMode === 'standalone' || displayMode === 'fullscreen') {
  isInstalled = true;
  document.getElementById('installStatus').textContent = 'App installed successfully! ✓';
}

// Helper function to show toast notifications
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-text-primary);
    color: var(--color-background);
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 14px;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, duration);
}

