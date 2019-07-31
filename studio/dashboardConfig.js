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
                  buildHookId: '5d42158956fc5e3a9fbc21f0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6g686pz3',
                  apiId: '50a7805a-1a6d-4e0d-9b4a-4b4d7c349e84'
                },
                {
                  buildHookId: '5d42158a1ffb83152b804658',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iafd4qoy',
                  apiId: '50cd2100-4fe5-4e14-8585-1fd18692e73b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapexhiu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iafd4qoy.netlify.com', category: 'apps'}
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
