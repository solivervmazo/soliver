<script>
import urls from '../../mixins/urls.js';

export default {
	props: ['project'],
	mixins: [urls]
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="img in project.src.images"
			:key="img"
		>
			<img
				:src="projectUrl(`${project.dir}/${project.project}-img-${img}`)"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				:alt="`${project.dir}/${project.project}-img-${img}`"
			/>
		</div>
	</div>
</template>
