export default {
    //
    name: 'manifestoPage',
    title: 'Manifesto',
    type: 'document',
    icon: () => `📖`,
    fields: [
        {
            name: 'title',
            title: 'Título de la página',
            type: 'string',
        },
        {
            name: 'titleFormat',
            title: 'Título de la página con formato',
            type: 'blockModule',
        },
        {
            name: 'textoPrincipal',
            title: 'Body',
            type: 'blockModule'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}