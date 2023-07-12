<script>
import AboutMe from '../components/about/AboutMe.vue';
import AboutCounter from '../components/about/AboutCounter.vue';
import AboutCerts from '../components/about/AboutCerts.vue';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		AboutCerts,
	},
	data: () => {
		return {};
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">
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
