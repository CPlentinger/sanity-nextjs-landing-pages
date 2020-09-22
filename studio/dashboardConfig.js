export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f6a03ab3dba8c00a5618a7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vbrn4j3o',
                  apiId: '0424952a-e40a-408f-a4c6-707e3b3e686e'
                },
                {
                  buildHookId: '5f6a03ab43b3c500ec9b7bce',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bzij8a2o',
                  apiId: '7797aac1-e660-471c-9c58-93cbaba4ef17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CPlentinger/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bzij8a2o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
