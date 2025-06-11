import { defineConfig } from 'vitest/config';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/v-base/',
  plugins: [react(), nxViteTsPaths()],
  resolve: {
    alias: {
      '@v-site/ui': resolve(__dirname, '../../dist/libs/ui'),
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'html'],
      include: ['**/*.test.ts', '**/*.spec.ts'],
      exclude: ['node_modules', 'dist'],
    },
    deps: {
      inline: ['jsdom'],
    },
  },
});
