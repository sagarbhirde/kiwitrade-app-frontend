#!/bin/bash

# Exit on error
set -e

echo "⚙️ Creating configuration files..."

# Create TypeScript configuration
echo '{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}' > tsconfig.json

# Create Vite configuration
echo 'import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});' > vite.config.ts

# Create ESLint configuration
echo '{
  "root": true,
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"]
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}' > .eslintrc.json

# Create Prettier configuration
echo '{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "bracketSameLine": false
}' > .prettierrc

# Create Vitest configuration
echo 'import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["**/node_modules/**", "**/dist/**", "**/types/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});' > vitest.config.ts


# Initialize Husky
yarn husky install
npx husky add .husky/pre-commit "yarn lint-staged"
npx husky add .husky/commit-msg "yarn commitlint --edit \$1"

# Create commitlint config
echo 'module.exports = { extends: ["@commitlint/config-conventional"] };' > commitlint.config.js

# Create lint-staged config
echo '{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}' > .lintstagedrc

# Update package.json scripts
npm pkg set scripts.dev="vite"
npm pkg set scripts.build="tsc && vite build"
npm pkg set scripts.preview="vite preview"
npm pkg set scripts.test="vitest"
npm pkg set scripts.test:coverage="vitest run --coverage"
npm pkg set scripts.lint="eslint src --ext .ts,.tsx"
npm pkg set scripts.lint:fix="eslint src --ext .ts,.tsx --fix"
npm pkg set scripts.format="prettier --write \"src/**/*.{ts,tsx,json,md}\""
npm pkg set scripts.prepare="husky install"
npm pkg set scripts.typecheck="tsc --noEmit"

echo "✅ Configuration files created!"