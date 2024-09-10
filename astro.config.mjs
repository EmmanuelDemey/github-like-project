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
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Initialisation API", slug: "guides/api-initialisation" },
            { label: " Initialisation Nuxt.js", slug: "guides/front-initialisation" },
            { label: " Initialisation Base de données", slug: "guides/database-initialisation" },
          ],
        },
      ],
    }),
  ],
});
