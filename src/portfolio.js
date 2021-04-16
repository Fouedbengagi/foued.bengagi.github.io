/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Foued Bengagi",
  title: "Hi all, I'm Foued",
  subTitle: emoji(
    "A passionate Full Stack Software SpringBoot/Angular Developer 🚀 having an experience of building Web  applications with Spring boot / Angular / Postgres / Elasticsearch and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vGHm4sbElJ6gBdTsf2SNIcfY09ZbTJH1/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Fouedbengagi",
  linkedin: "www.linkedin.com/in/fouedbengagi",
  gmail: "fouedbengagi@gmail.com",
  facebook: "https://www.facebook.com/foued.bengagi",
  medium: "https://fouedbengagi.medium.com",
  stackoverflow: "https://stackoverflow.com/users/11872954/bengagi-foued",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Web is my passion and I develop entire solutions, from idea to production, always looking to use the most appropriate Technology for the project."
    ),
    emoji(
      "⚡ Develop highly perfermant and clean code"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."),
    emoji(
      "⚡ face many technical challenges like code-refactoring and load test."
    ),
    emoji(
      "⚡ I have a strong focus on Code Quality and Engineering best practices like TDD, CI / CD and Automation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ISAMM University",
      logo: require("./assets/images/isamm.png"),
      subHeader: "Engineer’s Degree inComputer Science",
      duration: "September 2016 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "ISAMM University",
      logo: require("./assets/images/isamm.png"),
      subHeader: "B.S.inComputerScience",
      duration: "September 2013 - April 2016",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JAVA 8", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ELk stack",
      progressPercentage: "80%"
    },
    {
      Stack: "APACHE CAMEL",
      progressPercentage: "90%"
    },
    {
      Stack: "ANGULAR",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Spring Boot/Angular Developer",
      company: "Talan Tunisia",
      companylogo: require("./assets/images/logo-talan.png"),
      date: "June 2019 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Fullstack Spring Boot/Angular Developer",
      company: "SAGEMCOM",
      companylogo: require("./assets/images/sagem.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/siconia.png"),
      projectName: "SICONIA Smart metering Solution",
      projectDesc: "Sagemcom's software suite: Siconia® is a unified Smart Grid platform designed to support the Utilities business process for multi-energy smart metering (electricity, gas, water, heat) and distribution network supervision.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sagemcom.com/V02/fr/smart-city/smart-meter/#:~:text=La%20suite%20logicielle%20de%20Sagemcom,supervision%20du%20r%C3%A9seau%20de%20distribution."
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MTA98-361 : Software Development Fundamentals",
      subtitle:
        "",
      image: require("./assets/images/m-certification.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "MTA98-388 : Programming Using Java",
      subtitle: 
        "",
      image: require("./assets/images/m-certification.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },

    {
      title: "MTA98-364 : Database Administration Fundamentals",
      subtitle: "",
      image: require("./assets/images/m-certification.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "3 rd place hackathon By TAYARA",
      subtitle: "",
      image: require("./assets/images/comp1.jpg"),
      footerLink: []
    },
    {
      title: "second place hackathon IWATCH",
      subtitle: "",
      image: require("./assets/images/comp2.jpg"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write sometimes on medium to teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://fouedbengagi.medium.com/an-elasticsearch-tutorial-getting-started-4cfb0958fc22",
      title: "Elasticsearch for beginners",
      description:
        "Do you want to start using elasticsearch but you hisitate where to start ? use my link to get a first view of elasticsearch"
    },
    {
      url: "https://fouedbengagi.medium.com/elasticsearch-java-high-level-rest-client-6829ae848e43",
      title: "Elasticsearch Java High Level REST Client?",
      description:
        "what is ES java high level rest client ?."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+21625487260",
  email_address: "fouedbengagi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
