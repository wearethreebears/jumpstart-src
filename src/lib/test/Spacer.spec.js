import { mount } from '@vue/test-utils'
import * as SpacerValidator from '../../../jumpstart/Spacer.ts'
import Spacer from '../components/layout/Spacer.vue'

let wrapper;

describe('Spacer', () => {
    beforeEach(() => {
        wrapper = mount(Spacer, {
            propsData: {
                size: 'large',
            }
        });

        SpacerValidator.SpacerBoilerplate = { class: 'boilerplate' }
        SpacerValidator.SpacerSize = {
            default: 'default',
            small: 'size-small',
            medium: 'size-medium',
            large: 'size-large'
        }
    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('adds correct size class', () => {
        expect(wrapper.classes()).toContain('size-large')
    });
})