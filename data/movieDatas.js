const MovieDatas = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        duration: "2h 22min",
        genre: ["Crime", "Drama"],
        rate: 9.3
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        duration: "2h 55min",
        genre: ["Crime", "Drama"],
        rate: 9.2
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        duration: "2h 32min",
        genre: ["Action", "Crime", "Drama", "Thriller"],
        rate: 9.0
    },
    {
        id: 4,
        title: "12 Angry",
        year: 1957,
        director: "Sidney Lumet",
        duration: "1h 36min",
        genre: ["Crime", "Drama"],
        rate: 8.9

    },

    {
        id: 5,
        title: "Schindler's List",
        year: 1993,
        director: "Steven Spielberg",
        duration: "3h 15min",
        genre: ["Biography", "Drama", "History"],
        rate: 8.9
    },

    {
        id: 6,
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        director: "Peter Jackson",
        duration: "3h 21min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.9
    },

    {
        id: 7,
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        duration: "2h 34min",
        genre: ["Crime", "Drama"],
        rate: 8.9
    },

    {
        id: 8,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        director: "Peter Jackson",
        duration: "2h 58min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.8
    },

    {
        id: 9,
        title: "Forrest Gump",
        year: 1994,
        director: "Robert Zemeckis",
        duration: "2h 22min",
        genre: ["Drama", "Romance"],
        rate: 8.8
    },

    {
        id: 10,
        title: "Fight Club",
        year: 1999,
        director: "David Fincher",
        duration: "2h 19min",
        genre: ["Drama"],
        rate: 8.8
    },

    {
        id: 11,
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        duration: "2h 28min",
        genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
        rate: 8.8
    },

    {
        id: 12,
        title: "The Lord of the Rings: The Two Towers",
        year: 2002,
        director: "Peter Jackson",
        duration: "2h 59min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.7
    },

    {
        id: 13,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
        director: "Irvin Kershner",
        duration: "2h 4min",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rate: 8.7
    },

    {
        id: 14,
        title: "The Matrix",
        year: 1999,
        director: "Lana Wachowski",
        duration: "2h 16min",
        genre: ["Action", "Sci-Fi"],
        rate: 8.7
    },

    {
        id: 15,
        title: "Goodfellas",
        year: 1990,
        director: "Martin Scorsese",
        duration: "2h 26min",
        genre: ["Biography", "Crime", "Drama"],
        rate: 8.7
    },

    {
        id: 16,
        title: "One Flew Over the Cuckoo's Nest",
        year: 1975,
        director: "Milos Forman",
        duration: "2h 13min",
        genre: ["Drama"],
        rate: 8.7
    },

    {
        id: 17,
        title: "Seven Samurai",
        year: 1954,
        director: "Akira Kurosawa",
        duration: "3h 27min",
        genre: ["Adventure", "Drama"],
        rate: 8.6
    },

    {
        id: 18,
        title: "Se7en",
        year: 1995,
        director: "David Fincher",
        duration: "2h 7min",
        genre: ["Crime", "Drama", "Mystery", "Thriller"],
        rate: 8.6
    },

    {
        id: 19,
        title: "City of God",
        year: 2002,
        director: "Fernando Meirelles",
        duration: "2h 10min",
        genre: ["Crime", "Drama"],
        rate: 8.6
    },

    {
        id: 20,
        title: "Life Is Beautiful",
        year: 1997,
        director: "Roberto Benigni",
        duration: "1h 56min",
        genre: ["Comedy", "Drama", "War"],
        rate: 8.6
    },

    {
        id: 21,
        title: "The Silence of the Lambs",
        year: 1991,
        director: "Jonathan Demme",
        duration: "1h 58min",
        genre: ["Crime", "Drama", "Thriller"],
        rate: 8.6
    },

    {
        id: 22,
        title: "It's a Wonderful Life",
        year: 1946,
        director: "Frank Capra",
        duration: "2h 10min",
        genre: ["Drama", "Family", "Fantasy"],
        rate: 8.6
    },

    {
        id: 23,
        title: "Star Wars",
        year: 1977,
        director: "George Lucas",
        duration: "2h 1min",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rate: 8.6
    },

    {
        id: 24,
        title: "Saving Private Ryan",
        year: 1998,
        director: "Steven Spielberg",
        duration: "2h 49min",
        genre: ["Drama", "War"],
        rate: 8.6
    },

    {
        id: 25,
        title: "Spirited Away",
        year: 2001,
        director: "Hayao Miyazaki",
        duration: "2h 5min",
        genre: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
        rate: 8.6
    },

    {
        id: 26,
        title: "The Green Mile",
        year: 1999,
        director: "Frank Darabont",
        duration: "3h 9min",
        genre: ["Crime", "Drama", "Fantasy", "Mystery"],
        rate: 8.6
    },

    {
        id: 27,
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        duration: "2h 49min",
        genre: ["Adventure", "Drama", "Sci-Fi"],
        rate: 8.6
    },

    {
        id: 28,
        title: "Léon: The Professional",
        year: 1994,
        director: "Luc Besson",
        duration: "1h 50min",
        genre: ["Crime", "Drama", "Thriller"],
        rate: 8.5
    },

    {
        id: 29,
        title: "The Usual Suspects",
        year: 1995,
        director: "Bryan Singer",
        duration: "1h 46min",
        genre: ["Crime", "Drama", "Mystery", "Thriller"],
        rate: 8.5
    },

    {
        id: 30,
        title: "The Lion King",
        year: 1994,
        director: "Roger Allers",
        duration: "1h 28min",
        genre: ["Animation", "Adventure", "Drama", "Family", "Musical"],
        rate: 8.5
    },

    {
        id: 31,
        title: "Terminator 2: Judgment Day",
        year: 1991,
        director: "James Cameron",
        duration: "2h 17min",
        genre: ["Action", "Sci-Fi"],
        rate: 8.5
    },

    {
        id: 32,
        title: "Back to the Future",
        year: 1985,
        director: "Robert Zemeckis",
        duration: "1h 56min",
        genre: ["Adventure", "Comedy", "Sci-Fi"],
        rate: 8.5
    },

    {
        id: 33,
        title: "Whiplash",
        year: 2014,
        director: "Damien Chazelle",
        duration: "1h 47min",
        genre: ["Drama", "Music"],
        rate: 8.5
    },

    {
        id: 34,
        title: "Gladiator",
        year: 2000,
        director: "Ridley Scott",
        duration: "2h 35min",
        genre: ["Action", "Adventure", "Drama"],
        rate: 8.5
    },

    {
        id: 35,
        title: "The Prestige",
        year: 2006,
        director: "Christopher Nolan",
        duration: "2h 10min",
        genre: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
        rate: 8.5
    },

    {
        id: 36,
        title: "The Departed",
        year: 2006,
        director: "Martin Scorsese",
        duration: "2h 31min",
        genre: ["Crime", "Drama", "Thriller"],
        rate: 8.5,
        url: "https://www.imdb.com/title/tt0407887/?ref_=nv_sr_srsg_0"
    },

    {
        id: 37,
        title: "Apocalypse Now",
        year: 1979,
        director: "Francis Ford Coppola",
        duration: "2h 27min",
        genre: ["Drama", "War"],
        rate: 8.5
    },

    {
        id: 38,
        title: "Alien",
        year: 1979,
        director: "Ridley Scott",
        duration: "1h 57min",
        genre: ["Horror", "Sci-Fi"],
        rate: 8.5
    },

    {
        id: 39,
        title: "The Intouchables",
        year: 2011,
        director: "Olivier Nakache",
        duration: "1h 52min",
        genre: ["Biography", "Comedy", "Drama"],
        rate: 8.5
    },

    {
        id: 40,
        title: "Cinema Paradiso",
        year: 1988,
        director: "Giuseppe Tornatore",
        duration: "2h 35min",
        genre: ["Drama"],
        rate: 8.5
    },

]

usersRouter.get('/users/:userName', async (req, res) => {
    const { userName } = req.params
    const userByName = await User.findOne({ name: userName })
    return res.json(userByName)
})