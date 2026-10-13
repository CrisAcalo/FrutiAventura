import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KidsAdventureGame from '../components/KidsAdventureGame.vue'

describe('KidsAdventureGame.vue', () => {
  it('tiene el id aventura-ninos para navegación directa', () => {
    const wrapper = mount(KidsAdventureGame)
    expect(wrapper.find('#aventura-ninos').exists()).toBe(true)
  })

  it('permite cambiar la mermelada interactiva en la tostada', async () => {
    const wrapper = mount(KidsAdventureGame)
    const jamBtns = wrapper.findAll('.jam-btn')

    expect(jamBtns.length).toBe(3)

    // Seleccionar Guayaba Rosa
    await jamBtns[0].trigger('click')
    expect(jamBtns[0].classes()).toContain('jam-btn--active')
  })

  it('permite alternar toppings de frutas divertidas', async () => {
    const wrapper = mount(KidsAdventureGame)
    const toppingBtns = wrapper.findAll('.topping-btn')

    // Click en topping de arándanos
    await toppingBtns[2].trigger('click')
    expect(wrapper.findAll('.placed-topping').length).toBeGreaterThan(0)
  })

  it('activa la celebración del desayuno al hacer clic en el botón', async () => {
    const wrapper = mount(KidsAdventureGame)
    const celebrateBtn = wrapper.find('.btn-celebrate')

    await celebrateBtn.trigger('click')
    expect(wrapper.find('.celebrate-banner').exists()).toBe(true)
    expect(wrapper.text()).toContain('¡Desayuno Mágico Aprobado')
  })
})
