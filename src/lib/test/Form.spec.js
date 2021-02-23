import { mount } from '@vue/test-utils'
import * as Form from '../../../jumpstart/Form.ts'
import FormWrapper from '../components/form/FormWrapper.vue'
import FormGroup from '../components/form/FormGroup.vue'
import FormLabel from '../components/form/FormLabel.vue'
import FormError from '../components/form/FormError.vue'
import FormInput from '../components/form/FormInput.vue'


let wrapper;


describe('Form wrapper', () => {
    beforeEach(() => {
        wrapper = mount(FormWrapper, {
            propsData: {
                action: '/endpoint',
                method: 'post'
            }
        });

        Form.FormWrapperBoilerplate = { class: 'boilerplate' }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('has the correct action', () => {
        expect(wrapper.attributes().action).toBe('/endpoint')
    })

    test('emits correct event when submitted', async () => {
        await wrapper.trigger('submit')
        expect(wrapper.emitted()['form-submitted']).toBeTruthy()
    })

})




describe('Form group with error', () => {
    beforeEach(() => {
        wrapper = mount(FormGroup, {
            propsData: {
                error: 'This is an error',
            },

        });

        Form.FormGroupBoilerplate = { class: 'boilerplate' }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('displays an error', () => {
        expect(wrapper.findComponent(FormError).exists()).toBe(true)
    });

})

describe('Form group without error', () => {
    beforeEach(() => {
        wrapper = mount(FormGroup, {
            propsData: {},

        });

        Form.FormGroupBoilerplate = { class: 'boilerplate' }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('does not display an error', () => {
        expect(wrapper.findComponent(FormError).exists()).toBe(false)
    });

})

describe('Form error', () => {
    beforeEach(() => {
        wrapper = mount(FormError, {
            propsData: {
                error: 'This is an error'
            },

        });

        Form.FormErrorBoilerplate = { class: 'boilerplate' }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('does not display an error', () => {
        expect(wrapper.text()).toBe('This is an error')
    });

})

describe('Form error', () => {
    beforeEach(() => {
        wrapper = mount(FormError, {
            propsData: {
                error: 'This is an error'
            },

        });

        Form.FormErrorBoilerplate = { class: 'boilerplate' }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('does not display an error', () => {
        expect(wrapper.text()).toBe('This is an error')
    });

})

describe('Form label', () => {
    beforeEach(() => {
        wrapper = mount(FormLabel, {
            propsData: {
                name: 'the-name',
                label: 'The label'
            },

        });

        Form.FormLabelBoilerplate = {
            class: 'boilerplate',
            children: {
                labelWrapper: {
                    class: 'wrapper-boilerplate'
                }
            }
        }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.classes()).toContain('boilerplate')
    });

    test('adds correct for attribute', () => {
        expect(wrapper.attributes().for).toBe('the-name')
    });

    test('label wrapper has correct class', () => {
        expect(wrapper.findComponent({ ref: 'labelWrapper' }).classes()).toContain('wrapper-boilerplate')
    })

    test('label text reads correctly', () => {
        expect(wrapper.findComponent({ ref: 'labelWrapper' }).text()).toBe('The label')
    })


})


describe('Form input', () => {
    beforeEach(() => {
        wrapper = mount(FormInput, {
            propsData: {
                name: 'the-name',
                label: 'The label',
                type: 'text',
                value: 'a text value',
                namePrefix: 'prefix'
            },

        });

        Form.FormInputBoilerplate = {
            class: 'boilerplate',
        }
    });


    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('adds correct boilerplate', () => {
        expect(wrapper.find('input').classes()).toContain('boilerplate')
    });

    test('adds correct for attributes', () => {
        expect(wrapper.find('input').attributes().name).toBe('the-name')
        expect(wrapper.find('input').attributes().type).toBe('text')
        expect(wrapper.find('input').attributes().id).toBe('prefix-the-name')
    });

    test('emits correct event on keydown', async () => {
        await wrapper.find('input').trigger('keydown')
        expect(wrapper.emitted()['reset-field']).toBeTruthy()
    });

    test('emits correct event on keyup', async () => {
        await wrapper.find('input').trigger('keyup')
        expect(wrapper.emitted()['update:value']).toBeTruthy()
    });

    test('has a label', () => {
        expect(wrapper.findComponent(FormLabel).exists()).toBe(true)
    });

    test('label has correct attributes', () => {
        expect(wrapper.findComponent(FormLabel).attributes().for).toBe('prefix-the-name')
    });

    test('label has correct attributes', () => {
        expect(wrapper.findComponent(FormLabel).findComponent({ ref: 'labelWrapper' }).text()).toBe('The label')
    });




})
