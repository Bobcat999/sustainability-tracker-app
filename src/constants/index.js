import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Challenges from "../pages/Challenges";
import Dashboard from "../pages/Dashboard";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const pages = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Challenges",
    path: "/challenges",
    component: Challenges,
  },
  {
    name: "Achievements",
    path: "/achievements",
    component: Achievements,
  },
  {
    name: "Feedback",
    path: "/feedback",
    component: Feedback,
  },
  {
    name: "Settings",
    path: "/settings",
    component: Settings,
  },
];

export { pages };
