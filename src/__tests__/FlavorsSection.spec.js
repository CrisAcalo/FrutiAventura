import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FlavorsSection from '../components/FlavorsSection.vue'

describe('FlavorsSection.vue', () => {
  it('renderiza las 3 pestañas de sabores: Guayaba, Mango y Mandarina', () => {
    const wrapper = mount(FlavorsSection)
    const tabs = wrapper.findAll('.flavor-tab')

    expect(tabs.length).toBe(3)
    expect(tabs[0].text()).toContain('Guayaba')
    expect(tabs[1].text()).toContain('Mango & Toronjil')
    expect(tabs[2].text()).toContain('Mandarina')
  })

  it('cambia el sabor activo al hacer clic en Guayaba', async () => {
    const wrapper = mount(FlavorsSection)
    const guayabaTab = wrapper.findAll('.flavor-tab')[0]

    await guayabaTab.trigger('click')

    expect(wrapper.find('.flavor-card__title').text()).toContain('Aroma Intenso')
    expect(guayabaTab.classes()).toContain('flavor-tab--active')
  })

  it('emite el evento openIngredientsModal al hacer clic en Ver Ficha', async () => {
    const wrapper = mount(FlavorsSection)
    const viewButton = wrapper.find('button.btn-flavor-action')

    await viewButton.trigger('click')

    expect(wrapper.emitted('openIngredientsModal')).toBeTruthy()
    expect(wrapper.emitted('openIngredientsModal')[0][0]).toHaveProperty('id')
  })
})
