'use client'
import { CardList } from './_component/tmp/cards/CardList';
import { questionCardType } from '@/lib/types/questionCardType';
import { fetchCardData } from '@/lib/functions/fetch';
import { useEffect, useState } from 'react';
export default function Home() {
  const [cardDatas, setCardDatas] = useState<questionCardType[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCardData();
      if (data !== undefined) {
        setCardDatas(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container py-4">
      {loading ? (
        <div className="text-gray-500 font-bold">Loading...</div>
      ) : cardDatas !== undefined ? (
        <CardList cardDatas={cardDatas} />
      ) : (
        <div className='text-red-500 font-bold'>Error! データを読み込めません</div>
      )}
    </div>
  );
}
