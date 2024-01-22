# 👨🏻‍💻 My Personal Website

My minimal personal website built with [Astro.](https://astro.build/)

![screenshot](https://raw.githubusercontent.com/jepnoda/jepnoda.github.io/main/public/sc.png)

## 🛠️ What I used

- [AstroJS](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── assets/
│   │   └── icons/
│   │   ├── me_holding_a_cat_square.jpg
│   │   └── my_picture.jpg
│   ├── components/
│   │   ├──Footer.astro
│   │   ├──NavBar.astro
│   │   ├──ProjectCard.astro
│   │   ├──projects.ts
│   │   ├──TechBadge.astro
│   │   └──techs.ts
│   ├── layouts/
│   │   ├──AboutLayout.astro
│   │   └──MainLayout.astro
│   ├── pages/
│   │   ├──about.md
│   │   └──index.astro
│   └── env.d.ts
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
