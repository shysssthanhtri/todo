# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Development

1. Clone file `.env.example` to new file `.env` and fill in config value.
2. cd into `./docker` and run `ln -s ../.env ./.env`. Then go back to root folder.
3. Start local environment: `make start-env`.
4. Bootstrap database: `pnpm db:push`.
5. Run project: `pnpm dev`.

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
