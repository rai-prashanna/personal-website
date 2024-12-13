module.exports = {
  title: "Prashanna Rai",
  tagline: `Passionate about crafting efficient cloud-based data solutions, optimizing performance, and unlocking the full potential of data for impactful business outcomes.`,
  url: "https://rai-prashanna.github.io/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "rai-prashanna", // Usually your GitHub org/user name.
  projectName: "rai-prashanna.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Prashanna Rai",
      logo: {
        alt: "FullStack Developer, Sweden",
        src: "img/avataaars.svg",
      },
      items: [
        { to: "blog", label: "Notes", position: "left" },
        { to: "docs/experience", label: "Experience", position: "left" },
        { to: "docs/projects", label: "Works", position: "left" },

        {
          href: "https://github.com/rai-prashanna",
          label: "GitHub",
          position: "right",
        },

        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "More",
        //   position: "left",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/prashanna-rai/",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/12053011/prashanna-rai",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/rai-prashanna",
            },
          ],
        },
      ]
      // ,
      // copyright: `Copyright © ${new Date().getFullYear()} Prashanna Rai. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "experience",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
          // Please change this to your repo.
          // editUrl:
          // "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
