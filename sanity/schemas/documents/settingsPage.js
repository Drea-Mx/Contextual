export default {
    //
    name: 'settingsPage',
    title: 'Configuración General',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'descriptionSite',
            title: 'Description Site',
            type: 'text'
        },
        {
             name: 'siteImage',
             title: 'Site Image',
             type: 'imageType'
        },
        {
            name: 'donaLink',
             title: 'Link de donación',
             type: 'url'
        },
        {
            name: 'navSize',
            title: 'Tamaño de barra blanca',
            type: 'number',
            description: 'Slider para elegir el tamaño del logo',
            options: {
                range: {min: 20, max: 150, step: 5}
            }
        },
        {
             name: 'logoNegro',
             title: 'Logo Negro',
             type: 'imageType'
        },
        {
            name: 'logoSize',
            title: 'Tamaño del logo',
            type: 'number',
            description: 'Slider para elegir el tamaño del logo',
            options: {
                range: {min: 100, max: 500, step: 5}
            }
        },
        {
            name: 'logoBlanco',
            title: 'Logo Blanco',
            type: 'imageType'
        },
        {
            name: 'otrosLinks',
            title: 'Otros Links',
            type: 'array',
            of: [
                {
                    type: 'otros'
                }
            ]
        }

    ],
}