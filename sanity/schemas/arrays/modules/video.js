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
            name: 'videoSize',
            title: 'Video % Width',
            type: 'number',
            description: 'Slider para elegir el tamaño del logo',
            options: {
                range: {min: 0, max: 100, step: 1}
            }
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