import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        ProjectImg: "../assets/Timeline.png",
        Title: "Timeline",
        description: "To display your history, this timeline can be styled either way",
        techStack: "Css",
        liveLink: "https://vigilant-roentgen-6b0c0e.netlify.app/",
        gitHub: "https://github.com/matty-allison/Timeline",

      },
      {
        ProjectImg: "img",
        Title: "title",
        description: "content",
        techStack: "Vue",
        liveLink: "link",
        gitHub: "link",
       }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
