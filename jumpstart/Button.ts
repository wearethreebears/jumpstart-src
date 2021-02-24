import { KeyValuePairWithDefault } from '../node_modules/@wearethreebears/jumpstart/interfaces/Common'
import { Boilerplate } from '../node_modules/@wearethreebears/jumpstart/interfaces/Boilerplate'
import { ButtonStyle as ButtonStyleInterface } from '../node_modules/@wearethreebears/jumpstart/interfaces/Button'

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

