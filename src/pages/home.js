import { fetchCategoryMovies, searchMoviesQuery } from '../services/tmdbService.js';
import { createNavbar } from '../components/Navbar.js';
import { createHeroBanner } from '../components/HeroBanner.js';
import { createMovieRow, createMovieCard } from '../components/MovieRow.js';
import { initMovieModal } from '../components/MovieModal.js';

export async function initHomePage() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  // Initialize native modal dialog root
  initMovieModal();

  // Create main home container
  const homeContainer = document.createElement('div');
  homeContainer.className = 'home-page';

  // Search Results Container (Hidden by default)
  const searchSection = document.createElement('div');
  searchSection.className = 'search-results-section';
  searchSection.style.display = 'none';
  searchSection.innerHTML = `
    <h2 class="row-header">Search Results</h2>
    <div class="search-results-grid" id="searchResultsGrid"></div>
  `;

  // Standard category sections container
  const mainContent = document.createElement('main');
  mainContent.id = 'mainContent';

  // Render Navbar
  const navbar = createNavbar(async (query) => {
    if (query.trim().length > 0) {
      mainContent.style.display = 'none';
      searchSection.style.display = 'block';
      const resultsGrid = searchSection.querySelector('#searchResultsGrid');
      resultsGrid.innerHTML = '<div class="empty-results">Searching...</div>';

      const results = await searchMoviesQuery(query);
      resultsGrid.innerHTML = '';

      if (results.length === 0) {
        resultsGrid.innerHTML = `<div class="empty-results">No movies found matching "${query}".</div>`;
      } else {
        results.forEach(movie => {
          resultsGrid.appendChild(createMovieCard(movie));
        });
      }
    } else {
      searchSection.style.display = 'none';
      mainContent.style.display = 'block';
    }
  });

  homeContainer.appendChild(navbar);

  // Fetch Category Movies asynchronously
  const [trending, topRated, action] = await Promise.all([
    fetchCategoryMovies('trending'),
    fetchCategoryMovies('topRated'),
    fetchCategoryMovies('action')
  ]);

  // Hero Spotlight Banner
  const featuredMovie = trending[0] || {
    title: 'Stranger Things',
    overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    backdrop_path: 'https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    poster_path: 'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    vote_average: 8.6,
    release_date: '2016-07-15'
  };

  const hero = createHeroBanner(featuredMovie);
  mainContent.appendChild(hero);

  // Category Rows Section
  const rowsSection = document.createElement('div');
  rowsSection.className = 'category-rows';

  rowsSection.appendChild(createMovieRow('Trending Now', trending));
  rowsSection.appendChild(createMovieRow('Top Rated', topRated));
  rowsSection.appendChild(createMovieRow('Action Blockbusters', action));

  mainContent.appendChild(rowsSection);

  // Footer Section
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>Questions? Call 000-800-040-1843</p>
    <ul class="footer-links">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Account</a></li>
      <li><a href="#">Media Center</a></li>
      <li><a href="#">Investor Relations</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
    <p style="margin-top: 15px; color: #555555;">© 2026 Binge UI Netflix Clone Project. Crafted with Vanilla JS & Vite.</p>
  `;
  mainContent.appendChild(footer);

  homeContainer.appendChild(searchSection);
  homeContainer.appendChild(mainContent);

  app.appendChild(homeContainer);
}
