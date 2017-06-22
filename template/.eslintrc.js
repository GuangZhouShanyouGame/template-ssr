// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'arrow-parens': [2, 'as-needed'],   // 箭头函数参数只有一个时，可以不带括号
        'indent': [2, 4, { 'SwitchCase': 1 }],   // 缩进为4个空格，Switch 的 Case 需要一个缩进
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': [2, 'never']     // 函数参数括号前不需要空格
    }
}
