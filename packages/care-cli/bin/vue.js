#!/usr/bin/env node
const program = require("commander");
program
  .version(`care-cli 0.0.0}`) //可以指定版本号
  .usage("<command> [options]"); //可以指定使用方式 命令 参数

// TODO: 丰富命令 `create add page...`
program
  .command("create <app-name>") //添加一个命令 create <表示必选参数>
  .description("create a new project powered by vue-cli-service")
  .action((appName) => {
    require("../lib/create")(appName);
  });

program.parse(process.argv);
