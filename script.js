// Countdown Timer Script
function updateCountdown() {
  // Set your target date here (example: 24 hours from now)
  const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000);
  
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update countdown display
    document.getElementById('days-value').textContent = String(days).padStart(2, '0');
    document.getElementById('hours-value').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes-value').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds-value').textContent = String(seconds).padStart(2, '0');
    
    // Stop timer when countdown ends
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('sliderContainer').style.display = 'none';
    }
  }, 1000);
}

// Static Section Show/Hide on Scroll
function handleStaticSection() {
  const staticSection = document.getElementById('static-section');
  const productSection = document.getElementById('product_sec');
  
  if (!staticSection || !productSection) return;
  
  window.addEventListener('scroll', function() {
    const productOffset = productSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > productOffset + 500) {
      staticSection.style.display = 'block';
    } else {
      staticSection.style.display = 'none';
    }
  });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Gallery Image Slider (if using Mustache template)
function initGallery() {
  const galleryTemplate = document.getElementById('gallery-template');
  if (!galleryTemplate) return;
  
  // Example slides data - modify as needed
  const slides = [
    { url: 'https://i.ibb.co/5X5bQkvx/download-2025-08-30-T223832-370.png', index: 0, isFirst: true }
  ];
  
  // If using Mustache.js, uncomment and use:
  // const html = Mustache.render(galleryTemplate.innerHTML, { slides: slides });
  // document.querySelector('.carousel-indicators-container').innerHTML = html;
}

// WhatsApp Order Button Handler
function initOrderButtons() {
  const orderButtons = document.querySelectorAll('#x-checkout-btn');
  const whatsappNumber = '201202293511';
  const productName = 'Adobe Creative Cloud 4 Months Subscription';
  const price = '1100 ج.م';
  
  orderButtons.forEach(button => {
    if (!button.hasAttribute('onclick')) {
      button.addEventListener('click', function() {
        const message = `مرحباً، أريد طلب ${productName} بسعر ${price}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      });
    }
  });
}

// Accordion Icon Toggle
function initAccordion() {
  const accordionButtons = document.querySelectorAll('.accordion-butn');
  
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('i');
      if (icon) {
        if (this.classList.contains('collapsed')) {
          icon.classList.remove('la-minus');
          icon.classList.add('la-plus');
        } else {
          icon.classList.remove('la-plus');
          icon.classList.add('la-minus');
        }
      }
    });
  });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  updateCountdown();
  handleStaticSection();
  initSmoothScroll();
  initGallery();
  initOrderButtons();
  initAccordion();
  
  // Initialize AOS if not in iframe
  if (window.self === window.top && typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      mirror: false,
      once: false,
    });
  }
});

// Handle window resize
window.addEventListener('resize', function() {
  // Add any resize handling here if needed
});
