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
            name: 'creditos',
            title: 'Créditos',
            type: 'array',
            of: [
                {type: 'creditosObject'}
            ]
        },
        {
            name: 'patrocinadores',
            title: 'Lista de patrocinadores',
            type: 'array',
            of: [
                {type: 'patrocinadoresObject'}
            ]
        }
    ],
}