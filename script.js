document.body.classList.toggle("light-mode");


// Investment Dashboard demo - I created this to show interactive charts
// It's a simple bar chart using divs since I wanted to keep it lightweight
function showDashboard() {
  const chartDiv = document.getElementById("dashboard-chart");
  if (!chartDiv) {
    console.error("Dashboard chart element not found. This function is expected on the Projects page.");
    return;
  }

  chartDiv.innerHTML = "";
  const data = [70, 85, 55, 90, 65];
  const labels = ["Revenue", "Profit", "Expenses", "Growth", "Risk"];

  data.forEach((val, i) => {
    const bar = document.createElement("div");
    bar.style.width = val + "%";
    // Use CSS custom properties for consistent styling (from your CSS)
    bar.style.backgroundColor = "var(--accent-color)"; // Ensure this is applied
    bar.style.color = "var(--bg-dark)"; // Ensure this is applied
    bar.style.padding = "2px 5px"; // Match CSS for dashboard bars
    bar.style.margin = "4px 0"; // Match CSS for dashboard bars
    bar.style.borderRadius = "10px"; // Match CSS for dashboard bars
    bar.style.fontWeight = "500";
    bar.style.fontSize = "0.9rem"; // A bit smaller for bars
    bar.textContent = labels[i] + ": " + val + "%";
    chartDiv.appendChild(bar);
  });
}

// Algorithm Visualizer - This was fun to build!
// I wanted to show how algorithms work visually, so I made a simple BFS demo
// It draws on canvas and shows nodes connecting to each other
function runVisualizer() {
  const canvas = document.getElementById("algoCanvas");
  if (!canvas) {
    console.error("Algorithm canvas element not found. This function is expected on the Projects page.");
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Canvas context not available");
    return;
  }

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set colors using CSS custom properties approach
  // Match colors with your CSS variables for consistency
  const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim();
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
  const bgDark = getComputedStyle(document.documentElement).getPropertyValue('--bg-dark').trim();


  ctx.fillStyle = textPrimary; // Light color for nodes
  ctx.strokeStyle = accentColor; // Accent color for edges
  ctx.lineWidth = 2;

  const nodes = [
    { x: 50, y: 70 },
    { x: 130, y: 30 },
    { x: 130, y: 110 },
    { x: 210, y: 70 },
  ];

  // Draw edges
  const edges = [
    [0, 1], // Node 0 to Node 1
    [1, 3], // Node 1 to Node 3
    [0, 2], // Node 0 to Node 2
    [2, 3], // Node 2 to Node 3
  ];

  edges.forEach(([from, to]) => {
    ctx.beginPath();
    ctx.moveTo(nodes[from].x, nodes[from].y);
    ctx.lineTo(nodes[to].x, nodes[to].y);
    ctx.stroke();
  });

  // Draw nodes as circles with labels
  nodes.forEach((node, i) => {
    // Draw circle background
    ctx.beginPath();
    ctx.arc(node.x, node.y, 15, 0, 2 * Math.PI);
    ctx.fill();

    // Draw text
    ctx.fillStyle = bgDark; // Dark text on light node background
    ctx.font = "12px Roboto, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(i + 1, node.x, node.y);

    // Reset fill style for next node
    ctx.fillStyle = textPrimary;
  });
}

// Currency Converter - This one was tricky!
// I wanted to show real-time data fetching, so I built a currency converter
// It fetches live exchange rates from an API (but you need your own API key)
function convertCurrency() {
  const result = document.getElementById("conversion-result");
  if (!result) {
    console.error("Conversion result element not found. This function is expected on the Projects page.");
    return;
  }

  result.textContent = "Fetching exchange rates...";
  result.style.color = "var(--text-secondary)"; // Initial text color

  // Using exchangerate-api.com - it's pretty reliable
  // You need to sign up for a free API key at https://www.exchangerate-api.com/
  // The free tier gives you 1000 requests per month, which is plenty for testing
  const API_KEY = 'YOUR_API_KEY'; // <<< IMPORTANT: Replace with your actual API key
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.result === 'success' && data.conversion_rates && data.conversion_rates.EUR) {
        const rate = data.conversion_rates.EUR;
        result.textContent = `1 USD = ${rate.toFixed(4)} EUR`;
        result.style.color = "var(--text-primary)"; // Success text color
      } else {
        throw new Error("Invalid API response format or 'fail' result.");
      }
    })
    .catch((error) => {
      console.error("Currency conversion error:", error);
      result.textContent = "Error: Unable to fetch rates. Check console.";
      result.style.color = "red"; // Indicate error clearly
    });
}

// Setup horizontal slider controls for projects
function setupProjectSlider() {
  const slider = document.querySelector(".slider-wrapper");
  const prevBtn = document.querySelector(".slide-btn.prev");
  const nextBtn = document.querySelector(".slide-btn.next");

  // Only proceed if all elements are found (i.e., we are on the page with the slider)
  if (!slider || !prevBtn || !nextBtn) {
    // console.warn("Slider elements not found - slider functionality disabled for this page.");
    return; // Exit if not on the relevant page
  }

  // Adjust scrollAmount to match your project card width + gap for better sliding
  // Example: if card is 320px and gap is 1.5rem (24px at 16px base font size)
  const cardWidth = 320; // from .project-card flex-basis
  const gap = 24; // from .slider-wrapper gap (1.5rem * 16px)
  const scrollAmount = cardWidth + gap;

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Add keyboard navigation
  slider.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevBtn.click();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextBtn.click();
    }
  });

  // Make slider focusable for keyboard navigation
  slider.setAttribute("tabindex", "0");
}

