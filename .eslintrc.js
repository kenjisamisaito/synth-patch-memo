module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    rules:{
        "linebreak-style": 0,
        "object-curly-spacing": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": "off",
        "react/jsx-indent": [2, 4],
        "react/prefer-stateless-function": [1, { "ignorePureComponents": true}],
        "react/jsx-boolean-value": 0,
      }
};