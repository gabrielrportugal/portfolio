export interface BlogMetaData {
  title: string
  subTitle: string
  description: string
  date: string
  banner: string
  tags: string[]
  ready: boolean
}

export interface BlogDetails {
  content: string
  data: BlogMetaData
  slug: string
}
