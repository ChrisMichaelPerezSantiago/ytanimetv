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
### 📣Read this please!📣
*I must mention that for this version 1.0.0 you will experience a delay in obtaining the data of any of the API functions you use.*
*This delay is the product of obtaining the episodes urls of the videos of each anime. If someone is interested in improving the API so that*
*the data can be obtained quickly, you can check the **api.js** file, the **animeEpisodesVideo** function. This function is the one that is*
*responsible for first obtaining all the id of all the episodes of an animem then the **getAnimeVideo** function is used that receives*
*a parameter that is the id of the episode.*

*The problem with the **animeEpisodesVideo** function is that it has to process all the id of the episodes to the **getAnimeVideo** function,*
*which is what later the episode's url returns to me.*

## searchAnime([query])
*It will show N data per page , Total page unknown.*

```json
// 20191027224319
// http://localhost:5000/api/v1/search/boruto

{
  "search": [
    {
      "title": "Boruto: Naruto Next Generations",
      "id": "boruto-naruto-next-generations",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/boruto-naruto-next-generations.jpg",
      "synopsis": "Esta es una secuela de las series de Naruto, la cual sigue la historia de Boruto el hijo de Naruto. La aldea oculta de la hoja ha continuado su moderinización pero siempre manateniendo la paz. Carros eléctricos recorren toda la ciudad conectada por distritos llenos de rascacielos con enormes monitores mostrando todo tipo de imágenes. En esta era, la aldea oculta de la hoja es ahora una cuidad ninja solo en nombre ya que ahora muchas personas normales han venido a vivir aquí. También el estilo de vida de los ninjas ha cambiado... Boruto, el hijo del séptimo Hokage y el actual lider de la aldea, se ha matriculado en la academia ninja para aprender todo sobre lo que necesita saber en las artes ninjas. Los estudiantes que rodean a Boruto se refieren a él como \"el hijo del Hokage\", pero Boruto con su peculiar personalidad se hará un nombre por él mismo. Boruto encontrá nuevos amigos y aliados, pero ¿cómo podrá lidear con todos esos misteriorsos incidentes que se le presentarán? Es así como comienza la historia de Boruto Uzumaki.",
      "status": "En Emisión",
      "total_eps": 130,
      "episodes": [
        {
          "episode": 130,
          "video": "https://cinemaupload.com/embed/2KEXlKo3ZzXeVJsq"
        },
        {
          "episode": 129,
          "video": "https://cinemaupload.com/embed/z3mnQs7YJYlWLMDh"
        },
        {
          "episode": 128,
          "video": "https://cinemaupload.com/embed/Hs53qiymO5tEztQQ"
        },
        {
          "episode": 127,
          "video": "https://cinemaupload.com/embed/8hiSaby0c8MxY65D"
        },
        {
          "episode": 126,
          "video": "https://cinemaupload.com/embed/hrzYYt2lcJCFfLV8"
        },
        {
          "episode": 125,
          "video": "https://cinemaupload.com/embed/xuNXkNWeNZDmm5KI"
        },
        {
          "episode": 124,
          "video": "https://cinemaupload.com/embed/AFEuslMf46ZFuqBI"
        },
        {
          "episode": 123,
          "video": "https://cinemaupload.com/embed/wHUsjx4T31WLsY1Q"
        },
        {
          "episode": 122,
          "video": "https://cinemaupload.com/embed/sZGFLkxbYoZx0Jjp"
        },
        {
          "episode": 121,
          "video": "https://cinemaupload.com/embed/k7A83P76fJfJv8IM"
        },
        {
          "episode": 120,
          "video": "https://cinemaupload.com/embed/7jBJl8TW0Wu2P6kP"
        },
        {
          "episode": 119,
          "video": "https://cinemaupload.com/embed/7dIwazggr6hqRsND"
        },
        {
          "episode": 118,
          "video": "https://cinemaupload.com/embed/AFoNUOL80AYMHwjL"
        },
        {
          "episode": 117,
          "video": "https://cinemaupload.com/embed/ijuXyjw8tbn4NDZK"
        },
        {
          "episode": 116,
          "video": "https://cinemaupload.com/embed/pmrjMP4WUKWqszC0"
        },
        {
          "episode": 115,
          "video": "https://cinemaupload.com/embed/v7X0Y6qxNLvWI0ba"
        },
        {
          "episode": 114,
          "video": "https://cinemaupload.com/embed/pO0cZUzyWZpOBsi3"
        },
        {
          "episode": 113,
          "video": "https://cinemaupload.com/embed/ojYkJO6HeMwGUFyp"
        },
        {
          "episode": 112,
          "video": "https://cinemaupload.com/embed/3aYa4edTJ0d7OWbi"
        },
        {
          "episode": 111,
          "video": "https://cinemaupload.com/embed/kNJrs4Fc4LnH6Kyq"
        },
        {
          "episode": 110,
          "video": "https://cinemaupload.com/embed/jQv3ECxrKjtSrMnl"
        },
        {
          "episode": 109,
          "video": "https://cinemaupload.com/embed/uFvo8jZeO3eTxFm2"
        },
        {
          "episode": 108,
          "video": "https://cinemaupload.com/embed/NkLOJHTHClTIN7wI"
        },
        {
          "episode": 107,
          "video": "https://cinemaupload.com/embed/5ZMbKbq0aQLzNeJp"
        },
        {
          "episode": 106,
          "video": "https://cinemaupload.com/embed/l2PvlQ6XUuVcC506"
        },
        {
          "episode": 105,
          "video": "https://cinemaupload.com/embed/dnPhskikgTHZKujB"
        },
        {
          "episode": 104,
          "video": "https://cinemaupload.com/embed/zDhOgVj0EGkenSSW"
        },
        {
          "episode": 103,
          "video": "https://cinemaupload.com/embed/Mi4icJTct1kEqp4Y"
        },
        {
          "episode": 102,
          "video": "https://cinemaupload.com/embed/VbkJsO7Og9VFGZ4u"
        },
        {
          "episode": 101,
          "video": "https://cinemaupload.com/embed/rx2R9WKkBwsBYAvR"
        },
        {
          "episode": 100,
          "video": "https://cinemaupload.com/embed/M4LwgksPufmdZ24B"
        },
        {
          "episode": 99,
          "video": "https://cinemaupload.com/embed/mGk26jSKZFv37qwE"
        },
        {
          "episode": 98,
          "video": "https://cinemaupload.com/embed/ZP7u50tS1D2zTnmL"
        },
        {
          "episode": 97,
          "video": "https://cinemaupload.com/embed/819tEBr7DFOMfJsW"
        },
        {
          "episode": 96,
          "video": "https://cinemaupload.com/embed/9e0NhSJNbg7MXXgk"
        },
        {
          "episode": 95,
          "video": "https://cinemaupload.com/embed/HtmSSdPRuKE5pY8S"
        },
        {
          "episode": 94,
          "video": "https://cinemaupload.com/embed/vVBhX8n6krYpk7zg"
        },
        {
          "episode": 93,
          "video": "https://cinemaupload.com/embed/0oXHJHXocDiiHdOW"
        },
        {
          "episode": 92,
          "video": "https://cinemaupload.com/embed/k53CEkIdF8xxzzIc"
        },
        {
          "episode": 91,
          "video": "https://cinemaupload.com/embed/3zfOgmayMPywHqCY"
        },
        {
          "episode": 90,
          "video": "https://cinemaupload.com/embed/7ck1oHvgLBJtm8Rk"
        },
        {
          "episode": 89,
          "video": "https://cinemaupload.com/embed/AdHUWa2gtNXzw9pi"
        },
        {
          "episode": 88,
          "video": "https://cinemaupload.com/embed/P4FussYwdS5m8MBs"
        },
        {
          "episode": 87,
          "video": "https://cinemaupload.com/embed/n07ruADZytR9KJ43"
        },
        {
          "episode": 86,
          "video": "https://cinemaupload.com/embed/7vDtA5ZqlLY45vaT"
        },
        {
          "episode": 85,
          "video": "https://cinemaupload.com/embed/hvHLoNPhOg8wqcgc"
        },
        {
          "episode": 84,
          "video": "https://cinemaupload.com/embed/FkYMhhbdrH6i5bfg"
        },
        {
          "episode": 83,
          "video": "https://cinemaupload.com/embed/N25rB3A5Q3Ef9PYB"
        },
        {
          "episode": 82,
          "video": "https://cinemaupload.com/embed/USsGByZDWJseKZyj"
        },
        {
          "episode": 81,
          "video": "https://cinemaupload.com/embed/AmSTZBuGWBkUPitZ"
        },
        {
          "episode": 80,
          "video": "https://cinemaupload.com/embed/AWyV8a917eIVPNA8"
        },
        {
          "episode": 79,
          "video": "https://cinemaupload.com/embed/2Gg6mW9BsbxAG51M"
        },
        {
          "episode": 78,
          "video": "https://cinemaupload.com/embed/su4LilnM8SzA1T0c"
        },
        {
          "episode": 77,
          "video": "https://cinemaupload.com/embed/les9t85Hszd4ZUlQ"
        },
        {
          "episode": 76,
          "video": "https://cinemaupload.com/embed/R6xUdYQ9rdM6wgyY"
        },
        {
          "episode": 75,
          "video": "https://cinemaupload.com/embed/Rc5u032r038r4NGm"
        },
        {
          "episode": 74,
          "video": "https://cinemaupload.com/embed/aRPXmpWWoE7a4sQD"
        },
        {
          "episode": 73,
          "video": "https://cinemaupload.com/embed/HI1flfvgsZ4FnpOu"
        },
        {
          "episode": 72,
          "video": "https://cinemaupload.com/embed/6EDYWdqNJagKYjXx"
        },
        {
          "episode": 71,
          "video": "https://cinemaupload.com/embed/THqeVKOUKBnQpabH"
        },
        {
          "episode": 70,
          "video": "https://cinemaupload.com/embed/SfKwe6PiFcEGjF2l"
        },
        {
          "episode": 69,
          "video": "https://cinemaupload.com/embed/yhJyuo4t5bLPDctF"
        },
        {
          "episode": 68,
          "video": "https://cinemaupload.com/embed/0Ky0YiYQ846eOAhA"
        },
        {
          "episode": 67,
          "video": "https://cinemaupload.com/embed/VvcSeDa9CAqIKhPM"
        },
        {
          "episode": 66,
          "video": "https://cinemaupload.com/embed/duPdRxVgm03iJ5V2"
        },
        {
          "episode": 65,
          "video": "https://cinemaupload.com/embed/1toJKbC3occmgQ9O"
        },
        {
          "episode": 64,
          "video": "https://cinemaupload.com/embed/aNGzWITA0bCWre7u"
        },
        {
          "episode": 63,
          "video": "https://cinemaupload.com/embed/4XxDnRmn3iA52rJ6"
        },
        {
          "episode": 62,
          "video": "https://cinemaupload.com/embed/5RgvSwDeUqMlXM76"
        },
        {
          "episode": 61,
          "video": "https://cinemaupload.com/embed/MkuvLNtyBwvUCw3a"
        },
        {
          "episode": 60,
          "video": "https://cinemaupload.com/embed/5q9UfAIV7okOrfKi"
        },
        {
          "episode": 59,
          "video": "https://cinemaupload.com/embed/yYnldCfWegTaHE7H"
        },
        {
          "episode": 58,
          "video": "https://cinemaupload.com/embed/D2LEQAMHRfEx3Q8J"
        },
        {
          "episode": 57,
          "video": "https://cinemaupload.com/embed/X5jlVGPzsOMSqPvB"
        },
        {
          "episode": 56,
          "video": "https://cinemaupload.com/embed/Tzb0smC8Br0pYJsa"
        },
        {
          "episode": 55,
          "video": "https://cinemaupload.com/embed/MCRcjwREL6s5iz7V"
        },
        {
          "episode": 54,
          "video": "https://cinemaupload.com/embed/OJgPll3oO8jLWoON"
        },
        {
          "episode": 53,
          "video": "https://cinemaupload.com/embed/hFYQd9fEeFabQMxk"
        },
        {
          "episode": 52,
          "video": "https://cinemaupload.com/embed/zgC0FLZdYHRnsiSA"
        },
        {
          "episode": 51,
          "video": "https://cinemaupload.com/embed/jxl26Bpsgpm8JOYK"
        },
        {
          "episode": 50,
          "video": "https://cinemaupload.com/embed/HKH5hf7NzIYQVKSE"
        },
        {
          "episode": 49,
          "video": "https://cinemaupload.com/embed/WEZySlUE9LEmvVKq"
        },
        {
          "episode": 48,
          "video": "https://cinemaupload.com/embed/GgAydZ4DJqKnKds9"
        },
        {
          "episode": 47,
          "video": "https://cinemaupload.com/embed/0nLhksyxfofdyFdN"
        },
        {
          "episode": 46,
          "video": "https://cinemaupload.com/embed/6xJC14tTwkK5rR58"
        },
        {
          "episode": 45,
          "video": "https://cinemaupload.com/embed/43cH1uoodO5VcASG"
        },
        {
          "episode": 44,
          "video": "https://cinemaupload.com/embed/QxhgixnWYbVGGRP1"
        },
        {
          "episode": 43,
          "video": "https://cinemaupload.com/embed/OKoCGYdOahSRyIzI"
        },
        {
          "episode": 42,
          "video": "https://cinemaupload.com/embed/rNR523SrCnV4b3V9"
        },
        {
          "episode": 41,
          "video": "https://cinemaupload.com/embed/PhdSsxcopCx240W9"
        },
        {
          "episode": 40,
          "video": "https://cinemaupload.com/embed/Me1yiXKScjHpDhK8"
        },
        {
          "episode": 39,
          "video": "https://cinemaupload.com/embed/dUVkFQ3LvTaQ1AXm"
        },
        {
          "episode": 38,
          "video": "https://cinemaupload.com/embed/lvH6v8ceIQ470sPP"
        },
        {
          "episode": 37,
          "video": "https://cinemaupload.com/embed/adT90cP2GbUP2wtv"
        },
        {
          "episode": 36,
          "video": "https://cinemaupload.com/embed/KcjQRq742NrRaucM"
        },
        {
          "episode": 35,
          "video": "https://cinemaupload.com/embed/6rUkQYMu0nhA56j6"
        },
        {
          "episode": 34,
          "video": "https://cinemaupload.com/embed/azuo9cHHwfywfIMG"
        },
        {
          "episode": 33,
          "video": "https://cinemaupload.com/embed/x1K6fzF1H6w0vY5e"
        },
        {
          "episode": 32,
          "video": "https://cinemaupload.com/embed/9KlLYdJBHA6Y6MVB"
        },
        {
          "episode": 31,
          "video": "https://cinemaupload.com/embed/Pw1JDfLWJFadTIY4"
        },
        {
          "episode": 30,
          "video": "https://cinemaupload.com/embed/MUu6x7GBDmssPGql"
        },
        {
          "episode": 29,
          "video": "https://cinemaupload.com/embed/0mkrxo6xMPv0fxpR"
        },
        {
          "episode": 28,
          "video": "https://cinemaupload.com/embed/9A459nybl6QpRnry"
        },
        {
          "episode": 27,
          "video": "https://cinemaupload.com/embed/HqdH8SkGwTZxi2Lj"
        },
        {
          "episode": 26,
          "video": "https://cinemaupload.com/embed/tZo1M4xh7pSI7rcA"
        },
        {
          "episode": 25,
          "video": "https://cinemaupload.com/embed/On3Nl4jVJbU9ZT34"
        },
        {
          "episode": 24,
          "video": "https://cinemaupload.com/embed/OUmZdyLTT3XasQ2m"
        },
        {
          "episode": 23,
          "video": "https://cinemaupload.com/embed/tSXRRFvKMM5nevGf"
        },
        {
          "episode": 22,
          "video": "https://cinemaupload.com/embed/LjQFKQYJhw0VleTm"
        },
        {
          "episode": 21,
          "video": "https://cinemaupload.com/embed/ZIMt2FN6yjOLbQET"
        },
        {
          "episode": 20,
          "video": "https://cinemaupload.com/embed/WV6yQyYyFM2BP7eJ"
        },
        {
          "episode": 19,
          "video": "https://cinemaupload.com/embed/Spo14a1NUbyQTnsA"
        },
        {
          "episode": 18,
          "video": "https://cinemaupload.com/embed/4DTzZqSJaTO5FM8u"
        },
        {
          "episode": 17,
          "video": "https://cinemaupload.com/embed/gPS5R22c5zeTui5r"
        },
        {
          "episode": 16,
          "video": "https://cinemaupload.com/embed/EsxnYRW2u2qzLp3V"
        },
        {
          "episode": 15,
          "video": "https://cinemaupload.com/embed/vXPGuwbXpRPt7SV4"
        },
        {
          "episode": 14,
          "video": "https://cinemaupload.com/embed/3fph8nuvja5IOrGX"
        },
        {
          "episode": 13,
          "video": "https://cinemaupload.com/embed/DdQBvhzBQLxwNXXo"
        },
        {
          "episode": 12,
          "video": "https://cinemaupload.com/embed/hYkFejMwnFBb6GLm"
        },
        {
          "episode": 11,
          "video": "https://cinemaupload.com/embed/97iafFbVipGb69hS"
        },
        {
          "episode": 10,
          "video": "https://cinemaupload.com/embed/Eob7eJ0uYsctYLxu"
        },
        {
          "episode": 9,
          "video": "https://cinemaupload.com/embed/Gs6MA0zuW5hhSSDY"
        },
        {
          "episode": 8,
          "video": "https://cinemaupload.com/embed/sowusTYvoWnusFF2"
        },
        {
          "episode": 7,
          "video": "https://cinemaupload.com/embed/VVebmA1cWnKKjAUM"
        },
        {
          "episode": 6,
          "video": "https://cinemaupload.com/embed/5S26ztN68tMlnnQ9"
        },
        {
          "episode": 5,
          "video": "https://cinemaupload.com/embed/1t20dqPgOvwhDQWo"
        },
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/NVdCEaVXcqak2xLm"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/DxHP5GLDwogJoyIh"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/rzhnxM7wzXzNXKiD"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/YH3N1nvbwraHQlST"
        }
      ]
    },
    {
      "title": "Boruto: Naruto Next Generations OVA",
      "id": "boruto-naruto-next-generations-ova",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    }
  ]
}
```

