export function initMovieModal() {
  let dialog = document.getElementById('movieModal');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'movieModal';
    dialog.className = 'movie-dialog';
    dialog.innerHTML = `
      <div class="modal-content">
        <button class="modal-close-btn" id="closeModalBtn" aria-label="Close modal">&times;</button>
        <div class="modal-media" id="modalMedia">
          <div class="modal-media-overlay"></div>
        </div>
        <div class="modal-body">
          <div class="modal-header-info">
            <span class="match-score" id="modalMatch">98% Match</span>
            <span class="maturity-rating" id="modalRating">HD</span>
            <span id="modalYear">2023</span>
          </div>
          <h2 class="modal-title" id="modalTitle">Movie Title</h2>
          <p class="modal-overview" id="modalOverview">Movie overview description goes here.</p>
          <div style="margin-top: 10px;">
            <button class="btn btn-primary" id="modalPlayBtn">▶ Play Trailer</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  const closeBtn = dialog.querySelector('#closeModalBtn');
  closeBtn.addEventListener('click', () => dialog.close());

  // Light dismiss on backdrop click
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      dialog.close();
    }
  });

  return dialog;
}

export function openMovieModal(movie) {
  const dialog = initMovieModal();
  const mediaContainer = dialog.querySelector('#modalMedia');
  const titleEl = dialog.querySelector('#modalTitle');
  const overviewEl = dialog.querySelector('#modalOverview');
  const matchEl = dialog.querySelector('#modalMatch');
  const yearEl = dialog.querySelector('#modalYear');
  const playBtn = dialog.querySelector('#modalPlayBtn');

  titleEl.textContent = movie.title || movie.name;
  overviewEl.textContent = movie.overview || 'No overview available for this movie.';
  matchEl.textContent = `${Math.floor((movie.vote_average || 8) * 10)}% Match`;
  yearEl.textContent = (movie.release_date || movie.first_air_date || '2023').substring(0, 4);

  // Set backdrop image
  mediaContainer.style.backgroundImage = `url('${movie.backdrop_path || movie.poster_path}')`;
  mediaContainer.innerHTML = `<div class="modal-media-overlay"></div>`;

  // Video trailer action
  playBtn.onclick = () => {
    const youtubeKey = movie.youtube_key || 'b9EkMc79ZSU';
    mediaContainer.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=0" 
        title="${movie.title}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  };

  dialog.showModal();
}
