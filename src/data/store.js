import {reactive} from 'vue'

export const store = reactive({
  artist: {
    realName: 'Marco Meccoli',
    stageName: 'Mark Meccoli',
    links: [
      {
        href: 'https://open.spotify.com/track/2OXpec4SxgoDtp0gXEUlwU?si=fca1e33fc32149cb',
        name: 'Spotify',
        faIcon: 'fa-brands fa-spotify'
      },
      {
        href: 'https://soundcloud.com/markmeccoli/sets/portfolio-mark-mc-medd3e?si=f8dc8586dcbd462ea50312b8432099d2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        name: 'SoundCloud',
        faIcon: 'fa-brands fa-soundcloud'
      },
      {
        href: 'https://open.spotify.com/track/2KJKzyn5p8Nt94xVEQaCE8?si=878e227534e64055',
        name: 'Latest Release',
        faIcon: 'fa-brands fa-spotify'
      }
    ],
    logoBlackSrc: '../assets/MM-assets/Marchio_Mark_Meccoli_nero_PICCOLO.png',
    logoWhiteSrc: './src/assets/MM-assets/Marchio Mark Meccoli bianco_Tavola disegno 1.png'
  },
  newLink: {
    href: '',
    name: ''
  },
  showIntranet: false
})