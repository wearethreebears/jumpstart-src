<template>
	<div :class="wrapperClasses" :style="`padding-top: ${height}`">
		<picture>
			<source :data-srcset="image.sizes.xs" ref="imageXS" />
			<source :data-srcset="image.sizes.sm" :media="`(min-width: ${breakpoints.sm})`" ref="imageSM" />
			<source :data-srcset="image.sizes.md" :media="`(min-width: ${breakpoints.md})`" ref="imageMD" />
			<source :data-srcset="image.sizes.lg" :media="`(min-width: ${breakpoints.lg})`" ref="imageLG" />
			<source :data-srcset="image.sizes.xl" :media="`(min-width: ${breakpoints.xl})`" ref="imageXL" />
			<source :data-srcset="image.sizes.xxl" :media="`(min-width: ${breakpoints.xxl})`" ref="imageXXL" />
			<img
				:data-src="image.sizes.lg"
				:alt="image.alt"
				:height="image.height"
				:width="image.width"
				:class="imageClasses"
				ref="imageDefault"
			/>
		</picture>
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { Image } from '../../interfaces/Image'
import { ImageBoilerplate } from '../../../../jumpstart/Image'

import { Breakpoints } from '../../../../jumpstart/Breakpoint'

export default Vue.extend({
	props: {
		image: {
			required: true,
			type: Object,
		} as PropOptions<Image>,
	},

	data() {
		return {
			observer: {} as IntersectionObserver,
			breakpoints: Breakpoints,
		}
	},

	computed: {
		height(): string {
			let percentage = (this.image.height / this.image.width) * 100
			return `${percentage}%`
		},

		wrapperClasses(): string {
			return `${ImageBoilerplate.class}`
		},

		imageClasses(): string {
			return `${ImageBoilerplate.children.img.class}`
		},
	},

	methods: {
		loadImage() : void {
			const elXS = this.$refs.imageXS as HTMLElement,
				elSM = this.$refs.imageSM as HTMLElement,
				elMD = this.$refs.imageMD as HTMLElement,
				elLG = this.$refs.imageLG as HTMLElement,
				elXL = this.$refs.imageXL as HTMLElement,
				elXXL = this.$refs.imageXXL as HTMLElement,
				elDefault = this.$refs.imageDefault as HTMLElement

				const srcXS = elXS.getAttribute('data-srcset') as string,
				srcSM = elSM.getAttribute('data-srcset') as string,
				srcMD = elMD.getAttribute('data-srcset') as string,
				srcLG = elLG.getAttribute('data-srcset') as string,
				srcXL = elXL.getAttribute('data-srcset') as string,
				srcXXL = elXXL.getAttribute('data-srcset') as string,
				srcDefault = elDefault.getAttribute('data-src') as string

				elXS.setAttribute('srcset', srcXS)
				elSM.setAttribute('srcset', srcSM)
				elMD.setAttribute('srcset', srcMD)
				elLG.setAttribute('srcset', srcLG)
				elXL.setAttribute('srcset', srcXL)
				elXXL.setAttribute('srcset', srcXXL)
				elDefault.setAttribute('src', srcDefault)
				elDefault.addEventListener('load', () => {
					elDefault.classList.remove('opacity-0')
					elDefault.classList.add('opacity-1')
					return elDefault.setAttribute('data-lazy', 'loaded')
				})
		}
	},

	mounted() {
		this.observer = new IntersectionObserver((images: IntersectionObserverEntry[]): void => {
			let { isIntersecting } = images[0]


			if (isIntersecting) {
				this.loadImage()
			}
		})

		this.observer.observe(this.$el)
	},

	destroyed() {
		this.observer.disconnect()
	},
})
</script>
