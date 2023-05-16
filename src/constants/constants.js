import {
  NetZero,
  TeamBandit,
  TaskeRPG,
  WorkMentor,
  NetZeroLogo,
  TeamBanditLogo,
  TaskeRPGLogo,
  WorkMentorLogo,
  ReactLogo,
  ExpressLogo,
  AWSLogo,
  MUILogo,
  ReactRouterLogo,
  PostgresLogo,
  JWTLogo,
  BcryptLogo,
  SpringBootLogo,
  ReduxLogo,
  SCSSLogo,
  NextLogo,
  PlanetScaleLogo,
  VercelLogo,
  ClerkLogo,
  PrismaLogo,
  AngularLogo,
  S3Logo,
  CognitoLogo,
  MySqlLogo,
  JasmineLogo,
  Honors,
  Lance,
  Shannon,
  Prestige,
  EmojiTwitter,
  Synthwave
} from "../assets";


  const selectedWorks = [
    {
      id: "team-bandit",
      name: "Team Bandit",
      blurb: "Teams Management Portal",
      image: TeamBandit,
      logo: TeamBanditLogo,
      about: "For my final year in college I was assigned a team to work on a client project for my Capstone. We were tasked with creating TeamBandit, a web application whose goal was to streamline course and team management. This was primarily for my Capstone course but there was possibilities to move beyond.",
      contributions: [
        "- Set up Front-End and Back-End infrastructure",
        "- Implemented CSV Upload Feature",
        "- Built Team Sorting Algorithm and Manual Sort Page",
        "- Implemented User Creation and User Authentication with JWT",
        "- Implemented CRUD functionality for multiple data types",
      ],
      liveSiteLink: "",
      githubLink: "https://github.com/eckdoerry/TeamBandit",
      figmaLink: "",
      googleDocLink: "",
      technologies: [
        {
          name: "React",
          logo: ReactLogo,
        },
        {
          name: "AWS",
          logo: AWSLogo,
        },
        {
          name: "POSTGRESQL",
          logo: PostgresLogo,
        },
        {
          name: "BCRYPT",
          logo: BcryptLogo,
        },
        {
          name: "EXPRESS JS",
          logo: ExpressLogo,
        },
        {
          name: "REACT ROUTER",
          logo: ReactRouterLogo,
        },
        {
          name: "Material UI",
          logo: MUILogo,
        },
        {
          name: "JWT TOKENS",
          logo: JWTLogo,
        },
      ],
      team: [
        "Max Mosier",
        "Quinn Melssen",
        "Dakota Battle",
        "Liam Scholl",
      ]
    },
    {
      id: "net-zero",
      name: "NetZero",
      blurb: "Carbon Emission Tracking",
      image: NetZero,
      logo: NetZeroLogo,
      about: "My time at Cognizant was primarily spent working on NetZero. Primarily a carbon credit tracking application to ",
      contributions: [
        "- Contributed to the conceptualization and design of the application",
      ],
      liveSiteLink: "",
      githubLink: "",
      figmaLink: "",
      googleDocLink: "",
      technologies: [
        {
          name: "REACT",
          logo: ReactLogo,
        },
        {
          name: "SPRING BOOT",
          logo: SpringBootLogo,
        },
        {
          name: "REDUX",
          logo: ReduxLogo,
        },
        {
          name: "REACT ROUTER",
          logo: ReactRouterLogo,
        },
        {
          name: "SCSS",
          logo: SCSSLogo,
        },
      ],
      team: [
        "Max Mosier",
        "Peter Galvan",
        "Parker Cole",
        "Alazar Megerssa",
        "Aidan Ostapko",
      ]
    },
    {
      id: "taskerpg",
      name: "TaskeRPG",
      blurb: "Gamified Task Management",
      image: TaskeRPG,
      logo: TaskeRPGLogo,
      about: "TaskeRPG is a web application that aims to promote good habits and encourage productivity by gamifying tasks. The application allows users to create a personalized character that represents them in the game, and complete tasks to complete quests and earn rewards.",
      contributions: [
        "- In Progress",
      ],
      liveSiteLink: "",
      githubLink: "https://github.com/SectorZStudios/TaskeRPG",
      figmaLink: "https://www.figma.com/file/4AbghrgbaRi896KssdeLpo/TaskeRPG?type=design&node-id=0%3A1&t=uEnKfTJRHOt3XcRT-1",
      googleDocLink: "https://docs.google.com/document/d/1amXtl52l1BMRt-0ZN_iXWaItLU34IYVF5rac0OU_93o/edit?usp=sharing",
      technologies: [
        {
          name: "NEXT JS",
          logo: NextLogo,
        },
        {
          name: "PLANET SCALE",
          logo: PlanetScaleLogo,
        },
        {
          name: "VERCEL",
          logo: VercelLogo,
        },
        {
          name: "CLERK",
          logo: ClerkLogo,
        },
        {
          name: "PRISMA",
          logo: PrismaLogo,
        },
      ],
      team: [
        "Max Mosier",
        "Alazar Megerssa",
      ]
    },
    {
      id: "work-mentor",
      name: "Work Mentor",
      blurb: "Work mentorship program",
      image: WorkMentor,
      logo: WorkMentorLogo,
      about: "During my time at Cognizant I was tasked with designing and creating a full-stack web application to showcase my skills. The application I choose to build was WorkMentor, an app tasked with pairing working professionals with those who are looking to get into the industry.",
      contributions: [
        "- Set up Front-End and Back-End infrastructure",
        "- Connect mentors and mentees by mentee applications",
        "- Mentors and mentees to chat with each other",
        "- Mentees can search for mentors",
        "- Mentees can leave reviews for their mentors",
      ],
      liveSiteLink: "",
      githubLink: "https://github.com/SenpaiSumpie/WorkMentor",
      figmaLink: "",
      googleDocLink: "",
      technologies: [
        {
          name: "ANGULAR",
          logo: AngularLogo,
        },
        {
          name: "SPRING BOOT",
          logo: SpringBootLogo,
        },
        {
          name: "S3",
          logo: S3Logo,
        },
        {
          name: "COGNITO",
          logo: CognitoLogo,
        },
        {
          name: "MYSQL",
          logo: MySqlLogo,
        },
        {
          name: "JASMINE",
          logo: JasmineLogo,
        },
      ],
      team: [
        "Max Mosier",
      ]
    },
  ];

  const clientWork = [
    {
      id: "honors",
      name: "Honors Way Group",
      link: "https://honorswaygroup.com/",
      image: Honors,
    },
    {
      id: "lance",
      name: "Nostalgia Notes Records",
      link: "https://www.nostalgianotesrecords.com/",
      image: Lance,
    },
    {
      id: "shannon",
      name: "Shannon Mosier",
      link: "https://shannonstarr.org/",
      image: Shannon,
    },
    {
      id: "prestige",
      name: "Prestige at Mayhill",
      link: "https://theprestigeatmayhill.com/",
      image: Prestige,
    },
  ];

  const liveWebsites = [
    {
      id: "emoji-twitter",
      name: "Twitter Clone (Emoji)",
      link: "https://chirp-tau-ruddy.vercel.app/",
      image: EmojiTwitter,
    },
  ];

  const figmaProjects = [
    {
      id: "walmart-clone",
      name: "Walmart Clone",
      link: "https://netflix-clone-1a0d0.web.app/",
      image: "https://i.imgur.com/2Z3QJ5O.png",
    },
  ];

  const archived = [
    {
      id: "twitter-clone",
      name: "Twitter Clone",
      link: "https://netflix-clone-1a0d0.web.app/",
      image: "https://i.imgur.com/2Z3QJ5O.png",
    },
  ];

  const codepens = [
    {
      id: "sabacc",
      name: "Sabacc Card Game",
      link: "https://netflix-clone-1a0d0.web.app/",
      image: "https://i.imgur.com/2Z3QJ5O.png",
    },
  ];

  const threeJS = [
    {
      id: "synthwave-scene",
      name: "Synthwave Scene",
      link: "https://rtf-synthwave-scene-gadzzc9du-senpaisumpie.vercel.app/",
      image: Synthwave,
    },
  ];
  
  export const navLinks = [
    {
      id: "works",
      title: "Selected Works",
    },
    {
      id: "other",
      title: "Other Works",
    },
    {
      id: "credits",
      title: "Credits",
    },
  ];
  
  const services = [];
  
  export { selectedWorks, liveWebsites, figmaProjects, archived, codepens, threeJS, clientWork };