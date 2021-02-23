<template>
	<div :class="[gridSectionSpanClasses]">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { GridSectionBreakpointSpans } from '../../interfaces/Grid'

import {
	GridSectionSpansBoilerplate,
	GridSectionSpans,
	SmallGridSectionSpans,
	MediumGridSectionSpans,
	LargeGridSectionSpans,
	ExtraLargeGridSectionSpans,
	ExtraExtraLargeGridSectionSpans,
} from '../../../../jumpstart/GridSectionSpans'

export default Vue.extend({
	props: {
		spans: {
			required: true,
			type: Object,
		} as PropOptions<GridSectionBreakpointSpans>,
	},

	computed: {
		gridSectionSpans(): string[] {
			return [
				this.spans.default ? GridSectionSpans[this.spans.default] : '',
				this.spans.small ? SmallGridSectionSpans[this.spans.small] : '',
				this.spans.medium ? MediumGridSectionSpans[this.spans.medium] : '',
				this.spans.large ? LargeGridSectionSpans[this.spans.large] : '',
				this.spans.extraLarge ? ExtraLargeGridSectionSpans[this.spans.extraLarge] : '',
				this.spans.extraExtraLarge ? ExtraExtraLargeGridSectionSpans[this.spans.extraExtraLarge] : '',
			]
		},

		gridSectionSpanClasses(): string[][] {
			return [[GridSectionSpansBoilerplate.class], this.gridSectionSpans]
		},
	},
})
</script>
