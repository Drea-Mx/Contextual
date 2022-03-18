export default {
    //
    name: 'manifestoPage',
    title: 'Manifesto',
    type: 'document',
    icon: () => `📖`,
    fields: [
        {
            name: 'title',
            title: 'Headline',
            type: 'string',
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