export default {
    name: 'parrafosColumnas',
    title: 'Párrafo 2 columnas',
    type: 'object',
    fields: [
        {
            name: 'campoDeTexto',
            title: 'Campo de texto',
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
          title: 'campoDeTexto',
        }
      }
}