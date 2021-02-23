import { KeyValuePairWithDefault } from '~/interfaces/Common'

export interface ButtonStyle {
    [key: string]: {
        boilerplate: string,
        color: KeyValuePairWithDefault
    }
}