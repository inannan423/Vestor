import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
let __dirname = resolve();
export default defineConfig({
  plugins: [react()],
  // src/index.js 是要导出的包
  build: {
    // lib  的 rollup 配置
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'Vestor',
    },
  },
});
