export default {
  widgets: [
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
                  buildHookId: '5f90ad5a8189bc401a704fce',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-iqo3hac4',
                  apiId: 'a9bdcb22-851b-43b8-8707-91a40bb83083'
                },
                {
                  buildHookId: '5f90ad5a64427e4c4505504b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2zpsujzi',
                  apiId: 'e59396c6-bdc2-4fe7-9a66-2d1513656659'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coburnicus/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2zpsujzi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
