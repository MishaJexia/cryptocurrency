import { HomePage } from "./home/page"
import { NotFoundPage } from "./notfound/page"
import { AboutPage } from "./about/page"
import { FeaturedPage } from "./featured/page"

export const routes = () => [
  {
    path: "/currencies",
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },
  {
    path: "/featured",
    exact: true,
    component: FeaturedPage,
  },
  {
    component: NotFoundPage,
  },
]
