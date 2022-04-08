export default {
    //
    name: 'articulosPage',
    title: 'Articulos',
    type: 'document',
    icon: () => `📝`,
    groups: [
        {
          name: 'inicio',
          title: 'Opciones de Inicio',
        },
      ],
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
            group: 'inicio'
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
            group: 'inicio'
        },
        {
            name: 'fecha',
            title: 'Fecha',
            type: 'dateObject',
            group: 'inicio'
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
            group: 'inicio'
        },
        {
            name: 'lecturaDeXMinutos',
            title: 'Lectura de X minutos',
            type: 'number',
            group: 'inicio'
        },
        {
            name: 'categoria',
            title: 'Categoría',
            type: 'reference',
            to: [{type: 'categoriasPage'}],
            group: 'inicio'
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'coverObject',
            group: 'inicio'
        },
        {
            name: 'thumbnailForma',
            title: 'Forma del Thumbnail',
            type: 'thumbnailShape',
            group: 'inicio'
        },
        {
            name: 'autor',
            title: 'Autor',
            type: 'reference',
            to: [{type: 'autoresPage'}],
            group: 'inicio'
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
            group: 'inicio'
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