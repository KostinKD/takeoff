import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


import "primevue/resources/themes/lara-light-teal/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('Button', Button)
app.component('Toast', Toast)

app.mount('#app')
