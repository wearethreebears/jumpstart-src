<template>
	<div data-component="form-group" :class="formGroupClasses">
		<slot />
		<form-error v-if="error" :error="error" />
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { FormGroupBoilerplate } from '../../../../jumpstart/Form'

import FormError from './FormError.vue'

export default Vue.extend({
	props: {
		error: {
			required: false,
			type: String,
		} as PropOptions<string | undefined>,
	},

	computed: {
		formGroupClasses(): string {
			return `${FormGroupBoilerplate.class}`
		},
	},

	components: {
		FormError,
	},
})
</script>
