import axios, { AxiosResponse } from "axios"
interface QueryParams {
    [key: string]: string | number | boolean;
}

export const fetchData = async <T>(Endpoint: string | undefined, params?: QueryParams[]): Promise<T> => {
    if (typeof Endpoint !== 'string') {
        console.error('CARD_ENDPOINTが設定されていないか、型がstringではありません');
        throw new Error('EndPoint should be string')
    }
    try {
        const urlWithParam: string = concatParam(Endpoint, params)
        const response: AxiosResponse<T> = await axios.get(urlWithParam)
        return response.data;
    } catch (error) {
        console.error('データの取得に失敗しました。', error);
        throw new Error('failed to fetch data')
    }
}

export const concatParam = (Endpoint: string, params?: QueryParams[]): string => {
    if (params) {
        const queryString = params
            .map(obj => Object.entries(obj)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
                .join('&')
            )
        return `${Endpoint}?${queryString}`;
    } else {
        return Endpoint
    }
}