export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'icon',
            title: 'Icono',
            type: 'imageType'
        }
    ],
    preview: {
        select: {
            title: 'url',
            media: 'icon'
        }
    }
}