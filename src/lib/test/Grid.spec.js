import { mount } from '@vue/test-utils'
import * as GridValidator from '../../../jumpstart/Grid.ts'
import Grid from '../components/layout/Grid.vue'

let wrapper;

describe('Grid', () => {
    beforeEach(() => {
        wrapper = mount(Grid, {
            propsData: {
                gap: 'large',
            }
        });

        GridValidator.GridBoilerplate = { class: 'boilerplate' }
        GridValidator.GridGap = {
            default: 'size-default',
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

    test('adds correct gap class', () => {
        expect(wrapper.classes()).toContain('size-large')
    });
})