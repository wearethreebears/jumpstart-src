<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { FontBoilerplate, FontStyle, FontSize, FontColor, FontMargin } from '../../../../jumpstart/Font'

export default Vue.extend({
	render(createElement) {
		return createElement(
			`h${this.level}`, // tag name
			{
				attrs: {
					class: `${FontBoilerplate.class} ${FontStyle[this.fontStyle]} ${FontSize[this.size]} ${
						FontColor[this.color]
					} ${FontMargin[this.margin]} ${this.customClass}`,
				},
			},
			this.$slots.default // array of children,
		)
	},

	props: {
		level: {
			required: true,
			type: Number,
			validator: (value: number) => {
				return value > 0 && value < 7
			},
		} as PropOptions<number>,

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

		customClass: {
			required: false,
			type: String,
			default: '',
		} as PropOptions<string>,

		margin: {
			required: false,
			type: String,
			default: 'default',
			validator: (value: string) => {
				return Object.keys(FontMargin).includes(value)
			},
		} as PropOptions<keyof typeof FontMargin>,
	},
})
</script>
