import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  daisyui:{
    themes:["light","dark",
      "cupcake","retro",
      "bumblebee","emerald",
      "corporate","garden",
      "halloween", "forest","synthwave","cyberpunk",
    "aqua","lofi","pastel","valentine",  "fantasy"
  ,"dim","winter","coffee","night","lemonade","silk","abyss","sunset","nord","acid","business","wirefarme","black","luxury",
"autumn","cmyk","dracula" ,"caramel"]
  }
})
