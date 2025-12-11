import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve:{
    alias:{
      '@pages':'/src/pages/',
      '@components':'/src/components/',
      '@components/modules':'/src/components/modules/',
      '@components/templates':'/src/components/templates/',
      '@components/UI':'/src/components/UI/',
      '@layouts':'/src/layouts/',
      '@models':'/src/models/',
      '@providers':'/src/providers/',
      '@services':'/src/services/',
      '@store':'/src/services/',
      '@validation':'/src/validations/'
    }
  }
})
