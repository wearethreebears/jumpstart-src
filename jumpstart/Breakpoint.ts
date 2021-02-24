import { KeyValuePair } from '../node_modules/@wearethreebears/jumpstart/interfaces/Common'
import { Breakpoints as BreakpointsInterface} from '../node_modules/@wearethreebears/jumpstart/interfaces/Breakpoint'


export const Breakpoints : BreakpointsInterface = {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px'
}

// EXAMPLE: Set breakpoints to tailwind
//import { Tailwind } from '~/tailwind.config.js'
//export const Breakpoints : BreakpointsInterface = Tailwind.theme.screens


// EXAMPLE: Set breakpoints with alt names
//import { ConfigFile } from '~/example.config.js'

//export const Breakpoints : BreakpointsInterface = {
//    'sm': ConfigFile.breakpoints.small,
//    'md': ConfigFile.breakpoints.medium,
//    'lg': ConfigFile.breakpoints.large,
//    'xl': ConfigFile.breakpoints.extraLarge,
//    '2xl': ConfigFile.breakpoints.extraExtraLarge
//}


export const BreakpointDisplay : KeyValuePair = {
    mobile_only: 'lg:hidden',
    desktop_only: 'hidden lg:flex'
}


