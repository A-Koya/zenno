import axios, { AxiosResponse } from "axios"

export const fetchData = async <T>(Endpoint: string | undefined): Promise<T> => {
    if (typeof Endpoint !== 'string') {
        console.error('CARD_ENDPOINTが設定されていないか、型がstringではありません');
        throw new Error('EndPoint should be string')
    }
    try {
        const response: AxiosResponse<T> = await axios.get(Endpoint)
        return response.data;
    } catch (error) {
        console.error('データの取得に失敗しました。', error);
        throw new Error('failed to fetch data')
    }
}