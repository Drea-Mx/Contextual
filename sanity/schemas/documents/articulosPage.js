export default {
    //
    name: 'articulosPage',
    title: 'Articulos',
    type: 'document',
    icon: () => `📝`,
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'imagenDeCover',
            title: 'Imagen de Cover',
            type: 'imageType'
        },
        {
            name: 'fecha',
            title: 'Fecha',
            type: 'dateObject'
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'lecturaDeXMinutos',
            title: 'Lectura de X minutos',
            type: 'number'
        },
        {
            name: 'categorias',
            title: 'Categorías',
            type: 'array',
            of: [{type: 'categoriasArray'}]
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'coverObject',
        },
        {
            name: 'autor',
            title: 'Autor',
            type: 'reference',
            to: [{type: 'autoresPage'}]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'tagsArray'}]
        },
        //Modulos start
        {
            name: 'moduleArray',
            title: 'Modulos Editoriales',
            type: 'moduleArray'
        },
        // Modulos end
        {
            name: 'linksDeReferencia',
            title: 'Links de referencia',
            type: 'array',
            of: [
                {type: 'linksReferenciaObject'}
            ]
        },
        {
            name: 'destacado',
            title: '¿Destacado?',
            type: 'destacadoObject'
        }
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'headline',
          media: 'imagenDeCover'
        }
      }
}