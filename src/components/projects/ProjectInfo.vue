<script>
import feather from 'feather-icons';
import strings from '../../mixins/strings.js';
import Md from './ProjectMd.vue'
import { useRoute } from 'vue-router';

export default {
	props: ['project'],
	mixins: [strings],
	inject: ['linkClass'],
	data: () => {
		return {
			hasMd: () => useRoute().query && useRoute().query.dir && useRoute().query.md,
		}
	},
	components:{
		Md,
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/4 text-left">
			<!-- Single project client details -->
			<div v-if="project.details.client" class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ details.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in details.companyInfos"
						:key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							href="#"
							:class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Website and Phone"
							>{{ info.details }}</a
						>
					</li>
				</ul>
			</div>
			<!-- Single project source details -->
			<div v-if="project.details.guided" class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ project.details.guided.heading }}
				</p>
				
				<ul class="leading-loose">
					<li class="font-general-regular text-ternary-dark dark:text-ternary-light">
						<a :href="project.details.guided.courseUrl">
							{{ project.details.guided.courseTitle }}
						</a>
					</li>
					<span
						v-for="key in Object.keys(project.details.guided.details)"
						:key="key"
					>
						<li v-if="project.details.guided.details[key]" class="font-general-regular text-ternary-dark dark:text-ternary-light">
							<span>{{ capitalize(key) }}:&nbsp;</span>
							<a 
								:href="project.details.guided.details[key].url" 
								:class="linkClass"
								target="_blank"
							>
								{{ project.details.guided.details[key].name }}
							</a>
						</li>
					</span>
					
				</ul>
			</div>
			<!-- Single project objectives -->
			<div v-if="project.details.objective" class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ project.details.objective.heading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ project.details.objective.text }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div v-if="project.details.tags" class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ project.details.tags.heading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ project.details.tags.tags.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<!-- <div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ details.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in project.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div> -->
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-3/4 text-left mt-10 text-sm sm:mt-0 bg-slate-100 p-3 rounded-md overflow-auto max-h-screen">
			<Md v-if="hasMd"  :key="Math.ceil(Math.random()*1000000)" />
			<!-- <component :is="componentLoader"/> -->
			<!-- <p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				{{ details.projectDetailsHeading }}
			</p>
			<p
				v-for="projectDetail in project.projectDetails"
				:key="projectDetail.id"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{{ projectDetail.details }}
			</p> -->
		</div>
	</div>
</template>
