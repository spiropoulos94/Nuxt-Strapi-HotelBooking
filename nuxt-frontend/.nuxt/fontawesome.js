import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faHome as freeFasFaHome,
  faArrowRight as freeFasFaArrowRight,
  faEye as freeFasFaEye,
  faEyeSlash as freeFasFaEyeSlash,
  faUsers as freeFasFaUsers,
  faBed as freeFasFaBed,
  faBell as freeFasFaBell,
  faCircle as freeFasFaCircle,
  faPlus as freeFasFaPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaHome,
  freeFasFaArrowRight,
  freeFasFaEye,
  freeFasFaEyeSlash,
  freeFasFaUsers,
  freeFasFaBed,
  freeFasFaBell,
  freeFasFaCircle,
  freeFasFaPlus
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
