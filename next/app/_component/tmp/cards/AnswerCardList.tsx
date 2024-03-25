'use Client'
import React, { useEffect, useState } from 'react'
import { AnswerCard, answerCard } from '../../organisms/QuestionCard/AnswerCard';
import { useParams } from 'next/navigation';
import { fetchData } from '@/lib/functions/fetch';

export const AnswerCardList = () => {
    const [cardDatas, setCardData] = useState<answerCard[]>()
    const [isError, setIsError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const params = useParams()
    const id = params.id
    useEffect(() => {
        const fetchCard = async (id: string | string[] | undefined) => {
            try {
                const data = await fetchData<answerCard[]>(process.env.NEXT_PUBLIC_ANSWER + `/${id}`)
                setCardData(data)
                setLoading(false)
            } catch (e) {
                console.log(e)
                setIsError(true)
                setLoading(false)
            }
        }
        fetchCard(id)
    }, [])
    return (
        <div className='mt-4'>
            {
                loading ? (
                    <div className='text-red-500 font-bold text-lg'>読み込み中です...</div>
                ) : isError ? (
                    <div className='text-red-500 font-bold text-lg'>データの読み込みに失敗しました</div>
                ) : cardDatas ? (
                    <ul className="flex flex-col space-y-4">
                        {cardDatas.map((Data) => (<li key={Data.id}><AnswerCard {...Data} /></li>))}
                    </ul>
                ) : (
                    <div className='text-blue-300 font-bold text-lg'>回答はありません</div>
                )
            }
        </div >
    )
}
