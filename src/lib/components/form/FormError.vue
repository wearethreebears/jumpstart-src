<template>
	<span :class="formErrorClasses">{{ error }}</span>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { FormErrorBoilerplate } from '../../../../jumpstart/Form'

export default Vue.extend({
	props: {
		error: {
			required: false,
			type: String,
		} as PropOptions<string | undefined>,
	},

	computed: {
		formErrorClasses(): string {
			return `${FormErrorBoilerplate.class}`
		},
	},
})
</script>
