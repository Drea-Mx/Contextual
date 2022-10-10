export default {
    //
    name: 'categoriasPage',
    title: 'Categorías',
    type: 'document',
    icon: () => `📚`,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: 'title',
            title: 'Categoría',
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
            name: 'icono',
            title: 'Icono de la categoría',
            type: 'imageType'
        },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'icono'
        }
      }
}