const cheerio = require('cheerio');
const fetch = require('node-fetch');
const {BASE_PATH , SEARCH_URL , MOST_POPULAR_ANIME ,  LATEST_ANIME_URL , LATEST_CHAPTER_URL , ANIME_URL , ANIME_VIDEO_URL} = require('./urls.js');
const {sleep} = require('./lib/utils');


const searchAnime = async(query) =>{
  const res = await fetch(`${SEARCH_URL}${query}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.col-md-2').each(async(index , element) =>{
    const $element = $(element);
    const title = $element.find('div.video-card div.video-card-body div.video-title a').text();
    const id = $element.find('div.video-card div.video-card-body div.video-title a').attr('href').split('/')[4]

    promises.push(animeContentHandler(id).then(async extra => ({
      title: title || null,
      id: id || null,
      poster: extra[1] ? extra[1].poster : null,
      synopsis: extra[1] ? extra[1].synopsis : null,
      status: extra[1] ? extra[1].status : null,
      total_eps: extra[1] ? extra[1].total_eps : null,
      episodes: await animeEpisodesId(id)
    })));
  });
  return Promise.all(promises);
};

const mostPopularAnimes = async(page) =>{
  const res = await fetch(`${MOST_POPULAR_ANIME}?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.col-md-2').each(async(index , element) =>{
    const $element = $(element);
    const title = $element.find('div.video-card div.video-card-body div.video-title a').text();
    const id = $element.find('div.video-card div.video-card-body div.video-title a').attr('href').split('/')[4]
    promises.push(animeContentHandler(id).then(async extra => ({
      title: title || null,
      id: id || null,
      poster: extra[1] ? extra[1].poster : null,
      synopsis: extra[1] ? extra[1].synopsis : null,
      status: extra[1] ? extra[1].status : null,
      total_eps: extra[1] ? extra[1].total_eps : null,
      episodes: await animeEpisodesId(id)
    })));
  });
  return await Promise.all(promises);
};

const latestAnime = async(page) =>{
  const res = await fetch(`${LATEST_ANIME_URL}?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.col-md-2').each(async(index , element) =>{
    const $element = $(element);
    const title = $element.find('div.video-card div.video-card-body div.video-title a').text();
    const id = $element.find('div.video-card div.video-card-body div.video-title a').attr('href').split('/')[4]
    promises.push(animeContentHandler(id).then(async extra => ({
      title: title || null,
      id: id || null,
      poster: extra[1] ? extra[1].poster : null,
      synopsis: extra[1] ? extra[1].synopsis : null,
      status: extra[1] ? extra[1].status : null,
      total_eps: extra[1] ? extra[1].total_eps : null,
      episodes: await animeEpisodesId(id)
    })));
  });
  return Promise.all(promises);
};

const latestChapters = async(page) =>{
  const res = await fetch(`${LATEST_CHAPTER_URL}?page=${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.col-md-2').each(async(index , element) =>{
    const $element = $(element);
    const title = $element.find('div.video-card div.video-card-body div.video-title a').text().split('-')[0].trim();
    const id = $element.find('div.video-card div.video-card-body div.video-title a').attr('href').split('/')[4]
    const episode = $element.find('div.video-card div.video-card-body div.video-title a').text().split('-')[1].trim().match(/\d+/g)[0];
    const poster = $element.find('div.video-card a img').attr('src');
    promises.push(animeContentHandler(id).then(async extra => ({
      title: title || null,
      poster: poster || null,
      //synopsis: extra[1] ? extra[1].synopsis : null,
      episode: parseInt(episode , 10) || null,
      id: id || null,

      //status: extra[1] ? extra[1].status : null,
      //total_eps: extra[1] ? extra[1].total_eps : null
    })));
  });
  return await Promise.all(promises);
};

const animeEpisodesId = async(id) =>{
  const res = await fetch(`${ANIME_URL}${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  //const promises = [];

  //$('div.container').each(async(index , element) =>{
  //  const $element = $(element);
  //  const total_eps = $element.find('ul.list-group li.list-group-item').length;
  //  $element.find('ul.list-group li.list-group-item').each(async(j , elem) =>{
  //    const $el = $(elem);
  //    const eps_id = $el.find('a').attr('href').split('/')[4];
  //    let index = total_eps;
  //    const videos = Array.from({length: total_eps} , async(v , k) =>{
  //      return {
  //        episode: index--,
  //        id: eps_id.replace(eps_id.lastIndexOf('-') + 1 , index + 1)
  //      }
  //    });
  //    promises.push(videos);
  //  });
  //});
  const epsIDs = [];
  $('div.container').each((index , element) =>{
    const $element = $(element);
    const total_eps = $element.find('ul.list-group li.list-group-item').length;
    let k = total_eps;
    $element.find('ul.list-group li.list-group-item').each((j , elem) =>{
      const $el = $(elem);
      const eps_id = $el.find('a').attr('href').split('/')[4];
      epsIDs.push({
        episode: k--,
        eps_id: eps_id
      });
    });
  });
  const lists = epsIDs.map( doc =>{
    return{
      episode: doc.episode || null,
      id: doc.eps_id || null
    }
  });
  let listByEps = lists.reduce((id , doc) =>{
    id[doc.episode] =  doc;
    return id;
  } , {});
  //ordered.map(promises =>{
  //  promises.video.then(v =>{
  //    console.log(promises.episode ,v)
  //  })
  //});

  //const episodes = promises[0];
  //const lists = episodes.map(async promises =>{
  //  return promises.then(async doc =>{
  //    return{
  //      episode: doc.episode,
  //      video: await getAnimeVideo(doc.id)
  //    }
  //  });
  //});
  //
  //const ordered = lists.reverse();
  //return P
  return listByEps;
};


//animeEpisodesVideo('tokyo-ghoul')
//  .then(promises =>{
//    console.log(promises)
//  })
//  .then(promises =>{
//    console.log(promises);
//  })

//(async() =>{
//animeEpisodesVideo('tokyo-ghoul')
//    .then(promises =>{
//      promises.map(x =>{
//        console.log(x)
//      })
//    })
//})();



const animeContentHandler = async(id) =>{
  const res = await fetch(`${ANIME_URL}${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container').each((index , element) =>{
    const $element = $(element);
    const poster = $element.find('figure img').attr('src');
    const synopsis = $element.find('p.sa-text').text().replace('\t' , '').trim();
    const status = $element.find('div.sa-layout__line button.btn').text();
    const total_eps = $element.find('ul.list-group li.list-group-item').length;

    promises.push({
      poster: poster || null,
      synopsis: synopsis || null,
      status: status || null,
      total_eps: total_eps || null,
    });
  });
  return await Promise.all(promises)
};

const getAnimeVideo = async(id) =>{
  const res = await fetch(`${ANIME_VIDEO_URL}${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const videos = [];

  $('div.container').each((index , element) =>{
    const $element = $(element);
    const video = $element.find('iframe').attr('src');
    videos.push(video);
  })
  return videos.filter(v => !!v)[0] || null;
};


module.exports = {
  searchAnime,
  mostPopularAnimes,
  latestAnime,
  latestChapters,
  getAnimeVideo
};