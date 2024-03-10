import { questionCardType } from "../types/questionCardType";

export const cardsMock: questionCardType[] = [
    {
        id: "1",
        cardLink: "localhost://8080",
        imageUrl: "https://github.com/shadcn.png",
        name: "kebin",
        date: "2022-1-1",
        title: "トマト栽培のコツを教えて",
        content: "私は自宅でトマトを栽培しており...",
        tags: ["初心者", "初心者", "初心者"],
        good: 12,
        post: 12,
    },
    {
        id: "2",
        cardLink: "localhost://8080",
        imageUrl: "https://github.com/shadcn.png",
        name: "nick",
        date: "2022-1-1",
        title: "トマト栽培のコツを教えて",
        content: "私は自宅でトマトを栽培しており...",
        tags: ["初心者", "初心者", "初心者"],
        good: 12,
        post: 12,
    }
]
export const tagsMock: tagType[] = [
    {
        id: "1",
        name: "トマト",
        sum: 12
    },
    {
        id: "2",
        name: "イチゴ",
        sum: 5
    },
    {
        id: "3",
        name: "りんご",
        sum: 18
    },
]