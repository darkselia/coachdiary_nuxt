// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt({
  plugins: { '@stylistic': stylistic },
  rules: {

    // @stylistic
    '@stylistic/array-bracket-newline': [ 'warn', { multiline: true, minItems: 3 } ],
    '@stylistic/array-bracket-spacing': [
      'warn',
      'always',
      { singleValue: false },
    ],
    '@stylistic/array-element-newline': [
      'warn',
      {
        multiline: true, consistent: true, minItems: 3,
      },
    ],
    '@stylistic/arrow-parens': [ 'warn', 'as-needed' ],
    '@stylistic/arrow-spacing': [ 'warn', { before: true, after: true } ],
    '@stylistic/block-spacing': [ 'warn', 'always' ],
    '@stylistic/brace-style': [
      'warn',
      '1tbs',
      { allowSingleLine: true },
    ],
    '@stylistic/comma-dangle': [ 'warn', 'always-multiline' ],
    '@stylistic/comma-spacing': [ 'warn', { before: false, after: true } ],
    '@stylistic/comma-style': [ 'warn', 'last' ],
    '@stylistic/computed-property-spacing': [ 'warn', 'never' ],
    '@stylistic/curly-newline': [ 'warn', { multiline: true, minElements: 1 } ],
    '@stylistic/dot-location': [ 'warn', 'property' ],
    '@stylistic/eol-last': [ 'warn', 'always' ],
    '@stylistic/function-call-argument-newline': [ 'warn', 'consistent' ],
    '@stylistic/function-call-spacing': [ 'warn', 'never' ],
    '@stylistic/function-paren-newline': [ 'warn', 'multiline' ],
    '@stylistic/generator-star-spacing': [ 'warn', { before: false, after: true } ],
    '@stylistic/implicit-arrow-linebreak': [ 'warn', 'beside' ],
    '@stylistic/indent': [ 'warn', 2 ],
    '@stylistic/indent-binary-ops': [ 'warn', 4 ],
    '@stylistic/key-spacing': [ 'warn', { beforeColon: false, afterColon: true } ],
    '@stylistic/keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/linebreak-style': [ 'warn', 'unix' ],
    '@stylistic/lines-around-comment': [
      'warn',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
      },
    ],
    '@stylistic/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@stylistic/max-len': [ 'warn', { code: 140 } ],
    '@stylistic/max-statements-per-line': [ 'warn', { max: 1 } ],
    '@stylistic/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@stylistic/multiline-comment-style': [ 'warn', 'starred-block' ],
    '@stylistic/multiline-ternary': [ 'warn', 'always-multiline' ],
    '@stylistic/new-parens': [ 'warn', 'always' ],
    '@stylistic/newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 2 } ],
    '@stylistic/no-confusing-arrow': [ 'warn', { allowParens: true, onlyOneSimpleParam: true } ],
    '@stylistic/no-extra-parens': [
      'warn',
      'all',
      {
        nestedBinaryExpressions: false,
        ignoreJSX: 'multi-line',
      },
    ],
    '@stylistic/no-extra-semi': ['warn'],
    '@stylistic/no-floating-decimal': ['off'],
    '@stylistic/no-mixed-operators': ['warn'],
    '@stylistic/no-mixed-spaces-and-tabs': ['warn'],
    '@stylistic/no-multi-spaces': ['warn'],
    '@stylistic/no-multiple-empty-lines': [
      'warn',
      {
        max: 2, maxEOF: 1, maxBOF: 0,
      },
    ],
    '@stylistic/no-tabs': ['warn'],
    '@stylistic/no-trailing-spaces': ['warn'],
    '@stylistic/no-whitespace-before-property': ['warn'],
    '@stylistic/nonblock-statement-body-position': ['off'],
    '@stylistic/object-curly-newline': ['off'],
    '@stylistic/object-curly-spacing': [ 'warn', 'always' ],
    '@stylistic/object-property-newline': [ 'warn', { allowAllPropertiesOnSameLine: true } ],
    '@stylistic/one-var-declaration-per-line': [ 'warn', 'initializations' ],
    '@stylistic/operator-linebreak': [
      'warn',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    '@stylistic/padded-blocks': [ 'warn', 'never' ],
    '@stylistic/quote-props': [ 'warn', 'as-needed' ],
    '@stylistic/quotes': [
      'warn',
      'single',
      { avoidEscape: true },
    ],
    '@stylistic/rest-spread-spacing': [ 'warn', 'never' ],
    '@stylistic/semi': [ 'warn', 'always' ],
    '@stylistic/semi-spacing': [ 'warn', { before: false, after: true } ],
    '@stylistic/semi-style': [ 'warn', 'last' ],
    '@stylistic/space-before-blocks': [ 'warn', 'always' ],
    '@stylistic/space-before-function-paren': [ 'warn', 'never' ],
    '@stylistic/space-in-parens': [ 'warn', 'never' ],
    '@stylistic/space-infix-ops': ['warn'],
    '@stylistic/space-unary-ops': [ 'warn', { words: true, nonwords: false } ],
    '@stylistic/spaced-comment': [ 'warn', 'always' ],
    '@stylistic/switch-colon-spacing': [ 'warn', { after: true, before: false } ],
    '@stylistic/template-curly-spacing': [ 'warn', 'never' ],
    '@stylistic/template-tag-spacing': [ 'warn', 'never' ],
    '@stylistic/type-annotation-spacing': [ 'warn', { before: false, after: true } ],
    '@stylistic/type-generic-spacing': ['warn'],
    '@stylistic/type-named-tuple-spacing': ['warn'],
    '@stylistic/wrap-iife': [ 'warn', 'inside' ],
    '@stylistic/wrap-regex': ['off'],

    // vue
    'vue/require-default-prop': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: { max: 4 },
        multiline: { max: 1 },
      },
    ],
    'vue/html-indent': [
      'error',
      2, // или 4 для 4 пробелов
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'ATTR_DYNAMIC',
          'GLOBAL',
          [ 'ATTR_STATIC', 'ATTR_SHORTHAND_BOOL' ],
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    'vue/html-self-closing': 'off',
  },
});
