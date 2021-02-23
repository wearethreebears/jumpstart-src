<template>
	<nuxt-link :to="href" v-if="isInternal" ref="internalLink"><slot /></nuxt-link>
	<a v-else :href="href" :target="target" :rel="rel" ref="externalLink"><slot /></a>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
	props: {
		href: {
			required: true,
			type: String,
		} as PropOptions<string>,
	},

	computed: {
		isInternal(): boolean {
			return this.href.startsWith('/') ? true : false
		},

		target(): string | boolean {
			return this.isInternal ? false : '_blank'
		},

		rel(): string | boolean {
			return this.isInternal ? false : 'nofollow noopener'
		},
	},
})
</script>
