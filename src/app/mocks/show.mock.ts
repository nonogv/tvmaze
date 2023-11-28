import { Show } from '../models/show.model';

export const showMock: Show = {
  id: 8566,
  url: "https://www.tvmaze.com/shows/8566/good-morning-america",
  name: "Good Morning America",
  type: "Talk Show",
  language: "English",
  genres: [],
  status: "Running",
  runtime: 120,
  averageRuntime: 118,
  premiered: "1975-11-03",
  ended: null,
  officialSite: "http://abc.go.com/shows/good-morning-america",
  schedule: {
    time: "07:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ]
  },
  rating: {
    average: 7.8
  },
  weight: 91,
  network: {
    id: 3,
    name: "ABC",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York"
    },
    officialSite: "https://abc.com/"
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: null,
    thetvdb: 70710,
    imdb: "tt0072506"
  },
  image: {
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/449/1122639.jpg",
    original: "https://static.tvmaze.com/uploads/images/original_untouched/449/1122639.jpg"
  },
  summary: "<p><b>Good Morning America</b> is a two-hour, live program anchored by Robin Roberts, George Stephanopoulos and Michael Strahan. Lara Spencer is the entertainmnt anchor, and Ginger Zee is the chief meteorologist. </p>",
  updated: 1701091919,
  _links: {
    self: {
      href: "https://api.tvmaze.com/shows/8566"
    },
    previousepisode: {
      href: "https://api.tvmaze.com/episodes/2691965"
    },
    nextepisode: {
      href: "https://api.tvmaze.com/episodes/2691966"
    }
  }
};
