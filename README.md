# wave-check
stand up a basic server to check waves

## Getting Started

- Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- Clone this repo
- Install dependencies (note the firefox environment variable. Chromium does not support the current-state media type)

```bash
PUPPETEER_PRODUCT=firefox yarn # or yarn install
```

- build the project

```bash
yarn build
```


- supply surfline credentials

```bash
export SURFLINE_USERNAME=xxxxx
export SURFLINE_PASSWORD=xxxxx
```

- To run the client locally, run

```bash
yarn start --scope=@wave-check/client
```

- **Server is WIP**