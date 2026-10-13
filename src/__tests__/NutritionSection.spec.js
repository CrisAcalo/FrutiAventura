import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NutritionSection from '../components/NutritionSection.vue'

describe('NutritionSection.vue', () => {
  it('tiene el id nutricion para anclaje correcto de la navegación', () => {
    const wrapper = mount(NutritionSection)
    expect(wrapper.find('#nutricion').exists()).toBe(true)
  })

  it('renderiza las tarjetas del semáforo nutricional oficial', () => {
    const wrapper = mount(NutritionSection)
    expect(wrapper.text()).toContain('AZÚCAR: MEDIO')
    expect(wrapper.text()).toContain('GRASAS: NO CONTIENE')
    expect(wrapper.text()).toContain('SAL: NO CONTIENE')
  })

  it('permite alternar entre los superpoderes de las frutas', async () => {
    const wrapper = mount(NutritionSection)
    const buttons = wrapper.findAll('.superpower-btn')

    expect(buttons.length).toBe(3)

    // Clic en Mango
    await buttons[1].trigger('click')
    expect(wrapper.text()).toContain('Monty el Aventurero')
    expect(wrapper.text()).toContain('¡Súper Visión & Energía Solar!')
  })
})
