import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
 
  // define: {
  //   __DEFINES__: JSON.stringify({ API_URL: "https://example.com" })
  // }
})
