import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Samar Niwas Dehradun | Comfortable Stays & Special Discounts'
        }
      }
    })
  ]
})
