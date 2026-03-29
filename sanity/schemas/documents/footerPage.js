export default {
    //
    name: 'footerPage',
    title: 'Footer',
    type: 'document',
    icon: () => `⬇️`,
    fields: [
        {
            name: 'title',
            title: 'Título de la sección',
            type: 'string',
        },
        {
            name: 'textoDescriptivo',
            title: 'Texto Descriptivo',
            type: 'blockModule',
        },
        {
            name: 'redesSociales',
            title: 'Redes Sociales',
            type: 'array',
            of: [
                {
                    type: 'red'
                }
            ]
        },
        {
            name: 'textoBotonDona',
            title: 'Texto Botón Donaciones',
            type: 'string'
        },
        {
            name: 'urlDona',
            title: 'URL Botón Donaciones',
            type: 'url'
        },
       {
            name: 'textoBajoBoton',
            title: 'Texto debajo botón donaciones',
            type: 'text'
        },
        {
            name: 'textoSubstack',
            title: 'Texto Substack (footer)',
            type: 'text',
            rows: 3,
            description: 'Texto descriptivo del bloque de Substack en el footer.',
        },
        {
            name: 'urlSubstack',
            title: 'URL Substack',
            type: 'url',
            description: 'Link al Substack. Ej: https://contextualmx.substack.com',
        },
    ],
}