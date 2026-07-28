// TMDB API Configuration Constants
export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/w500',
  IMAGE_ORIGINAL_URL: 'https://image.tmdb.org/t/p/original',
  ENDPOINTS: {
    TRENDING: '/trending/movie/week',
    TOP_RATED: '/movie/top_rated',
    ACTION: '/discover/movie?with_genres=28',
    SCI_FI: '/discover/movie?with_genres=878',
    COMEDY: '/discover/movie?with_genres=35',
    SEARCH: '/search/movie',
    VIDEOS: (id) => `/movie/${id}/videos`,
    DETAILS: (id) => `/movie/${id}`,
  },
};
