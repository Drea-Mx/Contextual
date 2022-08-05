// ./resolveProductionUrl.js
export default function resolveProductionUrl(document) {
    return `https://preview-contextual.gtsb.io/articulos/${document.slug.current}`
  }