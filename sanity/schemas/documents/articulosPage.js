export default {
    //
    name: 'articulosPage',
    title: 'Articulos',
    type: 'document',
    icon: () => `📝`,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
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
            type: 'imageType',
        },
        {
            name: 'fecha',
            title: 'Fecha',
            type: 'dateObject',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'lecturaDeXMinutos',
            title: 'Lectura de X minutos',
            type: 'number',
        },
        {
            name: 'categoria',
            title: 'Categoría',
            type: 'reference',
            to: [{type: 'categoriasPage'}],
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'coverObject',
        },
        {
            name: 'thumbnailForma',
            title: 'Forma del Thumbnail',
            type: 'thumbnailShape',
        },
        {
            name: 'autor',
            title: 'Autor',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'autoresPage'}
                    ]
                }
            ],
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
            type: 'destacadoObject',
        },
        {
            name: 'archivo',
            title: 'Archivo',
            type: 'destacadoObject',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
    orderings: [
        {
          title: "Manual order",
          name: "manualOrder",
          by: [{ field: "order", direction: "asc" }],
        },
      ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'headline',
          media: 'imagenDeCover'
        }
      }
}