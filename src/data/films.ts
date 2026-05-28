export type Film = {
  title: string
  year: number
  myRating: number
  genre: string[]
  director: string
  myTake?: string
}

export const films: Film[] = [
  // ── 10 / 10 ──────────────────────────────────────────────────
  { title: 'The Shawshank Redemption',  year: 1994, myRating: 10, genre: ['Drama'],            director: 'Frank Darabont',        myTake: 'Hope is a good thing — the best of things.' },
  { title: "Schindler's List",           year: 1993, myRating: 10, genre: ['Drama', 'History'], director: 'Steven Spielberg' },
  { title: '3 Idiots',                   year: 2009, myRating: 10, genre: ['Comedy', 'Drama'],  director: 'Rajkumar Hirani',       myTake: 'Changed how I think about education entirely.' },
  { title: 'Inception',                  year: 2010, myRating: 10, genre: ['Sci-Fi', 'Thriller'], director: 'Christopher Nolan' },
  { title: 'The Dark Knight',            year: 2008, myRating: 10, genre: ['Action', 'Crime'],  director: 'Christopher Nolan',     myTake: "Ledger's Joker is the greatest villain in cinema." },
  { title: 'Interstellar',               year: 2014, myRating: 10, genre: ['Sci-Fi', 'Drama'],  director: 'Christopher Nolan',     myTake: 'Love transcends dimensions. Science and poetry in one film.' },

  // ── 9 / 10 ──────────────────────────────────────────────────
  { title: 'The Godfather',              year: 1972, myRating: 9,  genre: ['Crime', 'Drama'],   director: 'Francis Ford Coppola' },
  { title: 'Dil Chahta Hai',             year: 2001, myRating: 9,  genre: ['Comedy', 'Drama'],  director: 'Farhan Akhtar',         myTake: 'The friendship film that defined a generation.' },
  { title: 'Whiplash',                   year: 2014, myRating: 9,  genre: ['Drama', 'Music'],   director: 'Damien Chazelle',       myTake: 'Obsession vs. greatness — the line is thinner than you think.' },
  { title: 'Parasite',                   year: 2019, myRating: 9,  genre: ['Thriller', 'Drama'], director: 'Bong Joon-ho' },
  { title: 'The Big Short',              year: 2015, myRating: 9,  genre: ['Drama', 'Finance'], director: 'Adam McKay',            myTake: "Best explanation of 2008 — and it's entertaining." },
  { title: 'Andhadhun',                  year: 2018, myRating: 9,  genre: ['Thriller', 'Crime'], director: 'Sriram Raghavan',      myTake: 'Tightest screenplay in Indian cinema in years.' },
  { title: 'Margin Call',                year: 2011, myRating: 9,  genre: ['Drama', 'Finance'], director: 'J.C. Chandor',          myTake: 'The night before a financial meltdown. Claustrophobic and brilliant.' },
  { title: 'Gangs of Wasseypur',         year: 2012, myRating: 9,  genre: ['Crime', 'Drama'],   director: 'Anurag Kashyap' },
  { title: 'A Beautiful Mind',           year: 2001, myRating: 9,  genre: ['Drama', 'Biography'], director: 'Ron Howard' },
  { title: 'Lagaan',                     year: 2001, myRating: 9,  genre: ['Drama', 'Sport'],   director: 'Ashutosh Gowariker',    myTake: 'Epic storytelling. Every scene earns its place.' },

  // ── 8 / 10 ──────────────────────────────────────────────────
  { title: 'Moneyball',                  year: 2011, myRating: 8,  genre: ['Drama', 'Sport'],   director: 'Bennett Miller',        myTake: 'Data over intuition. Every time.' },
  { title: 'The Social Network',         year: 2010, myRating: 8,  genre: ['Drama', 'Biography'], director: 'David Fincher' },
  { title: 'Inside Job',                 year: 2010, myRating: 8,  genre: ['Documentary', 'Finance'], director: 'Charles Ferguson', myTake: 'Essential viewing for anyone in finance.' },
  { title: 'The Wolf of Wall Street',    year: 2013, myRating: 8,  genre: ['Biography', 'Crime'], director: 'Martin Scorsese',    myTake: 'Excess as satire. Scorsese at his most indulgent.' },
  { title: '12 Angry Men',               year: 1957, myRating: 8,  genre: ['Drama', 'Crime'],   director: 'Sidney Lumet',          myTake: 'Proof that one person can shift an entire room.' },
  { title: 'Zindagi Na Milegi Dobara',   year: 2011, myRating: 8,  genre: ['Drama', 'Comedy'],  director: 'Zoya Akhtar' },
  { title: 'Drishyam',                   year: 2015, myRating: 8,  genre: ['Thriller', 'Crime'], director: 'Nishikant Kamat' },
  { title: 'Piku',                       year: 2015, myRating: 8,  genre: ['Drama', 'Comedy'],  director: 'Shoojit Sircar' },
  { title: 'Munnabhai M.B.B.S.',         year: 2003, myRating: 8,  genre: ['Comedy', 'Drama'],  director: 'Rajkumar Hirani' },
  { title: 'Dil Dhadakne Do',            year: 2015, myRating: 8,  genre: ['Drama', 'Comedy'],  director: 'Zoya Akhtar' },
]

export default films
