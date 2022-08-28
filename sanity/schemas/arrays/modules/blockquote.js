export default {
    name: 'blockquote',
    title: 'Blockquote',
    type: 'object',
    fields: [
        {
            name: 'frase',
            title: 'Frase',
            type: 'text'
        },
        {
            name: 'autor',
            title: 'Autor',
            type: 'blockModule'
        },
    ],
    preview: {
        select: {
          title: 'frase',
          subtitle: 'autor'
        }
      }
}