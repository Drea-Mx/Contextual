export default {
    name: 'imagenesDosColumnas',
    title: 'Dos columnas de imagen',
    type: 'object',
    fields: [
        {
            name: 'imagen1',
            title: 'Imagen 1',
            type: 'imageType'
        },
        {
            name: 'caption1',
            title: 'Caption 1',
            type: 'string'
        },
        {
            name: 'imagen2',
            title: 'Imagen 2',
            type: 'imageType'
        },
        {
            name: 'caption2',
            title: 'Caption 2',
            type: 'string'
        },
    ],
    preview: {
        select: {
          title: 'caption1',
          media: 'imagen1'
        }
      }
}