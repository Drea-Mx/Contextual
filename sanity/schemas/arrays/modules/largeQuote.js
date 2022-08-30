export default {
    name: 'largeQuote',
    title: 'Large Quote',
    type: 'object',
    fields: [
        {
            name: 'texto',
            title: 'Texto',
            type: 'blockModule'
        },
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'blockModule'
        },
    ],
    preview: {
        select: {
          title: 'texto',
          subtitle: 'descripcion'
        }
      }
}