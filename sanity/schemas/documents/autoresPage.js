export default {
    //
    name: 'autoresPage',
    title: 'Autores',
    type: 'document',
    icon: () => `🕵🏻`,
    fields: [
        {
            name: 'title',
            title: 'Autor',
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
            name: 'descripcionAutor',
            title: 'Descripción del autor',
            type: 'text'
        },
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'descripcionAutor'
        }
      }
}