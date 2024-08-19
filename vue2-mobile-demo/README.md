# all-in-one

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 笔记

项目目录结构：严格参考笔记Vue规范

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。


# 本地数据服务器

```sh
# 全局安装json-server
$ npm install -g json-server 

# 启动
$ json-server --watch ./db/db.json  
```