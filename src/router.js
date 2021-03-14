import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Forget from "./views/Forget";
// import Mail from "./views/Mail";
import AppEmailBody from "./components/AppEmailBody";
import NotFound from "./views/NotFound";

const Mail = () => import('./views/Mail');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: Forget, meta: {cantEnter: true} },
    { path: '/dashboard', component: Dashboard, name: 'home' },
    { path: '/mail', component: Mail, children: [
      {path: ':mailId?', component: AppEmailBody, props: true}
    ]},
    {path: '/:nonFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    next({name: 'home'});
  } else {
    next();
  }
});

export default router;