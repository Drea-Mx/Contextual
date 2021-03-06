export default {
    name: 'red',
    title: 'Red',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'Url',
            type: 'url'
        },
        {
            name: 'icon',
            title: 'Icon',
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