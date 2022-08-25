export default {
    name: 'autores',
    title: 'Autores',
    type: 'object',
    fields: [
        {
            name: 'autore',
            title: 'Author',
            type: 'reference',
            to: [
                {
                    type: 'autoresPage'
                }
            ]
        }
    ]
}