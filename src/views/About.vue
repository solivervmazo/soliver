<script>
import AboutMe from '../components/about/AboutMe.vue';
import AboutCounter from '../components/about/AboutCounter.vue';
import AboutCerts from '../components/about/AboutCerts.vue';
import feather from 'feather-icons';
import { useMeta } from 'vue-meta'


export default {
	setup () {
		useMeta({
			meta: [
				{property : 'og:type', content : 'article'},
				{ name: 'description', content: 'authors' },
			]
		})
	},
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		AboutCerts,
	},
	data: () => {
		return {
			content: 'aaa',
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
	<metainfo>
	</metainfo>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
		{{ content }}111111
			<AboutMe />
		</div>
		<!-- About counter -->
		<!-- <AboutCounter /> -->

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutCerts/>
		</div>
	</div>
</template>

<style scoped></style>
