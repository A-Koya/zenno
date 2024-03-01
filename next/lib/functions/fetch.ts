import axios, { AxiosResponse } from "axios"
import * as dotenv from 'dotenv'
import { questionCardType } from "../types/questionCardType"
dotenv.config()
const cardEndpoint: string | undefined = process.env.CARD_ENDPOINT

export const fetchCardData = async (): Promise<questionCardType[] | undefined> => {
    if (typeof cardEndpoint !== 'string') {
        console.error('CARD_ENDPOINTが設定されていないか、型がstringではありません');
        return undefined;
    }
    try {
        const response: AxiosResponse<questionCardType[]> = await axios.get(cardEndpoint)
        return response.data;
    } catch (error) {
        console.error('カードデータの取得に失敗しました。', error);
        return undefined;
    }
}