/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ["bitsy/vue"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["demo"],
      },
    ],
  },
};
