import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { createApp } from 'vue'
import App from '/imports/ui/App.vue'
import { Quasar } from 'quasar'
import { router } from '/imports/ui/router' // ✅ Add this line


const app = createApp(App)

app.use(Quasar, {
  config: {
    dark: false, // or true if you want dark mode
  },
})

app.use(router) // ✅ Inject Vue Router
app.mount('#app')