# ESLint config

- ESLint: JavaScript, JSON, TypeScript, Vue, React
- Prettier: HTML, CSS, Less, Sass, Scss, MD, MDX, YAML

## Usage

### Install

```bash
pnpm i eslint typescript eslint-config-bitsy -D
```

### ESLint Config File

create config file `.eslintrc`

```json
{
  "extends": "bitsy"
}
```

- bitsy: base config, lint JS, TS, JSON
- bitsy/vue: extend base config, lint Vue3
- bitsy/react: extend base config, lint React

> please choose the suitable config for your project

> You don't need .eslintignore normally as it has been provided by the preset.

### Add script command in package.json

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

- then you can use the following command to format and fix the code

```bash
pnpm lint
```
