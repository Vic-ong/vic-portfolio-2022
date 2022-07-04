import { computed } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

export const scrollTo = (navId: string) => {
  const el = document.querySelector(`#${navId}`);
  if (el === null) {
    console.error('scroll to element is null');
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export const useFixedTopPanel = (route: RouteLocationNormalizedLoaded) => computed(() => {
  return ['home', 'about', 'unreal', 'animation', 'web'].includes(route.name as string);
});

const projects = [
  {
    id: 'cotn',
    name: 'Catch Of The Night',
    routeName: 'projects/cotn',
  },
  {
    id: 'encanto',
    name: 'Encanto Roof Simulation',
    routeName: 'projects/encanto',
  },
  {
    id: 'terrarium',
    name: 'Terrarium',
    routeName: 'projects/terrarium',
  },
  {
    id: 'wildwood',
    name: 'Wildwood',
    routeName: 'projects/wildwood',
  },
  {
    id: 'departurelounge',
    name: 'Virtual Departure Lounge',
    routeName: 'projects/departurelounge',
  },
  {
    id: 'lyght',
    name: 'Lyght',
    routeName: 'projects/lyght',
  },
];

export const getNextProject = (routeName: string) => {
  const index = projects.findIndex((x) => x.routeName === routeName);
  if (index === -1 || index === projects.length - 1) return projects[0];
  return projects[index + 1];
};
