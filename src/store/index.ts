import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const setupPinia = async (app: App<Element>) => {
  app.use(pinia)
}

export { pinia }
