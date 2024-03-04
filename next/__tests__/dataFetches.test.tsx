import { fetchCardData } from "@/lib/functions/fetch"
import { cardMock } from "@/lib/mocks/mockData"


describe('質問のフェッチ', () => {
    test('質問をフェッチする (axiosをmockするver)', async () => {
        const res = fetchCardData()
        await expect(res).toEqual(cardMock)
    });
})