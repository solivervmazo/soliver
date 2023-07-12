<script>
import feather from 'feather-icons';
import { defineAsyncComponent, nextTick, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
	props: ['project'],
    data: () => {
        return {
            componentKey: Math.ceil(Math.random()*1000000),
        }
    },
	components:{
		Md: defineAsyncComponent(() => import(/* @vite-ignore */`../../data/projects/${useRoute().query.dir}/${useRoute().query.md}.md`))
	},
    created() {
        this.$watch(
            () => this.$route.query,
            async () => {
                this.componentKey = Math.ceil(Math.random()*1000000);
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
      )
    },
	mounted() {
        this.$options.components['Md'] = defineAsyncComponent(() => import(/* @vite-ignore */`../../data/projects/${useRoute().query.dir}/${useRoute().query.md}.md`))
		feather.replace();
	},
	updated() {
		feather.replace();
	},
    unmounted()  {
        
    }
};
</script>

<template>
		<div class="w-full sm:w-2/3 text-left mt-10 text-sm sm:mt-0 bg-slate-100 p-1">
			<Md :key="componentKey" />
		</div>
</template>
<style lang="scss">
	@import "highlight.js/scss/a11y-light.scss";
</style>
