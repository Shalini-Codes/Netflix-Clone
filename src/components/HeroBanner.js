import { openMovieModal } from './MovieModal.js';

export function createHeroBanner(movie) {
  const banner = document.createElement('header');
  banner.className = 'hero-banner';
  banner.style.backgroundImage = `url('${movie.backdrop_path}')`;

  banner.innerHTML = `
    <div class="hero-content">
      <span class="hero-badge">N E T F L I X &nbsp; O R I G I N A L</span>
      <h1 class="hero-title">${movie.title}</h1>
      <p class="hero-description">${movie.overview}</p>
      <div class="hero-actions">
        <button class="btn btn-primary" id="heroPlayBtn">▶ Play</button>
        <button class="btn btn-secondary" id="heroInfoBtn">ⓘ More Info</button>
      </div>
    </div>
  `;

  const infoBtn = banner.querySelector('#heroInfoBtn');
  const playBtn = banner.querySelector('#heroPlayBtn');

  infoBtn.addEventListener('click', () => openMovieModal(movie));
  playBtn.addEventListener('click', () => openMovieModal(movie));

  return banner;
}
