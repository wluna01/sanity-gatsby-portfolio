export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea32c12adc7e8e3168754d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-21poo9ys',
                  apiId: '8891ff87-9cf2-41f1-b546-1eafb7c2ac56'
                },
                {
                  buildHookId: '5ea32c12ede9869a8fd6450e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uemhhy3u',
                  apiId: 'a73173ef-7b9e-4faf-aa61-80ed7a0d17ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wluna01/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uemhhy3u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
