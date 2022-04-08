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
            type: 'blockModule'
        },
        {
             name: 'logoNegro',
             title: 'Logo Negro',
             type: 'imageType'
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
        },

    ],
}