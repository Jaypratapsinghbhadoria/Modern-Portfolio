export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Weather Dashboard",
    description:
      "A responsive React.js-powered Weather Dashboard delivering real-time climate insights worldwide with sleek design and seamless API integration.",
    technologies: ["React", "Tailwind CSS", "React Charts"],
    github: "https://github.com/Jaypratapsinghbhadoria/Weather-Dashboard",
    demo: "https://jaypratapsinghbhadoria.github.io/Weather-Dashboard/",
    image: require(".//../../public/projects/weather-app.png"),
    available: true,
  },
  {
    id: 1,
    name: "CurrentExpress",
    description:
      "A beautifully designed news platform providing real-time headlines from BBC, Hindustan Times, The Times of India, Dainik Bhaskar, and The Hindu, all in one place.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/Jaypratapsinghbhadoria/News-App",
    demo: "https://jaypratapsinghbhadoria.github.io/News-App/",
    image: require(".//../../public/projects/Currentexpress.png"),
    available: true,
  },
  {
    id: 2,
    name: "Portfolio",
    description:
      "A responsive portfolio website using HTML, CSS, and JavaScript, highlighting projects and skills with sleek animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jaypratapsinghbhadoria/Portfolio",
    demo: "https://jaypratapsinghbhadoria.github.io/Portfolio/",
    image: require(".//../../public/projects/portfolio.png"),
    available: true,
  },
  {
    id: 3,
    name: "Nuclear Weapons Trends",
    description:
        "Nuclear Weapons Trends project analyzes the evolution and global distribution of nuclear weapons, highlighting their impact on security and geopolitics.",
    technologies: ["R Language", "GGPlot", "dplyr"],
    github: "",
    demo: ".//../../public/projects/nuclear_warheads.pdf",
    image: require(".//../../public/projects/war_heads.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "Flixify",
  //   description:
  //     "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
  //   technologies: ["Next.js", "Typescript", "Prisma"],
  //   github: "https://github.com/victorcodess/flixify",
  //   demo: "https://flixify.victorwilliams.me/",
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
