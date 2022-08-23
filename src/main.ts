import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MyMixin from '@/mixins/MyMixin'
import MyPlug from '@/plugins/Myplug'
// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mixin(MyMixin)
app.use(MyPlug)

app.mount('#app')
