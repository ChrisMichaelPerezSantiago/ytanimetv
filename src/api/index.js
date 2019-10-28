const express = require('express');
const routes = require('./routes/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'ytanime.tv API - 👋🌎🌍🌏',
    entries: [
      {
        'Search': '/api/v1/Search/[query]',
        'LatestAnime': '/api/v1/LatestAnime/[page]',
        'LatestChapters': '/api/v1/LatestChapters/[page]',
        'MostPopularAnimes': '/api/v1/MostPopularAnimes/[page]',
        'AnimeVideo': '/api/v1/AnimeVideo/[id]'
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;