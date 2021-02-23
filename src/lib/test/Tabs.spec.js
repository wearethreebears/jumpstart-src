import { mount } from '@vue/test-utils'
import Tabs from '../components/tabs/Tabs.vue'
import * as TabsValidator from '../../../jumpstart/Tab.ts'

let wrapper;


describe('Tabs', () => {
    beforeEach(() => {
        wrapper = mount(Tabs, {
            attachTo: document.body,
            propsData: {
                tabs: [
                    {
                        key: 'login',
                        title: 'Login',
                        component: 'Login',
                    },
                    {
                        key: 'register',
                        title: 'Register',
                        component: 'Register',
                    },
                ],
            },
            stubs: {
                Login: true,
                Register: true
            },
        });

        TabsValidator.TabBoilerplate = {
            class: 'boilerplate',
            children: {
                nav: {
                    class: 'nav-boilerplate',
                    children: {
                        navList: {
                            class: 'nav-list-boilerplate',
                            children: {
                                navListItem: {
                                    class: 'nav-list-item-boilerplate',
                                    children: {
                                        navButton: {
                                            class: 'nav-button-boilerplate'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                panels: {
                    class: 'panels-boilerplate',
                    children: {
                        panel: {
                            class: 'panel-boilerplate'
                        }
                    }
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

    test('nav has correct classes', () => {
        expect(wrapper.findComponent({ ref: 'tabNavigation' }).classes()).toContain('nav-boilerplate')
    })

    test('nav list has correct classes', () => {
        expect(wrapper.findComponent({ ref: 'tabNavigation' }).find('ul').classes()).toContain('nav-list-boilerplate')
    })

    test('nav items have correct classes', () => {
        expect(wrapper.findComponent({ ref: 'tabNavigation' }).find('li').classes()).toContain('nav-list-item-boilerplate')
    })

    test('nav buttons have correct classes', () => {
        expect(wrapper.findComponent({ ref: 'tabNavigation' }).find('button').classes()).toContain('nav-button-boilerplate')
    })

    test('panels wrapper has correct classes', () => {
        expect(wrapper.findComponent({ ref: 'tabPanels' }).classes()).toContain('panels-boilerplate')
    })

    test('panels have correct classes', () => {
        expect(wrapper.findComponent({ ref: 'content' }).classes()).toContain('panel-boilerplate')
    })

    test('button click changes panel', async () => {
        await wrapper.findComponent({ ref: 'tabNavigation' }).findAll('button').at(1).trigger('click')
        expect(wrapper.vm.activeTab).toBe('register')
    })

    test('tab key on button to go to content', async () => {
        await wrapper.findComponent({ ref: 'tabNavigation' }).findAll('button').at(0).trigger('keydown.tab')
        expect(wrapper.findAllComponents({ ref: 'content' }).at(0).attributes()['data-index']).toBe(document.activeElement.getAttribute('data-index'))
    })

    test('key right to go to next button', async () => {
        await wrapper.findComponent({ ref: 'tabNavigation' }).findAll('button').at(0).trigger('keydown.right')
        expect(wrapper.findComponent({ ref: 'tabNavigation' }).findAll('button').at(1).attributes()['data-index']).toBe(document.activeElement.getAttribute('data-index'))
    })

    test('key left to go to previous button', async () => {
        await wrapper.findComponent({ ref: 'tabNavigation' }).findAll('button').at(1).trigger('keydown.left')
        expect(wrapper.findComponent({ ref: 'tabNavigation' }).findAll('button').at(0).attributes()['data-index']).toBe(document.activeElement.getAttribute('data-index'))
    })

})