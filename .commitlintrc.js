/*
 * @Description: 文件描述
 * @Author: zhangjie
 * @Date: 2022-02-21 16:11:54
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-21 17:02:13
 * @FilePath: \website\.commitlintrc.js
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        'ui',
        'init',
        "feat", // 新功能（feature）  ex:  git commit -m "feat(): 添加新功能"
        "fix", // 修补bug
        "docs", // 文档（documentation）
        "style", // 格式（不影响代码运行的变动）
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "test", // 增加测试
        "revert", // 回滚
        "config", // 构建过程或辅助工具的变动
        "chore", // 其他改动
        'add',
        'del'
      ],
    ],
    "type-empty": [2, "never"], // <type> 不能为空
    //'type-case': [2, 'always', 'lower-case'],// <type> 格式 小写
   // <subject> 不能为空
   //'subject-empty': [2, 'never'],
   // <subject> 以.为结束标志
   //'subject-full-stop': [2, 'never', '.'],
   // <subject> 格式
   // 可选值
   // 'lower-case' 小写 lowercase
   // 'upper-case' 大写 UPPERCASE
   // 'camel-case' 小驼峰 camelCase
   // 'kebab-case' 短横线 kebab-case
   // 'pascal-case' 大驼峰 PascalCase
   // 'sentence-case' 首字母大写 Sentence case
   // 'snake-case' 下划线 snake_case
   // 'start-case' 所有首字母大写 start-case
   //'subject-case': [2, 'never', []],
   // <body> 以空行开头
   //'body-leading-blank': [1, 'always'],
   // <footer> 以空行开头
   //'footer-leading-blank': [1, 'always']
  },
};
