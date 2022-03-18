// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

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
        ...S.documentTypeListItems().filter(listItem => !['settingsPage', 'manifestoPage'].includes(listItem.getId()))
    ])