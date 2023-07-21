const movies = [
  {
    title: "La La Land",
    year: "2016",
    studio: "Summit Entertainment",
    cast: ["Ryan Gosling", "Emma Stone"],
    synopsis:
      "Dans les collines d'Hollywood, un pianiste de jazz ambitieux et une actrice en herbe tombent amoureux tout en poursuivant leurs rêves de carrière.",
    boxOffice: "$446.1 million",
  },
  {
    title: "Black Panther",
    year: "2018",
    studio: "Marvel Studios",
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    synopsis:
      "T'Challa, roi du Wakanda, doit défendre son pays contre un ennemi redoutable, tout en faisant face à son propre destin en tant que super-héros.",
    boxOffice: "$1.346 billion",
  },
  {
    title: "Avengers: Endgame",
    year: "2019",
    studio: "Marvel Studios",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    synopsis:
      "Les Avengers s'unissent pour affronter le redoutable Thanos et tenter de restaurer l'équilibre dans l'univers.",
    boxOffice: "$2.798 billion",
  },
  {
    title: "Wonder Woman",
    year: "2017",
    studio: "DC Films",
    cast: ["Gal Gadot", "Chris Pine"],
    synopsis:
      "Diana, princesse des Amazones, quitte son île paradisiaque pour lutter contre les forces du mal lors de la Première Guerre mondiale.",
    boxOffice: "$822 million",
  },
  {
    title: "Spider-Man: Homecoming",
    year: "2017",
    studio: "Marvel Studios",
    cast: ["Tom Holland", "Michael Keaton"],
    synopsis:
      "Peter Parker, alias Spider-Man, jongle entre sa vie d'adolescent ordinaire et sa responsabilité en tant que super-héros combattant le crime.",
    boxOffice: "$880.2 million",
  },
  {
    title: "Coco",
    year: "2017",
    studio: "Pixar Animation Studios",
    cast: ["Anthony Gonzalez", "Gael García Bernal"],
    synopsis:
      "Un jeune garçon mexicain passionné de musique se retrouve accidentellement dans le Royaume des Morts, où il cherche à percer le mystère de sa famille.",
    boxOffice: "$807.1 million",
  },
  {
    title: "Get Out",
    year: "2017",
    studio: "Blumhouse Productions",
    cast: ["Daniel Kaluuya", "Allison Williams"],
    synopsis:
      "Un homme noir rencontre les parents de sa petite amie blanche pour un week-end, mais découvre rapidement un sinistre secret familial.",
    boxOffice: "$255.5 million",
  },
  {
    title: "Joker",
    year: "2019",
    studio: "Warner Bros. Pictures",
    cast: ["Joaquin Phoenix", "Robert De Niro"],
    synopsis:
      "L'histoire sombre et originale de la montée du Joker, l'ennemi emblématique de Batman.",
    boxOffice: "$1.074 billion",
  },
  {
    title: "Interstellar",
    year: "2014",
    studio: "Paramount Pictures",
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    synopsis:
      "Un groupe d'explorateurs se lance dans un voyage interstellaire pour trouver une nouvelle planète habitable et sauver l'humanité de l'extinction.",
    boxOffice: "$677.5 million",
  },
  {
    title: "The Revenant",
    year: "2015",
    studio: "20th Century Fox",
    cast: ["Leonardo DiCaprio", "Tom Hardy"],
    synopsis:
      "Dans les régions sauvages de l'Amérique du Nord, un trappeur cherche vengeance après avoir été laissé pour mort par ses compagnons.",
    boxOffice: "$533 million",
  },
  {
    title: "Mad Max: Fury Road",
    year: "2015",
    studio: "Warner Bros. Pictures",
    cast: ["Tom Hardy", "Charlize Theron"],
    synopsis:
      "Dans un futur post-apocalyptique, une femme rebelle se joint à un groupe de survivants pour échapper à un seigneur de guerre tyrannique.",
    boxOffice: "$378.9 million",
  },
  {
    title: "The Shape of Water",
    year: "2017",
    studio: "Fox Searchlight Pictures",
    cast: ["Sally Hawkins", "Doug Jones"],
    synopsis:
      "Dans les années 1960, une femme de ménage muette se lie d'amitié avec une créature marine mystérieuse dans un laboratoire gouvernemental secret.",
    boxOffice: "$195.2 million",
  },
  {
    title: "Dunkirk",
    year: "2017",
    studio: "Warner Bros. Pictures",
    cast: ["Fionn Whitehead", "Tom Hardy"],
    synopsis:
      "Pendant la Seconde Guerre mondiale, des soldats alliés sont piégés sur les plages de Dunkerque et doivent évacuer sous le feu ennemi.",
    boxOffice: "$526.9 million",
  },
  {
    title: "Moonlight",
    year: "2016",
    studio: "A24",
    cast: ["Trevante Rhodes", "Mahershala Ali"],
    synopsis:
      "L'histoire d'un jeune homme afro-américain qui grandit à Miami et lutte avec son identité et son orientation sexuelle.",
    boxOffice: "$65.3 million",
  },
  {
    title: "Parasite",
    year: "2019",
    studio: "CJ Entertainment",
    cast: ["Song Kang-ho", "Lee Sun-kyun"],
    synopsis:
      "Une famille pauvre s'infiltre dans la vie d'une famille riche, mais les conséquences de leurs actions ne tardent pas à se manifester de manière inattendue.",
    boxOffice: "$266.7 million",
  },
  {
    title: "Inception",
    year: "2010",
    studio: "Warner Bros. Pictures",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    synopsis:
      "Un voleur expérimenté utilise une technologie révolutionnaire pour pénétrer les rêves des autres et voler des informations précieuses.",
    boxOffice: "$836.8 million",
  },
  {
    title: "The Martian",
    year: "2015",
    studio: "20th Century Fox",
    cast: ["Matt Damon", "Jessica Chastain"],
    synopsis:
      "Un astronaute est laissé pour mort sur Mars et doit trouver un moyen de survivre en utilisant ses compétences et sa créativité.",
    boxOffice: "$630.2 million",
  },
  {
    title: "Blade Runner 2049",
    year: "2017",
    studio: "Warner Bros. Pictures",
    cast: ["Ryan Gosling", "Harrison Ford"],
    synopsis:
      "Dans un futur dystopique, un jeune blade runner découvre un secret qui pourrait plonger la société dans le chaos et se lance dans une quête pour retrouver un ancien blade runner disparu.",
    boxOffice: "$260.5 million",
  },
  {
    title: "The Shawshank Redemption",
    year: "1994",
    studio: "Columbia Pictures",
    cast: ["Tim Robbins", "Morgan Freeman"],
    synopsis:
      "L'histoire d'un homme condamné à tort à la prison à vie et de son amitié avec un autre détenu, alors qu'ils luttent pour trouver la rédemption et l'espoir derrière les barreaux.",
    boxOffice: "$58.3 million",
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    studio: "Miramax Films",
    cast: ["John Travolta", "Samuel L. Jackson"],
    synopsis:
      "Un film à la narration non linéaire qui entrelace plusieurs histoires de criminels, de gangsters et de personnages marginaux à Los Angeles.",
    boxOffice: "$213.9 million",
  },
  {
    title: "The Godfather",
    year: "1972",
    studio: "Paramount Pictures",
    cast: ["Marlon Brando", "Al Pacino"],
    synopsis:
      "L'histoire d'une famille mafieuse italo-américaine et de la montée au pouvoir du fils cadet, Michael Corleone, pour devenir le nouveau parrain.",
    boxOffice: "$245.1 million",
  },
];
const actors = [
  {
    name: "Jennifer Lawrence",
    age: 31,
    nationality: "Américaine",
    numberOfMovies: 30,
    movies: ["Hunger Games", "Silver Linings Playbook", "Joy"],
    boxOffice: "$2.4 billion",
  },
  {
    name: "Will Smith",
    age: 53,
    nationality: "Américaine",
    numberOfMovies: 50,
    movies: ["Men in Black", "Independence Day", "Ali"],
    boxOffice: "$4.5 billion",
  },
  {
    name: "Penélope Cruz",
    age: 48,
    nationality: "Espagnole",
    numberOfMovies: 60,
    movies: ["Volver", "Vicky Cristina Barcelona", "Nine"],
    boxOffice: "$1.2 billion",
  },
  {
    name: "Tom Hanks",
    age: 65,
    nationality: "Américaine",
    numberOfMovies: 80,
    movies: ["Forrest Gump", "Saving Private Ryan", "Cast Away"],
    boxOffice: "$9.8 billion",
  },
  {
    name: "Scarlett Johansson",
    age: 37,
    nationality: "Américaine",
    numberOfMovies: 70,
    movies: ["Lost in Translation", "The Avengers", "Marriage Story"],
    boxOffice: "$14.3 billion",
  },
  {
    name: "Catherine Zeta-Jones",
    age: 52,
    nationality: "Galloise",
    numberOfMovies: 40,
    movies: ["Chicago", "Traffic", "The Mask of Zorro"],
    boxOffice: "$1.9 billion",
  },
  {
    name: "Jackie Chan",
    age: 68,
    nationality: "Chinoise",
    numberOfMovies: 150,
    movies: ["Rush Hour", "Police Story", "Drunken Master"],
    boxOffice: "$5.7 billion",
  },
  {
    name: "Natalie Portman",
    age: 40,
    nationality: "Américaine",
    numberOfMovies: 50,
    movies: ["Black Swan", "V for Vendetta", "Leon: The Professional"],
    boxOffice: "$2.1 billion",
  },
  {
    name: "Lupita Nyong'o",
    age: 38,
    nationality: "Kenyane",
    numberOfMovies: 10,
    movies: ["12 Years a Slave", "Black Panther", "Us"],
    boxOffice: "$1.3 billion",
  },
  {
    name: "Mark Ruffalo",
    age: 54,
    nationality: "Américaine",
    numberOfMovies: 60,
    movies: [
      "The Avengers",
      "Spotlight",
      "Eternal Sunshine of the Spotless Mind",
    ],
    boxOffice: "$5.2 billion",
  },
  {
    name: "Marion Cotillard",
    age: 47,
    nationality: "Française",
    numberOfMovies: 50,
    movies: ["La Vie en Rose", "Inception", "Midnight in Paris"],
    boxOffice: "$1.1 billion",
  },
  {
    name: "Jean Dujardin",
    age: 50,
    nationality: "Française",
    numberOfMovies: 40,
    movies: [
      "The Artist",
      "The Wolf of Wall Street",
      "OSS 117: Cairo, Nest of Spies",
    ],
    boxOffice: "$0.6 billion",
  },
  {
    name: "Isabelle Huppert",
    age: 69,
    nationality: "Française",
    numberOfMovies: 120,
    movies: ["Elle", "The Piano Teacher", "Amour"],
    boxOffice: "$0.9 billion",
  },
  {
    name: "Omar Sy",
    age: 44,
    nationality: "Française",
    numberOfMovies: 30,
    movies: ["Intouchables", "Jurassic World", "Samba"],
    boxOffice: "$0.8 billion",
  },
  {
    name: "Audrey Tautou",
    age: 45,
    nationality: "Française",
    numberOfMovies: 25,
    movies: ["Amélie", "Coco Before Chanel", "A Very Long Engagement"],
    boxOffice: "$0.4 billion",
  },
  {
    name: "Millie Bobby Brown",
    age: 17,
    nationality: "Britannique",
    numberOfMovies: 0,
    movies: ["Enola Holmes", "Godzilla vs. Kong"],
    boxOffice: "$0.6 billion",
  },
  {
    name: "Yara Shahidi",
    age: 22,
    nationality: "Américaine",
    numberOfMovies: 0,
    movies: ["The Sun Is Also a Star"],
    boxOffice: "$0.2 billion",
  },
  {
    name: "Florence Pugh",
    age: 26,
    nationality: "Britannique",
    numberOfMovies: 0,
    movies: ["Little Women", "Midsommar", "Black Widow"],
    boxOffice: "$0.6 billion",
  },
  {
    name: "Anya Taylor-Joy",
    age: 25,
    nationality: "Américano-Argentine",
    numberOfMovies: 0,
    movies: ["Split", "Emma."],
    boxOffice: "$0.4 billion",
  },
  {
    name: "Zendaya",
    age: 25,
    nationality: "Américaine",
    numberOfMovies: 0,
    movies: [],
    boxOffice: "$1.4 billion",
  },
  {
    name: "Ken Watanabe",
    age: 62,
    nationality: "Japonaise",
    numberOfMovies: 60,
    movies: ["The Last Samurai", "Inception", "Godzilla"],
    boxOffice: "$2.5 billion",
  },
  {
    name: "Rinko Kikuchi",
    age: 41,
    nationality: "Japonaise",
    numberOfMovies: 30,
    movies: ["Babel", "Pacific Rim", "Kumiko, the Treasure Hunter"],
    boxOffice: "$0.4 billion",
  },
  {
    name: "Masami Nagasawa",
    age: 34,
    nationality: "Japonaise",
    numberOfMovies: 40,
    movies: [
      "Crying Out Love, in the Center of the World",
      "Our Little Sister",
      "Sekaiichi Muzukashii Koi",
    ],
    boxOffice: "$0.3 billion",
  },
  ,
  {
    name: "Ryan Gosling",
    age: 41,
    nationality: "Canadienne",
    numberOfMovies: 50,
    movies: ["La La Land", "Drive", "The Notebook"],
    boxOffice: "$2.5 billion",
  },
  {
    name: "Emma Stone",
    age: 33,
    nationality: "Américaine",
    numberOfMovies: 40,
    movies: ["La La Land", "Easy A", "The Help"],
    boxOffice: "$2.3 billion",
  },
  {
    name: "Robert Downey Jr.",
    age: 56,
    nationality: "Américaine",
    numberOfMovies: 70,
    movies: ["Iron Man", "Sherlock Holmes", "The Avengers"],
    boxOffice: "$15.4 billion",
  },
  {
    name: "Chris Evans",
    age: 40,
    nationality: "Américaine",
    numberOfMovies: 40,
    movies: ["Captain America: The First Avenger", "Knives Out", "Snowpiercer"],
    boxOffice: "$10.9 billion",
  },
  {
    name: "Tom Holland",
    age: 25,
    nationality: "Britannique",
    numberOfMovies: 20,
    movies: ["Spider-Man: Homecoming", "Avengers: Endgame", "The Impossible"],
    boxOffice: "$11.1 billion",
  },
  {
    name: "Rachel McAdams",
    age: 43,
    nationality: "Canadienne",
    numberOfMovies: 40,
    movies: ["Mean Girls", "The Notebook", "Spotlight"],
    boxOffice: "$1.9 billion",
  },
];

