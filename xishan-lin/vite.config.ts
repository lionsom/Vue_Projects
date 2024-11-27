import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig(({ command, mode }) => {
  //
  console.log('command', command);
  console.log('mode', mode);

  // 加载指定模式的环境变量
  // 可以使用 process.cwd() 获取 envDir，该函数返回 node 的工作目录，一般为项目的根目录
  const env = loadEnv(mode, process.cwd());
  // 访问环境变量
  console.log(env);
  console.log(env.VITE_BASE_PPP);


  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  console.log('process.env', process.env);


  return {
    // 配置服务器路径
    base: '/xishan/',
    // base: process.env.NODE_ENV === "production" ? "/xishan/" : "/",
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // scss 全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          silenceDeprecations: ["legacy-js-api"], // 忽略警告
          additionalData: '@use "./src/assets/styles/constant.scss" as *;',
        },
      },
    },
    envPrefix: 'VITE_BASE_',
    build: {
      outDir: './dist123'
    }
  };
});



/*
export default ({ command, mode }: any) => {
  //
  console.log('command', command);
  console.log('mode', mode);
  console.log('process.env', process.env);

  // 加载指定模式的环境变量
  // 可以使用 process.cwd() 获取 envDir，该函数返回 node 的工作目录，一般为项目的根目录
  const env = loadEnv(mode, process.cwd());
  // 访问环境变量
  console.log(env);
  console.log(env.VITE_BASE_PPP);

  return defineConfig({
    // 配置服务器路径
    base: '/xishan/',
    // base: process.env.NODE_ENV === "production" ? "/xishan/" : "/",
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // scss 全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          silenceDeprecations: ["legacy-js-api"], // 忽略警告
          additionalData: '@use "./src/assets/styles/constant.scss" as *;',
        },
      },
    },
    envPrefix: 'VUE_APP_',
  });
}
  */




/*
// https://vitejs.dev/config/
export default defineConfig({
  // 配置服务器路径
  base: '/xishan/',
  // base: process.env.NODE_ENV === "production" ? "/xishan/" : "/",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // scss 全局变量的配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        silenceDeprecations: ["legacy-js-api"], // 忽略警告
        additionalData: '@use "./src/assets/styles/constant.scss" as *;',
      },
    },
  },
  envPrefix: 'VUE_APP_',
})
 */