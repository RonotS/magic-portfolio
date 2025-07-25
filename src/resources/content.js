import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Aaron",
  lastName: "Santos",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer and Web Designer",
  avatar: "/images/avatar.jpg",
  email: "grow@sebusinesssolutions.co",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AphilSantos",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aaron-santos-a1561b22b/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Learn, discover, build, repeat – crafting digital solutions that matter</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Arcade AI Template</strong></>,
    href: "/work/arcade-vercel-ai-template",
  },
  subline: (
    <>
      I'm Aaron, a passionate developer who believes in continuous learning and meaningful impact. From the Philippines,
      <br /> I create web solutions that bridge technology with real-world needs, one project at a time.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Learn and discover and then learn and discover again! Being productive helps me be more responsible.
        Being part of something whether it be great or small adds so much meaning to my life. I envelop myself
        with stickers of achievement and I desire to expand my reach to all as possible.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BrandLume Inc",
        timeframe: "January 2023 - Present (2 years 7 months)",
        role: "Web Developer and Web Designer",
        achievements: [
          <>
            Bringing a unique combination of technical skills and a passion for the industry to every project.
          </>,
          <>
            With extensive experience in both design and development, I am able to create visually stunning
            and client-converting websites that effectively communicate the message and goals of my clients
            in the health and wellness field.
          </>,
        ],
        images: [],
      },
      {
        company: "ihelpcreate",
        timeframe: "July 2021 - Present (4 years 1 month)",
        role: "Web Developer",
        achievements: [
          <>
            Located in Cagayan De Oro City, Northern Mindanao, Philippines
          </>,
          <>
            Global Managed Services
          </>,
        ],
        images: [],
      },
      {
        company: "BYU-Pathway Worldwide",
        timeframe: "June 2023 - November 2024 (1 year 6 months)",
        role: "Education Mentor",
        achievements: [
          <>
            As a dedicated Peer Mentor at BYU-Pathway Worldwide, I have the privilege of guiding and
            supporting students from diverse backgrounds on their educational journeys.
          </>,
          <>
            My role involves creating a welcoming and nurturing environment that fosters academic success
            and personal growth. By sharing insights, resources, and strategies tailored to individual needs,
            I help students navigate challenges and maximize their learning experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Bloom Educational",
        timeframe: "June 2023 - May 2024 (1 year)",
        role: "Mentor",
        achievements: [
          <>
            As a dedicated Peer Mentor at BYU-Pathway Worldwide, I have the privilege of guiding and
            supporting students from diverse backgrounds on their educational journeys.
          </>,
          <>
            My role involves creating a welcoming and nurturing environment that fosters academic success
            and personal growth. By sharing insights, resources, and strategies tailored to individual needs,
            I help students navigate challenges and maximize their learning experience.
          </>,
        ],
        images: [],
      },
      {
        company: "The Church of Jesus Christ of Latter-day Saints",
        timeframe: "June 2019 - June 2021 (2 years 1 month)",
        role: "Missionary",
        achievements: [
          <>
            Full-time volunteer to share the gospel of Jesus Christ in Quezon City, National Capital Region, Philippines.
          </>,
          <>
            Led in training and administration of the mission for 21 months.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Liceo de Cagayan University",
        description: <>Bachelor's degree, Electrical, Electronics and Communications Engineering · (September 2021 - June 2025)</>,
      },
      {
        name: "Brigham Young University - Idaho",
        description: <>Applied Technology, Responsive Web Development · (September 2021 - April 2025)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "PHP & Laravel",
        description: <>Server-side development with PHP and Laravel framework for robust web applications.</>,
        images: [],
      },
      {
        title: "WordPress",
        description: <>Custom WordPress development, themes, and plugins for content management solutions.</>,
        images: [],
      },
      {
        title: "Liquid & Shopify",
        description: <>E-commerce development using Shopify's Liquid templating language for online stores.</>,
        images: [],
      },
      {
        title: "Python & Django",
        description: <>Backend development with Python and Django framework for scalable web applications.</>,
        images: [],
      },
      {
        title: "NodeJS, NextJS & ReactJS",
        description: <>Modern JavaScript development with Node.js backend and React/Next.js frontend frameworks.</>,
        images: [],
      },
      {
        title: "Electron, Expo & Capacitor",
        description: <>Cross-platform application development for desktop and mobile using modern web technologies.</>,
        images: [],
      },
      {
        title: "Vercel AI SDK",
        description: <>AI-powered automation and intelligent features integration using Vercel's AI SDK.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Development insights and technical deep-dives",
  description: `Technical articles and development insights by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
