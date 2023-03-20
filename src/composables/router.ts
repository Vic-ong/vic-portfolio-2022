import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/AboutDetails.vue';
import Reel from '@/views/Reel.vue';
import Portraits from '@/views/Portraits.vue';

import DepartureLounge from '@/views/projects/DepartureLounge.vue';
import CatchOfTheNight from '@/views/projects/CatchOfTheNight.vue';
import Terrarium from '@/views/projects/Terrarium.vue';
import Encanto from '@/views/projects/Encanto.vue';
import Wildwood from '@/views/projects/Wildwood.vue';
import Lyght from '@/views/projects/Lyght.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'reel',
    path: '/reel',
    component: Reel,
  },
  // {
  //   name: 'portraits',
  //   path: '/portraits',
  //   component: Portraits,
  // },
  // projects
  {
    name: 'projects/cotn',
    path: '/projects/cotn',
    component: CatchOfTheNight,
  },
  {
    name: 'projects/departurelounge',
    path: '/projects/departurelounge',
    component: DepartureLounge,
  },
  {
    name: 'projects/terrarium',
    path: '/projects/terrarium',
    component: Terrarium,
  },
  {
    name: 'projects/wildwood',
    path: '/projects/wildwood',
    component: Wildwood,
  },
  {
    name: 'projects/encanto',
    path: '/projects/encanto',
    component: Encanto,
  },
  {
    name: 'projects/lyght',
    path: '/projects/lyght',
    component: Lyght,
  },
  // 404 redirect
  {
    name: 'unkown-route',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    },
  },
];

export const registerRouter = (app: App): void => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
  });

  app.use(router);
};
