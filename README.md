# Unstated HMR

Preserve containers' states across Hot-Module-Replacements.

## Install

```sh
npm install --save unstated-hmr
```

## Usage

```ts
import HMR from 'unstated-hmr'; // Just load the library before initializing the containers

HMR.isEnabled = IS_DEVELOPMENT;
```

## License

MIT © Fabio Spampinato
