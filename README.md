# **:triangular_flag_on_post: YTANIMETV** (version 1.0.1)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)

 <a href="https://nodei.co/npm/ytanimetv/"><img src="https://nodei.co/npm/ytanimetv.png"></a>


> This API will give you access to the content of the ytanime.tv page. And you can enjoy all the chapters with sub in Spanish.

---

## **:package: Main tools used**

- [x] axios
- [x] body-parser
- [x] cheerio
- [x] compose-middleware
- [x] cors
- [x] dotenv
- [x] express
- [x] helmet
- [x] morgan
- [x] node-fetch

---

## **:wrench: Developer usage**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 10.16.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.9.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/ChrisMichaelPerezSantiago/ytanimetv.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Start the project

```bash
npm start
```

### Test the project

```bash
npm test
```

---


## API Documentation
### 📣Read this please | To get the videos!📣
## getAnimeVideo([id])
*First of all I must mention that the url of the videos work only using the iframe element.*
*To get the videos of each chapter, you only need to use the getAnimeVideo function that receives the id of the episode as a parameter.* 
*To verify the id of each episode, look at the episodes property:*

```json
"episodes": {
  "1": {
    "episode": 1,
    "id": "dragon-ball-1"
  },
}
```

*You just have to pass the id of the episode*
```javscript
  getAnimeVideo('dragon-ball-1').then (v => { console.log (v) });
```

**output**: `https://cinemaupload.com/embed/vpWvCa5GjVVMdhuI`


*Then pass the url to the* **iframe**
<iframe src="https://cinemaupload.com/embed/vpWvCa5GjVVMdhuI" width="100%"  height="100%" frameborder="0" allowfullscreen></iframe>


## searchAnime([query])
*It will show N data per page , Total page unknown.*

```json
// 20191028180304
// http://localhost:5000/api/v1/search/tokyo

{
  "search": [
    {
      "title": "Tokyo Ghoul:re",
      "id": "tokyo-ghoulre",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/tokyo-ghoulre.jpg",
      "synopsis": "Tercera temporada de Tokyo Ghoul. Esta vez será una nueva casa animadora quien haga esta adaptación.",
      "status": "Finalizado",
      "total_eps": 12,
      "episodes": {
        "1": {
          "episode": 1,
          "id": "tokyo-ghoulre-1"
        },
        "2": {
          "episode": 2,
          "id": "tokyo-ghoulre-2"
        },
        "3": {
          "episode": 3,
          "id": "tokyo-ghoulre-3"
        },
        "4": {
          "episode": 4,
          "id": "tokyo-ghoulre-4"
        },
        "5": {
          "episode": 5,
          "id": "tokyo-ghoulre-5"
        },
        "6": {
          "episode": 6,
          "id": "tokyo-ghoulre-6"
        },
        "7": {
          "episode": 7,
          "id": "tokyo-ghoulre-7"
        },
        "8": {
          "episode": 8,
          "id": "tokyo-ghoulre-8"
        },
        "9": {
          "episode": 9,
          "id": "tokyo-ghoulre-9"
        },
        "10": {
          "episode": 10,
          "id": "tokyo-ghoulre-10"
        },
        "11": {
          "episode": 11,
          "id": "tokyo-ghoulre-11"
        },
        "12": {
          "episode": 12,
          "id": "tokyo-ghoulre-12"
        }
      }
    },
  ]
}
```

## latestAnime([page])
*It will show N data per page, Total page unknown.*

```json
// 20191028180402
// http://localhost:5000/api/v1/LatestAnime/1

{
  "animes": [
    {
      "title": "Psycho-Pass 3",
      "id": "psycho-pass-3",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5db3486038c88.jpg",
      "synopsis": "Psycho-Pass 3 sigue a dos nuevos novatos tratando de entender el Sistema Sibyl y buscar la verdad en el mundo siempre cambiante de Psycho-Pass.",
      "status": "En Emisión",
      "total_eps": 1,
      "episodes": {
        "1": {
          "episode": 1,
          "id": "psycho-pass-3-capitulo-1"
        }
      }
    },
    {
      "title": "Chihayafuru 3",
      "id": "chihayafuru-3",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5daf611ca065f.jpg",
      "synopsis": "Tercera temporada de Chihayafuru.",
      "status": "En Emisión",
      "total_eps": 1,
      "episodes": {
        "1": {
          "episode": 1,
          "id": "chihayafuru-3-capitulo-1"
        }
      }
    },
  ]
}
```

