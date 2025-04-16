/**
 * Main JavaScript file for the news portal
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Initialize the news content
    loadNewsContent();
    
    // Initialize the carousel for featured news
    initFeaturedCarousel();
  });
  
  /**
   * Initialize mobile menu functionality
   */
  function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show');
      });
    }
  }
  
  /**
   * Load news content from the data source
   */
  function loadNewsContent() {
    // Get containers
    const latestNewsGrid = document.getElementById('latest-news-grid');
    
    if (!latestNewsGrid) return;
    
    // Clear existing content
    latestNewsGrid.innerHTML = '';
    
    // Load and display latest news articles
    const articles = newsData.articles || [];
    
    articles.forEach(article => {
      // Create news card
      const newsCard = createNewsCard(article);
      latestNewsGrid.appendChild(newsCard);
    });
  }
  
  /**
   * Create a news card element from article data
   * @param {Object} article - Article data object
   * @returns {HTMLElement} - The created news card element
   */
  function createNewsCard(article) {
    const card = document.createElement('article');
    card.className = 'news-card';
    
    card.innerHTML = `
      <div class="news-image">
        <img src="${article.imageUrl}" alt="${article.title}">
      </div>
      <div class="news-content">
        <span class="news-category">${article.category}</span>
        <h3 class="news-title">${article.title}</h3>
        <p class="news-excerpt">${article.excerpt}</p>
        <div class="news-meta">
          <span>${article.date}</span>
          <span>${article.readTime}</span>
        </div>
      </div>
    `;
    
    // Add click event to the entire card
    card.addEventListener('click', function() {
        window.location.href = `detalhes.html?id=${article.id}`;
    });
    
    return card;
  }
  
  /**
   * Initialize the carousel for featured news
   */
  function initFeaturedCarousel() {
    // Get featured articles
    const featuredArticles = (newsData.articles || []).filter(article => article.featured);
    
    // Initialize carousel with featured articles
    const carousel = new NewsCarousel('featured-carousel', 'carousel-prev', 'carousel-next');
    carousel.loadSlides(featuredArticles);
  }
  
  /**
   * Handle newsletter form submission
   */
  document.addEventListener('submit', function(event) {
    const form = event.target;
    
    // Check if this is the newsletter form
    if (form.classList.contains('newsletter-form')) {
      event.preventDefault();
      
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : '';
      
      if (email) {
        // In a real application, this would send the email to a server
        alert(`Obrigado por se inscrever! Você receberá nossa newsletter no email: ${email}`);
        form.reset();
      }
    }
  });
  