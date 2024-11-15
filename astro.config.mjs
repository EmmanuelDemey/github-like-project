import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Github Like Project",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "guides/01_introduction" },
            { label: "Initialisation GIT", slug: "guides/02_git" },
            { label: "Initialisation API", slug: "guides/03_api-initialisation" },
            { label: " Initialisation Nuxt.js", slug: "guides/04_front-initialisation" },
            { label: " Initialisation Base de données", slug: "guides/05_database-initialisation" },
          ],
        },
      ],
    }),
  ],
});
