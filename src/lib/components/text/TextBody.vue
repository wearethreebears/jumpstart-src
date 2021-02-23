<template>
	<div :class="[fontClasses]" v-html="sanitizedText" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import SanitizeHtml from 'sanitize-html'
import { FontBoilerplate, FontStyle, FontSize, FontColor, FontMargin } from '../../../../jumpstart/Font'

export default Vue.extend({
	props: {
		text: {
			required: true,
			type: String,
		} as PropOptions<string>,

		fontStyle: {
			required: false,
			type: String,
			default: 'default',
		} as PropOptions<keyof typeof FontStyle>,

		size: {
			required: false,
			type: String,
			default: 'default',
		} as PropOptions<keyof typeof FontSize>,

		color: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(FontColor).includes(value)
			},
		} as PropOptions<keyof typeof FontColor>,

		margin: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(FontMargin).includes(value)
			},
		} as PropOptions<keyof typeof FontMargin>,
	},

	computed: {
		sanitizedText(): string {
			return SanitizeHtml(this.text)
		},

		fontClasses(): string {
			return `${FontBoilerplate.class} ${FontStyle[this.fontStyle]} ${FontSize[this.size]} ${
				FontColor[this.color]
			} ${FontMargin[this.margin]}`
		},
	},
})
</script>
