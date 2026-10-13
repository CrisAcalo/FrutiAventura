import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrderSimulatorSection from '../components/OrderSimulatorSection.vue'

describe('OrderSimulatorSection.vue', () => {
  it('inicializa con 1 caja, 3 frascos, 120 gramos y precio de 3.50', () => {
    const wrapper = mount(OrderSimulatorSection)

    expect(wrapper.find('[data-testid="qty-display"]').text()).toBe('1')
    expect(wrapper.find('[data-testid="summary-boxes"]').text()).toContain('1 caja')
    expect(wrapper.find('[data-testid="summary-jars"]').text()).toBe('3 frascos (40g c/u)')
    expect(wrapper.find('[data-testid="summary-weight"]').text()).toBe('120 gramos')
    expect(wrapper.find('[data-testid="summary-total"]').text()).toBe('$3.50')
  })

  it('incrementa la cantidad al pulsar el botón +', async () => {
    const wrapper = mount(OrderSimulatorSection)
    const plusBtn = wrapper.findAll('.qty-btn')[1]

    await plusBtn.trigger('click')

    expect(wrapper.find('[data-testid="qty-display"]').text()).toBe('2')
    expect(wrapper.find('[data-testid="summary-boxes"]').text()).toContain('2 cajas')
    expect(wrapper.find('[data-testid="summary-jars"]').text()).toBe('6 frascos (40g c/u)')
    expect(wrapper.find('[data-testid="summary-weight"]').text()).toBe('240 gramos')
    expect(wrapper.find('[data-testid="summary-total"]').text()).toBe('$7.00')
  })

  it('no decrementa por debajo de 1 caja', async () => {
    const wrapper = mount(OrderSimulatorSection)
    const minusBtn = wrapper.findAll('.qty-btn')[0]

    await minusBtn.trigger('click')

    expect(wrapper.find('[data-testid="qty-display"]').text()).toBe('1')
    expect(minusBtn.attributes('disabled')).toBeDefined()
  })

  it('actualiza la cantidad al presionar un preset de 3 cajas', async () => {
    const wrapper = mount(OrderSimulatorSection)
    const preset3 = wrapper.findAll('.preset-btn')[2] // '3 cajas'

    await preset3.trigger('click')

    expect(wrapper.find('[data-testid="qty-display"]').text()).toBe('3')
    expect(wrapper.find('[data-testid="summary-jars"]').text()).toBe('9 frascos (40g c/u)')
    expect(wrapper.find('[data-testid="summary-total"]').text()).toBe('$10.50')
  })

  it('construye la URL de WhatsApp correctamente', async () => {
    const wrapper = mount(OrderSimulatorSection)
    const whatsappLink = wrapper.find('a.btn-whatsapp')

    expect(whatsappLink.attributes('href')).toContain('api.whatsapp.com')
    expect(whatsappLink.attributes('href')).toContain('FrutiAventura')
    expect(whatsappLink.attributes('href')).toContain('Guayaba%2C%20Mango%20y%20Mandarina')
  })
})
