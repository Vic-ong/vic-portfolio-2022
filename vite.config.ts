import { defineConfig, loadEnv, UserConfig, UserConfigExport } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

export default ({ mode }: UserConfig): UserConfigExport => {
  return defineConfig({
    plugins: [vue()],
    define: {
      // add process env
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
        ...loadEnv(mode, process.cwd()),
      },
    },
    resolve: {
      // add "@/" path alias
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  });
};
