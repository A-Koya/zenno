import { questionCardType } from '@/lib/types/questionCardType';
import { QuestionCard } from '../../organisms/QuestionCard/QuestionCard';
import { fetchData } from '@/lib/functions/fetch';

export const CardList = () => {
  return (
    fetchData<questionCardType[]>(process.env.CARDS_TEST).then(cardDatas => {
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