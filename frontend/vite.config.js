import { defineConfig } from "vite"

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: 'pages/main.html',
          login: 'pages/login.html',
          register: 'pages/register.html',
          profile: 'pages/profile.html'
        },
      },
    },
    server: {
        open: '/pages/main.html' // Автоматически открывать index.html
      }
  })