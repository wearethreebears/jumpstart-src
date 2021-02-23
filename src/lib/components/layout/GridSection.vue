<template>
	<div :class="[gridSectionClasses]">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { GridSectionBreakpointStarts, GridSectionBreakpointEnds } from '../../interfaces/Grid'

import {
	GridSectionBoilerplate,
	GridSectionStarts,
	SmallGridSectionStarts,
	MediumGridSectionStarts,
	LargeGridSectionStarts,
	ExtraLargeGridSectionStarts,
	ExtraExtraLargeGridSectionStarts,
	GridSectionEnds,
	SmallGridSectionEnds,
	MediumGridSectionEnds,
	LargeGridSectionEnds,
	ExtraLargeGridSectionEnds,
	ExtraExtraLargeGridSectionEnds,
} from '../../../../jumpstart/GridSection'

export default Vue.extend({
	props: {
		starts: {
			required: true,
			type: Object,
		} as PropOptions<GridSectionBreakpointStarts>,

		ends: {
			required: true,
			type: Object,
		} as PropOptions<GridSectionBreakpointEnds>,
	},

	computed: {
		gridSectionStarts(): string[] {
			return [
				GridSectionStarts[this.starts.default],
				this.starts.small ? SmallGridSectionStarts[this.starts.small] : '',
				this.starts.medium ? MediumGridSectionStarts[this.starts.medium] : '',
				this.starts.large ? LargeGridSectionStarts[this.starts.large] : '',
				this.starts.extraLarge ? ExtraLargeGridSectionStarts[this.starts.extraLarge] : '',
				this.starts.extraExtraLarge ? ExtraExtraLargeGridSectionStarts[this.starts.extraExtraLarge] : '',
			]
		},

		gridSectionEnds(): string[] {
			return [
				GridSectionEnds[this.ends.default],
				this.ends.small ? SmallGridSectionEnds[this.ends.small] : '',
				this.ends.medium ? MediumGridSectionEnds[this.ends.medium] : '',
				this.ends.large ? LargeGridSectionEnds[this.ends.large] : '',
				this.ends.extraLarge ? ExtraLargeGridSectionEnds[this.ends.extraLarge] : '',
				this.ends.extraExtraLarge ? ExtraExtraLargeGridSectionEnds[this.ends.extraExtraLarge] : '',
			]
		},

		gridSectionClasses(): string[][] {
			return [[GridSectionBoilerplate.class], this.gridSectionStarts, this.gridSectionEnds]
		},
	},
})
</script>
