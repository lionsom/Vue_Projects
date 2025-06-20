module.exports = {
  // printWidth: 120, //  单行代码长度
  // tabWidth: 2, //  tab缩进大小
  // useTabs: false, //  使用tab缩进
  // semi: true, //  句尾添加分号
  // singleQuote: true, //  使用单引号
  // quoteProps: 'as-needed', //  仅在需要的时候使用引号
  // jsxSingleQuote: false, //  jsx中使用单引号
  // trailingComma: 'all', // es5是指给对象尾部添加逗号,all是给所有类型的尾部添加逗号,none不加逗号
  // bracketSpacing: true, //  对象字面量的大括号间使用空格
  // jsxBracketSameLine: false, //  多行JSX中的>放在最后一行的末尾
  // arrowParens: 'always', //  箭头函数参数只有一个时是否要有小括号
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: 'preserve',
  // htmlWhitespaceSensitivity: 'css',
  // endOfLine: 'lf',

  // 超过80就换行
  printWidth: 120,
  // tab缩进大小，默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 使用分号，默认true
  semi: false,
  // 使用单引号, 默认false，(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 行尾逗号，默认none，可选（none|es5|all），es5 包括es5中的数组、对象，all 包括函数对象等所有可选
  trailingComma: 'none',
  // 对象中的空格 默认true，true: { foo: bar }，false: {foo: bar}
  bracketSpacing: true,
  // JSX标签闭合位置，在jsx中把'>'是否单独放一行，默认false
  jsxBracketSameLine: false,
  // 箭头函数参数括号 默认avoid 可选（avoid|always），avoid 能省略括号的时候就省略 例如x => x ，always 总是有括号
  arrowParens: 'avoid',
  // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  ignorePath: '.prettierignore',
};
