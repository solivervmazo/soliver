import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../components/error/NotFound.vue';
import projects from '../data/projects';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Soliver Mazo',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: 'Soliver Mazo',
		}
	},
	{
		path: '/credentials',
		name: 'Credentials',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Credentials.vue'),
		meta: {
			title: 'Soliver Mazo',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
		meta: {
			title: 'Soliver Mazo',
		},
	},
	{
		path: '/projects/:project',
		name: 'SingleProject',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/SingleProject.vue'
			),
		meta: {
			title: 'Soliver Mazo',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Contact.vue'),
		meta: {
			title: 'Soliver Mazo',
		},
	},
	{ 
		path: '/:pathMatch(.*)*', 
		name: 'NotFound', 
		component: NotFound 
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;

router.beforeEach((to, from, next) => {
	// var desc = 'Soliver Mazo, A portfolio showcasing project for data analytics and relevant skills';
	// var pType = to.name == 'Home' ? 'website' : 'article'
	// var href = 'https://solivervmazo.github.io' + to.href;
	// if(to.name == 'SingleProject') {
	// 	const project = projects.find(x => x.project == to.params.project);
	// 	if(project && project.title ) desc = project.title;
	// 	if(project && project.details.tags && project.details.tags.tags) desc = desc + ` - ${ project.details.tags.tags.join(',')}`;
	// }
	// Array.from(
	// 	document.querySelectorAll('[data-vue-router-controlled]')
	// ).map((el) => el.setAttribute('content' , to.meta && to.meta.description ? to.meta.description : desc  ));

	// Array.from(
	// 	document.querySelectorAll('[data-vue-router-controlled-type]')
	// ).map((el) => el.setAttribute('content' , pType  ));

	// Array.from(
	// 	document.querySelectorAll('[data-vue-router-controlled-href]')
	// ).map((el) => el.setAttribute('content' , href  ));
	next();
});
