export default {
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        {
            name: 'embedUrl',
            title: 'Embed URL',
            type: 'text'
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'blockModule'
        }
    ],
    preview: {
        select: {
          title: 'embedUrl',
          subtitle: 'caption',
        }
      }
}