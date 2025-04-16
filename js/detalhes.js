/**
 * Script para página de detalhes das notícias
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar menu mobile
    const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('show');
    });
  }
  });
  
  /**
   * Carrega os detalhes da notícia com base no ID passado na URL
   */
  function loadArticleDetails() {
    // Obter o ID da notícia a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    // Verificar se o ID é válido
    if (!articleId) {
      showError('ID da notícia não encontrado. Por favor, volte para a página inicial e tente novamente.');
      return;
    }
    
    // Encontrar artigo no banco de dados
    const article = findArticleById(articleId);
    
    // Verificar se o artigo foi encontrado
    if (!article) {
      showError('Notícia não encontrada. Por favor, volte para a página inicial e tente novamente.');
      return;
    }
    
    // Renderizar o conteúdo do artigo
    renderArticleContent(article);
    
    // Atualizar o título da página
    document.title = `${article.title} - Portal de Notícias`;
  }
  
  /**
   * Encontra um artigo pelo ID
   * @param {number} id - ID do artigo a ser encontrado
   * @returns {Object|null} Artigo encontrado ou null
   */
  function findArticleById(id) {
    return newsData.articles.find(article => article.id === id) || null;
  }
  
  /**
   * Renderiza o conteúdo do artigo na página
   * @param {Object} article - Dados do artigo a ser exibido
   */
  function renderArticleContent(article) {
    const articleContentElement = document.getElementById('article-content');
    
    // Remover loading
    articleContentElement.innerHTML = '';
    
    // Construir HTML do artigo
    const articleHTML = `
      <article>
        <div class="article-header">
          <div class="article-featured-image">
            <img src="${article.imageUrl}" alt="${article.title}">
          </div>
          <div class="article-overlay">
            <span class="article-category">${article.category}</span>
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta">
              <div class="article-meta-item">
                <i class="far fa-user"></i>
                <span>${article.author}</span>
              </div>
              <div class="article-meta-item">
                <i class="far fa-calendar-alt"></i>
                <span>${article.date}</span>
              </div>
              <div class="article-meta-item">
                <i class="far fa-clock"></i>
                <span>${article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="article-content-body">
          <div class="article-info-boxes">
            <div class="info-box">
              <div class="info-box-icon">
                <i class="fas fa-tag"></i>
              </div>
              <h3 class="info-box-title">Categoria</h3>
              <div class="info-box-content">${article.category}</div>
            </div>
            
            <div class="info-box">
              <div class="info-box-icon">
                <i class="fas fa-user-edit"></i>
              </div>
              <h3 class="info-box-title">Autor</h3>
              <div class="info-box-content">${article.author}</div>
            </div>
            
            <div class="info-box">
              <div class="info-box-icon">
                <i class="fas fa-calendar-day"></i>
              </div>
              <h3 class="info-box-title">Data de Publicação</h3>
              <div class="info-box-content">${article.date}</div>
            </div>
            
            <div class="info-box">
              <div class="info-box-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h3 class="info-box-title">Tempo de Leitura</h3>
              <div class="info-box-content">${article.readTime}</div>
            </div>
          </div>
          
          <div class="article-body">
            <p>${article.excerpt}</p>
            <p>Este artigo trata sobre "${article.title}", publicado em ${article.date} pelo autor ${article.author}.</p>
            <p>O conteúdo completo desta notícia estaria disponível em uma implementação real, com múltiplos parágrafos de informação detalhada.</p>
            <h2>Detalhes Adicionais</h2>
            <p>Em um portal de notícias completo, o conteúdo deste artigo seria mais extenso, abordando diversos aspectos da notícia com detalhes, entrevistas, citações de fontes confiáveis e análises contextuais.</p>
            <p>Esta é uma página de demonstração para o trabalho prático, mostrando como seria a visualização detalhada de um artigo específico do portal de notícias.</p>
          </div>
          
          <div class="article-gallery">
            <h2 class="gallery-title">Galeria de Imagens</h2>
            <div class="gallery-grid">
              ${renderGalleryItems(article.additionalImages, article.title)}
            </div>
          </div>
          
          <div class="article-share">
            <div class="share-title">Compartilhar este artigo:</div>
            <div class="share-buttons">
              <a href="#" class="share-button facebook" title="Compartilhar no Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="share-button twitter" title="Compartilhar no Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="share-button linkedin" title="Compartilhar no LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="share-button whatsapp" title="Compartilhar no WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
    
    // Inserir HTML na página
    articleContentElement.innerHTML = articleHTML;
  }
  
  /**
   * Renderiza os itens da galeria
   * @param {Array} images - Array de URLs das imagens
   * @param {string} articleTitle - Título do artigo para usar como base para as legendas
   * @returns {string} HTML da galeria
   */
  function renderGalleryItems(images, articleTitle) {
    if (!images || !images.length) return '<p>Nenhuma imagem disponível para esta notícia.</p>';
    
    // Gerar legendas específicas para cada imagem
    const captions = [
      'Imagem principal relacionada à notícia',
      'Visualização detalhada do assunto abordado',
      'Perspectiva adicional sobre o tema',
      'Detalhes contextuais importantes'
    ];
    
    return images.map((imageUrl, index) => {
      const caption = captions[index % captions.length];
      return `
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="${imageUrl}" alt="${articleTitle} - Imagem ${index + 1}">
          </div>
          <div class="gallery-caption">
            <h3>Imagem ${index + 1}</h3>
            <p>${caption}</p>
          </div>
        </div>
      `;
    }).join('');
  }
  
  /**
   * Carrega notícias relacionadas com base na categoria da notícia atual
   */
  function loadRelatedArticles() {
    // Obter o ID da notícia atual
    const urlParams = new URLSearchParams(window.location.search);
    const currentArticleId = parseInt(urlParams.get('id'));
    
    if (!currentArticleId) return;
    
    // Encontrar artigo atual
    const currentArticle = findArticleById(currentArticleId);
    if (!currentArticle) return;
    
    // Filtrar artigos da mesma categoria, excluindo o atual
    let relatedArticles = newsData.articles.filter(article => 
      article.id !== currentArticleId && article.category === currentArticle.category
    );
    
    // Se não houver artigos relacionados suficientes na mesma categoria,
    // adicione outros artigos para completar
    if (relatedArticles.length < 3) {
      const otherArticles = newsData.articles.filter(article => 
        article.id !== currentArticleId && article.category !== currentArticle.category
      );
      
      // Adicionar artigos aleatórios até ter 3 ou o máximo possível
      while (relatedArticles.length < 3 && otherArticles.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherArticles.length);
        relatedArticles.push(otherArticles.splice(randomIndex, 1)[0]);
      }
    }
    
    // Limitar a 3 artigos relacionados
    relatedArticles = relatedArticles.slice(0, 3);
    
    // Renderizar artigos relacionados
    renderRelatedArticles(relatedArticles);
  }
  
  /**
   * Renderiza artigos relacionados
   * @param {Array} articles - Array de artigos relacionados
   */
  function renderRelatedArticles(articles) {
    const relatedArticlesGrid = document.getElementById('related-articles-grid');
    
    if (!relatedArticlesGrid) return;
    
    // Verificar se há artigos relacionados
    if (!articles || !articles.length) {
      relatedArticlesGrid.innerHTML = '<p>Não há notícias relacionadas disponíveis.</p>';
      return;
    }
    
    // Construir HTML dos artigos relacionados
    const articlesHTML = articles.map(article => `
      <article class="related-article-card" onclick="window.location.href='detalhes.html?id=${article.id}'">
        <div class="related-article-image">
          <img src="${article.imageUrl}" alt="${article.title}">
        </div>
        <div class="related-article-content">
          <div class="related-article-category">${article.category}</div>
          <h3 class="related-article-title">${article.title}</h3>
          <div class="related-article-meta">${article.date} • ${article.readTime}</div>
        </div>
      </article>
    `).join('');
    
    // Inserir HTML na página
    relatedArticlesGrid.innerHTML = articlesHTML;
  }
  
  /**
   * Exibe mensagem de erro na página
   * @param {string} message - Mensagem de erro a ser exibida
   */
  function showError(message) {
    const articleContentElement = document.getElementById('article-content');
    
    if (!articleContentElement) return;
    
    articleContentElement.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        <h2>Ops! Algo deu errado</h2>
        <p>${message}</p>
        <a href="index.html" class="back-link">Voltar para página inicial</a>
      </div>
    `;
  }