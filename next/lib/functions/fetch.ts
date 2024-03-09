import axios, { AxiosResponse } from "axios"

export const fetchData = async <T>(cardEndpoint: string | undefined): Promise<T | undefined> => {
    if (typeof cardEndpoint !== 'string') {
        console.error('CARD_ENDPOINTが設定されていないか、型がstringではありません');
        return undefined;
    }
    try {
        const response: AxiosResponse<T> = await axios.get(cardEndpoint)
        return response.data;
    } catch (error) {
        console.error('カードデータの取得に失敗しました。', error);
        return undefined;
    }
}