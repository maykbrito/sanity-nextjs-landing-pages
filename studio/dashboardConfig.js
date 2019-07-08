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
                  buildHookId: '5d2344182da7418d1e614614',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pqzu7cnk',
                  apiId: 'a0d19f88-768d-48d3-bcac-2261f1648b79'
                },
                {
                  buildHookId: '5d234418350b6561a2c20f09',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xrki8mqx',
                  apiId: '1e3eaf56-e691-4721-bfdb-8c0eec10c626'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maykbrito/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xrki8mqx.netlify.com', category: 'apps'}
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
