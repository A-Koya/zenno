'use client'
import * as React from "react"

import {
    Card,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { SearchWithButton } from '../../molecules/SearchWithButton';
import { Tag } from '../../molecules/tag/Tag';
import { fetchData } from "@/lib/functions/fetch";
import { tagType } from "@/lib/types/tagType";

export function SearchTags() {
    const [duration, setDuration] = useState<'week' | 'month' | 'all'>('all')
    const [tagDatas, setTagDatas] = useState<tagType[] | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const fetchCard: tagType[] = await fetchData<tagType[]>(process.env.NEXT_PUBLIC_TAGS)
                if (fetchCard.length === 0) {
                    setTagDatas(undefined)
                } else {
                    setTagDatas(fetchCard)
                }
                setLoading(false)
            } catch (error) {
                setIsError(true)
                setLoading(false)
            }
        }
        fetchTags()
    }, [duration])

    return (
        <Card className="w-[350px] container items-center py-2 bg-gray-100">
            <div className="mb-2">
                <SearchWithButton />
            </div>
            <div className="flex items-center space-x-4 mb-2">
                <div className="font-semibold">タグランキング</div>
                <button className={`${duration === 'all' ? 'font-semibold' : ''} text-gray-600`} onClick={() => setDuration('all')}>全期間</button>
                <button className={`${duration === 'month' ? 'font-semibold' : ''} text-gray-600`} onClick={() => setDuration('month')}>月間</button>
                <button className={`${duration === 'week' ? 'font-semibold' : ''} text-gray-600`} onClick={() => setDuration('week')}>週間</button>
            </div>
            {loading ? (
                <div className="text-gray-500">データを読み込んでいます...</div>
            ) : isError ? (
                <div className="text-red-500">データの読み込みに失敗しました</div>
            ) : tagDatas !== undefined ? (
                <ol className="flex flex-col space-y-2">
                    {tagDatas.map((data, index) => (<li key={index}><Tag {...data} /></li>))}
                </ol>
            ) : (
                <div>該当項目はありません</div>
            )}
        </Card>
    )
}
