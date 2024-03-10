import { fetchData } from "@/lib/functions/fetch"
import { cardsMock, tagsMock } from "@/lib/mocks/mockData";
import { questionCardType } from "@/lib/types/questionCardType";


describe('質問のフェッチ', () => {
    test('cardDataをfetchする', async () => {
        const res = await fetchData<questionCardType[]>(process.env.CARDS_TEST)
        expect(res).toEqual(cardsMock)
    });
    test('tagDataをフェッチする', async () => {
        const res = await fetchData<tagType[]>(process.env.NEXT_PUBLIC_TAGS_TEST)
        expect(res).toEqual(tagsMock)
    })
    test('空のデータが返る', async () => {
        const res = await fetchData<questionCardType[]>(process.env.EMPTY_TEST)
        expect(res).toEqual([])
    })
})