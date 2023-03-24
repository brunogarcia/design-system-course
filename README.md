# Design System Course

## Init the project

Create a new folder for the project and go to the folder

```shell
mkdir design-system-course && cd $_
```

Set the Yarn version to 3

```shell
yarn set version berry
```

Create the Yarn Workspace

```shell
yarn init -w
```

Create the packages `foundation`, `react`, and `storybook` (this one should be private)

```shell
cd packages
mkdir foundation & cd $_
yarn init
```

```shell
cd packages
mkdir react & cd $_
yarn init
```

```shell
cd packages
mkdir storybook & cd $_
yarn init -p
```

### Verify that all the packages are in the workspace

Run this command from the root folder and check if the packages are listed:

```shell
yarn workspaces list
```

Result:

```shell
➤ YN0000: .
➤ YN0000: packages/foundation
➤ YN0000: packages/react
➤ YN0000: packages/storybook
➤ YN0000: Done in 0s 1ms
```

## Install the local dependencies

### Storybook

The `storybook` package will use the `foundation` and `react` packages, so we need to install them.

```shell
yarn workspace @brunogarcia/storybook-ds add @brunogarcia/react-ds @brunogarcia/foundation-ds
```

### React

The `react` package will use the `foundation` package, so we need to install it.

```shell
yarn workspace @brunogarcia/react-ds add @brunogarcia/foundation-ds
```

### Install and configure TypeScript

From the root of the project, install TypeScript as global dependency and also install it as a dev dependency for the `foundation`, `react`, and `storybook` packages.

```shell
yarn add typescript@4.7.2
yarn workspace @brunogarcia/foundation-ds add -D typescript@4.7.2
yarn workspace @brunogarcia/react-ds add -D typescript@4.7.2
yarn workspace @brunogarcia/storybook-ds add -D typescript@4.7.2
```

Then, create a `tsconfig.json` file in the root of the project and also on each package.

### Install and configure ESLint and Prettier

On the root of the project, create a `.eslintrc.js` and `.prettierrc` files.

And also from the root of the project install the following dependencies:

```shell
yarn add -D prettier eslint eslint-plugin-react eslint-plugin-react-hooks \
eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-config-prettier \
@typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```

Then, add a new script called `lint` to the `package.json` file:

```json
"lint": "eslint --ignore-path .gitignore --quiet --no-error-on-unmatched-pattern packages/**/*{js,jsx,ts,tsx}"
```

Finally, test the linter by running the following command:

```shell
yarn lint
```

### Install and configure Husky and Lint Staged

From the root of the project, install the following dependencies:

```shell
yarn add -D husky lint-staged
```

Then, add the following scripts to the `package.json` file:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "yarn lint --fix",
    "git add"
  ]
}
```

Configure Husky to run the linter before each commit:

```shell
npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky add .husky/pre-commit "lint-staged"
```

## Scripts

### Build

```shell
yarn run build:foundation
yarn run build:react
```

### Test

```shell
yarn run test:react
```

### Storybook

```shell
yarn run storybook
```
