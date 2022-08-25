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