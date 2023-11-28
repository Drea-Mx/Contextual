// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schema from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  title: "Contextual",
  projectId: "emwh2ijw",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  }),
],

  schema: {
    types: schema,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != ['settingsPage', 'manifestoPage', 'footerPage'])
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settingsPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'manifestoPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'footerPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});