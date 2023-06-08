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
  Synthwave,
  Sushiman,
  NewTeamBandit,
} from "../assets";


  const selectedWorks = [
    {
      id: "team-bandit",
      name: "Team Bandit",
      blurb: "Teams Management Portal",
      progressText: "UI Overhaul In-Progress",
      progressTextColor: "#FFFFFF",
      image: NewTeamBandit,
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
      figmaLink: "https://www.figma.com/file/joRyCJOe4fJ34hXZa1CkKh/TeamBandit?type=design&node-id=0-1&t=fTLf8WQAnAhaima6-0",
      technologies: [
        {
          name: "React",
          logo: ReactLogo,
          primaryColor: '#61DAFB',
          textColor: '#282C34',
        },
        {
          name: "JavaScript",
          logo: ReactLogo,
          primaryColor: '#F7D100',
          textColor: '#282C34',
        },
        {
          name: "AWS",
          logo: AWSLogo,
          primaryColor: '#FF9900',
          textColor: '#ffffff',
        },
        {
          name: "PostgreSQL",
          logo: PostgresLogo,
          primaryColor: '#0064a5',
          textColor: '#ffffff',
        },
        {
          name: "BCrypt",
          logo: BcryptLogo,
          primaryColor: '#6C5CE7',
          textColor: '#ffffff',
        },
        {
          name: "Express JS",
          logo: ExpressLogo,
          primaryColor: '#FFFFFF',
          textColor: '#000000',
        },
        {
          name: "React Router",
          logo: ReactRouterLogo,
          primaryColor: '#F54250',
          textColor: '#000000',
        },
        {
          name: "Material UI",
          logo: MUILogo,
          primaryColor: '#00B0FF',
          textColor: '#282C34',
        },
        {
          name: "Jwt Tokens",
          logo: JWTLogo,
          primaryColor: '#000000',
          textColor: '#FFFFFF',
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
      id: "sushiman",
      name: "Sushiman",
      blurb: "Sushi Ordering Website",
      progressText: "COMPLETE",
      progressTextColor: "#77E681",
      image: Sushiman,
      logo: TeamBanditLogo,
      about: "This project is a culmination of using only HTML and CSS. With modern front-end frameworks being very popular I wanted to return to the basics of web development. While simple, this project focuses on having a clean, modern, and responsive design.",
      liveSiteLink: "https://sushi-store-psi.vercel.app/",
      githubLink: "https://github.com/SenpaiSumpie/sushi-store",
      figmaLink: "",
      technologies: [
        {
          name: "HTML",
          logo: ReactLogo,
          primaryColor: '#EB3E00',
          textColor: '#FFFFFF',
        },
        {
          name: "CSS",
          logo: ReactLogo,
          primaryColor: '#008BCB',
          textColor: '#FFFFFF',
        },
      ]
    },
    {
      id: "net-zero",
      name: "NetZero",
      blurb: "Carbon Emission Tracking",
      progressText: "Deployment Issue",
      progressTextColor: "#E0453F",
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
          name: "React",
          logo: ReactLogo,
          primaryColor: '#61DAFB',
          textColor: '#282C34',
        },
        {
          name: "TypeScript",
          logo: ReactLogo,
          primaryColor: '#017ACB',
          textColor: '#FFFFFF',
        },
        {
          name: "Spring Boot",
          logo: SpringBootLogo,
          primaryColor: '#6DB33F',
          textColor: '#FFFFFF',
        },
        {
          name: "Redux",
          logo: ReduxLogo,
          primaryColor: '#764ABC',
          textColor: '#FFFFFF',
        },
        {
          name: "React Router",
          logo: ReactRouterLogo,
          primaryColor: '#F54250',
          textColor: '#000000',
        },
        {
          name: "SCSS",
          logo: SCSSLogo,
          primaryColor: '#CD6799',
          textColor: '#FFFFFF',
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
      progressText: "In-Progress",
      progressTextColor: "#FFFFFF",
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
          name: "Next JS",
          logo: NextLogo,
          primaryColor: '#000000',
          textColor: '#FFFFFF',
        },
        {
          name: "TypeScript",
          logo: ReactLogo,
          primaryColor: '#017ACB',
          textColor: '#FFFFFF',
        },
        {
          name: "Vercel",
          logo: NextLogo,
          primaryColor: '#000000',
          textColor: '#FFFFFF',
        },
        {
          name: "Planet Scale",
          logo: PlanetScaleLogo,
          primaryColor: '#000000',
          textColor: '#FFFFFF',
        },
        {
          name: "Clerk",
          logo: ClerkLogo,
          primaryColor: '#5E33FF',
          textColor: '#FFFFFF',
        },
        {
          name: "Prisma",
          logo: PrismaLogo,
          primaryColor: '#0C344B',
          textColor: '#FFFFFF',
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
      progressText: "Back-end Not Live",
      progressTextColor: "#f0a84f",
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
      liveSiteLink: "https://work-mentor.vercel.app/",
      githubLink: "https://github.com/SenpaiSumpie/WorkMentor",
      figmaLink: "",
      technologies: [
        {
          name: "Angular",
          logo: AngularLogo,
          primaryColor: '#E23237',
          textColor: '#FFFFFF',
        },
        {
          name: "TypeScript",
          logo: ReactLogo,
          primaryColor: '#017ACB',
          textColor: '#FFFFFF',
        },
        {
          name: "Spring Boot",
          logo: SpringBootLogo,
          primaryColor: '#6DB33F',
          textColor: '#FFFFFF',
        },
        {
          name: "S3",
          logo: S3Logo,
          primaryColor: '#E25444',
          textColor: '#FFFFFF',
        },
        {
          name: "Cognito",
          logo: CognitoLogo,
          primaryColor: '#A76A8B',
          textColor: '#FFFFFF',
        },
        {
          name: "MySql",
          logo: MySqlLogo,
          primaryColor: '#5382A1',
          textColor: '#FFFFFF',
        },
        {
          name: "Jasmine",
          logo: JasmineLogo,
          primaryColor: '#8A4182',
          textColor: '#FFFFFF',
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
      link: "https://shannon-mosier-website.vercel.app/",
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
  ];
  
  const services = [];
  
  export { selectedWorks, liveWebsites, figmaProjects, archived, codepens, threeJS, clientWork };