export default {
    //
    name: 'tagsPage',
    title: 'Tags',
    type: 'document',
    icon: () => `🖇`,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: 'title',
            title: 'Tag',
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
    ],
}