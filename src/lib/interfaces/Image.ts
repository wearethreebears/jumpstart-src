import { BoilerplatePart } from '~/interfaces/Boilerplate'


export interface ImageBoilerplate extends BoilerplatePart {
    class: string,
    children: {
        img: {
            class: string
        }
    }
}

export interface Image {
    alt: string,
    width: number,
    height: number,
    sizes: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
        xxl: string
    }
}