// Smooth scroll to projects section when "See My Projects" CTA is clicked
function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start" // Scrolls to the top of the element
    });
  }
}

// Button handler - This was actually harder than I thought!
// I had to debug why buttons weren't working and found out it was a z-index issue
// The floating card effects were covering the buttons - classic CSS problem!
function handleAllButtons() {
  console.log('=== BUTTON SETUP STARTED ===');
  
  // First, let's test if we can find ANY buttons
  // I learned this the hard way - always check if elements exist before trying to use them
  const allButtons = document.querySelectorAll('a.button-link');
  console.log('ALL buttons found:', allButtons.length);
  
  if (allButtons.length === 0) {
    console.log('ERROR: No buttons found! Check HTML structure.');
    return;
  }
  
  // Handle all project buttons
  const projectButtons = document.querySelectorAll('.project-links .button-link');
  console.log('Project buttons found:', projectButtons.length);
  
  projectButtons.forEach((btn, i) => {
    console.log(`Setting up project button ${i+1}: ${btn.href}`);
    
    // Make sure button is clickable
    btn.style.cursor = 'pointer';
    btn.style.pointerEvents = 'auto';
    
    // Add click event
    btn.onclick = function(e) {
      console.log('PROJECT BUTTON CLICKED:', this.href);
      
      // Visual feedback
      this.style.transform = 'scale(0.95)';
      this.style.opacity = '0.8';
      setTimeout(() => {
        this.style.transform = '';
        this.style.opacity = '';
      }, 150);
      
      // Let browser handle the link (target="_blank" will open in new tab)
      return true;
    };
  });

  // Handle read article buttons - link to specific sections in about.html
  const readButtons = document.querySelectorAll('a[href="insights.html"]');
  console.log('Read article buttons found:', readButtons.length);
  
  readButtons.forEach((btn, i) => {
    console.log(`Setting up read button ${i+1}`);
    
    btn.onclick = function(e) {
      e.preventDefault();
      console.log('READ ARTICLE BUTTON CLICKED');
      
      // Visual feedback
      this.style.transform = 'scale(0.95)';
      this.style.opacity = '0.8';
      setTimeout(() => {
        this.style.transform = '';
        this.style.opacity = '';
      }, 150);
      
      // Determine which project this button belongs to and link to correct section
      const currentCard = this.closest('.insight-card');
      let targetSection = '';
      
      if (currentCard) {
        const cardTitle = currentCard.querySelector('h3').textContent.toLowerCase();
        console.log('Card title:', cardTitle);
        
        if (cardTitle.includes('vaultcomics')) {
          targetSection = '#vaultcomics-insight';
        } else if (cardTitle.includes('portfolio')) {
          targetSection = '#portfolio-insight';
        } else if (cardTitle.includes('keep in touch') || cardTitle.includes('chat')) {
          targetSection = '#chat-insight';
        } else if (cardTitle.includes('trading')) {
          targetSection = '#trading-insight';
        }
      }
      
      console.log('Redirecting to:', 'about.html' + targetSection);
      
      // Navigate to the specific section in about.html
      if (targetSection) {
        window.location.href = 'about.html' + targetSection;
      } else {
        // Fallback to about.html
        window.location.href = 'about.html';
      }
      
      return false;
    };
  });
  
  console.log('=== BUTTON SETUP COMPLETE ===');
}

// Contact form handler - I kept this simple but effective
// Instead of a complex backend, I just open the user's email client
// It's not fancy, but it works and doesn't need a server!
function handleContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data - FormData is pretty cool for this
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject') || 'Portfolio Contact Form';
      const message = formData.get('message');
      
      // Create mailto link - this is a neat trick!
      // It opens the user's default email client with everything pre-filled
      const mailtoLink = `mailto:panashe.sanyanga@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      
      // Open email client - much simpler than setting up a backend!
      window.location.href = mailtoLink;
      
      // Show success message
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Email Client Opened!';
      submitButton.style.backgroundColor = '#28a745';
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        contactForm.reset();
      }, 3000);
    });
  }
}

// Initialize functions on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("=== JAVASCRIPT LOADED ===");
  
  // Setup project slider only if the elements exist on the current page
  setupProjectSlider();

  // Add event listener for CTA button on the Home page
  const ctaButton = document.querySelector(".cta");
  if (ctaButton && ctaButton.getAttribute("href") === "#projects") {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToProjects();
    });
  }
  
  // Handle all buttons (GitHub, Live Demo, Read Article)
  handleAllButtons();
  
  // Handle contact form
  handleContactForm();
  
  console.log("=== ALL FUNCTIONS INITIALIZED ===");
});