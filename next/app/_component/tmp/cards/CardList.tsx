import { QuestionCard } from '../../organisms/QuestionCard/QuestionCard';
import { fetchCardData } from '@/lib/functions/fetch';

export const CardList = () => {
  return (
    fetchCardData().then(cardDatas => {
      if (cardDatas) {
        return (
          <ul className="container flex flex-col space-y-4">
            {cardDatas.map((Data) => (<li key={Data.id}><QuestionCard {...Data} /></li>))}
          </ul>
        );
      } else {
        return <div>データの読み込みに失敗しました</div>;
      }
    })
  )
}