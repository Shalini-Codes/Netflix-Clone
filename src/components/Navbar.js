export function createNavbar(onSearch) {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'mainNavbar';

  nav.innerHTML = `
    <div class="nav-left">
      <h1 class="logo">NETFLIX</h1>
      <ul class="nav-links">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">New & Popular</a></li>
      </ul>
    </div>
    <div class="nav-right">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          id="searchInput" 
          class="search-input" 
          placeholder="Titles, people, genres..." 
          aria-label="Search movies"
        />
      </div>
      <a href="pages/login.html" class="btn btn-primary" style="padding: 6px 14px; font-size: 14px;">Sign In</a>
    </div>
  `;

  // Scroll detection for glassmorphism background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Debounced Live Search listener
  const searchInput = nav.querySelector('#searchInput');
  let debounceTimeout = null;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      if (onSearch) onSearch(query);
    }, 300);
  });

  return nav;
}