## latestAnime([page])
*It will show N data per page, Total page unknown.*

```json
// 20191027225059
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
      "episodes": [
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/DzYV5irRwYmuFMWO"
        }
      ]
    },
    {
      "title": "Chihayafuru 3",
      "id": "chihayafuru-3",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5daf611ca065f.jpg",
      "synopsis": "Tercera temporada de Chihayafuru.",
      "status": "En Emisión",
      "total_eps": 1,
      "episodes": [
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/DrWq9U58Rq0qfsu6"
        }
      ]
    },
    {
      "title": "Ginga Eiyuu Densetsu: Die Neue These - Seiran 1",
      "id": "ginga-eiyuu-densetsu-die-neue-these-seiran-1",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Rifle Is Beautiful",
      "id": "rifle-is-beautiful",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da4a24142790.jpg",
      "synopsis": "Kokura Hikari es una chica de primer año de preparatoria a quien le encanta el tiro con rifle. Decidió entrar a la Preparatoria Chidori debido a que sabía que la escuela contaba con un club de tiro, sin embargo, justo después de ingresar se da cuenta que el club se ha disuelto. Es entonces cuando, además, se entera de que si desea reinstituir el club necesita encontrar miembros suficientes en menos de un día. Afortunadamente, logra encontrar a otras tres chicas de primer año que había conocido en una competencia de tiro en la escuela secundaria. Es así como comenzarán las actividades diarias del nuevo Club de Tiro con Rifle de la Preparatoria Chidori.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/svocA9Tq8NpM4iOQ"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/BSt6DwMOWGr5rIgh"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/idz9nPMNnknKq5tB"
        }
      ]
    },
    {
      "title": "Sword Art Online: Alicization - War of Underworld",
      "id": "sword-art-online-alicization-war-of-underworld",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da1fe0a7e546.jpg",
      "synopsis": "Segunda parte de Sword Art Online: Alicization.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/ySQJWcT80CBYI0hi"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/gi1V2CXPlCbNY1nR"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/QFbYCP94jkZbs204"
        }
      ]
    },
    {
      "title": "Boku no Hero Academia 4th Season",
      "id": "boku-no-hero-academia-4th-season",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da1c4e84b034.jpg",
      "synopsis": "Cuarta temporada de Boku no Hero Academia.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/bMG6xbMadJOz2GnR"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/1O2jDHNEWaLsCeeP"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/nhnmTcUQ6JfNNxnB"
        }
      ]
    },
    {
      "title": "Kabukichou Sherlock",
      "id": "kabukichou-sherlock",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da1c25fe59fb.jpg",
      "synopsis": "La historia dará comienzo siguiendo a Watson, un doctor al que despiden de su trabajo en el hospital tras verse involucrado en cierto incidente. Watson busca entonces al detective Sherlock, visitando cierto bar. La zona este de Shinjuku… El barrio de Kabuki-cho brilla con sus luces de neón en el centro de esta caótica ciudad. Pero donde brilla la luz, también acechan las sombras. Se alza el telón de este escenario nocturno donde los extraños asesinatos se suceden uno tras otro. ¿Es una historia de suspense? No, ¿una comedia? Un drama indistinguible está a punto de comenzar…",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/UgmzSPIe83yaC9rk"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/jtJfOENYBqE95MhU"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/PQMw30pXQ1Ingn6B"
        }
      ]
    },
    {
      "title": "Shin Chuuka Ichiban!",
      "id": "shin-chuuka-ichiban",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da0d27651060.jpg",
      "synopsis": "Durante el siglo XIX, en China, nuestro protagonista Liu Maoxing se hizo con el título de Super Chef, siendo además el aspirante más joven que jamás había logrado dicho título. Su maestro, Zhou Yu, le sugirió que debía viajar para pulir todavía más sus habilidades, así que parte en un viaje por toda China junto a sus amigos Shirou y Meili. Tras regresar forma equipo con Xie Lu y Lei En para luchar contra la Sociedad Secreta de Cocina.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/e2kCD9JHEmNAFmun"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/MZTil5MkJyrZSOp5"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/Rk1vV9lCOXZNdI5X"
        }
      ]
    },
    {
      "title": "Shokugeki no Souma: Shin no Sara",
      "id": "shokugeki-no-souma-shin-no-sara",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da0bfe8c0721.jpg",
      "synopsis": "Cuarta temporada de Shokugeki no Souma.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/pJRZerRaQzZZiD5n"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/G7vhSn5xQQduUAy5"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/Ris6YLXwWC8qs0jx"
        }
      ]
    },
    {
      "title": "Hoshiai no Sora",
      "id": "hoshiai-no-sora",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da07f7d1c8fb.jpg",
      "synopsis": "La historia juvenil gira en torno a los integrantes de un equipo del Club de Soft Tenis escolar que está a punto de cerrar. Toma Shinjou le pide a Maki Katsuragi que se una al equipo debido a sus habilidades, y menciona una competencia de verano. Sin embargo, Katsuragi pide dinero a cambio de unirse al equipo.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/9zxwAgorxMncCUnD"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/ZXEVPes89SsCwVuo"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/XlQUOEDpllSr5Q2u"
        }
      ]
    },
    {
      "title": "No Guns Life",
      "id": "no-guns-life",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9f98f02f6ba.jpg",
      "synopsis": "Después de la guerra, hay muchos “extends” en la ciudad, personas cuyos cuerpos fueron modificados para convertirlos en armas peligrosas. Inui Juuzou es uno de ellos, y no tiene recuerdos de su vida y cuerpo antes de que su cabeza se transformara en un arma. Por extraño que parezca, su pistola ubicada en la cabeza está diseñada para que solo alguien detrás de él pueda apretar el gatillo. En la actualidad, Juuzou se gana la vida tomando casos que involucran a extends en la ciudad, y es asistido por Mary, una joven inteligente que ha tomado bajo su protección.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/gOWB6jta9iuI4YfN"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/9uHGPWqCVrKGgelc"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/U3i7nJjndAfumYk8"
        }
      ]
    },
    {
      "title": "Assassins Pride",
      "id": "assassins-pride",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9f4997b27b0.jpg",
      "synopsis": "Solo aquellos procedentes de linajes de familias nobles tienen la capacidad de enfrentar a los monstruos. Kufa es un noble nacido en la familia de un duque a quien envían como tutor de una joven llamada Merida. Merida no tiene talento alguno con el maná, lo que hace que en realidad la misión secreta y real de Kufa sea asesinarla.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/ciSbi9i3YoCCUy3Q"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/i4R80tiz0HfLKqn2"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/97bB80dxUmiNChqQ"
        }
      ]
    },
    {
      "title": "Gundam Build Divers Re:Rise",
      "id": "gundam-build-divers-rerise",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Nanatsu no Taizai: Kamigami no Gekirin",
      "id": "nanatsu-no-taizai-kamigami-no-gekirin",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9e43801d98f.jpg",
      "synopsis": "Nueva temporada de Nanatsu no Taizai.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/L8dlaDdWj7cs8Krz"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/YOxbFszzj9sYxCR2"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/l1cFjxwuECg5JDDz"
        }
      ]
    },
    {
      "title": "Mugen no Juunin: Immortal",
      "id": "mugen-no-juunin-immortal",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Kandagawa Jet Girls",
      "id": "kandagawa-jet-girls",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9cd1ebc5dab.jpg",
      "synopsis": "Rin Namiki es hija de una Jetter legendaria y sueña con seguir los pasos de su madre, así que abandona su isla natal y parte a Asakusa, en Tokio. Tras conocer a la hermosa Misa Aoi, ambas formarán equipo para competir y llegar a lo más alto.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/4RRrOx6AVYIdNtn6"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/ahdvYhD6MltM8NxA"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/v1LTlGlB6ccadZse"
        }
      ]
    },
    {
      "title": "Z/X: Code Reunion",
      "id": "zx-code-reunion",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9cb5af86396.jpg",
      "synopsis": "La historia tiene lugar en un futuro próximo en el cual la Tierra ha sido invadida por extrañas criaturas que emergen de los cinco llamados “Puntos Negros“, puertas interdimensionales conectadas a mundos paralelos. El objetivo de la invasión es eliminar otros mundos paralelos para así aumentar la posibilidad de converger en un mismo futuro. Para contraatacar y defender el planeta, cinco adolescentes serán los responsables de invocar a héroes y monstruos mediante unos dispositivos de cartas llamados Z/X.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/nyq32hA1Jx8K9xYE"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/ZwnI7jMOm6N6Wcoa"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/HjnlWXqlzjZdO1aI"
        }
      ]
    },
    {
      "title": "Stand My Heroes: Piece of Truth",
      "id": "stand-my-heroes-piece-of-truth",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9bb5561b35d.jpg",
      "synopsis": "Izumi Rei, a.k.a Matori, es una nueva oficial que trabaja bajo el Departamento de Control de Narcóticos del Ministerio de Salud. Los narcóticos no funcionan en ella, y la historia comienza cuando ingresa al departamento y comienza a trabajar con otros agentes.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/WDcYeDMs46EBukd6"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/w2sEIKkjidlAiX14"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/Ap19xt9H464Q6ndO"
        }
      ]
    },
    {
      "title": "Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!",
      "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9b7ed4b0ce0.jpg",
      "synopsis": "Cuando la hija mayor de la familia Ascham, Adele, cumplió diez años, recordó todo de su vida pasada cuando fue golpeada con un fuerte dolor de cabeza. Ella era Kurihara Misato en su vida anterior, quien murió cuando tenía 18 años tratando de ayudar a una niña, seguida de un encuentro con Dios. Durante su reunión, ella suplicó llevar una vida promedio con habilidades promedio. Después de todo, su yo algo capaz ha sido cargado con todas las expectativas que se le plantearon. Sin embargo, las cosas no solo salen según lo planeado, sino que debe tener cuidado de no ascender accidentalmente a los rangos S si desea mantener su vida promedio deseada.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/Dj6dG3hvoFxFWzse"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/YPYHDswWBybFvDj0"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/H5R6LbiUezxuHEQH"
        }
      ]
    },
    {
      "title": "Phantasy Star Online 2: Episode Oracle",
      "id": "phantasy-star-online-2-episode-oracle",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9b7152bf242.jpg",
      "synopsis": "Phantasy Star Online 2: Episode Oracle",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/gBtC3TG8v8WlgYyR"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/pIrm5vE124HO3wN3"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/IIGl1CYJGhAuPXGd"
        }
      ]
    },
    {
      "title": "Actors: Songs Connection",
      "id": "actors-songs-connection",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9b55f716a75.jpg",
      "synopsis": "La historia está protagonizada por las vidas diarias de los estudiantes y profesores de la Academia Privada Amaka, una escuela creada por Slive Central.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/wGzt0As2XcppbyWg"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/tCW55af7LyAXomMV"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/LksDflHPwmZr1lqP"
        }
      ]
    },
    {
      "title": "Fairy Gone 2nd Season",
      "id": "fairy-gone-2nd-season",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9b549acddf2.jpg",
      "synopsis": "Segunda temporada de Fairy Gone.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/uOfx9THc5ZtxCYV7"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/YHbuJ36vLVucEQTp"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/xYjdpfpEyf51gWBg"
        }
      ]
    },
    {
      "title": "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana",
      "id": "keishichou-tokumubu-tokushu-kyouakuhan-taisakushitsu-dainanaka-tokunana",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9b51ab722da.jpg",
      "synopsis": "Hace mucho tiempo, los dragones gobernaban un mundo lleno de extrañas criaturas: elfos, enanos, vampiros, homúnculos y humanos. Pero en el presente los dragones han desaparecido, por lo que los seres que sobrevivieron decidieron coexistir y al pasar los años la apariencia de gran parte de las criaturas ha llegado a parecerse a la de los humanos. En el año 2X19 un grupo llamado \"Nine\" causa caos en su búsqueda por obtener los poderes de los dragones y cambiar el mundo, amenazando el periodo de paz en el que se encuentran. Por ello, la policía crea a la Unidad Especial de Investigación de Delitos – Especial 7 (Tokunana), formada por varios expertos para luchar contra Nine.",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/nLeB660XVJXIY8Nw"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/ccJB1KexDbzgabq5"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/ZR8b0yaYO5vIRlNw"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/EpiTz9wnTdwKIztY"
        }
      ]
    },
    {
      "title": "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
      "id": "fategrand-order-zettai-majuu-sensen-babylonia",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d990c30ae19c.jpg",
      "synopsis": "La organización de magos Chaldea ha completado en 2015 el último de sus proyectos. Con los proyectos LAPLACE, FATE, SHIVA y TRISMEGISTUS unidos, espera poder proteger a la humanidad.\n\nSin embargo, el observatorio del futuro SHIVA ha dejado de ser capaz de ver más allá del año 2016. La causa de esto tiene lugar en el Grial de Fuyuki en el año 2004, que se encuentra fuera de control. A su vez, otros Griales empiezan a aparecer en diferentes épocas de la humanidad y, a menos que sean controlados, llevarán a la misma a su extinción.",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/136Fyu4Klv79JbZa"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/5qJEosx0c5FuvJka"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/uhFvfwxvlyRmt2xc"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/NAu5GQKb7H2SNSuw"
        }
      ]
    },
    {
      "title": "Kono Oto Tomare! 2nd Season",
      "id": "kono-oto-tomare-2nd-season",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d98fd847f4c2.jpg",
      "synopsis": "Segunda temporada de Kono Oto Tomare!",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/E6tAqx7PrZtejjAO"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/2TcaH6YuxjBJlfR4"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/ppzeIPKJAbdXu9KT"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/RUboIBYr3pKVtJnR"
        }
      ]
    },
    {
      "title": "Bokutachi wa Benkyou ga Dekinai 2",
      "id": "bokutachi-wa-benkyou-ga-dekinai-2",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d98fab23979f.jpg",
      "synopsis": "Segunda temporada de Bokutachi wa Benkyou ga Dekinai.",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/mfsFgeW2Bg1dahAJ"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/UZJgHyYj42Y6Fizd"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/2P3pKMIAjYrVv69R"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/rnDnXH6gMa5KLOSS"
        }
      ]
    },
    {
      "title": "Mairimashita! Iruma-kun",
      "id": "mairimashita-iruma-kun",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d98f84d055b2.jpg",
      "synopsis": "Suzuki Iruma ha sido vendido a un viejo demonio por sus irresponsables padres a cambio de dinero. Sorprendentemente, lo siguiente que sabe es que ahora vive con el demonio y que ha sido transferido a una escuela en el Mundo de los Demonios.",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/gZKrRJU0FbLL0xtt"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/NPotRbPvS6ADEFW8"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/BWiY20LBAlSuGAMn"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/2GyvczSBDdDjaRai"
        }
      ]
    },
    {
      "title": "Black Fox",
      "id": "black-fox",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Val x Love",
      "id": "val-x-love",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d98eb26b8b4d.jpg",
      "synopsis": "Takuma Akutsu es un joven de preparatoria al que le aterroriza el contacto humano y solo quiere llevar una vida tranquila... idea que se desvanece por completo cuando nueve hermanas Valkyries llegan a su casa y se instalan a vivir en ella. El joven tendrá que criar a las chicas para aumentar su nivel y que puedan derrotar a los monstruos que amenazan a la humanidad. ¿Y cómo subir su nivel? ¡Haciendo cosas pervertidas con ellas!",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/FPONVxQ3v0whK1YJ"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/t3lVVdYicfOzdvL7"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/os4dJRguopZSKx8W"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/6TtnudUFyGo4b8Xp"
        }
      ]
    },
    {
      "title": "Chuubyou Gekihatsu Boy",
      "id": "chuubyou-gekihatsu-boy",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9794a6d37fd.jpg",
      "synopsis": "La historia la protagoniza Mizuki Hijiri, una chica de preparatoria que acaba de cambiar de escuela. En su nueva escuela conoce a varios chicos que sufren de chuunibyou, incluyendo al aspirante a héroe Noda, al trágicamente bello otaku Takashima que solo ama las chicas 2D, al reencarnado ángel o demonio Nakamura, y al titiritero en las sombras del destino Tsukumo.",
      "status": "En Emisión",
      "total_eps": 4,
      "episodes": [
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/11VhrOQRK1PXmgB7"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/cth5vaXd0H0yiInO"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/Xs7LyepyHkDUnnGl"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/qqkcA5o22JuHWTE5"
        }
      ]
    }
  ]
}
```

