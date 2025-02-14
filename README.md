# Todo application

https://github.com/shysssthanhtri/todo/actions/workflows/CI-CD.yml/badge.svg

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

URL: https://todo-nine-flax.vercel.app/

## Development

1. Clone file `.env.example` to new file `.env` and fill in config value.
2. cd into `./docker` and run `ln -s ../.env ./.env`. Then go back to root folder.
3. Start local environment: `make start-env`.
4. Install dependencies: `pnpm install`.
5. Bootstrap database: `pnpm db:push`.
6. Run project: `pnpm dev`.

## Scripts:
- `pnpm start`: Start application.

- `pnpm build`: Build application.
- `pnpm lint`: Check lint.
- `pnpm lint:fix`: Auto fixing lint issues.

- `pnpm db:generate`: Compare current `schema.prisma` file and target database to generate migration file.
- `pnpm db:migrate`: Apply migration files to target database.
- `pnpm db:push`: Force push current `schema.prisma` file to target database. Should only use for non-prod environment.
- `pnpm db:studio`: Open Prisma studio. https://www.prisma.io/studio

## How do I deploy this?

Github action as CI-CD, deploys to Vercel.
