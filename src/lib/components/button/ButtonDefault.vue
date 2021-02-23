<template>
	<button :type="evaluatedType" @click="$emit('button-clicked')"><slot /></button>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ButtonType } from '../../../../jumpstart/Button'

export default Vue.extend({
	props: {
		type: {
			required: true,
			type: String,
			validator: (value: string) => {
				return Object.keys(ButtonType).includes(value)
			},
		} as PropOptions<keyof typeof ButtonType>,
	},

	computed: {
		evaluatedType(): string {
			return this.type == 'default' ? 'button' : (this.type as string)
		},
	},
})
</script>
