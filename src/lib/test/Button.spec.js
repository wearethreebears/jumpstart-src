import { mount, RouterLinkStub } from '@vue/test-utils'
import JumpstartButton from '../components/button/JumpstartButton.vue'
import * as Button from '../../../jumpstart/Button.ts'
//import NuxtLink from '~/.nuxt/components/nuxt-link.client'
import Vue from 'vue'
Vue.config.ignoredElements = ['nuxt-link']

const observe = jest.fn();

let wrapper;


describe('Nuxt button - Default', () => {
  beforeEach(() => {
    wrapper = mount(JumpstartButton, {
      propsData: {
      },
      slots: {
        default: 'Push me'
      }
    });

    Button.ButtonBoilerplate = { class: 'boilerplate' }
    Button.ButtonStyle = {
      default: {
        boilerplate: 'style-default',
        color: {
          default: 'color-default'
        }
      }
    }
  });


  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  console.log(wrapper)

  
  test('adds correct boilerplate', () => {
    expect(wrapper.classes()).toContain('boilerplate')
  });

  test('has correct style class', () => {
    expect(wrapper.classes()).toContain('color-default')
  })

  test('has correct style color class', () => {
    expect(wrapper.classes()).toContain('color-default')
  })

  test('displays the correct text', () => {
    expect(wrapper.text()).toBe('Push me')
  })

  test('is a button with type button', () => {
    expect(wrapper.find('button').attributes().type).toBe('button')
  })

  test('emits correct event when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted()['button-clicked']).toBeTruthy()
  })
  

})

describe('Nuxt button - Submit', () => {
  beforeEach(() => {
    wrapper = mount(JumpstartButton, {
      propsData: {
        type: 'submit'
      },
      slots: {
        default: 'Push me'
      }
    });

    Button.ButtonBoilerplate = { class: 'boilerplate' }
    Button.ButtonStyle = {
      default: {
        boilerplate: 'style-default',
        color: {
          default: 'color-default'
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

  test('has correct style class', () => {
    expect(wrapper.classes()).toContain('color-default')
  })

  test('has correct style color class', () => {
    expect(wrapper.classes()).toContain('color-default')
  })

  test('displays the correct text', () => {
    expect(wrapper.text()).toBe('Push me')
  })

  test('is a button with type submit', () => {
    expect(wrapper.find('button').attributes().type).toBe('submit')
  })

  test('emits correct event when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted()['button-clicked']).toBeTruthy()
  })



})



describe('Nuxt button - Link internal', () => {
  beforeEach(() => {
    wrapper = mount(JumpstartButton, {
      propsData: {
        type: 'link',
        href: '/go-to-link'
      },
      slots: {
        default: 'Push me'
      },
      stubs: {
        'nuxt-link': true
      }
    });

    Button.ButtonBoilerplate = { class: 'boilerplate' }
    Button.ButtonStyle = {
      default: {
        boilerplate: 'style-default',
        color: {
          default: 'color-default'
        }
      }
    }
  });


  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('loads an internal link', () => {
    expect(wrapper.find('nuxt-link').exists()).toBe(true)
  })

  test('adds correct boilerplate', () => {
    expect(wrapper.find('nuxt-link').classes()).toContain('boilerplate')
  });

  test('has correct style class', () => {
    expect(wrapper.find('nuxt-link').classes()).toContain('color-default')
  })

  test('has correct style color class', () => {
    expect(wrapper.find('nuxt-link').classes()).toContain('color-default')
  })

  test('displays the correct text', () => {
    expect(wrapper.find('nuxt-link').text()).toBe('Push me')
  })

  test('loads an internal link', () => {
    expect(wrapper.find('nuxt-link').attributes().to).toBe('/go-to-link')
  })

  test('has no target', () => {
    expect(wrapper.find('nuxt-link').attributes().target).toBe(undefined)
  })

  test('has no rel', () => {
    expect(wrapper.find('nuxt-link').attributes().rel).toBe(undefined)
  })





})

describe('Nuxt button - Link external', () => {
  beforeEach(() => {
    wrapper = mount(JumpstartButton, {
      propsData: {
        type: 'link',
        href: 'https://www.external.co.uk/go-to-link'
      },
      slots: {
        default: 'Push me'
      }
    });

    Button.ButtonBoilerplate = { class: 'boilerplate' }
    Button.ButtonStyle = {
      default: {
        boilerplate: 'style-default',
        color: {
          default: 'color-default'
        }
      }
    }
  });


  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('loads an internal link', () => {
    expect(wrapper.find('a').exists()).toBe(true)
  })

  test('adds correct boilerplate', () => {
    expect(wrapper.find('a').classes()).toContain('boilerplate')
  });

  test('has correct style class', () => {
    expect(wrapper.find('a').classes()).toContain('color-default')
  })

  test('has correct style color class', () => {
    expect(wrapper.find('a').classes()).toContain('color-default')
  })

  test('displays the correct text', () => {
    expect(wrapper.find('a').text()).toBe('Push me')
  })

  test('loads an internal link', () => {
    expect(wrapper.find('a').attributes().href).toBe('https://www.external.co.uk/go-to-link')
  })

  test('has external rel tag', () => {
    expect(wrapper.find('a').attributes().rel).toBe('nofollow noopener')
  })

  test('opens in a new window', () => {
    expect(wrapper.find('a').attributes().target).toBe('_blank')
  })



})

