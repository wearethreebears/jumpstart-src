import { mount } from '@vue/test-utils'
import JumpstartImage from '../components/image/JumpstartImage.vue'
import * as Image from '../../../jumpstart/Image.ts'

const observe = jest.fn();

window.IntersectionObserver = jest.fn(function () {
  this.observe = observe;
});

let wrapper;

beforeEach(() => {
  wrapper = mount(JumpstartImage, {
    propsData: {
      image: {
        alt: 'My image',
        width: 200,
        height: 100,
        sizes: {
          xs: '/images/xs-image.jpg',
          sm: '/images/sm-image.jpg',
          md: '/images/md-image.jpg',
          lg: '/images/lg-image.jpg',
          xl: '/images/xl-image.jpg',
          xxl: '/images/xxl-image.jpg'
        }
      }
    }
  });

  Image.ImageBoilerplate = {
    class: 'boilerplate',
    children: {
      img: {
        class: 'image'
      }
    }
  }
});


describe('Nuxt image', () => {

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('adds correct boilerplate', () => {
    expect(wrapper.classes()).toContain('boilerplate')
  });

  test('adds correct image class', () => {
    expect(wrapper.find('img').classes()).toContain('image')
  });

  test('height is correct', () => {
    expect(wrapper.vm.height).toBe('50%')
  });

  test('extra small image is correct', () => {
    expect(wrapper.findComponent({ ref: 'imageXS' }).attributes()['data-srcset']).toBe('/images/xs-image.jpg')
  })

  test('small image is correct', () => {
    expect(wrapper.findComponent({ ref: 'imageSM' }).attributes()['data-srcset']).toBe('/images/sm-image.jpg')
  })

  test('medium image is correct', () => {
    expect(wrapper.findComponent({ ref: 'imageMD' }).attributes()['data-srcset']).toBe('/images/md-image.jpg')
  })

  test('large image is correct', () => {
    expect(wrapper.findComponent({ ref: 'imageLG' }).attributes()['data-srcset']).toBe('/images/lg-image.jpg')
  })

  test('extra large image is correct', () => {
    expect(wrapper.findComponent({ ref: 'imageXL' }).attributes()['data-srcset']).toBe('/images/xl-image.jpg')
  })

  test('extra extra large image is correct', () => {
    expect(wrapper.findComponent({ ref: 'imageXXL' }).attributes()['data-srcset']).toBe('/images/xxl-image.jpg')
  })

  test('image src is correct', () => {
    expect(wrapper.find('img').attributes()['data-src']).toBe('/images/lg-image.jpg')
  });

  test('load image loads correct extra small image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.findComponent({ ref: 'imageXS' }).attributes()['srcset']).toBe('/images/xs-image.jpg')
  })

  test('load image loads correct small image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.findComponent({ ref: 'imageSM' }).attributes()['srcset']).toBe('/images/sm-image.jpg')
  })

  test('load image loads correct medium image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.findComponent({ ref: 'imageMD' }).attributes()['srcset']).toBe('/images/md-image.jpg')
  })

  test('load image loads correct large image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.findComponent({ ref: 'imageLG' }).attributes()['srcset']).toBe('/images/lg-image.jpg')
  })

  test('load image loads correct extra large image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.findComponent({ ref: 'imageXL' }).attributes()['srcset']).toBe('/images/xl-image.jpg')
  })

  test('load image loads correct extra extra large image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.findComponent({ ref: 'imageXXL' }).attributes()['srcset']).toBe('/images/xxl-image.jpg')
  })

  test('load image loads correct default image', async () => {
    await wrapper.vm.loadImage()
    expect(wrapper.find('img').attributes()['src']).toBe('/images/lg-image.jpg')
  })

})
