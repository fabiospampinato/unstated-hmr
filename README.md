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

## Related

- **[unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers)**: Higher-Order Component for subscribing to containers.
- **[unstated-connect2](https://github.com/fabiospampinato/unstated-connect2)**: Connect containers to components, without sacrificing performance.
- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.
- **[unstated-compose-suspense](https://github.com/fabiospampinato/unstated-compose-suspense)**: Add suspend/unsuspend support to `unstated-compose`.
- **[unstated-compose-suspense-middleware](https://github.com/fabiospampinato/unstated-compose-suspense-middleware)**: Add middlewares support to `unstated-compose-suspense`.
- **[unstated-suspense](https://github.com/fabiospampinato/unstated-suspense)**: Suspend/unsuspend updates propagation from your containers.
- **[unstated-suspense-middleware](https://github.com/fabiospampinato/unstated-suspense-middleware)**: Add middlewares support to `unstated-suspense`.

## License

MIT © Fabio Spampinato
