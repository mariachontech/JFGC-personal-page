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
import researchPage from './schemaTypes/researchPage/researchPage'
import publicationScheme from './schemaTypes/common/publicationScheme'
import scientificInterest from './schemaTypes/common/scientific-interest'
import projectScheme from './schemaTypes/common/projectScheme'
import researchGroup from './schemaTypes/common/research-group'
import industrialPartners from './schemaTypes/common/industrial-partners'
import studentsPage from './schemaTypes/students/studentsPage'
import masterSchema from './schemaTypes/common/masterSchema'
import phdSchema from './schemaTypes/common/phdSchema'
import postdocSchema from './schemaTypes/common/postdocSchema'
import pboardSchema from './schemaTypes/common/pboardSchema'
import coursesPage from './schemaTypes/coursesPage/courses-page'
import coursesSchema from './schemaTypes/common/courses-schema'

import levelCourses from './schemaTypes/common/level-course'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    biography,
    researchPage,
    studentsPage,
    coursesPage,
    publicationScheme,
    scientificInterest,
    projectScheme,
    researchGroup,
    industrialPartners,
    masterSchema,
    phdSchema,
    postdocSchema,
    pboardSchema,
    education,
    experienceScheme,
    coursesSchema,
    user,
    category,
    blockContent,
    collaborator,
    socialsSchema,
    news,
    photo,
    galleryKind,
    levelCourses,
  ],
}
