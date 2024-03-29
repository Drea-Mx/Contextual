const path = require('path');

async function turnPostsIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const articuloTemplate = path.resolve('./src/templates/Articulo.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          articulos:   allSanityArticulosPage {
            nodes {
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.articulos.nodes.forEach((articulo) => {
      actions.createPage({
          // url forths new page
          path: `/contenido/${articulo.slug.current}`,
          component: articuloTemplate,
          context: {
              language: 'es',
              slug: articulo.slug.current,
          }
      })
  });
}



async function turnCategoriesIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const categoriaTemplate = path.resolve('./src/templates/Categoria.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          categorias:   allSanityCategoriasPage {
            nodes {
              slug {
                current
              }
              title
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.categorias.nodes.forEach((categoria) => {
      actions.createPage({
          // url forths new page
          path: `/categorias/${categoria.slug.current}`,
          component: categoriaTemplate,
          context: {
              language: 'es',
              slug: categoria.slug.current,
          }
      })
  });
}

async function turnTagsIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const tagTemplate = path.resolve('./src/templates/Tag.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          tags:   allSanityTagsPage {
            nodes {
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.tags.nodes.forEach((tag) => {
      actions.createPage({
          // url forths new page
          path: `/etiquetas/${tag.slug.current}`,
          component: tagTemplate,
          context: {
              language: 'es',
              slug: tag.slug.current,
          }
      })
  });
}


exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Posts
        turnPostsIntoPages(params),
        turnCategoriesIntoPages(params),
        turnTagsIntoPages(params),

    ])
}