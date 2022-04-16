const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  },
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
  fetchTvMovie: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${API_KEY}&language-en-US`,
  },
};
