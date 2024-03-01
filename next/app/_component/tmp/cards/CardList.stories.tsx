import { CardList } from "./CardList";
import { cardMock } from '../../../../lib/mocks/mockData';

export default {
    id: 'CardList',
    component: CardList,
    title: 'CardList'
}

export const Default = () => <CardList cardDatas={cardMock} />