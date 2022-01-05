import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'kk-mobile',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/components/',
  themeConfig: {
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      rules: [{ mode: 'vw', options: [100, 750] }],
      // // 禁用高清方案
      // rules: [],
      // // 根据不同的设备屏幕宽度断点切换高清方案
      // rules: [
      //   { maxWidth: 375, mode: 'vw', options: [100, 750] },
      //   { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      // ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },

  // more config: https://d.umijs.org/config
});
