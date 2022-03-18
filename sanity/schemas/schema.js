// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity

import blockModule from './objects/blockModule'
import imageType from './objects/imageType'
import dateObject from './objects/dateObject'
import coverObject from './objects/coverObject'
import linksReferenciaObject from './objects/linksReferenciaObject'
import destacadoObject from './objects/destacadoObject'
import creditosObject from './objects/creditosObject'
import patrocinadoresObject from './objects/patrocinadoresObject'

//Modules
import headline from './objects/modules/headline'
import parrafoColumna from './objects/modules/parrafoColumna'
import parrafosColumnas from './objects/modules/parrafosColumnas'
import blockquote from './objects/modules/blockquote'
import video from './objects/modules/video'
import imagenFullscreen from './objects/modules/imagenFullscreen'
import imagenesDosColumnas from './objects/modules/imagenesDosColumnas'
import textoImagen from './objects/modules/textoImagen'
import audio from './objects/modules/audio'

import moduleArray from './arrays/moduleArray'


import categoriasArray from './arrays/categoriasArray'
import tagsArray from './arrays/tagsArray'



import settingsPage from './documents/settingsPage'
import autoresPage from './documents/autoresPage'
import categoriasPage from './documents/categoriasPage'
import tagsPage from './documents/tagsPage'
import articulosPage from './documents/articulosPage'
import manifestoPage from './documents/manifestoPage'



export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blockModule,
    imageType,
    dateObject,
    coverObject,
    linksReferenciaObject,
    destacadoObject,
    creditosObject,
    patrocinadoresObject,

    headline,
    parrafoColumna,
    parrafosColumnas,
    blockquote,
    video,
    imagenFullscreen,
    imagenesDosColumnas,
    textoImagen,
    audio,

    moduleArray,

    categoriasArray,
    tagsArray,

    settingsPage,
    autoresPage,
    categoriasPage,
    tagsPage,
    articulosPage,
    manifestoPage
  ]),
})
