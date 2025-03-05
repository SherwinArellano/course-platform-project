# Notes

These notes serve to document the process of creating a web application using NextJS.

## 1. Setting Up Environment

Creating a NextJS project:

```cmd
npx create-next-app@canary
```

We're using the canary version to use the new features of NextJS on caching.

To use these new features, update the `next.config.ts` accordingly:

```ts
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    dynamicIO: true,
    authInterrupts: true,
  },
};
```

### 1.1 Environment Variables

There exist packages to handle environment variables in NextJS:

```cmd
npm i @t3-oss/env-nextjs
npm i zod
```

### 1.2 Docker

Check the `docker-compose.yml` file. Also, to create the container, run:

```cmd
docker compose up
```

### 1.3 About Migrations

I think migrations refer to actually creating the database, say, in the docker container. It's like compiling your schemas first and then migration is like executing the "compiled" schemas.

## Important

### tailwind.config.ts

Since v4, this type of configuration is deprecated. For custom classes, check the documentation on the official site on [Adding custom styles](https://tailwindcss.com/docs/adding-custom-styles).

### unknown rule tailwind

To fix unknown rules when writing tailwind in css files, add the following lines to the `.vscode/settings.json` file:

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## Questions

- What's the syntax on folder `[[..sign-in]]`?
