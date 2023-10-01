import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/productos': {
      target: 'https://api-alura-geek.onrender.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/productos/, ''),
    },
  },
})
