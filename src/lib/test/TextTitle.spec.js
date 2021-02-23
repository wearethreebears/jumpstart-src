import { mount } from '@vue/test-utils'
import TextTitle from '../components/text/TextTitle.vue'
import * as Font from '../../../jumpstart/Font.ts'

let wrapper;

beforeEach(() => {
  wrapper = mount(TextTitle, {
    propsData: {
      level: 1,
    },
    slots: {
      default: 'Hello world'
    }
  });

  Font.FontBoilerplate = { class: 'boilerplate' }
  Font.FontStyle = { default: 'sans' }
  Font.FontSize = { default: 'large' }
  Font.FontColor = { default: 'red' }
  Font.FontMargin = { default: 'large' }
});

describe('Title', () => {

  test('is a Vue instance', () => {

    expect(wrapper.vm).toBeTruthy()
  })
  test('displays corrent element', () => {
    expect(wrapper.find('h1').element.tagName).toBeTruthy();
  });

  test('displays correct text', () => {
    expect(wrapper.text()).toBe('Hello world');
  });

  test('adds correct boilerplate', () => {
    expect(wrapper.classes()).toContain('boilerplate')
  });

  test('adds correct style class', () => {
    expect(wrapper.classes()).toContain('sans')
  });

  test('adds correct size class', () => {
    expect(wrapper.classes()).toContain('large')
  });

  test('adds correct color class', () => {
    expect(wrapper.classes()).toContain('red')
  });

  test('adds correct margin class', () => {
    expect(wrapper.classes()).toContain('large')
  });
})
