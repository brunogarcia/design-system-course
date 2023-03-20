# Design System Course

## Init the project

Create a new folder for the project and go to the folder

```shell
mkdir design-system-course && cd $_
```

Set the Yarn version to 3.5.0

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
