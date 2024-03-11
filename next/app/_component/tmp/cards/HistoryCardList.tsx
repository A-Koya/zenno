'use client'
import { fetchData } from '@/lib/functions/fetch'
import { questionCardType } from '@/lib/types/questionCardType'
import React, { useEffect, useState } from 'react'
import { QuestionCardEdit } from '../../organisms/QuestionCard/QuestionCardEdit'

export const HistoryCardList = () => {
    const [cardKind, setCardKind] = useState<'question' | 'answer' | 'good'>('question')
    const [cardDatas, setCardDatas] = useState<questionCardType[] | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    useEffect(() => {
        const fetchHistory = async () => {
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
        fetchHistory()
    }, [cardKind])

    return (
        <div>
            <div className='flex'>
                <button className={`${cardKind === 'question' ? 'bg-green-500' : ''} opacity-80 border border-gray-600 rounded-md p-1 border-semibold`} onClick={() => setCardKind('question')}>質問</button>
                <button className={`${cardKind === 'answer' ? 'bg-green-500' : ''} opacity-80 border border-gray-600 rounded-md p-1 border-semibold`} onClick={() => setCardKind('answer')}>回答</button>
                <button className={`${cardKind === 'good' ? 'bg-green-500' : ''} opacity-80 border border-gray-600 rounded-md p-1 border-semibold`} onClick={() => setCardKind('good')}>高評価</button>
                <button className="opacity-80 border border-gray-600 rounded-md p-1 border-semibold" onClick={() => setCardKind('good')}>質問する</button>
            </div>
            {loading ? (
                <div className="text-gray-500">データを読み込んでいます...</div>
            ) : isError ? (
                <div className="text-red-500">データの読み込みに失敗しました</div>
            ) : cardDatas !== undefined ? (
                <ul className="flex flex-col space-y-2">
                    {cardDatas.map((data) => (<li key={data.id}><QuestionCardEdit {...data} /></li>))}
                </ul>
            ) : (
                <div>該当項目はありません</div>
            )}
        </div >
    )
}