## LatestChapters([page])
*It will show IN data per page, Total page unknown.*

```json
// 20191028180531
// http://localhost:5000/api/v1/LatestChapters/1

{
  "animes": [
    {
      "title": "Stand My Heroes: Piece of Truth",
      "poster": "https://animeyt.org/uploads/animePicture/5d9bb5561b35d.jpg",
      "episode": 4,
      "id": "stand-my-heroes-piece-of-truth-capitulo-4"
    },
    {
      "title": "Phantasy Star Online 2: Episode Oracle",
      "poster": "https://animeyt.org/uploads/animePicture/5d9b7152bf242.jpg",
      "episode": 4,
      "id": "phantasy-star-online-2-episode-oracle-capitulo-4"
    },
    {
      "title": "Ensemble Stars!",
      "poster": "https://animeyt.org/uploads/animePicture/5d22d98c55fd3.jpg",
      "episode": 16,
      "id": "ensemble-stars-capitulo-16"
    },
    {
      "title": "Actors: Songs Connection",
      "poster": "https://animeyt.org/uploads/animePicture/5d9b55f716a75.jpg",
      "episode": 4,
      "id": "actors-songs-connection-capitulo-4"
    },
    {
      "title": "Pokemon Sun and Moon",
      "poster": "https://animeyt.org/uploads/animePicture/5b47d9066136f.jpg",
      "episode": 145,
      "id": "pokemon-sun-and-moon-capitulo-145"
    },
  ]
}
```

## mostPopularAnimes([page])
*It will show N data per page, Total page unknown.*

```json
// 20191028180643
// http://localhost:5000/api/v1/MostPopularAnimes/1

{
  "animes": [
    {
      "title": "Dr. Stone",
      "id": "dr-stone",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d1fe6da9886b.jpg",
      "synopsis": "Senku es un joven extremadamente inteligente con un gran don para la ciencia y una ácida personalidad, y su mejor amigo es Taiju, que es muy buena persona pero más apto para usar los músculos que para pensar. Cuando tras cierto incidente toda la humanidad acaba convertida en piedra, ellos logran despertarse en un mundo miles de años después, con la civilización humana completamente desaparecida y con toda la humanidad congelada en piedra como ellos estuvieron. Ahora es su obligación rescatar a la gente y crear un nuevo mundo.",
      "status": "En Emisión",
      "total_eps": 17,
      "episodes": {
        "1": {
          "episode": 1,
          "id": "dr-stone-capitulo-1"
        },
        "2": {
          "episode": 2,
          "id": "dr-stone-capitulo-2"
        },
        "3": {
          "episode": 3,
          "id": "dr-stone-capitulo-3"
        },
        "4": {
          "episode": 4,
          "id": "dr-stone-capitulo-4"
        },
        "5": {
          "episode": 5,
          "id": "dr-stone-capitulo-5"
        },
        "6": {
          "episode": 6,
          "id": "dr-stone-capitulo-6"
        },
        "7": {
          "episode": 7,
          "id": "dr-stone-capitulo-7"
        },
        "8": {
          "episode": 8,
          "id": "dr-stone-capitulo-8"
        },
        "9": {
          "episode": 9,
          "id": "dr-stone-capitulo-9"
        },
        "10": {
          "episode": 10,
          "id": "dr-stone-capitulo-10"
        },
        "11": {
          "episode": 11,
          "id": "dr-stone-capitulo-11"
        },
        "12": {
          "episode": 12,
          "id": "dr-stone-capitulo-12"
        },
        "13": {
          "episode": 13,
          "id": "dr-stone-capitulo-13"
        },
        "14": {
          "episode": 14,
          "id": "dr-stone-capitulo-14"
        },
        "15": {
          "episode": 15,
          "id": "dr-stone-capitulo-15"
        },
        "16": {
          "episode": 16,
          "id": "dr-stone-capitulo-16"
        },
        "17": {
          "episode": 17,
          "id": "dr-stone-capitulo-17"
        }
      }
    },
  ]
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---

### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2019 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).
