import { ImageBoilerplate as ImageBoilerplateInterface } from '../node_modules/@wearethreebears/jumpstart/interfaces/Image'

export const ImageBoilerplate : ImageBoilerplateInterface  = {
    class: 'relative h-0',
    children: {
        img: {
            class: 'absolute top-0 left-0 object-cover w-full overflow-hidden transition-opacity duration-500 ease-in-out opacity-0'
        }
    }
}