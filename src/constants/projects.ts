import  { img } from './assets';

export const unreal = [
  {
    routeName: 'projects/departurelounge',
    thumbnail: img.unreal.departurelounge.thumbnail,
    title: 'Departure Lounge',
    caption: 'A guided immersive virtual tour of Departure Lounge\'s office and their volumetric capture studio.',
    tags: ['unreal engine', 'maya', 'node.js', 'firebase'],
  },
  {
    routeName: 'projects/terrarium',
    thumbnail: img.unreal.terrarium.thumbnail,
    title: 'Terrarium',
    caption: 'Mobile-based city simulation sandbox that allows player to develop and manage a floating city in a sustainable manner.',
    tags: ['unreal engine'],
  },
  // {
  //   routeName: 'projects/wildwood',
  //   thumbnail: img.unreal.wildwood.thumbnail,
  //   title: 'Wildwood',
  //   caption: 'An action RPG game journeying into the adventure of a skunk forming alliances with the wildlife to rise against a gruelling pack of coyotes.',
  //   tags: ['unreal engine'],
  // },
];

export const animation = [
  {
    routeName: 'projects/encanto',
    thumbnail: img.animation.encanto.thumbnail,
    title: 'Encanto Roof Simulation',
    caption: 'Simulate the roof animation in Disney\'s Encanto movie using position based dynamics.',
    tags: ['position based dynamics', 'web gl'],
  },
  // {
  //   routeName: 'projects/forward-kinematics',
  //   thumbnail: img.animation.forwardKinematics.thumbnail,
  //   title: 'Forward Kinematics',
  //   caption: 'Use forward kinematics and quaternion to parse motion capture data of a person running.',
  //   tags: ['forward kinematics', 'quaternion', 'open gl'],
  // },
  // {
  //   routeName: 'projects/dice-rigidbody',
  //   thumbnail: img.animation.diceRigidBody.thumbnail,
  //   title: 'Rigid Body Simulation',
  //   caption: 'Simulate a rolling dice by using forrward dynamics and collision detection.',
  //   tags: ['physics-based animation', 'open gl'],
  // },
];

export const web = [
  {
    routeName: 'projects/lyght',
    thumbnail: img.web.lyght.thumbnail,
    title: 'Lyght',
    caption: 'An impact investing platform to accelerate the growth in the solar energy sector.',
    tags: ['vue2', 'vuetify', 'firebase', 'cloud function'],
  },
  {
    routeName: 'projects/spotify',
    thumbnail: img.web.spotify.thumbnail,
    title: 'My Spotify Features',
    caption: 'A Spotify dashboard that shows the audio features of your playlists.',
    tags: ['vue3', 'tailwind', 'spotify api'],
  },
  {
    routeName: 'projects/paul',
    thumbnail: img.web.paul.thumbnail,
    title: 'Paul the Octopus',
    caption: 'A team matching app that recommends team pairings based on character compatibilities based on the mission.',
    tags: ['vue3', 'tailwind', 'cosine similarity'],
  },
  {
    routeName: 'projects/kingpin',
    thumbnail: img.web.kingpin.thumbnail,
    title: 'Kingpin.gg',
    caption: 'A skill-based platform for Call of Duty gamers to place bets on personalized challenges.',
    tags: ['vue2', 'flask', 'firebase', 'cloud function'],
  },
];
