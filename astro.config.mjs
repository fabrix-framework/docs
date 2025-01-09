// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Fabrix",
      logo: {
        light: "./src/assets/logo_black.svg",
        dark: "./src/assets/logo_white.svg",
        alt: "Fabrix Logo",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/fabrix-framework/fabrix",
      },
      sidebar: [
        {
          label: "Getting Started",
          slug: "getting-started",
        },
        {
          label: "Component API",
          items: [
            {
              label: "Basics",
              slug: "guides/component",
            },
            {
              label: "Styling",
              slug: "guides/styling",
            },
          ],
        },
        {
          label: "Custom components",
          items: [
            {
              label: "Component registry",
              slug: "guides/component-registry",
            },
            {
              label: "Component builder",
              slug: "guides/component-builder",
            },
          ],
        },
        {
          label: "Directive API",
          slug: "guides/directives",
        },
        {
          label: "Recipes",
          autogenerate: { directory: "recipes" },
        },
      ],
      customCss: ["./src/styles/color-theme.css", "./src/styles/custom.css"],
    }),
  ],
});
