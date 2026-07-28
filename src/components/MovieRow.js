import { openMovieModal } from './MovieModal.js';

export function createMovieCard(movie) {
  const card = document.createElement('article');
  card.className = 'poster-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${movie.title || movie.name}`);

  const matchPercent = Math.floor((movie.vote_average || 8) * 10);

  card.innerHTML = `
    <img src="${movie.poster_path}" alt="${movie.title || movie.name} Poster" loading="lazy" />
    <div class="poster-overlay">
      <h3 class="poster-title">${movie.title || movie.name}</h3>
      <div class="poster-meta">
        <span>${matchPercent}% Match</span>
        <span>HD</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openMovieModal(movie));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMovieModal(movie);
    }
  });

  return card;
}

export function createMovieRow(title, movies) {
  const row = document.createElement('div');
  row.className = 'category-row';

  const header = document.createElement('h2');
  header.className = 'row-header';
  header.textContent = title;

  const container = document.createElement('div');
  container.className = 'posters-container';

  movies.forEach(movie => {
    container.appendChild(createMovieCard(movie));
  });

  row.appendChild(header);
  row.appendChild(container);
  return row;
}
