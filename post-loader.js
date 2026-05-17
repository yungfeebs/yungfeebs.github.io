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
  
  // Create footer content with date and share button
  const footerContent = document.createElement('div');
  footerContent.className = 'post-footer-content';
  
  const dateSpan = document.createElement('span');
  dateSpan.textContent = post.date;
  footerContent.appendChild(dateSpan);
  
  // Add share button
  const shareButton = document.createElement('button');
  shareButton.className = 'share-button';
  shareButton.textContent = '🔗';
  shareButton.type = 'button';
  shareButton.addEventListener('click', () => {
    const url = `${window.location.origin}${window.location.pathname}?post_id=${post.id}`;
    navigator.clipboard.writeText(url).then(() => {
      // Change to copied state
      const originalText = shareButton.textContent;
      shareButton.textContent = '[link copied]';
      shareButton.style.fontStyle = 'italic';
      shareButton.disabled = true;
      
      // Reset after 2 seconds
      setTimeout(() => {
        shareButton.textContent = originalText;
        shareButton.style.fontStyle = 'normal';
        shareButton.disabled = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy to clipboard:', err);
    });
  });
  footerContent.appendChild(shareButton);
  
  footer.appendChild(footerContent);

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

function getPostIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('post_id');
}

function renderPosts() {
  const container = document.querySelector('.foreground');
  if (!container) return;

  container.innerHTML = '';
  if (!window.blogPosts || !window.blogPosts.length) {
    container.textContent = 'No posts available yet.';
    return;
  }

  const postId = getPostIdFromUrl();
  let postsToDisplay = window.blogPosts;

  // Filter by post_id if provided
  if (postId !== null) {
    const homeLink = document.querySelector('#home-link');
    homeLink.style.display = 'inline'; // Show home link when viewing a specific post
    const filtered = window.blogPosts.filter(post => post.id == postId);
    if (filtered.length === 0) {
      container.textContent = 'Post not found.';
      return;
    }
    postsToDisplay = filtered;
  }

  postsToDisplay.forEach(post => {
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
