module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential', // Vue 2 基础规则
    'eslint:recommended',   // ESLint 推荐规则
    '@vue/typescript/recommended',
    'plugin:prettier/recommended' // 集成 prettier
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // 自定义规则
    quotes: 0,
    semi: 0,
    'comma-dangle': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
