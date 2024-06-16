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
  caption: string
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

export interface Root {
  experience: Experience[]
  secondImage: SecondImage
  education: Education[]
  _updatedAt: string
  _createdAt: string
  pdfFile: PdfFile
  mainImage: MainImage
  _id: string
  author: Author
  _rev: string
  publishedAt: string
  _type: string
  title: string
  citeAuthor: CiteAuthor
  pdfURL: string
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
