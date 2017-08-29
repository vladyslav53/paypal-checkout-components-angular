module.exports = {

    'parser': 'babel-eslint',

    'plugins': [
        'flowtype',
        'compat',
        'unicorn',
        'eslint-comments',
        'promise',
        'security'
    ],

    'env': {
        'browser': true,
        'node': true,
        'amd': false,
        'mocha': true,
        'es6': true
    },

    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },

    'globals': {
        'window': true,
        'document': true,
        'Promise': false,
        'performance': true,
        'assert': true,
        '__TEST__': true,
        '__MINOR_VERSION__': true,
        '__MAJOR_VERSION__': true,
        '__FILE_NAME__': true,
        '__FILE_VERSION__': true,
        '__DEFAULT_LOG_LEVEL__': true,
        '__LEGACY_SUPPORT__': true
    },

    'rules': {
        // possible errors
        'comma-dangle': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': [ 'error', 'functions' ],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'quote-props': [ 'error', 'consistent' ],
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        // best practices
        'accessor-pairs': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'complexity': [ 'error', 20],
        'consistent-return': 'off',
        'curly': [ 'error', 'all' ],
        'default-case': 'error',
        'dot-location': 'off',
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'off',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'off',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-param-reassign': 'off',
        'no-process-env': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        'radix': 'error',
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        'yoda': 'error',

        // strict
        'strict': [ 'error', 'global' ],

        // variables
        'init-declarations': 'off',
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': [ 'error', 'Promise' ],
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'off',
        'no-unused-vars': 'error',
        'no-use-before-define': 'error',

        // node.js
        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'off',
        'no-sync': 'error',

        // stylistic issues
        'array-bracket-spacing': [ 'error', 'always' ],
        'block-spacing': 'error',
        'brace-style': 'off',
        'camelcase': 'off',
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'comma-style': [ 'error', 'last' ],
        'computed-property-spacing': 'off',
        'consistent-this': [ 'error', 'self' ],
        'eol-last': 'error',
        'func-names': [ 'error', 'as-needed' ],
        'func-style': [ 'off', 'declaration' ],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': [ 'error', 4],
        'jsx-quotes': 'off',
        'key-spacing': [ 'error', { 'afterColon': true, 'mode': 'minimum', 'align': 'value' } ],
        'keyword-spacing': 'error',
        'linebreak-style': [ 'error', 'unix' ],
        'lines-around-comment': 'off',
        'max-depth': [ 'error', 4],
        'max-len': [ 'off', 120, 4],
        'max-nested-callbacks': [ 'error', 4],
        'max-params': [1, 5],
        'max-statements': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'off',
        'no-mixed-spaces-and-tabs': [ 'error', true],
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': [ 'error', { 'allowForLoopAfterthoughts': true } ],
        'no-restricted-syntax': 'off',
        'no-spaced-func': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'off',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'one-var': 'off',
        'one-var-declaration-per-line': [ 'error', 'always' ],
        'operator-assignment': [ 'error', 'always' ],
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'quotes': [ 'error', 'single', { 'allowTemplateLiterals': true } ],
        'require-jsdoc': 'off',
        'semi-spacing': 'error',
        'semi': 'error',
        'sort-imports': 'off',
        'sort-vars': 'off',
        'space-before-blocks': [ 'error', 'always' ],
        'space-before-function-paren': 'off',
        'space-in-parens': [ 'error', 'never' ],
        'space-infix-ops': 'error',
        'space-unary-ops': [ 'error', { 'words': true, 'nonwords': false } ],
        'spaced-comment': 'error',
        'wrap-regex': 'error',

        // ES6

        // require braces in arrow function body
        'arrow-body-style': 'off',
        // require parens in arrow function arguments
        'arrow-parens': 'off',
        // require space before/after arrow functions arrow
        'arrow-spacing': 'error',
        // verify super() callings in constructors
        'constructor-super': 'error',
        // enforce the spacing around the * in generator functions
        'generator-star-spacing': 'off',
        // disallow modifying variables of class declarations
        'no-class-assign': 'error',
        'no-confusing-arrow': 'error',
        // disallow modifying variables that are declared using const
        'no-const-assign': 'error',
        // disallow duplicate name in class members
        'no-dupe-class-members': 'error',
        'no-new-symbol': 'error',
        'no-restricted-imports': 'off',
        // disallow to use this/super before super() calling in constructors.
        'no-this-before-super': 'error',
        'no-useless-constructor': 'error',
        // require let or const instead of var
        'no-var': 1,
        // require method and property shorthand syntax for object literals
        'object-shorthand': 1,
        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': 'error',
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 'off',
        'prefer-rest-params': 'off',
        // suggest using Reflect methods where applicable
        'prefer-reflect': 'off',
        // suggest using the spread operator instead of .apply()
        'prefer-spread': 'off',
        // suggest using template literals instead of strings concatenation
        'prefer-template': 'error',
        // disallow generator functions that do not have yield
        'require-yield': 'error',
        'template-curly-spacing': [ 'error', 'always' ],
        'yield-star-spacing': 'off',

        'flowtype/boolean-style': [ 'error', 'boolean' ],
        'flowtype/define-flow-type': 'error',
        'flowtype/delimiter-dangle': [ 'error', 'never' ],
        'flowtype/generic-spacing': [ 'error', 'never' ],
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-weak-types': [ 'error', { 'any': true, 'Object': false, 'Function': false } ],
        'flowtype/object-type-delimiter': [ 'error', 'comma' ],
        'flowtype/require-parameter-type': 'off',
        'flowtype/require-return-type': [ 'error', 'always', { 'annotateUndefined': 'never', 'excludeArrowFunctions': true } ],
        'flowtype/require-valid-file-annotation': 'error',
        'flowtype/semi': [ 'error', 'always' ],
        'flowtype/space-after-type-colon': [ 'error', 'always' ],
        'flowtype/space-before-generic-bracket': [ 'error', 'never' ],
        'flowtype/space-before-type-colon': [ 'error', 'always' ],
        'flowtype/type-id-match': [ 'error', '^([A-Z][a-z0-9]+)+$' ],
        'flowtype/union-intersection-spacing': [ 'error', 'always' ],
        'flowtype/use-flow-type': 'error',
        'flowtype/valid-syntax': 'error',
        'flowtype/no-dupe-keys': 'error',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/require-variable-type': 'off',
        'flowtype/sort-keys': 'off',

        'compat/compat': 'error',

        'unicorn/catch-error-name': [ 'error', { 'name': 'err' } ],
        'unicorn/explicit-length-check': 'off',
        'unicorn/filename-case': [ 'error', { 'case': 'camelCase' } ],
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/throw-new-error': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/prefer-starts-ends-with': 'off',
        'unicorn/prefer-type-error': 'error',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/import-index': 'off',
        'unicorn/new-for-builtins': 'off',
        'unicorn/regex-shorthand': 'off',

        'eslint-comments/disable-enable-pair': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/no-use': 'off',

        'promise/always-return': 'off',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'error',
        'promise/no-nesting': 'off',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/prefer-await-to-callbacks': 'off',
        'promise/prefer-await-to-then': 'off',

        'security/detect-unsafe-regex': 'error',
        'security/detect-non-literal-regexp': 'error',
        'security/detect-non-literal-require': 'error',
        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-eval-with-expression': 'error',
        'security/detect-pseudoRandomBytes': 'error',
        'security/detect-possible-timing-attacks': 'off',
        'security/detect-no-csrf-before-method-override': 'error',
        'security/detect-buffer-noassert': 'error',
        'security/detect-child-process': 'error',
        'security/detect-disable-mustache-escape': 'error',
        'security/detect-object-injection': 'off',
        'security/detect-new-buffer': 'error',

        'array-bracket-newline': 'off',
        'array-element-newline': 'off',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',

        'for-direction': 'off',
        'func-call-spacing': 'off',
        'func-name-matching': 'off',
        'getter-return': 'off',
        'line-comment-position': 'off',
        'max-lines': [ 'error', 500 ],
        'max-statements-per-line': [ 'error', { 'max': 1 } ],
        'multiline-ternary': 'off',
        'no-await-in-loop': 'off',
        'no-buffer-constructor': 'off',
        'no-compare-neg-zero': 'error',
        'no-duplicate-imports': 'error',
        'no-global-assign': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'off',
        'no-prototype-builtins': 'off',
        'no-restricted-properties': 'off',
        'no-return-await': 'off',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'off',
        'object-property-newline': 'off',
        'padding-line-between-statements': 'off',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'error',
        'require-await': 'error',
        'rest-spread-spacing': 'error',
        'semi-style': 'error',
        'sort-keys': 'off',
        'switch-colon-spacing': 'off',
        'symbol-description': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off'
    }

}
