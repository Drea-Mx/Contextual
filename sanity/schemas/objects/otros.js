export default {
    name: 'otros',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'texto',
            title: 'Texto',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'texto',
            subtitle: 'url'
        }
    }
}