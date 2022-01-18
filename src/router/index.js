import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Experiences from "../views/Experience.vue"
import Skills from "../views/Skills.vue"
import Projects from "../views/Projects.vue"
import Testimonial from "../views/Testimonial.vue"
import Contact from "../views/Contacts.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: Experiences
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    component: Testimonial
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
