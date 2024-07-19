/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harshdeep Choudhary",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harshdeep Choudhary",
    type: "website",
    url: "http://presentmynd.online",
  },
};

//Home Page
const greeting = {
  title: "Harshdeep Choudhary",
  logo_name: "Harshdeep Choudhary",
  nickname: "Nickname -hhp",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/108Gpunn9ILtiWQbwRCh_gyzyeryeYMkv/view?usp=sharing",
  portfolio_repository: "https://github.com/harshdeepchoudhary/Amazon-Clone",
  githubProfile: "https://github.com/harshdeepchoudhary",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/harshdeepchoudhary",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshdeep-choudhary-1438512bb/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@harshdeepchoudhary",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:harshdeepchoudharyit@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/hhpharshdeep",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/harshdeepchoudhary11/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harshdeeepchoudhary/reels/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficiency in Java with Spring Framework (Spring Boot, Spring MVC).",
        "⚡ Front-end expertise in HTML5, CSS3, JavaScript (ES6), and React.js/TailwindCss/Next.js",
        "⚡ Experience developing RESTful APIs and using ORM frameworks like Hibernate.",
        "⚡Knowledge of SQL/NoSQL databases, Git, Docker, and Agile methodologies.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:java",
          style: {
            color: "red",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "Digital Marketing",
      fileName: "DesignImg",
      skills: [
        "⚡  Search Engine Optimization (SEO) techniques",
        "⚡ Pay-Per-Click (PPC) advertising strategies",
        "⚡ Content marketing planning and execution",
        "⚡ Social media marketing (SMM) management",
        "⚡ Email marketing campaign development",
        "⚡ Web analytics interpretation (e.g., Google Analytics)",
        "⚡ Conversion rate optimization (CRO) techniques",
        "⚡ Online reputation management",
      ],
      softwareSkills: [
        {
          skillName: "Instagram",
          fontAwesomeClassname: "simple-icons:instagram",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Google Ads",
          fontAwesomeClassname: "simple-icons:googleads",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "google adsense",
          fontAwesomeClassname: "simple-icons:googleadsense",
          style: {
            color: "yellow",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rameshram Institute Of Technology, Lucknow",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "ritm.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Digital Marketing,Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.ritm.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Digital Marketing",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ECjYWbhnGlm_gO3NfxHQKRE_5VtUAX37/view",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Full Stack Developer",
      subtitle: "-IIT Kanpur ",
      logo_path: "iitk.png",
      certificate_link:
        "https://drive.google.com/file/d/1m8L0pUqt5Y3JK5zZm-B-AYl1j-rZaOmj/view",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

    {
      title: "Instagram",
      subtitle: "- 50k Followers",
      logo_path: "instagram.png",
      certificate_link: "https://www.instagram.com/harshdeeepchoudhary/",
      alt_name: "Instagram",
      color_code: "#1F70C199",
    },
    {
      title: "Youtube",
      subtitle: "- 1k Subscribers",
      logo_path: "youtube.png",
      certificate_link: "https://www.youtube.com/@harshdeepchoudhary",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Full Stack Developer and Wordpress Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experience",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Mynd It Soluitons",
          company_url: "Na",
          logo_path: "myndlogo.png",
          duration: "Nov 2023 - May-2024",
          location: "Hyderabad ,Telegana",
          description:
            "Hands-on experience developing full stack applications using Spring, Spring Boot, and Hibernate frameworks Utilize Spring framework for dependency injection, MVC architecture, and RESTful web services.Implement efficient data persistence and manipulation with Hibernate ORM framework. Collaborate with a team to design and develop scalable, high - performance applications. Gain proficiency in integrating front - end and back - end components using Java-based technologies.",
          color: "#000000",
        },
        {
          title: "Seo Intern",
          company: "Mynd It Soluitons",
          company_url: "Na",
          logo_path: "myndlogo.png",
          duration: "Nov 2023 - May-2024",
          location: "Hyderabad ,Telegana",
          description: `-On-page SEO optimization (content, HTML tags, structure) \n
- Technical SEO (crawlability, indexing, site speed, mobile optimization)
- Keyword research and analysis (using tools like SEMrush, Ahrefs, Google Keyword Planner)
- Content optimization for SEO (keyword integration, readability, search intent)
- Link building strategies (acquiring high-quality backlinks)
- Proficiency with SEO tools (Google Analytics, Google Search Console, Moz, Screaming Frog)
- Implementation of schema markup for rich snippets
- Local SEO optimization (local listings, citations, Google My Business)
- E-commerce SEO (product pages, category pages, conversion optimization)
- Analytics interpretation and reporting for continuous optimization
`,
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer IIT Kanpur- Intern",
          company: "IIT Kanpur",
          company_url: "https://prutor.ai/",
          logo_path: "iitk.png",
          duration: " Feb-2022 - Aug 2022",
          location: "Work From Home",
          description: `Design and develop scalable web applications using front-end and back-end technologies.
 Apply both front-end and back-end skills to contribute to impactful projects.
 Receive mentorship and guidance to enhance technical proficiency and career development.
 Immerse yourself in a dynamic learning environment at one of India's premier institutes of technology
`,
          color: "#000000",
        },

        {
          title: "Digital Marketing Intern ",
          company: "Google",
          company_url:
            "https://skillshop.exceedlms.com/student/collection/654330-digital-marketing?locale=en-GB",
          logo_path: "google_logo.png",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
        {
          title: "Java Full Stack Developer - Intern",
          company: "Analyse Infotech",
          company_url: "https://www.analyzeinfotech.in/",
          logo_path: "analysis_infotech.png",
          duration: "April 2022 - September 2022",
          location: "Work From Office",
          description: `Design and develop scalable web applications using front-end and back-end
technologies. Collaborate with teams to create robust APIs and user interfaces. Java Spring Boot Full Stack Developer proficient in backend development with
Spring Boot. Expertise in API testing and debugging using Postman. Skilled in creating RESTful APIs and database management.
`,
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hhp.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React,TailwindCss,Java,Spring boot,Digital Marketing , Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://www.instagram.com/harshdeeepchoudhary/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: `
    Permanent Address : Nagpur Maharashtra`,
    locality: "Maharashtra",
    country: "India",
    region: "Asia",
    postalCode: "442501",
    streetAddress: "of chanda",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/qj12nC1596pbBwGj6",
  },
  phoneSection: {
    title: "Current Address",
    subtitle: "Hyderabad,Telegana ,But I Can Relocate",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
