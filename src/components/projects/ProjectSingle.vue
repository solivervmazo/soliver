<script>
import strings from '../../mixins/strings.js'
export default {
	props: ['project'],
	mixins: [strings]
};
</script>

<template>
	<router-link :to="{ path: `/projects/${project.project}`, query: { dir: project.dir, md : project.src.md } }"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.img" class="rounded-t-xl border-none" />
		</div>
		<div class="text-center px-4 pt-6 pb-4">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<!-- <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
				{{ project.category }}
			</span> -->
		</div>
		<div v-if="project.details && project.details.tags" class="flex px-4 pt-2 pb-4">
			<span class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light">
				{{ project.details.tags.tags.join(', ') }}
			</span>
		</div>
		<div class="text-right px-4 pt-2 pb-4">
			<p class="font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light">
				{{ capitalize(project.type) }}
			</p>
		</div>

	</router-link>
</template>

<style lang="scss" scoped></style>