## LatestChapters([page])
*It will show IN data per page, Total page unknown.*

```json
// 20191027225258
// http://localhost:5000/api/v1/LatestChapters/1

{
  "animes": [
    {
      "title": "Dragon Ball Heroes",
      "id": "dragon-ball-heroes-capitulo-17",
      "poster": "https://animeyt.org/uploads/animePicture/dragon-ball-heroes.jpg",
      "episode": "Capítulo 17",
      "episodes": "https://cinemaupload.com/embed/KOSlEhQEUvPOpRz4"
    },
    {
      "title": "Rifle Is Beautiful",
      "id": "rifle-is-beautiful-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da4a24142790.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/svocA9Tq8NpM4iOQ"
    },
    {
      "title": "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana",
      "id": "keishichou-tokumubu-tokushu-kyouakuhan-taisakushitsu-dainanaka-tokunana-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d9b51ab722da.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/nLeB660XVJXIY8Nw"
    },
    {
      "title": "Boruto: Naruto Next Generations",
      "id": "boruto-naruto-next-generations-capitulo-130",
      "poster": "https://animeyt.org/uploads/animePicture/boruto-naruto-next-generations.jpg",
      "episode": "Capítulo 130",
      "episodes": "https://cinemaupload.com/embed/2KEXlKo3ZzXeVJsq"
    },
    {
      "title": "One Piece",
      "id": "one-piece-capitulo-908",
      "poster": "https://animeyt.org/uploads/animePicture/one-piece.jpg",
      "episode": "Capítulo 908",
      "episodes": "https://cinemaupload.com/embed/PwTSrFaQpxgMFwuW"
    },
    {
      "title": "Gegege no Kitarou (2018)",
      "id": "gegege-no-kitarou-2018-capitulo-79",
      "poster": "https://animeyt.org/uploads/animePicture/gegege-no-kitarou-2018.jpg",
      "episode": "Capítulo 79",
      "episodes": "https://cinemaupload.com/embed/0Mfa4y590JVp562f"
    },
    {
      "title": "Kono Oto Tomare! 2nd Season",
      "id": "kono-oto-tomare-2nd-season-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d98fd847f4c2.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/E6tAqx7PrZtejjAO"
    },
    {
      "title": "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
      "id": "fategrand-order-zettai-majuu-sensen-babylonia-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d990c30ae19c.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/136Fyu4Klv79JbZa"
    },
    {
      "title": "Bokutachi wa Benkyou ga Dekinai 2",
      "id": "bokutachi-wa-benkyou-ga-dekinai-2-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d98fab23979f.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/mfsFgeW2Bg1dahAJ"
    },
    {
      "title": "Sword Art Online: Alicization",
      "id": "sword-art-online-alicization-war-of-underworld-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da1fe0a7e546.jpg",
      "episode": "War of Underworld",
      "episodes": "https://cinemaupload.com/embed/ySQJWcT80CBYI0hi"
    },
    {
      "title": "Val x Love",
      "id": "val-x-love-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d98eb26b8b4d.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/FPONVxQ3v0whK1YJ"
    },
    {
      "title": "Mairimashita! Iruma",
      "id": "mairimashita-iruma-kun-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d98f84d055b2.jpg",
      "episode": "kun",
      "episodes": "https://cinemaupload.com/embed/gZKrRJU0FbLL0xtt"
    },
    {
      "title": "Boku no Hero Academia 4th Season",
      "id": "boku-no-hero-academia-4th-season-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da1c4e84b034.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/bMG6xbMadJOz2GnR"
    },
    {
      "title": "Kabukichou Sherlock",
      "id": "kabukichou-sherlock-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da1c25fe59fb.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/UgmzSPIe83yaC9rk"
    },
    {
      "title": "Enen no Shouboutai",
      "id": "enen-no-shouboutai-capitulo-14",
      "poster": "https://animeyt.org/uploads/animePicture/5d1fe1928155c.jpg",
      "episode": "Capítulo 14",
      "episodes": "https://cinemaupload.com/embed/CWzeW9BC908W0ylm"
    },
    {
      "title": "Shin Chuuka Ichiban!",
      "id": "shin-chuuka-ichiban-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da0d27651060.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/e2kCD9JHEmNAFmun"
    },
    {
      "title": "Shokugeki no Souma: Shin no Sara",
      "id": "shokugeki-no-souma-shin-no-sara-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da0bfe8c0721.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/pJRZerRaQzZZiD5n"
    },
    {
      "title": "Granblue Fantasy The Animation Season 2",
      "id": "granblue-fantasy-the-animation-season-2-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d9793bce7f4e.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/RWoHO8JE65UIdSXL"
    },
    {
      "title": "Null Peta",
      "id": "null-peta-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d976152f0d52.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/fxaobKbq3IQytEAv"
    },
    {
      "title": "Chuubyou Gekihatsu Boy",
      "id": "chuubyou-gekihatsu-boy-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d9794a6d37fd.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/11VhrOQRK1PXmgB7"
    },
    {
      "title": "Dr. Stone",
      "id": "dr-stone-capitulo-17",
      "poster": "https://animeyt.org/uploads/animePicture/5d1fe6da9886b.jpg",
      "episode": "Capítulo 17",
      "episodes": "https://cinemaupload.com/embed/CORFH9Z5Tr7rQrem"
    },
    {
      "title": "Psycho",
      "id": "psycho-pass-3-capitulo-1",
      "poster": "https://animeyt.org/uploads/animePicture/5db3486038c88.jpg",
      "episode": "Pass 3",
      "episodes": "https://cinemaupload.com/embed/DzYV5irRwYmuFMWO"
    },
    {
      "title": "Hoshiai no Sora",
      "id": "hoshiai-no-sora-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5da07f7d1c8fb.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/9zxwAgorxMncCUnD"
    },
    {
      "title": "No Guns Life",
      "id": "no-guns-life-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5d9f98f02f6ba.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/gOWB6jta9iuI4YfN"
    },
    {
      "title": "Azur Lane",
      "id": "azur-lane-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d9673542412a.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/wZgIkKvojperm5DU"
    },
    {
      "title": "Assassins Pride",
      "id": "assassins-pride-capitulo-3",
      "poster": "https://animeyt.org/uploads/animePicture/5d9f4997b27b0.jpg",
      "episode": "Capítulo 3",
      "episodes": "https://cinemaupload.com/embed/ciSbi9i3YoCCUy3Q"
    },
    {
      "title": "Choujin Koukousei",
      "id": "choujin-koukousei-tachi-wa-isekai-demo-yoyuu-de-ikinuku-you-desu-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d9608047c129.jpg",
      "episode": "tachi wa Isekai demo Yoyuu de Ikinuku you desu!",
      "episodes": "https://cinemaupload.com/embed/dCsY7jkBoQp6RUsN"
    },
    {
      "title": "Houkago Saikoro Club",
      "id": "houkago-saikoro-club-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d95951e9d6be.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/1n3zxNXI8zzoKmUu"
    },
    {
      "title": "Gundam Build Divers Re:Rise",
      "id": "gundam-build-divers-rerise-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d9f30b6de64e.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/vJEsP43goMpsadrF"
    },
    {
      "title": "Ore wo Suki nano wa Omae dake ka yo",
      "id": "ore-wo-suki-nano-wa-omae-dake-ka-yo-capitulo-4",
      "poster": "https://animeyt.org/uploads/animePicture/5d94dd485900d.jpg",
      "episode": "Capítulo 4",
      "episodes": "https://cinemaupload.com/embed/cOdC3IgDoyr09mPd"
    }
  ]
}
```

