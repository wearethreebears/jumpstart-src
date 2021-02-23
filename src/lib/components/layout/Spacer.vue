<template>
	<div :class="[spacerClasses]"></div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { SpacerBoilerplate, SpacerSize } from '../../../../jumpstart/Spacer'

export default Vue.extend({
	props: {
		size: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(SpacerSize).includes(value)
			},
		} as PropOptions<keyof typeof SpacerSize>,
	},

	computed: {
		spacerClasses(): string {
			return `${SpacerBoilerplate.class} ${SpacerSize[this.size]}`
		},
	},
})
</script>
