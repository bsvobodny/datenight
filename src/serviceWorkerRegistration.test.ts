import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest'
import { registerSW } from './serviceWorkerRegistration'

describe('registerSW', () => {
  const originalNavigator = global.navigator
  const originalAddEventListener = window.addEventListener

  beforeEach(() => {
    // Mock navigator.serviceWorker
    ;(global.navigator as Partial<Navigator>) = {
      serviceWorker: {
        ...global.navigator.serviceWorker,
        register: vi.fn(() => Promise.resolve({} as ServiceWorkerRegistration)),
      },
    }
    // Mock window.addEventListener
    window.addEventListener = vi.fn((event, cb) => {
      if (event === 'load') cb()
    })
    // Mock console.log
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    global.navigator = originalNavigator
    window.addEventListener = originalAddEventListener
    vi.restoreAllMocks()
  })

  it('should register service worker and log success', async () => {
    await registerSW()
    expect(window.addEventListener).toHaveBeenCalledWith(
      'load',
      expect.any(Function)
    )
    expect(navigator.serviceWorker.register).toHaveBeenCalledWith('/sw.js')
    expect(console.log).toHaveBeenCalledWith(
      'SW enregistré: ',
      {} as ServiceWorkerRegistration
    )
  })

  it('should do nothing if serviceWorker is not in navigator', () => {
    ;(global.navigator as Partial<Navigator>) = {}
    registerSW()
    expect(window.addEventListener).not.toHaveBeenCalled()
  })
})
