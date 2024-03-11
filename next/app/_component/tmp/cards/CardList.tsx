'use client'
import { questionCardType } from '@/lib/types/questionCardType';
import { QuestionCard } from '../../organisms/QuestionCard/QuestionCard';
import { fetchData } from '@/lib/functions/fetch';
import { useEffect, useState } from 'react';

export const CardList = () => {
  const [cardDatas, setCardDatas] = useState<questionCardType[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const fetchCard: questionCardType[] = await fetchData<questionCardType[]>(process.env.NEXT_PUBLIC_CARDS_TEST)
        if (fetchCard.length === 0) {
          setCardDatas(undefined)
        } else {
          setCardDatas(fetchCard)
        }
        setLoading(false)
      } catch (e) {
        console.log(e)
        setIsError(true)
        setLoading(false)
      }
    }
    fetchCard()
  }, [])
  return (
    <>
      {loading ? (
        <div>読み込み中...</div>
      ) : isError ? (
        <div className='font-semibold text-red-500'>データを読み込めませんでした</div>
      ) : cardDatas !== undefined ? (
        <ul className="container flex flex-col space-y-4">
          {cardDatas.map((Data) => (<li key={Data.id}><QuestionCard {...Data} /></li>))}
        </ul>
      ) : (
        <div className='font-semibold'>該当項目はありません</div>
      )}
    </>
  )
}