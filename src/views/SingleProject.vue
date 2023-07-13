<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import { projects } from '../data/projects.js';
import { useRoute } from 'vue-router'

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			projects: JSON.parse(JSON.stringify(projects)).reverse(),
			project: projects.find(x => x.project == useRoute().params.project),
			singleProjectHeader: {
				singleProjectTitle: 'Project Management UI',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: new URL('../assets/images/ui-project-1.jpg', import.meta.url).href,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: new URL('../assets/images/web-project-2.jpg', import.meta.url).href,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: new URL('../assets/images/mobile-project-2.jpg', import.meta.url).href,
				},
			],
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: new URL('../assets/images/mobile-project-1.jpg', import.meta.url).href,
					},
					{
						id: 2,
						title: 'Web Application',
						img: new URL('../assets/images/web-project-1.jpg', import.meta.url).href,
					},
					{
						id: 3,
						title: 'UI Design',
						img: new URL('../assets/images/ui-project-2.jpg', import.meta.url).href,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: new URL('../assets/images/mobile-project-2.jpg', import.meta.url).href,
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :project="project" />

		<!-- Project gallery -->
		<ProjectGallery v-if="project.src && project.src.images && project.src.images.length > 0" :project="project" />

		<!-- Project information -->
		<ProjectInfo :project="project"/>

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped></style>
