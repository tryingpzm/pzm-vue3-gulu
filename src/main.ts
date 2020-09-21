import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from "vue-router"
import './index.css'
import Test from "./components/Test.vue"

let history  = createWebHashHistory();
let router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: Test
        }
    ]
});
let app = createApp(App)

app.use(router)

app.mount('#app')
