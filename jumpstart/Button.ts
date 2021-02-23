import { KeyValuePairWithDefault } from '~/interfaces/Common'
import { Boilerplate } from '~/interfaces/Boilerplate'
import { ButtonStyle as ButtonStyleInterface } from '~/interfaces/Button'

export const ButtonBoilerplate : Boilerplate = {
    class: ''
}

export const ButtonType : KeyValuePairWithDefault = {
    default: 'ButtonDefault',
    submit: 'ButtonDefault',
    link: 'ButtonLink'
}

export const ButtonColor : KeyValuePairWithDefault = {
    default: 'default'
}

export const ButtonStyle : ButtonStyleInterface = {
    default: {
        boilerplate: '',
        color: {
            default: ''
        }
    }
}

