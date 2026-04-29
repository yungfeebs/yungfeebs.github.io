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
    p.textContent = paragraph;
    body.appendChild(p);
  });

  const footer = document.createElement('footer');
  footer.className = 'post-footer';
  footer.textContent = post.date;

  article.appendChild(header);
  article.appendChild(body);
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

renderPosts();
