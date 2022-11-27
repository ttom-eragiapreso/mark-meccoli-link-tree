import { createApp } from 'vue'
import App from './App.vue'
import "@fontsource/rajdhani"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInstagram, faSpotify, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faInstagram, faSoundcloud, faSpotify)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')