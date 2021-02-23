<template>
	<label :for="name" :class="formLabelClasses">
		<div ref="labelWrapper" :class="formLabelWrapperClasses">{{ label }}</div>
		<slot />
	</label>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { FormLabelBoilerplate } from '../../../../jumpstart/Form'

export default Vue.extend({
	props: {
		name: {
			required: true,
			type: String,
		} as PropOptions<string>,

		label: {
			required: true,
			type: String,
		} as PropOptions<string>,
	},

	computed: {
		formLabelClasses(): string {
			return `${FormLabelBoilerplate.class}`
		},

		formLabelWrapperClasses(): string {
			return `${FormLabelBoilerplate.children.labelWrapper.class}`
		},
	},
})
</script>
