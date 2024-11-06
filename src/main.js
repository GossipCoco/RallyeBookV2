import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router/Index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from "./store"
// import io from 'socket.io-client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faEnvelope, faGamepad, faHome, faHouseUser, faUser, faUserAlt, faUserCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/Base/Layout.css'
import './assets/css/Base/Card.css'


library.add(faUser, faHouseUser, faGamepad, faUser, faHome, faEnvelope, faUserCog, faCat, faUserAlt, faUsers, faCat)
const app = createApp(App)

app.use(FontAwesomeIcon)
app.use(Vuex)
app.use(store)
app.use(Router)
app.use(VueAxios, axios)
app.mount('#app')