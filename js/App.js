// Portal de Notícias - JavaScript

// Variáveis globais
let currentSlide = 0;
let sliderInterval = null;
let progressInterval = null;

// Log para debugging
console.log("Aplicação inicializada");

// Funções utilitárias
function getTemplate(id) {
  return document.getElementById(id).content.cloneNode(true);
}

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  // Atualizar o ano no footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Configurar menu mobile
  setupMobileMenu();
  
  // Configurar formulário de newsletter
  setupNewsletterForm();
  
  // Determinar qual página exibir
  const articleId = getURLParameter('id');
  if (articleId) {
    renderDetailPage(parseInt(articleId));
  } else {
    renderHomePage();
  }
});

// Configuração do menu mobile
function setupMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });
}

// Configuração do formulário de newsletter
function setupNewsletterForm() {
  const newsletterForm = document.getElementById('newsletter-form');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    
    if (emailInput.value.trim() !== '') {
      alert('Obrigado por se inscrever! Você receberá nossas atualizações em ' + emailInput.value);
      emailInput.value = '';
    }
  });
}

// Renderização da página inicial
function renderHomePage() {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';
  
  // Adicionar conteúdo da home
  const homeTemplate = getTemplate('home-template');
  contentContainer.appendChild(homeTemplate);
  
  // Carregar notícias em destaque no slider
  const featuredNews = newsData.filter(item => item.featured);
  setupNewsSlider(featuredNews);
  
  // Carregar todas as notícias no grid
  setupNewsGrid(newsData);
  
  // Carregar informações do autor
  setupAuthorInfo(authorData);
}

