<template>
	<form :action="action" :method="method" @submit.prevent="$emit('form-submitted')" :class="formWrapperClasses">
		<slot />
	</form>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { FormWrapperBoilerplate } from '../../../../jumpstart/Form'

export default Vue.extend({
	props: {
		action: {
			required: true,
			type: String,
		} as PropOptions<string>,

		method: {
			required: true,
			type: String,
			default: 'get',
			validator: (value: string) => {
				return ['get', 'post'].includes(value)
			},
		} as PropOptions<string>,
	},

	computed: {
		formWrapperClasses(): string {
			return `${FormWrapperBoilerplate.class}`
		},
	},
})
</script>
