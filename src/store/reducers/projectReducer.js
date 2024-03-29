const initState = {
  projects: [
    {
      id: 1,
      title: "Blog built in React & Material UI!",
      date: "12 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description:
        "This is a blog that I built using React, Material UI, " +
        "react-router-dom."
    },
    {
      id: 2,
      title: "Built Something else in react!",
      date: "10 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description: "I built something else!"
    },
    {
      id: 3,
      title: "Built Something else in react!",
      date: "10 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description: "I built something else!"
    },
    {
      id: 4,
      title: "Blog built in React & Material UI!",
      date: "12 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description:
        "This is a blog that I built using React, Material UI, " +
        "react-router-dom."
    },
    {
      id: 5,
      title: "Blog built in React & Material UI!",
      date: "12 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description:
        "This is a blog that I built using React, Material UI, " +
        "react-router-dom."
    },
    {
      id: 6,
      title: "Blog built in React & Material UI!",
      date: "12 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description:
        "This is a blog that I built using React, Material UI, " +
        "react-router-dom."
    },
    {
      id: 7,
      title: "Blog built in React & Material UI!",
      date: "12 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description:
        "This is a blog that I built using React, Material UI, " +
        "react-router-dom."
    },
    {
      id: 8,
      title: "Blog built in React & Material UI!",
      date: "12 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description:
        "This is a blog that I built using React, Material UI, " +
        "react-router-dom."
    },
    {
      id: 9,
      title: "Built Something else in react!",
      date: "10 February 2019",
      image: "http://placekitten.com/400/400",
      imageTitle: "Blog Screenshot",
      description: "I built something else!"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log("created project", action.project);
      return state;
    case "ADD_PROJECT_ERROR":
      console.err("add project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
