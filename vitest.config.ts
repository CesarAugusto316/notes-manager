import { defineConfig } from 'vitest/config';

// https://vitest.dev/guide/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests-setup.ts',
    reporters: 'verbose',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    // css: true,
  },
});
