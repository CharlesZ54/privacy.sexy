# Contributing

- Love your input! Contributing to this project should be as easy and transparent as possible, whether it's:
  - Reporting a bug
  - Discussing the current state of the code
  - Submitting a fix
  - Proposing new features
  - Becoming a maintainer

## Pull Request Process

- [GitHub flow](https://guides.github.com/introduction/flow/index.html) is used
- Your pull requests are actively welcomed.
- The steps:
  1. Fork the repo and create your branch from master.
  2. If you've added code that should be tested, add tests.
  3. If you've changed APIs, update the documentation.
  4. Ensure the test suite passes.
  5. Make sure your code lints.
  6. Issue that pull request!
- 🙏 DO
  - Document your changes in the pull request
- ❗ DON'T
  - Do not update the versions, current version is only [set by the maintainer](./img/architecture/gitops.png) and updated automatically by [bump-everywhere](https://github.com/undergroundwires/bump-everywhere)

## Guidelines

### Extend scripts

- Create a [pull request](#Pull-Request-Process) for [application.yaml](./src/application/application.yaml)
- 🙏 For any new script, please add `revertCode` and `docs` values if possible.
- Structure of `script` object:
  - `name`: *`string`* (**required**)
    - Name of the script
    - E.g. `Disable targeted ads`
  - `code`: *`string`* (**required**)
    - Batch file commands that will be executed
  - `docs`: *`string`* | `[ string, ... ]`
    - Documentation URL or list of URLs for those who wants to learn more about the script
    - E.g. `https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_telemetry`
  - `revertCode`: `string`
    - Code that'll undo the change done by `code` property.
    - E.g. let's say `code` sets an environment variable as `setx POWERSHELL_TELEMETRY_OPTOUT 1`
      - then `revertCode` should be doing `setx POWERSHELL_TELEMETRY_OPTOUT 0`
  - `recommend`: `"standard"` | `"strict"` | `undefined` (default)
    - If not defined then the script will not be recommended
    - If defined it can be either
      - `standard`: Will be recommended for general users
      - `strict`: Will only be recommended with a warning
- See [typings](./src/application/application.yaml.d.ts) for documentation as code.

### Handle the state in presentation layer

- There are two types of components:
  - **Stateless**, extends `Vue`
  - **Stateful**, extends [`StatefulVue`](./src/presentation/StatefulVue.ts)
    - The source of truth for the state lies in application layer (`./src/application/`) and must be updated from the views if they're mutating the state
    - They mutate or/and reacts to changes in [application state](src/application/State/ApplicationState.ts).
    - You can react by getting the state and listening to it and update the view accordingly in [`mounted()`](https://vuejs.org/v2/api/#mounted) method.

## License

By contributing, you agree that your contributions will be licensed under its GNU General Public License v3.0.
