// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'


// Simple example of web preview
const url = 'https://contextual.gatsbyjs.io/'
const WebPreview = ({document}) => {
  const {displayed} = document
  return (
    <iframe 
      src={url + displayed.slug.current} 
      frameBorder={0} 
    />
  )
}


export default () =>
  S.list()
    .title('General')
    .items([
        S.listItem()
          .title('Configuración General')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
          .title('Manifesto')
          .icon(() => '📖')
          .child(
            S.document()
              .schemaType('manifestoPage')
              .documentId('manifestoPage')
        ),
        S.listItem()
          .title('Footer')
          .icon(() => '⬇️')
          .child(
            S.document()
              .schemaType('footerPage')
              .documentId('footerPage')
        ),
        S.divider(),
        S.listItem()
          .title('Articulos')
          .schemaType('articulosPage')
          .child(
            S.documentTypeList('articulosPage')
              .title('Articulos')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('articulosPage')
                  .views([
                    S.view.form().icon(EditIcon),
                    S.view
                      .component(WebPreview)
                      .icon(EyeIcon)
                      .title('Web Preview')
                  ])
              )
          ),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'manifestoPage', 'footerPage'].includes(listItem.getId()))
    ])