import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory, createRouter} from "vue-router"
import './index.css'
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"

let history  = createWebHistory();
let router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/doc",
            component: Doc
        }
    ]
});
let app = createApp(App)

app.use(router)

app.mount('#app')
