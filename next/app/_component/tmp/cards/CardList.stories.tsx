import { questionCardType } from "@/lib/types/questionCardType";
import { CardList } from "./CardList";
import { cardMock } from '../../../../lib/mockData';

export default {
    id: 'CardList',
    component: CardList,
    title: 'CardList'
}

export const Default = () => <CardList cardDatas={cardMock} />