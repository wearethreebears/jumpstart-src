<template>
	<div :class="[gridClasses]">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { GridBoilerplate, GridGap } from '../../../../jumpstart/Grid'

export default Vue.extend({
	props: {
		gap: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(GridGap).includes(value)
			},
		} as PropOptions<keyof typeof GridGap>,
	},

	computed: {
		gridClasses(): string {
			return `${GridBoilerplate.class} ${GridGap[this.gap]}`
		},
	},
})
</script>
