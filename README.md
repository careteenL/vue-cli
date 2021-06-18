# @careteen/vue-cli

学习并仿写`vue-cli`


## Usage

TODO:  重构 [@careteen/cli](https://github.com/careteenL/cli)

```shell
npm i @careteen/cli@2.0.0-alpha.1 -g

careteen create myProject
```

## 源码揭秘

- [x] `vue create myProject`
  - 作用： create a new project powered by vue-cli-service
- [ ] `vue add plugin`
  - 作用： 在 vue-cli 项目中安装插件并调用其 generator 
- [ ] `vue invoke plugin`
  - 作用： 在 vue-cli 项目中调用插件的 generator 
- [ ] `vue inspect`
  - 作用： 审查一个 Vue CLI 项目的 webpack config 
- [ ] `vue serve`
  - 作用： 在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器 
- [ ] `vue build`
  - 作用： 在生产环境模式下零配置构建一个 .js 或 .vue 文件

- [ ] `vue-cli-service serve`
  - 作用： 提供了本地开发构建服务

