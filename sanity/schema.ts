import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import user from './schemaTypes/common/user'
import home from './schemaTypes/homePage/home'
import collaborator from './schemaTypes/common/collaborator'
import socialsSchema from './schemaTypes/common/social'
import news from './schemaTypes/common/news'
import photo from './schemaTypes/common/photo'
import galleryKind from './schemaTypes/common/galleryKind'
import education from './schemaTypes/common/education'
import biography from './schemaTypes/biography/biography'
import experienceScheme from './schemaTypes/common/experience-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    biography,
    education,
    experienceScheme,
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
