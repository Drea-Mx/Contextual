export default {
    name: 'imagenFullscreen',
    title: 'Imagen Fullscreen',
    type: 'object',
    fields: [
        {
            name:'image',
            title: 'Image Fullscreen',
            type: 'imageType'
        },
        {
            name: 'imageSize',
            title: 'Image % Width',
            type: 'number',
            description: 'Slider para elegir el tamaño del logo',
            options: {
                range: {min: 0, max: 100, step: 25}
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
          title: 'caption',
          media: 'image'
        }
      }
}