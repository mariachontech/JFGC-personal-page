export interface PicsData {
  img: string
  alt: string
  description: string
}

export interface PicsType {
  type: string
  data: PicsData[]
}
export interface Gallery {
  _updatedAt: string
  gallery: Gallery2[]
  _createdAt: string
  _rev: string
  _type: string
  _id: string
  categories: Category[]
  title: string
}

export interface Gallery2 {
  _type: string
  _id: string
  title: string
  _updatedAt: string
  imageGallery: ImageGallery
  _createdAt: string
  _rev: string
}

export interface ImageGallery {
  _type: string
  alt: string
  caption: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Category {
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
  _id: string
  title: string
}

export interface Principal {
  name: string
  email: string
  socialsNet: SocialsNet[]
  _type: string
  _updatedAt: string
  phone: string
  office: string
  _id: string
  slug: Slug
  street: string
  _createdAt: string
  city: string
  country: string
  image: Image
  _rev: string
  cp: string
  university: string
}

export interface SocialsNet {
  _id: string
  _updatedAt: string
  urlSocial: string
  _createdAt: string
  _rev: string
  _type: string
  name: string
}

export interface Slug {
  current: string
  _type: string
}

export interface Image {
  asset: Asset2
  _type: string
  alt: string
  caption?: string
}

export interface Asset2 {
  _ref: string
  _type: string
}

export interface News {
  _rev: string
  _type: string
  description: string
  title: string
  _createdAt: string
  location: string
  _id: string
  eventDate: string
  area: string
  imageOfEvent: ImageOfEvent
  link: string
  organizer: string
  _updatedAt: string
}

export interface ImageOfEvent {
  _type: string
  alt: string
  caption?: string
  asset: Asset3
}

export interface Asset3 {
  _ref: string
  _type: string
}

export interface MainImage {
  _type: string
  alt: string
  asset: Asset4
}

export interface Asset4 {
  _type: string
  _ref: string
}

export interface GalleryCite {
  author: string
  cite: string
}

export interface Author {
  _type: string
  _ref: string
}

export interface ExperienceType {
  company: string
  startTime: string
  _id: string
  _updatedAt: string
  work: string
  _rev: string
  _type: string
  companyLink: string
  _createdAt: string
  location: string
  position: string
  endTime?: string
}

export interface SecondImage {
  alt: string
  asset: Asset
  _type: string
}

export interface Asset {
  _type: string
  _ref: string
}

export interface EducationType {
  _updatedAt: string
  advisers?: Adviser[]
  _createdAt: string
  grade: string
  _rev: string
  _type: string
  _id: string
  commite?: Commite[]
  place?: string
  endTime?: string
  startTime?: string
}

export interface Adviser {
  _id: string
  name: string
}

export interface Commite {
  _id: string
  name: string
}

export interface PdfFile {
  _type: string
  asset: Asset2
}

export interface Asset2 {
  _ref: string
  _type: string
}

export interface MainImage {
  _type: string
  alt: string
  asset: Asset3
}

export interface Asset3 {
  _ref: string
  _type: string
}

export interface Author {
  _ref: string
  _type: string
}

export interface CiteAuthor {
  cite: string
  author: string
}

export interface ScientificInterest {
  _type: string
  author: Author2
  categories: Category[]
  _updatedAt: string
  _id: string
  _rev: string
  description: string
  title: string
  image: Image
  _createdAt: string
}

export interface Author2 {
  _ref: string
  _type: string
}

export interface ProjectType {
  _rev: string
  _createdAt: string
  author: {
    _ref: string
    _type: string
  }
  _type: string
  description: string
  _id: string
  title: string
  _updatedAt: string
  year: string
}

export interface GroupType {
  tag: Tag[]
  _rev: string
  _id: string
  _type: string
  description: string
  title: string
  _updatedAt: string
  author: {
    _ref: string
    _type: string
  }
  _createdAt: string
  link2?: string
  link?: string
  page?: string
  github?: string
}

export interface IndustrialPartner {
  _rev: string
  description: string
  _id: string
  title: string
  _updatedAt: string
  _createdAt: string
  author: {
    _ref: string
    _type: string
  }
  _type: string
  link: string
  image: Image
}

export interface Tag {
  _id: string
  title: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
}

export interface MasterType {
  _id: string
  student: StudentData
  _rev: string
  _type: string
  tesis: string
  endTime: string
  _updatedAt: string
  university: string
  _createdAt: string
  status: string
}

export interface StudentData {
  _createdAt: string
  _rev: string
  _type: string
  name: string
  _id: string
  _updatedAt: string
  slug: Slug
  image: Image
}

export interface PhdType {
  endTime: string
  _type: string
  collaborators?: Collaborator[]
  startTime: string
  _updatedAt: string
  university?: string
  tesis: string
  status: string
  student: StudentData
  _rev: string
  _id: string
  _createdAt: string
  now?: string
}

export interface Collaborator {
  image: Image
  university: string
  _type: string
  _id: string
  _createdAt: string
  _rev: string
  name: string
  _updatedAt: string
  slug: Slug
}

export interface PboardType {
  student: StudentData
  _rev: string
  _type: string
  _updatedAt: string
  role: string
  date: string
  university: string
  _id: string
  _createdAt: string
}

export interface CourseType {
  _id: string
  title: string
  _updatedAt: string
  level: LevelType[]
  _createdAt: string
  _rev: string
  _type: string
}

export interface LevelType {
  _id: string
  _updatedAt: string
  levelCourse: string
  _createdAt: string
  _rev: string
  _type: string
  name: string
  link?: string
  plan?: string
  extras?: string
}

export interface HeaderLabType {
  mainImage: MainImage
  links: LinkType[]
  title: string
}

export interface LinkType {
  _key: string
  title: string
  url: string
}

export interface SeccionLabType {
  _type: string
  description?: string
  _id: string
  title: string
  _updatedAt: string
  gallery: GalleryType[]
  _createdAt: string
  _rev: string
}

export interface GalleryType {
  _id: string
  title: string
  _updatedAt: string
  imageGallery: Image
  _createdAt: string
  _rev: string
  _type: string
}
