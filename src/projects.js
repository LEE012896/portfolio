const projects = [
  {
    id: 1,
    title: "Data Visualization",
    image: process.env.PUBLIC_URL + `/images/DataVisualization.png`,
    altText: "Data Visualization project image",
    description:
      "Developed a desktop application that provides data visualizations to help users develop a fact-based world view, inspired by Hans Rosling and gapminder.org.",
    projectLink:
      "https://github.com/2206-capstone-npm-CEED/Dashboard_data_visualization",
    liveLink: "https://npmceed-data-visualization.onrender.com/",
    tools: ["JavaScript", "React", "Redux", "D3"],
  },

  {
    id: 4,
    title: "Marvel Store",
    image: process.env.PUBLIC_URL + "/images/MarvelStore.png",
    altText: "Marvel Store project image",
    description:
      "Designed an e-commerce web application using public API data and PostgreSQL to seed our database.",
    projectLink: "https://github.com/2206-fsa-gs-saggitarius/Comic-Book-Store",
    tools: ["JavaScript", "React", "Express", "Node", "PostgreSQL"],
  },
];

export default projects;
