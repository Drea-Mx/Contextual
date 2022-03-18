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
    ],
}