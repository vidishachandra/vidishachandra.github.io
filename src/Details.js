//Steps to modify this code
//npm install
// npm install gh-pages --save-dev
// npm run build
// npm run deploy
// git init
//git pull origin main
// git add .
// git commit -m "Updated portfolio details"
// git push origin main



// // Logo images
// import logogradient from "./assets/logo.svg";
// import logo from "./assets/logo2.svg";
// // Profile Image
// import profile from "./assets/profile.jpg";
// // Tech stack images
// import html from "./assets/techstack/html.png";
// import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
// import js from "./assets/techstack/js.png";
// import react from "./assets/techstack/react.png";
// import redux from "./assets/techstack/redux.png";
// import tailwind from "./assets/techstack/tailwind.png";
// import bootstrap from "./assets/techstack/bootstrap.png";
// import vscode from "./assets/techstack/vscode.png";
// import github from "./assets/techstack/github.png";
// import git from "./assets/techstack/git.png";
// import npm from "./assets/techstack/npm.png";
// import postman from "./assets/techstack/postman.png";
// import figma from "./assets/techstack/figma.png";
// // Project Images
// import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
// import projectImage4 from "./assets/projects/project4.jpg";
// import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// // Logos
// export const logos = {
//   logogradient: logogradient,
//   logo: logo,
// };

// // Enter your Personal Details here
// export const personalDetails = {
//   name: "Vidisha Chandra",
//   tagline: "Crafting solutions, one line of code at a time",
//   img: profile,
//   about: `A dedicated software engineer with a passion for solving complex problems and delivering impactful solutions. With hands-on experience in full-stack development and distributed systems, I am pursuing a Master of Science in Information Technology and Management at the University of Texas at Austin. I thrive in dynamic environments, leveraging my technical expertise and collaborative spirit to drive innovation and efficiency.`,
// };

// // Enter your Social Media URLs here
// export const socialMediaUrl = {
//   linkedin: "https://linkedin.com/in/vidisha-chandra",
//   github: "https://github.com/vidishachandra",
//   twitter: "https://twitter.com/",
//   instagram: "https://www.instagram.com/",
// };

// // Enter your Work Experience here
// export const workDetails = [
//   {
//     Position: "Software Developer Intern",
//     Company: "Dover Fueling Solutions",
//     Location: "Austin, USA",
//     Type: "Full Time",
//     Duration: "Dec 2024 - Present",
//   },
//   {
//     Position: "Software Engineer Intern",
//     Company: "Fidelity Investments",
//     Location: "Bangalore, India",
//     Type: "Internship",
//     Duration: "Jan 2024 - Jun 2024",
//   },
//   {
//     Position: "Full Stack Engineer Intern",
//     Company: "Cogvision.ai",
//     Location: "Bangalore, India",
//     Type: "Internship",
//     Duration: "Jun 2022 - Aug 2022",
//   },
// ];

// // Enter your Education Details here
// export const eduDetails = [
//   {
//     Position: "Master of Science, Information Technology & Management",
//     Company: "The University of Texas at Austin",
//     Location: "Austin, USA",
//     Type: "Full Time",
//     Duration: "May 2025",
//   },
//   {
//     Position: "Bachelor of Technology, Computer Science and Engineering",
//     Company: "PES University",
//     Location: "Bangalore, India",
//     Type: "Full Time",
//     Duration: "May 2024",
//   },
// ];

// // Tech Stack and Tools
// export const techStackDetails = {
//   html: html,
//   css: css,
//   js: js,
//   react: react,
//   redux: redux,
//   sass: sass,
//   tailwind: tailwind,
//   bootstrap: bootstrap,
//   vscode: vscode,
//   postman: postman,
//   npm: npm,
//   git: git,
//   github: github,
//   figma: figma,
// };

// // Enter your Project Details here
// export const projectDetails = [
//   {
//     title: "ChoreoVision: Dance Visualization Tool",
//     image: projectImage1,
//     description: `A ReactJS and Flask application to help choreographers visualize dance choreography with suitable backgrounds and costumes, streamlining workflows and reducing manual effort by 30%. Incorporated music genre and emotion analysis for dynamic prompt generation and high-quality image synthesis using the Stability API.`,
//     techstack: "ReactJS, Flask, Cohere API, Stability API",
//     previewLink: "https://github.com/vidishachandra/choreovision",
//     githubLink: "https://github.com/vidishachandra/choreovision",
//   },
//   {
//     title: "Resilient Distributed Data Streaming System",
//     image: projectImage2,
//     description: `Designed a fault-tolerant data streaming system using Python socket programming, simulating a mini-Kafka architecture to optimize data ingestion and distribution. Implemented replication and high availability, handling up to 3 simultaneous broker failures.`,
//     techstack: "Python, Kafka, Zookeeper",
//     previewLink: "https://github.com/vidishachandra/data-streaming",
//     githubLink: "https://github.com/vidishachandra/data-streaming",
//   },
// ];

