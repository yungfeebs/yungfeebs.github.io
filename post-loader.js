function createPostCard(post) {
  const article = document.createElement('article');
  article.className = 'post-card';

  const header = document.createElement('header');
  const meta = document.createElement('p');
  meta.className = 'post-meta';

  const title = document.createElement('h2');
  title.className = 'post-title';
  title.textContent = post.title;

  header.appendChild(meta);
  header.appendChild(title);

  const body = document.createElement('div');
  body.className = 'post-body';
  post.body.split('\n\n').forEach(paragraph => {
    const p = document.createElement('p');
    p.innerHTML = paragraph.replace(/\n/g, '<br>');
    body.appendChild(p);
  });

  const footer = document.createElement('footer');
  footer.className = 'post-footer';
  footer.textContent = post.date;

  const content = document.createElement('div');
  content.className = 'post-content';

  if (post.image) {
    const image = document.createElement('img');
    image.className = 'post-image';
    image.src = `post imgs/${post.image}`;
    image.alt = post.title;
    
    // Make image clickable to play audio if audioUrl exists
    if (post.audioUrl) {
      image.style.cursor = 'pointer';
      image.style.pointerEvents = 'auto';
      image.addEventListener('click', () => {
        if (window.audioPlayer) {
          window.audioPlayer.play(post.audioUrl, post.audioTitle || post.title);
        }
      });
    }
    
    content.appendChild(image);
  }

  if (post.rating) {
    const rating = document.createElement('p');
    rating.className = 'post-rating';
    rating.textContent = post.rating;
    body.appendChild(rating);
  }

  content.appendChild(body);

  article.appendChild(header);
  article.appendChild(content);
  article.appendChild(footer);
  return article;
}

function renderPosts() {
  const container = document.querySelector('.foreground');
  if (!container) return;

  container.innerHTML = '';
  if (!window.blogPosts || !window.blogPosts.length) {
    container.textContent = 'No posts available yet.';
    return;
  }

  window.blogPosts.forEach(post => {
    container.appendChild(createPostCard(post));
  });
}

async function loadPosts() {
  try {
    const response = await fetch('posts.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const posts = await response.json();
    window.blogPosts = Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error('Failed to load posts:', error);
    window.blogPosts = [];
  }
}

async function initPosts() {
  await loadPosts();
  renderPosts();
}

initPosts();
