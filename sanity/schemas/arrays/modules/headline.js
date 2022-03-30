export default {
    name: 'headline',
    title: 'Headline',
    type: 'object',
    fields: [
        {
            name: 'headlineText',
            title: 'Headline Text',
            type: 'string'
        }
    ],
    preview: {
        select: {
          title: 'headlineText',
        }
      }
}