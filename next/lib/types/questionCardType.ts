export type questionCardType = {
    name: string,
    date: date,
    title: string,
    content: string,
    tags: string[],
    good: number,
    post: number,
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
export type avaterDateType = {
    imageUrl: string,
    alt:string,
    name: string,
    date: date,
}