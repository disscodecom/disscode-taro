module.exports = {
  'extends': ['taro/react'],
  'rules': {
    'import/no-commonjs': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/no-unused-state': 0,
    "react/jsx-boolean-value": 0, //在JSX中强制布尔属性符号
    'import/first': 0,
    'import/newline-after-import': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/no-string-refs': 0,
    'react/sort-comp': 0,
    'no-unused-vars': [0, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }]
  }
}
