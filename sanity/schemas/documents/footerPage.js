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
        }
    ],
}