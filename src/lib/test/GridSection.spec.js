import { mount } from '@vue/test-utils'
import * as GridSectionValidator from '../../../jumpstart/GridSection.ts'
import GridSection from '../components/layout/GridSection.vue'

let wrapper;

describe('Grid section', () => {
    beforeEach(() => {
        wrapper = mount(GridSection, {
            propsData: {
                starts: {
                    default: 2,
                    small: 2,
                    medium: 4,
                    large: 4,
                    extraLarge: 4,
                    extraExtraLarge: 6
                },
                ends: {
                    default: 4,
                    small: 4,
                    medium: 6,
                    large: 6,
                    extraLarge: 6,
                    extraExtraLarge: 8
                }
            }
        });

        GridSectionValidator.GridSectionBoilerplate = { class: 'boilerplate' }
        GridSectionValidator.GridSectionStarts = {
            2: 'col-start-2',
        }
        GridSectionValidator.SmallGridSectionStarts = {
            2: 'sm:col-start-2',
        }
        GridSectionValidator.MediumGridSectionStarts = {
            4: 'md:col-start-4',
        }
        GridSectionValidator.LargeGridSectionStarts = {
            4: 'lg:col-start-4',
        }
        GridSectionValidator.ExtraLargeGridSectionStarts = {
            4: 'xl:col-start-4',
        }
        GridSectionValidator.ExtraExtraLargeGridSectionStarts = {
            6: 'xxl:col-start-6',
        }
        GridSectionValidator.GridSectionEnds = {
            4: 'col-end-4',
        }
        GridSectionValidator.SmallGridSectionEnds = {
            4: 'sm:col-end-4',
        }
        GridSectionValidator.MediumGridSectionEnds = {
            6: 'md:col-end-6',
        }
        GridSectionValidator.LargeGridSectionEnds = {
            6: 'lg:col-end-6',
        }
        GridSectionValidator.ExtraLargeGridSectionEnds = {
            6: 'xl:col-end-6',
        }
        GridSectionValidator.ExtraExtraLargeGridSectionEnds = {
            8: 'xxl:col-end-8',
        }
    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('adds correct start classes', () => {
        expect(wrapper.classes()).toContain('col-start-2')
        expect(wrapper.classes()).toContain('sm:col-start-2')
        expect(wrapper.classes()).toContain('md:col-start-4')
        expect(wrapper.classes()).toContain('lg:col-start-4')
        expect(wrapper.classes()).toContain('xl:col-start-4')
        expect(wrapper.classes()).toContain('xxl:col-start-6')
    });

    test('adds correct end classes', () => {
        expect(wrapper.classes()).toContain('col-end-4')
        expect(wrapper.classes()).toContain('sm:col-end-4')
        expect(wrapper.classes()).toContain('md:col-end-6')
        expect(wrapper.classes()).toContain('lg:col-end-6')
        expect(wrapper.classes()).toContain('xl:col-end-6')
        expect(wrapper.classes()).toContain('xxl:col-end-8')
    });

})