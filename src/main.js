import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { createHead } from '@vueuse/head'
// const feather = require('feather-icons');
// feather.replace();

library.add(faKaggle,faXmark)

createApp(App)
	.use(router)
	.use(BackToTop)
	.use(createHead())
	.component('font-awesome-icon', FontAwesomeIcon)
	.provide('imgProjectErrorUrl', new URL(`../src/assets/images/placeholder-project.jpg`, import.meta.url).href)
	.provide('linkClass' , 'text-indigo-600 dark:text-indigo-300')
	.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