const sortAge = actors
  .filter((actr) => actr.nationality === "Américaine")
  .sort((am1, am2) => {
    return am1.age < am2.age ? am1.age > am2.age : 1 ? -1 : 0;
  });

// console.log(sortAge);

console.log(
  movies
    .filter((mv) => mv.cast.includes("Tom Hardy"))
    .map((thmov) => thmov.title)
);

console.log(
  actors
    .filter((actr) => actr.movies.includes("The Avengers"))
    .map((actr) => actr.name)
);

const dataSpan = document.querySelector(".dataSpan");
const dataSpanA = document.querySelector(".dataSpanA");

movies.map((movie) => {
  let dataTxt = (dataSpan.appendChild(document.createElement("div")).innerHTML =
    movie.title + "<br> " + movie.boxOffice);
  dataSpan.childNodes.forEach((n) => {
    n.style.margin = "35px auto";
    n.style.maxWidth = "200px";
    n.style.padding = "20px";
    n.style.textTransform = "uppercase";
    n.style.borderBottom = "8px dashed #9696b6";
  });
  return dataTxt;
});

actors
  .filter((actr) => actr.age >= 35)
  .sort((am1, am2) => {
    return am1.age < am2.age ? am1.age > am2.age : 1 ? -1 : 0;
  })
  .map((actor) => {
    let dataTxt = (dataSpanA.appendChild(
      document.createElement("div")
    ).innerHTML =
      actor.name + "<br> " + actor.age + " years old<br> " + actor.boxOffice);
    //   console.log(dataSpanA.childElementCount);
    dataSpanA.childNodes.forEach((el) => {
      el.style.color = "#b59595";
      el.style.margin = "35px auto";
      el.style.padding = "20px";
      el.style.maxWidth = "200px";
      el.style.borderBottom = "8px dotted #b59595";
    });
    return dataTxt;
  });
