// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import astroReact from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";

const starlightOptions = starlight({
  title:
    "Fabrix - Leverage the power of GraphQL to generate UI components directly from your schema.",
  logo: {
    light: "./src/assets/logo_black.svg",
    dark: "./src/assets/logo_white.svg",
    alt: "Fabrix Logo",
    replacesTitle: true,
  },
  favicon: "./favicon.svg",
  social: {
    github: "https://github.com/fabrix-framework/fabrix",
  },
  head: [
    {
      tag: "meta",
      attrs: { property: "og:image", content: "./docs/og.png" },
    },
  ],
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
          label: "Children props",
          slug: "guides/children-props",
        },
        {
          label: "Provider",
          slug: "guides/provider",
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
      label: "Tools",
      items: [{ label: "Fabrix editor", slug: "tools/fabrix-editor" }],
    },
    {
      label: "Component libraries",
      autogenerate: { directory: "component-libraries" },
    },
    {
      label: "Recipes",
      autogenerate: { directory: "recipes" },
    },
  ],
  customCss: ["./src/styles/color-theme.css", "./src/styles/custom.css"],
  plugins: [starlightLinksValidator()],
});

export default defineConfig({
  site: "https://fabrix-framework.github.io",
  base: "/docs",
  integrations: [astroReact(), starlightOptions],
});
