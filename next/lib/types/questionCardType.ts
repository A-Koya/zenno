export type questionCardType = {
  id: number,
  cardLink: string
} & avaterDateType & mainContentsType & ReactionsType
export type avaterDateType = {
  imageUrl: string,
  name: string,
  date: string,
}
export type mainContentsType = {
  title: string,
  content: string,
  tags: string[],
}
export type ReactionsType = {
  good: number,
  post: number,
}