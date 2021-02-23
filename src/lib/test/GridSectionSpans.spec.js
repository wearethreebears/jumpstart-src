import { mount } from '@vue/test-utils'
import * as GridSectionSpansValidator from '../../../jumpstart/GridSectionSpans.ts'
import GridSectionSpan from '../components/layout/GridSectionSpan.vue'

let wrapper;

describe('Grid section', () => {
    beforeEach(() => {
        wrapper = mount(GridSectionSpan, {
            propsData: {
                spans: {
                    default: 2,
                    small: 4,
                    medium: 6,
                    large: 8,
                    extraLarge: 10,
                    extraExtraLarge: 12
                }
            }
        });

        GridSectionSpansValidator.GridSectionSpansBoilerplate = { class: 'boilerplate' }
        GridSectionSpansValidator.GridSectionSpans = {
            2: 'col-span-2',
        }
        GridSectionSpansValidator.SmallGridSectionSpans = {
            4: 'sm:col-span-4',
        }
        GridSectionSpansValidator.MediumGridSectionSpans = {
            6: 'md:col-span-6',
        }
        GridSectionSpansValidator.LargeGridSectionSpans = {
            8: 'lg:col-span-8',
        }
        GridSectionSpansValidator.ExtraLargeGridSectionSpans = {
            10: 'xl:col-span-10',
        }
        GridSectionSpansValidator.ExtraExtraLargeGridSectionSpans = {
            12: 'xxl:col-span-12',
        }

    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('adds correct classes', () => {
        expect(wrapper.classes()).toContain('col-span-2')
        expect(wrapper.classes()).toContain('sm:col-span-4')
        expect(wrapper.classes()).toContain('md:col-span-6')
        expect(wrapper.classes()).toContain('lg:col-span-8')
        expect(wrapper.classes()).toContain('xl:col-span-10')
        expect(wrapper.classes()).toContain('xxl:col-span-12')
    });

})