## mostPopularAnimes([page])
*It will show N data per page, Total page unknown.*

```json
// 20191027230309
// http://localhost:5000/api/v1/MostPopularAnimes/2

{
  "animes": [
    {
      "title": "Dragon Ball",
      "id": "dragon-ball",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/dragon-ball.jpg",
      "synopsis": "La historia de Dragon Ball explica la vida de Son Goku, un niño con cola de mono basado en la leyenda china Viaje al oeste, y narra su vida y aventuras desde su infancia hasta que llega a ser abuelo. A lo largo de su vida, Son Goku lucha en muchas batallas y se convierte en el luchador de artes marciales más fuerte del universo. No está solo: hay un sinnúmero de héroes y villanos que proporcionan el conflicto que conduce la historia.",
      "status": "Finalizado",
      "total_eps": 153
    },
    {
      "title": "Quan Zhi Gao Shou",
      "id": "quan-zhi-gao-shou",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5cd5112e54c1d.jpg",
      "synopsis": "En el juego online multijugador Glory, Ye Xiu es conocido como un jugador de primer nivel. Sin embargo, debido a múltiples motivos, su equipo lo echa. Después de dejar el ámbito profesional, encuentra trabajo como gerente en un cibercafé. Cuando Glory lanza su décimo servidor, se inmersa en un juego una vez más. Con diez años de experiencia, los recuerdos de su pasado y una incompleta arma hecha a mano, ¡comienza el regreso del camino del invocador!",
      "status": "Finalizado",
      "total_eps": 12,
      "episodes": [
        {
          "episode": 12,
          "video": "https://cinemaupload.com/embed/fjYsGq4HhNkRmGbY"
        },
        {
          "episode": 11,
          "video": null
        },
        {
          "episode": 10,
          "video": "https://cinemaupload.com/embed/QaNEFrn5dQAl8hzW"
        },
        {
          "episode": 9,
          "video": "https://cinemaupload.com/embed/l8VX00C18PD3tydW"
        },
        {
          "episode": 8,
          "video": "https://cinemaupload.com/embed/wkR2zXHsgXD7tVA2"
        },
        {
          "episode": 7,
          "video": "https://cinemaupload.com/embed/CZM2tEh4UwsoKJuD"
        },
        {
          "episode": 6,
          "video": "https://cinemaupload.com/embed/DJGypscnXxdcJJ0m"
        },
        {
          "episode": 5,
          "video": "https://cinemaupload.com/embed/tLL2jrSHw5kHC4fL"
        },
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/xFPn5dCawKx93sjJ"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/poe5j8nCiUaFkB4E"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/HO5LPsB2N3MmbGdv"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/FWfDHJAe64GAnbSK"
        }
      ]
    },
    {
      "title": "Death Note Audio Latino",
      "id": "death-note-audio-latino",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/death-note-audio-latino.jpg",
      "synopsis": "Light Yagami es un excelente estudiante japonés que ha tenido una vida aburrida. Esto cambia radicalmente cuando encuentra tirado en el suelo un cuaderno conocido como Death Note (Libreta de la Muerte), un cuaderno perdido por Ryuk, un Shinigami (Dios de la muerte). Cualquier humano cuyo nombre esté escrito en el cuaderno morirá, y ahora Light ha decidido utilizar este poder para crear un mundo perfecto sin criminales. Pero cuando los criminales comienzan a morir de forma masiva, las autoridades envían al legendario detective L en busca del asesino. Con L pisándole los talones, Podrá mantener Light su noble propósito incluso arriesgando su vida.",
      "status": "Finalizado",
      "total_eps": 37
    },
    {
      "title": "Dr. Stone",
      "id": "dr-stone",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d1fe6da9886b.jpg",
      "synopsis": "Senku es un joven extremadamente inteligente con un gran don para la ciencia y una ácida personalidad, y su mejor amigo es Taiju, que es muy buena persona pero más apto para usar los músculos que para pensar. Cuando tras cierto incidente toda la humanidad acaba convertida en piedra, ellos logran despertarse en un mundo miles de años después, con la civilización humana completamente desaparecida y con toda la humanidad congelada en piedra como ellos estuvieron. Ahora es su obligación rescatar a la gente y crear un nuevo mundo.",
      "status": "En Emisión",
      "total_eps": 17,
      "episodes": [
        {
          "episode": 17,
          "video": "https://cinemaupload.com/embed/CORFH9Z5Tr7rQrem"
        },
        {
          "episode": 16,
          "video": "https://cinemaupload.com/embed/2qtBWbDxEvI9l2QC"
        },
        {
          "episode": 15,
          "video": "https://cinemaupload.com/embed/98Bgzx9rlyBX2Y7X"
        },
        {
          "episode": 14,
          "video": "https://cinemaupload.com/embed/gaRCmXJRYhIE5hTn"
        },
        {
          "episode": 13,
          "video": "https://cinemaupload.com/embed/MzLUIyLc4UrAS8HU"
        },
        {
          "episode": 12,
          "video": "https://cinemaupload.com/embed/HMSCPBfVUSLcgvtb"
        },
        {
          "episode": 11,
          "video": "https://cinemaupload.com/embed/pCO2Ce5ztqjlXuYG"
        },
        {
          "episode": 10,
          "video": "https://cinemaupload.com/embed/A9KZIIvNnuYBHtWr"
        },
        {
          "episode": 9,
          "video": "https://cinemaupload.com/embed/9BAG5lgT0ZImPkXQ"
        },
        {
          "episode": 8,
          "video": "https://cinemaupload.com/embed/XFFrPQgIH5RPkZRN"
        },
        {
          "episode": 7,
          "video": "https://cinemaupload.com/embed/MWLyvpSzNW6khGYS"
        },
        {
          "episode": 6,
          "video": "https://cinemaupload.com/embed/hBDgUpnG1FmvawER"
        },
        {
          "episode": 5,
          "video": "https://cinemaupload.com/embed/H1InBr8mn8AsbL1p"
        },
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/QxnL2Csz5nDQysup"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/O025kkSEZ7EdneMP"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/5SslAcNrfqoWKI4L"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/zcltRetd6X0ZLuHZ"
        }
      ]
    },
    {
      "title": "Souryo to Majiwaru Shikiyoku no Yoru ni",
      "id": "souryo-to-majiwaru-shikiyoku-no-yoru-ni",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/souryo-to-majiwaru-shikiyoku-no-yoru-ni.jpg",
      "synopsis": "La historia da comienzo cuando una mujer se encuentra con Kujo, el que fue su primer amor, en una reunión de viejos compañeros de clase. Allí descubre que Kujo se ha convertido en sacerdote y se encarga del templo de la familia. Aunque ella piensa que los monjes no tienen relaciones románticas, una chispa desata la pasión entre ambos, lo que despierta dudas en la mujer sobre si lo que hacen es correcto.",
      "status": "Finalizado",
      "total_eps": 12,
      "episodes": [
        {
          "episode": 12,
          "video": "https://cinemaupload.com/embed/SzdmOfGY4yXoEkUL"
        },
        {
          "episode": 11,
          "video": "https://cinemaupload.com/embed/O5nNQdseubwjjmA9"
        },
        {
          "episode": 10,
          "video": "https://cinemaupload.com/embed/mVqxRkq8PdoFxoff"
        },
        {
          "episode": 9,
          "video": "https://cinemaupload.com/embed/bCIJV0E6w8hZ7a6c"
        },
        {
          "episode": 8,
          "video": "https://cinemaupload.com/embed/ngKxaqiC26ngZVCt"
        },
        {
          "episode": 7,
          "video": "https://cinemaupload.com/embed/BrQOaPo03gRaHnti"
        },
        {
          "episode": 6,
          "video": "https://cinemaupload.com/embed/rQJANBr3BECH9516"
        },
        {
          "episode": 5,
          "video": "https://cinemaupload.com/embed/iB2SWtZyuUz8Sahb"
        },
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/m1pavsa826RJgg0s"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/S75uPmdQZlWr3E9I"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/hbeP9Yv9zIQJg8Dq"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/lXVSSV32oHTXL1R9"
        }
      ]
    },
    {
      "title": "Yugioh vrains",
      "id": "yugioh-vrains",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5ceeffe99429d.png",
      "synopsis": "El protagonista de la serie es Yusaku Fujiki, un estudiante inteligente y con grandes habilidades como hacker. Tiende a mantener la calma en cualquier ...",
      "status": "Finalizado",
      "total_eps": 120
    },
    {
      "title": "Fairy Tail: Final Series",
      "id": "fairy-tail-final-series",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5bb95d56a1034.jpg",
      "synopsis": "Temporada Final de Fairy Tail",
      "status": "Finalizado",
      "total_eps": 51
    },
    {
      "title": "Yu-Gi-Oh: Arc-V",
      "id": "yu-gi-oh-arc-v",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/yu-gi-oh-arc-v.jpg",
      "synopsis": "La quinta serie de Yu-Gi-Oh! con una historia original.",
      "status": "Finalizado",
      "total_eps": 148
    },
    {
      "title": "Nanatsu no Taizai: Kamigami no Gekirin",
      "id": "nanatsu-no-taizai-kamigami-no-gekirin",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d9e43801d98f.jpg",
      "synopsis": "Nueva temporada de Nanatsu no Taizai.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/L8dlaDdWj7cs8Krz"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/YOxbFszzj9sYxCR2"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/l1cFjxwuECg5JDDz"
        }
      ]
    },
    {
      "title": "Sword Art Online",
      "id": "sword-art-online",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/sword-art-online.jpg",
      "synopsis": "Escapar es imposible hasta terminar el juego; un game over significaría una verdadera \"muerte\". Sin saber la \"verdad\" de la siguiente generación del Multijugador Masivo Online, 'Sword Art Online(SAO)', con 10 mil usuarios unidos juntos abriendo las cortinas para esta cruel batalla a muerte. Participando solo en SAO, el protagonista Kirito ha aceptado inmediatamente la \"verdad\" de este MMO. Y, en el mundo del juego, un gigante castillo flotante llamado 'Aincrad', Kirito se distinguió a si mismo como un jugador solitario. Apuntando a terminar el juego al alcanzar la planta mas alta el solo continua avanzando arriesgadamente hasta que recibe una invitación a la fuerza de una guerrera y esgrimista experta, Asuna, con la cual tendra que hacer equipo.",
      "status": "Finalizado",
      "total_eps": 27,
      "episodes": [
        {
          "episode": 27,
          "video": "https://cinemaupload.com/embed/p4pGEF0YHoEfiGHB"
        },
        {
          "episode": 26,
          "video": "https://cinemaupload.com/embed/CG9cIKc0WFUIHgow"
        },
        {
          "episode": 25,
          "video": "https://cinemaupload.com/embed/urgQsrFahHQLMMG9"
        },
        {
          "episode": 24,
          "video": "https://cinemaupload.com/embed/hbnePS43xFOgLNg0"
        },
        {
          "episode": 23,
          "video": "https://cinemaupload.com/embed/45hz47MEgympyZDF"
        },
        {
          "episode": 22,
          "video": "https://cinemaupload.com/embed/GNUUV0ImiN1V6KAu"
        },
        {
          "episode": 21,
          "video": "https://cinemaupload.com/embed/UYVJULpT6n11sbgq"
        },
        {
          "episode": 20,
          "video": "https://cinemaupload.com/embed/2lGOfCzCgLHvwSVO"
        },
        {
          "episode": 19,
          "video": "https://cinemaupload.com/embed/qhhMasYaz1B0hbtT"
        },
        {
          "episode": 18,
          "video": "https://cinemaupload.com/embed/9eXfQ6iyb3IA6fSg"
        },
        {
          "episode": 17,
          "video": "https://cinemaupload.com/embed/u5VUmYeXL3VGdBRy"
        },
        {
          "episode": 16,
          "video": "https://cinemaupload.com/embed/oGxT1siPmnBh0aYg"
        },
        {
          "episode": 15,
          "video": "https://cinemaupload.com/embed/q0VGCKevkqjqurET"
        },
        {
          "episode": 14,
          "video": "https://cinemaupload.com/embed/KI5ZZe4nNCRGHEze"
        },
        {
          "episode": 13,
          "video": "https://cinemaupload.com/embed/epRJKKpyqKfeBaJY"
        },
        {
          "episode": 12,
          "video": "https://cinemaupload.com/embed/TxUwxBuv0NXDuQdF"
        },
        {
          "episode": 11,
          "video": "https://cinemaupload.com/embed/Hg2IYX8zfeBhzfjk"
        },
        {
          "episode": 10,
          "video": "https://cinemaupload.com/embed/93H4Kap2whauzDeu"
        },
        {
          "episode": 9,
          "video": "https://cinemaupload.com/embed/AaKx2veh84oyxtT5"
        },
        {
          "episode": 8,
          "video": "https://cinemaupload.com/embed/E37Oun3DIjKjH3lw"
        },
        {
          "episode": 7,
          "video": "https://cinemaupload.com/embed/KUaHlR2viaA60iS6"
        },
        {
          "episode": 6,
          "video": "https://cinemaupload.com/embed/Vb1UbPQ8ur5Di18H"
        },
        {
          "episode": 5,
          "video": "https://cinemaupload.com/embed/rqfAtBzzsVLTVLmE"
        },
        {
          "episode": 4,
          "video": "https://cinemaupload.com/embed/un3H2HfBPyTAbO63"
        },
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/gfRNm0bg9V6YtqMp"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/5kxj0s7D0GXXpirC"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/j2OBYEc7GTdoaJBH"
        }
      ]
    },
    {
      "title": "Boku no Hero Academia: Training of the Dead",
      "id": "boku-no-hero-academia-training-of-the-dead",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Shingeki no Kyojin Season 3",
      "id": "shingeki-no-kyojin-season-3",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5b54cb10ed85c.jpg",
      "synopsis": "Tercera temporada de Shingeki no Kyojin",
      "status": "Finalizado",
      "total_eps": 12
    },
    {
      "title": "Tokyo Ghoul",
      "id": "tokyo-ghoul",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/tokyo-ghoul.jpg",
      "synopsis": "La ciudad de Tokio vive atemorizada por los atroces de crímenes cometidos por los Ghouls, unas misteriosas criaturas que se ocultan entre sus habitantes y se alimentan de carne humana. Kaneki Ken, un joven y tímido universitario sobrevive a una operación de trasplante de órganos tras ser atacado y casi devorado por uno de ellos; tras abandonar el hospital Kaneki sufre un extraño proceso de metamorfosis que provocará un inesperado giro en su vida, los órganos trasplantados pertenecían al Ghoul muerto durante el ataque... ahora, mitad humano y mitad Ghoul tendrá que aprender a vivir de nuevo.",
      "status": "Finalizado",
      "total_eps": 12
    },
    {
      "title": "Pokemon Sun and Moon",
      "id": "pokemon-sun-and-moon",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5b47d9066136f.jpg",
      "synopsis": "Satoshi y su Pikachu se dirigen a una nueva región, Alola, cambiando totalmente su atuendo. El recibe una pulsera Z y se convierte en un estudiante.",
      "status": "Finalizado",
      "total_eps": 144
    },
    {
      "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II",
      "id": "dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-ii",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d28b3094140e.jpg",
      "synopsis": "Segunda temporada de Danmachi.",
      "status": "Finalizado",
      "total_eps": 12
    },
    {
      "title": "Darling in the FranXX",
      "id": "darling-in-the-franxx",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/darling-in-the-franxx.jpg",
      "synopsis": "En un futuro lejano, cuando la Tierra está en ruinas y la humanidad ha establecido una ciudad-fortaleza móvil bautizada como “Plantación”, unos pilotos viven en Mistilteinn, la “Jaula de pájaros”. Los niños viven allí sin conocer el mundo exterior ni la libertad. Su vida consiste en luchar y superar misiones contra unas formas de vida gigantes y misteriosas conocidas como Kyouryuu. Para enfrentarse a ellos, utilizan los robots Franxx. Un chico llamado Hiro está bautizado como Code:016 y, una vez, fue considerado un prodigio. No obstante, se ha quedado atrás y su existencia parece innecesaria. No pilotar un Franxx es igual a no existir. Un día, una chica misteriosa conocida como “Zero Two” aparece ante él y dos cuernos surgen de su cabeza.",
      "status": "Finalizado",
      "total_eps": 26
    },
    {
      "title": "Pokémon La Película 20 - Te Elijo a Ti!",
      "id": "pokemon-la-pelicula-20-te-elijo-a-ti",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Arifureta Shokugyou de Sekai Saikyou",
      "id": "arifureta-shokugyou-de-sekai-saikyou",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5d237d7e66606.jpg",
      "synopsis": "Hajime Nagumo es un otaku promedio de diecisiete años. Sin embargo, su vida cambia totalmente cuando él y el resto de su clase, son convocado a un mundo de fantasía. Son tratados como héroes y tienen la tarea de salvar a la raza humana de la extinción total. Pero lo que debería haber sido el sueño húmedo de cualquier otaku rápidamente se convierte en una pesadilla. Mientras que el resto de su clase es bendecido con poderes divinos, Hajime es un Synergist, que solo tiene una sola habilidad de transmutación. Ridiculizado y acosado por sus compañeros de clase por ser débil, pronto se encuentra en la desesperación. ¿Será capaz de sobrevivir en este peligroso mundo de monstruos y demonios?",
      "status": "Finalizado",
      "total_eps": 13
    },
    {
      "title": "Sword Art Online 2",
      "id": "sword-art-online-2",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/sword-art-online-2.jpg",
      "synopsis": "Phantom Bullet transcurre un año después de completarse SAO, cuando Kirito recibe una llamada del investigador Seijirou Kikuoka para hablar de un extraño caso relacionado con el juego Gun Gale Online. Un misterioso jugador llamado Death Gun es capaz de matar a personajes en el juego y, a su vez, matar a quienes los controlan en el mundo real. Kirito entrará en el juego para investigar cómo es eso posible y allí conocerá a Sinon, que será su guía en este nuevo mundo.",
      "status": "Finalizado",
      "total_eps": 25
    },
    {
      "title": "High School DxD Hero",
      "id": "high-school-dxd-hero",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/high-school-dxd-hero.jpg",
      "synopsis": "Cuarta temporada de High School DxD. Ésta cuarta temporada animará los volúmenes 9 y 10 de la novela ligera.",
      "status": "Finalizado",
      "total_eps": 13
    },
    {
      "title": "Dragon Ball Super: Broly",
      "id": "dragon-ball-super-broly",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Inuyasha",
      "id": "inuyasha",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/inuyasha.jpg",
      "synopsis": "Se basa en la historia de una joven llamada Kagome (Aome en latino) que al cumplir 15 años viaja atraves del tiempo por medio de un pozo mágico (que se encuentra en un templo que esta en su casa) hasta regresar a la época de las guerras civiles es allí donde encuentra al personaje principal (Inuyasha). Kagome es la reencarnación de la sacerdotisa Kikyo quien era la poseedora de una perla muy poderosa que villanos y demonios quieren para hacerse mas poderosos llamada la perla de Shikon: Kagome tenia esta perla en sus interior y sale al ambiente debido a que un demonio se la quita depues la perla es cortada en miles de pedazos que se dispersan con la tierra y ahora Inuyasha y Kagome tiene que recolectar estos fragmentos para evitar que caigan en manos equivocadas en esto pasaran por muchas aventuras conocerán amigos y enemigos tendran batallas algunas veces estarán en peligro de morir. Alo largo de la historia se hacen notar historias antiguas que tiene que ver con la perla.",
      "status": "Finalizado",
      "total_eps": 164
    },
    {
      "title": "Dragon Ball GT",
      "id": "dragon-ball-gt",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/dragon-ball-gt.jpg",
      "synopsis": "Ésta es la etapa final de Dragon Ball, aquí veremos a un Goku un poco más viejo acompañado de Oob, la reencarnación de Boo. Ahora Oob, después de un largo entrenamiento, se ha vuelto muy fuerte junto a Goku. Ahora un nuevo problema se le presenta a Goku, él ha sido convertido en niño por un viejo enemigo, con unas esferas de dragón nunca antes vistas, pero éstas no se esparcen por La Tierra, si no por la galaxia, además, si no encuentran las esferas en un determinado tiempo, La Tierra explotará. Esto llevará a Goku, Trunks y su nieta Pan, a una aventura por toda la",
      "status": "Finalizado",
      "total_eps": 64
    },
    {
      "title": "Yu-Gi-Oh",
      "id": "yu-gi-oh",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/yu-gi-oh.jpg",
      "synopsis": "Yu-Gi-Oh (Significa Rey de los Juegos), Su personaje principal Yugi Muto en compañía de sus mejores amigos Katsuya Jonouchi (Joseph Wheeler), Anzu Mazaki (Tea Gardner), y Hiroto Honda (Tristán Taylor), pero también tiene la compañía de un espíritu de un Antiguo Faraón \"Atem\"; tienen aventuras que están estrechamente ligadas a un juego de cartas \"Duelo de Monstruos\", un juego ligado con el pasado de egipto el cual se jugaba en tiempos antiguos y que es descubierto por Pegasus J. Crawford (maximilian Pegasus), este es el creador de el Juego \"Duelo de Monstruos\" tomando como base lo que paso en egipto hace mucho tiempo. Del juego se crean torneos y campeonatos nacionales e internacionales, participando Yugi Mūtō obteniendo el titulo de \"Rey de los Juegos\". Yugi Mūtō y su contraparte el Antiguo Faraón \"Atem\" se enfrentan a muchas vicisitudes ocasionadas por enemigos en su mayoia del pasado de el faraon, teniendo el faron con la ayuda de Yugi la labor de detenerlos",
      "status": "Finalizado",
      "total_eps": 224
    },
    {
      "title": "Sin: Nanatsu no Taizai",
      "id": "sin-nanatsu-no-taizai",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/sin-nanatsu-no-taizai.jpg",
      "synopsis": "El contexto de la franquicia gira en torno a siete féminas que encarnan los siete pecados capitales: lujuria, pereza, gula, ira, envidia, avaricia y soberbia.",
      "status": "Finalizado",
      "total_eps": 12
    },
    {
      "title": "Boku no Hero Academia 4th Season",
      "id": "boku-no-hero-academia-4th-season",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5da1c4e84b034.jpg",
      "synopsis": "Cuarta temporada de Boku no Hero Academia.",
      "status": "En Emisión",
      "total_eps": 3,
      "episodes": [
        {
          "episode": 3,
          "video": "https://cinemaupload.com/embed/bMG6xbMadJOz2GnR"
        },
        {
          "episode": 2,
          "video": "https://cinemaupload.com/embed/1O2jDHNEWaLsCeeP"
        },
        {
          "episode": 1,
          "video": "https://cinemaupload.com/embed/nhnmTcUQ6JfNNxnB"
        }
      ]
    },
    {
      "title": "High School DxD",
      "id": "high-school-dxd",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/high-school-dxd.jpg",
      "synopsis": "La historia se centra en Issei Hyoudou, que en su primera cita es asesinado por su novia Yuuma (quien en realidad es un angel caido), por poseer un sacred gear, pero resucitado como un miembro del clan Gremory, una familia de demonios e Issei deberá servir a Rias Gremory, la lider del clan, quien resulta ser la Idol de la escuela.",
      "status": "Finalizado",
      "total_eps": 20
    },
    {
      "title": "Koe no Katachi",
      "id": "koe-no-katachi",
      "poster": null,
      "synopsis": null,
      "status": null,
      "total_eps": null,
      "episodes": [
        
      ]
    },
    {
      "title": "Dororo",
      "id": "dororo",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5c33bd560b1cc.jpg",
      "synopsis": "Daigo Kagemitsu es un temible samurái que entregó su futuro hijo a demonios, a cambio de ver cumplido su sueño de conquistar el país. Al cabo del tiempo, nació un niño deforme, al que faltaban cuarenta y ocho partes de su cuerpo. Su ambicioso padre lo arrojó al río, pero el pequeño logró sobrevivir y, con el tiempo, convertirse en un diestro espadachín llamado Hyakkimaru, «pequeño monstruo». Años después, con la ayuda del joven y avispado Dororo, quien afirma ser el mejor ladrón de Japón, Hyakkimaru emprenderá un viaje a lo largo del cual se enfrentará a los demonios para recuperar las partes de su cuerpo.",
      "status": "Finalizado",
      "total_eps": 24
    },
    {
      "title": "Tensei shitara Slime Datta Ken",
      "id": "tensei-shitara-slime-datta-ken",
      "poster": "https://animeyt.org/uploads/animePicture/optimized/5bb282d1921de.jpg",
      "synopsis": "Satoru Mikami es un hombre de 37 años que tiene un trabajo que no le gusta, sin salida y que no es feliz con la vida que lleva, pero cuando muere a manos de un ladrón y piensa que es su fin, se despierta descubriendo que se ha reencarnado en un mundo de magia y espada… ¡pero como un slime! Ahora tendrá que acostumbrarse a su nueva vida, aunque por suerte contará con dos habilidades únicas que le ayudarán a sobrevivir: una que le proporciona una gran comprensión de todo lo que le rodea, y otra que le permite copiar las habilidades de sus oponentes.",
      "status": "Finalizado",
      "total_eps": 25
    }
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
