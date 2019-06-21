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
                  buildHookId: '5d0d05797fcd4bef466ecfcc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zfeuaj4x',
                  apiId: 'b65d86d3-e43c-49ff-bf7f-8876b9078492'
                },
                {
                  buildHookId: '5d0d0579aed244aee52e7c0b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yfqewedh',
                  apiId: '00b27459-84e2-4239-9667-f02f5b02790d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alisalad/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yfqewedh.netlify.com', category: 'apps'}
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
