export default {
    name: 'textoImagen',
    title: 'Texto + Imagen',
    type: 'object',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'imageType'
        },
        {
            name: 'texto',
            title: 'Texto',
            type: 'blockModule'
        },
        {
            name: 'capitalizar',
            title: 'Capitalizar',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
          title: 'texto',
          media: 'imagen'
        }
      }
    
}