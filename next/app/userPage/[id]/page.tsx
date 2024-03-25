'use client'
import { useEffect, useState } from 'react';
import { UserInfo } from '../../_component/molecules/userInfo/UserInfo';
import { HistoryCardList } from '../../_component/tmp/cards/HistoryCardList';
import { userType } from '@/lib/types/userType';
import { fetchData } from '@/lib/functions/fetch';
import Loading from '@/app/loading';



export default function Page({ params }: { params: { id: string } }) {
    const [data, setData] = useState<userType | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const fetchUrl: string = process.env.NEXT_PUBLIC_USERINFO + `/${params.id}`
                const data = await fetchData<userType>(fetchUrl)
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
        <>
            {
                loading == true ? (
                    <Loading />
                ) : data !== undefined ? (
                    <div className='flex justify-center mt-4 space-x-6'>
                        <UserInfo ImageUrl={data.ImageUrl} Name={data.Name} />
                        <HistoryCardList />
                    </div>
                ) : (
                    <div className='font-bold text-red-500 text-lg container'>データの読み込みに失敗しました</div>
                )
            }
        </>
    )
}