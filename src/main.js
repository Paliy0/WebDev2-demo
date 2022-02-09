import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
    {
        path: '/about', 
        component
    }
]

const router = createRouter ({
    "history": createWebHistory,
    routes
});

createApp(App).mount('#app')