// // Enter your Contact Details here
// export const contactDetails = {
//   email: "vidishachandra@utexas.edu",
//   phone: "+1 737 781 4503",
// };


// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

// Profile Image
import profile from "./assets/profile.jpg";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import python from "./assets/techstack/python.png";
import java from "./assets/techstack/java.png";
import docker from "./assets/techstack/docker.png";
import spark from "./assets/techstack/spark.png";
import tableau from "./assets/techstack/tableau.png";
import git from "./assets/techstack/git.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Vidisha Chandra",
  tagline: "Data Engineer | Bridging Data and Insight",
  img: profile,
  about: `I am a Master's student in Information Technology & Management at The University of Texas at Austin, with a strong foundation in computer science and a passion for building data-driven solutions. My experience spans developing scalable pipelines, optimizing systems, and creating innovative tools for unstructured and structured data analysis.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://linkedin.com/in/vidishachandra",
  github: "https://github.com/vidishachandra",

};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Data Engineer Intern",
    Company: "Dover Fueling Solutions",
    Location: "Austin, USA",
    Type: "Full Time",
    Duration: "Dec 2024 - Present",
    Description: `Developed a centralized internal search tool to process and vectorize unstructured data, enhancing accessibility and reducing data retrieval time. Built an RAG pipeline for a query interface with a custom LLM, deployed as scalable APIs within Docker containers.`,
  },
  {
    Position: "Data Engineer Intern",
    Company: "Fidelity Investments",
    Location: "Bangalore, India",
    Type: "Internship",
    Duration: "Jan - Jun 2024",
    Description: `Automated corporate action processing with ETL business rules, transforming raw stock data into structured datasets. Innovated a Java module for dynamic data manipulation and optimized system performance for various data standards.`,
  },
  {
    Position: "Data Engineer Intern",
    Company: "Fidelity Investments",
    Location: "Bangalore, India",
    Type: "Internship",
    Duration: "Jun - Aug 2023",
    Description: `Created a semantic search chatbot to deliver contextually relevant responses, improving accuracy and reducing wait times. Built Docker-based FAISS indexing solutions and used sentence-transformers for enhanced search accuracy.`,
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master of Science, Information Technology & Management",
    Company: "The University of Texas at Austin",
    Location: "Austin, USA",
    Type: "Full Time",
    Duration: "May 2025",
    Description: `Relevant Coursework: Advanced Data Mining, Big Data, Unstructured Data Analytics.`,
  },
  {
    Position: "Bachelor of Technology, Computer Science & Engineering",
    Company: "PES University",
    Location: "Bangalore, India",
    Type: "Full Time",
    Duration: "May 2024",
    Description: `Relevant Coursework: Database Systems, Data Structures, Cloud Technologies.`,
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  python: python,
  java: java,
  html: html,
  css: css,
  js: js,
  docker: docker,
  spark: spark,
  tableau: tableau,
  git: git,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Real-Time QoS Analytics for Streaming Video Services",
    description: `Developed a QoS solution leveraging Apache Spark on Databricks for real-time analytics, processing over 5 TB of data daily with Spark Streaming, MLlib, and Delta Lake.`,
    techstack: "Apache Spark, Databricks, AWS Lambda",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "ChoreoVision: Dance Visualization Tool",
    description: `Created a Flask application to help choreographers visualize dance choreography, incorporating MFCC-based genre analysis and image synthesis using Stability API.`,
    techstack: "Flask, Cohere API, Stability API",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Resilient Distributed Data Streaming System",
    description: `Designed a fault-tolerant data streaming system using socket programming, simulating a mini-Kafka architecture for efficient data distribution and high availability.`,
    techstack: "Python, Socket Programming",
    previewLink: "",
    githubLink: "",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vidishachandra@utexas.edu",
  phone: "(737) 781-4503",
};
