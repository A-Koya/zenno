import { cardMock } from '@/lib/mockData';
import { CardList } from './_component/tmp/cards/CardList';
export default function Home() {
  return (
    <div className="container py-4">
      <CardList cardDatas={cardMock} />
    </div>
  );
}
