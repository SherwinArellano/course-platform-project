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

### shadcn with tailwind v4 and React 19 and hsl colors

Okay, this took me a long time to figure out but since I'm using the newest versions of tailwind, React, and Next, the documentation of shadcn on installing with Next is outdated in a sense that if you want to install shadcn with the newest versions, you have to run the canary cli:

```cmd
npx shadcn@canary init
```

Also, they've actually said to use canary but you find it here instead of the actual installation page: [Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4). There they said _"You can test Tailwind v4 + React 19 today using the canary release of the CLI."_ under the _Try It Out_ section. (If that section still exists. Time of writing is March 5, 2025)

As for using custom classes of shadcn inside `global.css`, check out [Theming](https://ui.shadcn.com/docs/theming) on shadcn's documentation.

About hsl colors, in previous versions, you can simply do `--accent: 280 75% 50%` but now you have to wrap it in `hsl()` like `hsl(280 75% 50%)`. Why? Because obviously it's a color, it's like putting `#` for hex colors. **I surmise that in the previous versions, those values were automatically wrapped in `hsl()` but since now they, I'm referring to tailwind, use `oklch()`, that changed.**

## Questions

- What's the syntax on folder `[[..sign-in]]`?
