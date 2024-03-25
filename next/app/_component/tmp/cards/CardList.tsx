'use client'
import { questionCardType } from '@/lib/types/questionCardType';
import { QuestionCard } from '../../organisms/QuestionCard/QuestionCard';
import { fetchData } from '@/lib/functions/fetch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';


export const CardList = () => {
  const [cardDatas, setCardDatas] = useState<questionCardType[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [strict, setStrict] = useState<string>('')
  const [offset, setOffset] = useState<number>(0)
  const searchParams = useSearchParams()
  useEffect(() => {
    const search = searchParams.get("search")
    const fetchCard = async (search: string | null) => {
      if (search) {
        const str: string = Array.isArray(search) ? search.join(",") : search;
        setStrict(str)
      } else {
        setStrict('')
      }
      try {
        const fetchUrl: string | undefined = process.env.NEXT_PUBLIC_QUESTIONS
        const fetchCard: questionCardType[] = await fetchData<questionCardType[]>(fetchUrl, [{ "offset": offset }, { "strict": strict }])
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
    fetchCard(search)
  }, [strict, offset, searchParams])
  return (
    <>
      {loading ? (
        <div>読み込み中...</div>
      ) : isError ? (
        <div className='font-semibold text-red-500'>データを読み込めませんでした</div>
      ) : cardDatas !== undefined ? (
        <>
          <ul className="container flex flex-col space-y-4">
            {cardDatas.map((Data) => (<li key={Data.id}><QuestionCard {...Data} /></li>))}
          </ul>
          <div className='flex justify-between container mt-2'>
            <button className='text-white bg-red-500 px-6 py-3 rounded-lg hover:bg-red-300 hover:text-black'
              onClick={() => {
                if (offset != 0) { setOffset(offset - 10) }
              }}
            >前へ</button>
            <button className='text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-300 hover:text-black' onClick={() => setOffset(offset + 10)}>次へ</button>
          </div>
        </>
      ) : (
        <div className='font-semibold'>該当項目はありません</div>
      )}
    </>
  )
}