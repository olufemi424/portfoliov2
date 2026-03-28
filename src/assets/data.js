// images
import friendConnect from "./project-img/friendconnet.png";
import lyrica from "./project-img/lyrica.png";
import moviedb from "./project-img/moviedb.png";
import twitterLike from "./project-img/twitterLike.png";
import pokemon from "./project-img/pokemon.png";

const datas = [
  {
    title: "IBM Pokémon Front-End Challenge",
    subTitle: "UI engineering and API integration",
    image: pokemon,
    icons: {
      github: "",
      link: "",
    },
    githubLink: "https://github.com/olufemi424/senior-fed-challenge",
    liveHostLink: "https://kaleidoscopic-truffle-37070f.netlify.app",
    desc: "Built a responsive Pokémon explorer from a design-and-API challenge brief. The app supports grid/list views, pagination, search, type filters, favorites, detail pages, and evolution chains. This project sharpened my TypeScript + Vue workflow and reinforced component-driven UI architecture.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue",
      "TypeScript",
      "IBM Pokémon API",
    ],
  },
  {
    title: "SocialConnect (Twitter-like App)",
    subTitle: "React + Firebase social platform",
    image: twitterLike,
    icons: {
      github: "",
      link: "",
    },
    githubLink: "https://github.com/olufemi424/socialConnet",
    liveHostLink: "https://socialconnect-ad8d3.firebaseapp.com/",
    desc: "A Twitter-inspired social app built with React and Firebase. Users can create posts, interact through core social actions, and receive notifications in real time. The project focused on shipping a clean CRUD architecture with cloud-hosted backend logic.",
    tools: [
      "HTML",
      "CSS",
      "Material UI",
      "JavaScript",
      "React",
      "React Redux",
      "Firebase (Firestore + Functions)",
    ],
  },
  {
    title: "DevFConnect",
    subTitle: "Developer networking platform",
    image: friendConnect,
    icons: {
      github: "",
      link: "",
    },
    githubLink: "https://github.com/olufemi424/friendConnect",
    liveHostLink: "https://lit-fortress-87525.herokuapp.com/",
    desc: "A social platform concept for developers to create profiles, connect with peers, and grow their network. This project explored authentication, profile management, and API-driven social interactions across a MERN-style architecture.",
    tools: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "React Redux",
      "Passport",
      "JWT",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "MovieDB Explorer",
    subTitle: "Movie discovery React app",
    image: moviedb,
    icons: {
      github: "",
      link: "",
    },
    githubLink: "https://github.com/olufemi424/movie-database",
    liveHostLink: "https://dreamy-bohr-8faae8.netlify.com/",
    desc: "A movie discovery app for browsing trending titles, exploring show details, and searching by title. Designed as a fast, user-friendly interface for content discovery, with room for recommendation and trailer enhancements.",
    tools: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "React Redux",
      "Styled Components",
    ],
  },
  {
    title: "Lyrica Lyrics App",
    subTitle: "Lyrics search + auth flow",
    image: lyrica,
    icons: {
      github: "",
      link: "",
    },
    githubLink: "https://github.com/olufemi424/lyricsApp",
    liveHostLink: "https://lyricsappfirebaseauth.herokuapp.com/login",
    desc: "A lightweight lyrics finder with Firebase authentication and third-party API integration. This project demonstrates practical auth flows, external API consumption, and clean React state handling in a compact product experience.",
    tools: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "React",
      "React Redux",
      "Firebase Auth",
      "Firestore",
      "Styled Components",
    ],
  },
];

export default datas;
