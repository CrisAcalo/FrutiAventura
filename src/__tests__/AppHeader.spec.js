import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '../components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renderiza el logo y título de FrutiAventura', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('.logo__title').text()).toBe('FrutiAventura')
    expect(wrapper.find('.logo__tagline').text().toUpperCase()).toContain('MINI MERMELADAS')
  })

  it('alterna el estado del menú móvil al presionar el botón hamburguesa', async () => {
    const wrapper = mount(AppHeader)
    const toggleBtn = wrapper.find('.menu-toggle')

    expect(toggleBtn.attributes('aria-expanded')).toBe('false')

    await toggleBtn.trigger('click')
    expect(toggleBtn.attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('.nav-mobile').classes()).toContain('nav-mobile--active')

    await toggleBtn.trigger('click')
    expect(toggleBtn.attributes('aria-expanded')).toBe('false')
  })
})
