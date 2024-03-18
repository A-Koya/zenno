import axios, { AxiosResponse } from "axios";

export const postDatas = async<T>(Endpoint: string | undefined, obj: T): Promise<string> => {
    if (typeof Endpoint !== 'string') {
        console.error('CARD_ENDPOINTが設定されていないか、型がstringではありません');
        throw new Error('EndPoint should be string')
    }
    try {
        const response: AxiosResponse<string> = await axios.post(Endpoint, obj)
        return response.data;
    } catch (error) {
        console.error('データの取得に失敗しました。', error);
        throw new Error('failed to fetch data')
    }
}