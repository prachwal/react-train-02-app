import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js', '.eslintignore', 'postcss.config.js', 'coverage']
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: ['./tsconfig.app.json', './tsconfig.node.json']
      }
    },
    settings: { 
      react: { 
        version: 'detect'
      } 
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      // React recommended rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-is-mounted': 'error',
      'react/react-in-jsx-scope': 'error',
      'react/require-render-return': 'error',
      'react/style-prop-object': 'error',
      
      // JSX runtime rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      
      ...reactHooks.configs.recommended.rules,
      
      // React specific rules for React 19
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/display-name': 'error',
      'react/no-danger': 'warn',
      'react/no-unstable-nested-components': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      
      // Modern JavaScript/TypeScript rules
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'no-var': 'error',
      
      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Configuration for TypeScript configuration files
    files: ['**/*.config.{js,ts,mjs}', '**/*.setup.{js,ts,mjs}'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]