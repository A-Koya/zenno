import { fetchData } from "@/lib/functions/fetch"
import { cardMock } from "@/lib/mocks/mockData"
import { questionCardType } from "@/lib/types/questionCardType";


describe('質問のフェッチ', () => {
    test('cardDataをfetchする', async () => {
        const res = await fetchData<questionCardType[]>(process.env.CARDS_ENDPOINT_TEST)
        expect(res).toEqual(cardMock)
    });
})