// Configuração do slider de notícias
function setupNewsSlider(featuredItems) {
  const sliderContainer = document.getElementById('news-slider');
  
  if (featuredItems.length === 0) {
    sliderContainer.innerHTML = '<p class="p-4">Nenhum item em destaque disponível.</p>';
    return;
  }
  
  // Criar os slides
  let slidesHTML = '';
  featuredItems.forEach((item, index) => {
    slidesHTML += `
      <div class="carousel-item w-full ${index === 0 ? 'active' : ''}" data-index="${index}">
        <div class="md:flex">
          <div class="md:w-1/2 h-64 md:h-auto">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 class="text-xl md:text-2xl font-heading font-bold mb-3">
              ${item.title}
            </h3>
            <p class="text-neutral-light mb-4">
              ${item.excerpt}
            </p>
            <a 
              href="index.html?id=${item.id}" 
              class="text-primary font-semibold hover:underline"
            >
              Continue lendo <i class="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  });
  
  // Adicionar navegação
  slidesHTML += `
    <button 
      id="slider-prev" 
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition"
      aria-label="Slide anterior"
    >
      <i class="fas fa-chevron-left text-primary"></i>
    </button>
    <button 
      id="slider-next" 
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition"
      aria-label="Próximo slide"
    >
      <i class="fas fa-chevron-right text-primary"></i>
    </button>
  `;
  
  // Adicionar controles e progresso
  slidesHTML += `
    <div class="bg-primary p-3 flex items-center">
      <div id="slider-dots" class="flex space-x-2">
        ${featuredItems.map((_, index) => `
          <button 
            class="dot w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/40'}"
            data-index="${index}"
            aria-label="Ir para slide ${index + 1}"
          ></button>
        `).join('')}
      </div>
      <div class="ml-auto w-24 progress-bar">
        <div id="slider-progress" class="progress"></div>
      </div>
    </div>
  `;
  
  sliderContainer.innerHTML = slidesHTML;
  
  // Configurar controles do slider
  document.getElementById('slider-prev').addEventListener('click', () => showSlide(currentSlide - 1, featuredItems.length));
  document.getElementById('slider-next').addEventListener('click', () => showSlide(currentSlide + 1, featuredItems.length));
  
  // Configurar pontos de navegação
  const dots = document.querySelectorAll('#slider-dots .dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      showSlide(index, featuredItems.length);
    });
  });
  
  // Iniciar autoplay e progresso
  startSliderAutoplay(featuredItems.length);
}

// Exibir um slide específico
function showSlide(index, totalSlides) {
  // Resetar o autoplay
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
  if (progressInterval) {
    clearInterval(progressInterval);
  }
  
  // Ajustar o índice para loop
  const newIndex = (index + totalSlides) % totalSlides;
  currentSlide = newIndex;
  
  // Atualizar slides
  const slides = document.querySelectorAll('.carousel-item');
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  slides[newIndex].classList.add('active');
  
  // Atualizar pontos de navegação
  const dots = document.querySelectorAll('#slider-dots .dot');
  dots.forEach((dot, i) => {
    if (i === newIndex) {
      dot.classList.add('bg-white');
      dot.classList.remove('bg-white/40');
    } else {
      dot.classList.add('bg-white/40');
      dot.classList.remove('bg-white');
    }
  });
  
  // Reiniciar o progresso
  const progressElement = document.getElementById('slider-progress');
  if (progressElement) {
    progressElement.style.width = '0%';
    
    // Animar o progresso
    startProgress();
  }
  
  // Reiniciar autoplay
  startSliderAutoplay(totalSlides);
}

// Iniciar autoplay do slider
function startSliderAutoplay(totalSlides) {
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
  
  sliderInterval = setInterval(() => {
    showSlide(currentSlide + 1, totalSlides);
  }, 5000);
}

// Iniciar animação da barra de progresso
function startProgress() {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
  
  const progressElement = document.getElementById('slider-progress');
  if (!progressElement) return;
  
  progressElement.style.width = '0%';
  
  let width = 0;
  progressInterval = setInterval(() => {
    if (width >= 100) {
      clearInterval(progressInterval);
    } else {
      width += 0.5;
      progressElement.style.width = width + '%';
    }
  }, 25);
}

// Configuração do grid de notícias
function setupNewsGrid(items) {
  const gridContainer = document.getElementById('news-grid');
  
  if (items.length === 0) {
    gridContainer.innerHTML = '<p class="text-center py-8">Nenhuma notícia disponível no momento.</p>';
    return;
  }
  
  let gridHTML = '';
  items.forEach(item => {
    gridHTML += `
      <a 
        href="index.html?id=${item.id}" 
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition ${
          item.featured ? 'border-2 border-primary' : ''
        }"
      >
        <div class="h-48">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4">
          <h3 class="font-heading font-bold text-lg mb-2">${item.title}</h3>
          <p class="text-neutral-light text-sm mb-2">${item.excerpt}</p>
          <div class="flex items-center text-xs text-neutral-light">
            <span>${item.date}</span>
            <span class="mx-2">•</span>
            <span>${item.author}</span>
          </div>
        </div>
      </a>
    `;
  });
  
  gridContainer.innerHTML = gridHTML;
}

// Configuração da seção de informações do autor
function setupAuthorInfo(author) {
  const authorContainer = document.getElementById('author-info');
  
  let authorHTML = `
    <h2 class="text-2xl font-heading font-bold mb-4">Informações do(a) Aluno(a)</h2>
    <div class="md:flex gap-8">
      <div class="md:w-3/5 mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-2">Sobre</h3>
        <p class="mb-3 text-neutral-light">
          Este projeto foi desenvolvido como parte da atividade prática de desenvolvimento web. 
          O site utiliza HTML, CSS e JavaScript puro para criar uma experiência de navegação 
          responsiva e dinâmica para um portal de notícias.
        </p>
        <p class="text-neutral-light">
          O layout se adapta automaticamente para diferentes tamanhos de tela, oferecendo uma 
          experiência otimizada tanto em dispositivos móveis quanto em desktops.
        </p>
      </div>
      <div class="md:w-2/5">
        <h3 class="text-lg font-semibold mb-2">Autor(a)</h3>
        <div class="flex items-start mb-4">
          <div class="mr-3">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div>
            <p class="font-semibold">Nome: <span class="font-normal">${author.name}</span></p>
            <p class="font-semibold">Curso: <span class="font-normal">${author.course}</span></p>
            <p class="font-semibold">Turma: <span class="font-normal">${author.class}</span></p>
          </div>
        </div>
        <h3 class="text-lg font-semibold mb-2">Redes Sociais</h3>
        <div class="flex space-x-3">
          ${author.socialMedia.map(social => `
            <a 
              href="${social.url}" 
              class="text-neutral-light hover:text-primary transition"
              aria-label="${social.name}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab ${social.icon} text-xl"></i>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  authorContainer.innerHTML = authorHTML;
}

// Renderização da página de detalhes
function renderDetailPage(articleId) {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = '';
  
  // Encontrar o artigo pelo ID
  const article = newsData.find(item => item.id === articleId);
  
  if (!article) {
    // Exibir página 404 se o artigo não for encontrado
    const notFoundTemplate = getTemplate('not-found-template');
    contentContainer.appendChild(notFoundTemplate);
    return;
  }
  
  // Adicionar conteúdo da página de detalhes
  const detailTemplate = getTemplate('detail-template');
  contentContainer.appendChild(detailTemplate);
  
  // Preencher os dados do artigo
  document.getElementById('article-title').textContent = article.title;
  
  // Metadados
  document.getElementById('article-meta').innerHTML = `
    <span>${article.date}</span>
    <span class="mx-2">•</span>
    <span>${article.author}</span>
    <span class="mx-2">•</span>
    <span>${article.readTime || '4 min de leitura'}</span>
  `;
  
  // Informações gerais
  document.getElementById('article-info').innerHTML = article.generalInfo;
  
  // Imagens
  const imagesContainer = document.getElementById('article-images-container');
  const imagesGrid = document.getElementById('article-images');
  
  if (article.images && article.images.length > 0) {
    let imagesHTML = '';
    article.images.forEach((image, index) => {
      imagesHTML += `
        <div 
          class="image-item cursor-pointer h-48 rounded-lg overflow-hidden"
          data-index="${index}"
        >
          <img 
            src="${image.url}" 
            alt="${image.alt || `Imagem ${index + 1} da notícia`}" 
            class="w-full h-full object-cover"
          />
        </div>
      `;
    });
    
    imagesGrid.innerHTML = imagesHTML;
    
    // Adicionar navegação para galerias grandes
    if (article.images.length > 4) {
      const nextButton = document.createElement('button');
      nextButton.className = 'absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition';
      nextButton.setAttribute('aria-label', 'Ver mais imagens');
      nextButton.innerHTML = '<i class="fas fa-chevron-right text-primary"></i>';
      
      nextButton.addEventListener('click', function() {
        const imageItems = document.querySelectorAll('.image-item');
        const lastVisible = Array.from(imageItems).findIndex(item => item.style.display === 'none') - 1;
        const startIndex = lastVisible === -1 ? 0 : lastVisible + 1;
        
        imageItems.forEach((item, index) => {
          if (index >= startIndex && index < startIndex + 4) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
      
      imagesGrid.parentNode.appendChild(nextButton);
    }
  } else {
    imagesContainer.style.display = 'none';
  }
  
  // Conteúdo completo
  document.getElementById('article-content').innerHTML = article.content;
}