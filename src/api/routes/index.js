const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/Search/:query' , (req , res) =>{
  const q = req.params.query;
  api.searchAnime(q)
    .then(search =>{
      res.status(200).json({
        search
      });
    }).catch((err) =>{
      console.error(err)
    });
});


router.get('/AnimeVideo/:id' , (req , res) =>{
  const id = req.params.id;
  api.getAnimeVideo(id)
    .then(video =>{
      res.status(200).json({
        video
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/LatestAnime/:page' , (req , res) =>{
  const page = req.params.page;
  api.latestAnime(page)
    .then(async animes =>{
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/LatestChapters/:page' , (req , res) =>{
  const page = req.params.page;
  api.latestChapters(page)
    .then(animes =>{
      res.status(200).json({
        animes
      });
    });
});

router.get('/MostPopularAnimes/:page', (req , res) => {
  const page = req.params.page;
  api.mostPopularAnimes(page)
    .then(animes => {
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.log(err);
    });
});


module.exports = router;