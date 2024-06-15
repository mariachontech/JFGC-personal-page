import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import user from './schemaTypes/common/user'
import home from './schemaTypes/homePage/home'
import collaborator from './schemaTypes/common/collaborator'
import socialsSchema from './schemaTypes/common/social'
import news from './schemaTypes/common/news'
import photo from './schemaTypes/common/photo'
import galleryKind from './schemaTypes/common/galleryKind'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    post,
    user,
    category,
    blockContent,
    collaborator,
    socialsSchema,
    news,
    photo,
    galleryKind,
  ],
}
