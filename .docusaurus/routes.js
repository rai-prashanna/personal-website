import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bcc'),
    exact: true
  },
  {
    path: '/blog/2023/08/01/hello-world',
    component: ComponentCreator('/blog/2023/08/01/hello-world', 'ff6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/hello-world',
    component: ComponentCreator('/blog/tags/hello-world', '177'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c05'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '967'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '8f0'),
            routes: [
              {
                path: '/docs/all-apps',
                component: ComponentCreator('/docs/all-apps', 'cc6'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/docs/doc1',
                component: ComponentCreator('/docs/doc1', '386'),
                exact: true
              },
              {
                path: '/docs/experience',
                component: ComponentCreator('/docs/experience', '5f1'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/docs/my-background',
                component: ComponentCreator('/docs/my-background', 'bb3'),
                exact: true,
                sidebar: "someSidebar"
              },
              {
                path: '/docs/projects',
                component: ComponentCreator('/docs/projects', '54c'),
                exact: true,
                sidebar: "someSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
