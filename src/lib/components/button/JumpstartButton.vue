<template>
	<component
		:is="component"
		:href="href"
		:type="type"
		@button-clicked="$emit('button-clicked')"
		:class="buttonClasses"
	>
		<slot />
	</component>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { ButtonBoilerplate, ButtonType, ButtonStyle, ButtonColor } from '../../../../jumpstart/Button'

export default Vue.extend({
	props: {
		type: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(ButtonType).includes(value)
			},
		} as PropOptions<keyof typeof ButtonType>,

		href: {
			required: false,
			type: [String, Boolean],
			default: false,
		} as PropOptions<string | boolean>,

		buttonStyle: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(ButtonStyle).includes(value)
			},
		} as PropOptions<keyof typeof ButtonStyle>,

		color: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(ButtonColor).includes(value)
			},
		} as PropOptions<keyof typeof ButtonColor>,
	},

	components: {
		ButtonDefault: () => import(/* webpackChunkName: "ButtonDefault" */ './ButtonDefault.vue'),
		ButtonLink: () => import(/* webpackChunkName: "ButtonLink" */ './ButtonLink.vue'),
	},

	computed: {
		component(): string {
			return ButtonType[this.type]
		},

		buttonClasses(): string {
			return `${ButtonBoilerplate.class} ${ButtonStyle[this.buttonStyle].boilerplate} ${
				ButtonStyle[this.buttonStyle].color[this.color]
			}`
		},
	},
})
</script>
