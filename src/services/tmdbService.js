import { TMDB_CONFIG } from '../config/api.js';

// Fallback dataset for offline or keyless operation
const FALLBACK_MOVIES = {
  trending: [
    {
      id: 1,
      title: 'Stranger Things',
      backdrop_path: 'https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
      overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
      vote_average: 8.6,
      release_date: '2016-07-15',
      youtube_key: 'b9EkMc79ZSU',
      genre: 'Sci-Fi & Fantasy'
    },
    {
      id: 2,
      title: 'Wednesday',
      backdrop_path: 'https://image.tmdb.org/t/p/original/iHSwvRVsRyxSuBQKySsCqaiSJ1x.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      overview: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
      vote_average: 8.5,
      release_date: '2022-11-23',
      youtube_key: 'Di310WS8zLk',
      genre: 'Comedy / Mystery'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      backdrop_path: 'https://image.tmdb.org/t/p/original/nMKmy8FiWKLOoOoNQySSN2a9J7F.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.',
      vote_average: 9.0,
      release_date: '2008-07-18',
      youtube_key: 'EXeTwQWrcwY',
      genre: 'Action / Crime'
    },
    {
      id: 4,
      title: 'Avatar: The Way of Water',
      backdrop_path: 'https://image.tmdb.org/t/p/original/vL5LR6VdxWPjLPFRd1Pj2bWlOF5.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/t6HIfvMGnvODwqAtGlRoatOcHvi.jpg',
      overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      vote_average: 7.7,
      release_date: '2022-12-14',
      youtube_key: 'd9MyW72ELq0',
      genre: 'Sci-Fi / Action'
    }
  ],
  topRated: [
    {
      id: 5,
      title: 'The Godfather',
      backdrop_path: 'https://image.tmdb.org/t/p/original/tmU7GeKVybMWFBBeeLHQmQSivKJ.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers.',
      vote_average: 9.2,
      release_date: '1972-03-14',
      youtube_key: 'sY1S34973nA',
      genre: 'Crime / Drama'
    },
    {
      id: 6,
      title: 'Shawshank Redemption',
      backdrop_path: 'https://image.tmdb.org/t/p/original/kXfqcdQKsStG1v2WhPJvYPp2yjg.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.',
      vote_average: 8.7,
      release_date: '1994-09-23',
      youtube_key: 'PLl99DlL6b4',
      genre: 'Drama'
    },
    {
      id: 7,
      title: 'Interstellar',
      backdrop_path: 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fKSuVftio.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      vote_average: 8.4,
      release_date: '2014-11-05',
      youtube_key: 'zSWdZVtXT7E',
      genre: 'Sci-Fi'
    },
    {
      id: 8,
      title: 'Pulp Fiction',
      backdrop_path: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oSM2x8vIm.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      overview: 'A burger-loving hitman, his philosophical partner, a daring gangster\'s moll and a washed-up boxer converge in four tales of violence and redemption.',
      vote_average: 8.5,
      release_date: '1994-09-10',
      youtube_key: 's7EdQ4FqbhY',
      genre: 'Crime'
    }
  ],
  action: [
    {
      id: 9,
      title: 'Top Gun: Maverick',
      backdrop_path: 'https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKj329vLy.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg',
      overview: 'After more than thirty years of service as one of the Navy’s top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.',
      vote_average: 8.3,
      release_date: '2022-05-24',
      youtube_key: 'giXco2jaZ_4',
      genre: 'Action / Adventure'
    },
    {
      id: 10,
      title: 'John Wick: Chapter 4',
      backdrop_path: 'https://image.tmdb.org/t/p/original/h8gWv0nsMwwoFnGD72vLy4aNFyq.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/vZloFAK7NHYSTW35QqODWvvaLTo.jpg',
      overview: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.',
      vote_average: 7.8,
      release_date: '2023-03-22',
      youtube_key: 'yjRHZEUamCc',
      genre: 'Action / Thriller'
    },
    {
      id: 11,
      title: 'Mad Max: Fury Road',
      backdrop_path: 'https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
      poster_path: 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
      overview: 'An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life.',
      vote_average: 7.6,
      release_date: '2015-05-13',
      youtube_key: 'hEJnMQGLai8',
      genre: 'Action / Sci-Fi'
    }
  ]
};

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchCategoryMovies(endpointKey) {
  if (!apiKey) {
    return FALLBACK_MOVIES[endpointKey] || FALLBACK_MOVIES.trending;
  }
  try {
    const endpoint = TMDB_CONFIG.ENDPOINTS[endpointKey.toUpperCase()];
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}?api_key=${apiKey}`);
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    return data.results.map(movie => ({
      ...movie,
      poster_path: movie.poster_path ? `${TMDB_CONFIG.IMAGE_BASE_URL}${movie.poster_path}` : FALLBACK_MOVIES.trending[0].poster_path,
      backdrop_path: movie.backdrop_path ? `${TMDB_CONFIG.IMAGE_ORIGINAL_URL}${movie.backdrop_path}` : FALLBACK_MOVIES.trending[0].backdrop_path,
      vote_average: movie.vote_average ? movie.vote_average.toFixed(1) : '8.0'
    }));
  } catch (err) {
    console.warn(`TMDB fetch failed for ${endpointKey}, using fallback data:`, err);
    return FALLBACK_MOVIES[endpointKey] || FALLBACK_MOVIES.trending;
  }
}

export function getAllFallbackMovies() {
  return [
    ...FALLBACK_MOVIES.trending,
    ...FALLBACK_MOVIES.topRated,
    ...FALLBACK_MOVIES.action
  ];
}

export async function searchMoviesQuery(query) {
  if (!query || query.trim() === '') return [];
  const lowerQuery = query.toLowerCase();

  if (!apiKey) {
    const allMovies = getAllFallbackMovies();
    return allMovies.filter(m => m.title.toLowerCase().includes(lowerQuery));
  }

  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${TMDB_CONFIG.ENDPOINTS.SEARCH}?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Search failed');
    const data = await response.json();
    return data.results.map(movie => ({
      ...movie,
      poster_path: movie.poster_path ? `${TMDB_CONFIG.IMAGE_BASE_URL}${movie.poster_path}` : FALLBACK_MOVIES.trending[0].poster_path,
      backdrop_path: movie.backdrop_path ? `${TMDB_CONFIG.IMAGE_ORIGINAL_URL}${movie.backdrop_path}` : FALLBACK_MOVIES.trending[0].backdrop_path,
      vote_average: movie.vote_average ? movie.vote_average.toFixed(1) : '8.0'
    }));
  } catch (err) {
    console.warn('Search API failed, using local search fallback:', err);
    const allMovies = getAllFallbackMovies();
    return allMovies.filter(m => m.title.toLowerCase().includes(lowerQuery));
  }
}
