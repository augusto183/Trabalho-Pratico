/**
 * Carousel functionality for featured news
 */
class NewsCarousel {
    constructor(carouselId, prevButtonId, nextButtonId) {
      this.carousel = document.getElementById(carouselId);
      this.prevButton = document.getElementById(prevButtonId);
      this.nextButton = document.getElementById(nextButtonId);
      this.slideIndex = 0;
      this.slides = [];
      this.autoPlayInterval = null;
      this.intervalDuration = 5000; // 5 seconds between slides
      
      // Initialize event listeners
      this.initEventListeners();
    }
    
    /**
     * Initialize carousel event listeners
     */
    initEventListeners() {
      if (this.prevButton && this.nextButton) {
        this.prevButton.addEventListener('click', () => this.changeSlide(-1));
        this.nextButton.addEventListener('click', () => this.changeSlide(1));
      }
      
      // Pause autoplay on hover
      if (this.carousel) {
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
      }
    }
    
    /**
     * Load slides into the carousel from news data
     * @param {Array} featuredArticles - Array of featured news articles
     */
    loadSlides(featuredArticles) {
      if (!this.carousel) return;
      
      this.slides = featuredArticles;
      this.carousel.innerHTML = '';
      
      featuredArticles.forEach(article => {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        
        slide.innerHTML = `
          <img src="${article.imageUrl}" alt="${article.title}">
          <div class="carousel-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a href="detalhes.html?id=${article.id}" class="read-more">Ler mais</a>
          </div>
        `;
        
        this.carousel.appendChild(slide);
      });
      
      this.updateCarouselPosition();
      this.startAutoPlay();
    }
    
    /**
     * Change to next or previous slide
     * @param {number} direction - Direction to move (1 for next, -1 for previous)
     */
    changeSlide(direction) {
      if (!this.slides.length) return;
      
      this.slideIndex += direction;
      
      // Loop back to start/end if needed
      if (this.slideIndex >= this.slides.length) {
        this.slideIndex = 0;
      } else if (this.slideIndex < 0) {
        this.slideIndex = this.slides.length - 1;
      }
      
      this.updateCarouselPosition();
    }
    
    /**
     * Update the position of the carousel to show current slide
     */
    updateCarouselPosition() {
      if (!this.carousel) return;
      this.carousel.style.transform = `translateX(-${this.slideIndex * 100}%)`;
    }
    
    /**
     * Start automatic slide rotation
     */
    startAutoPlay() {
      if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = setInterval(() => this.changeSlide(1), this.intervalDuration);
    }
    
    /**
     * Pause automatic slide rotation
     */
    pauseAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }
  }
  