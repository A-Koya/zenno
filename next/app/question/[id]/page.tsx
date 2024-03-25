'use client'

import { QuestionCard } from '@/app/_component/organisms/QuestionCard/QuestionCard'
import { AnswerCardList } from '@/app/_component/tmp/cards/AnswerCardList'
import Loading from '@/app/loading'
import { fetchData } from '@/lib/functions/fetch'
import { questionCardType } from '@/lib/types/questionCardType'
import React, { useEffect, useState } from 'react'

export default function ({ params }: { params: { id: string } }) {
    const [data, setData] = useState<questionCardType | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const fetchUrl: string = process.env.NEXT_PUBLIC_FIND_QUESTION + `/${params.id}`
                const data = await fetchData<questionCardType>(fetchUrl)
                setData(data)
                setLoading(false)
            } catch (e) {
                console.error(e)
                setLoading(false)
            }
        }
        fetchUserData()
    }, [])
    return (
        <div className='container mt-4'>
            {
                loading ? (
                    <Loading />
                ) : data == undefined ? (
                    <div className='text-lg text-red-400 font-bold'>データの読み込みに失敗しました</div>
                ) : (
                    <>
                        <QuestionCard {...data} />
                        <AnswerCardList />
                    </>
                )
            }
        </div>
    )
}
