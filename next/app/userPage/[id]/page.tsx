'use client'
import { useEffect, useState } from 'react';
import { UserInfo } from '../../_component/molecules/userInfo/UserInfo';
import { HistoryCardList } from '../../_component/tmp/cards/HistoryCardList';
import { userType } from '@/lib/types/userType';
import { fetchData } from '@/lib/functions/fetch';
import Loading from '@/app/loading';



export default function Page({ params }: { params: { id: string } }) {
    const [data, setData] = useState<userType | undefined>(undefined)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data: userType = await fetchData<userType>(process.env.NEXT_PUBLIC_USERINFO_TEST)
                setData(data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchUserData()
    }, [])
    return (
        <>
            {
                data !== undefined ? (
                    <div className='flex justify-center mt-4 space-x-6'>
                        <UserInfo imageUrl={data.imageUrl} name={data.name} />
                        <HistoryCardList />
                    </div>
                ) : (
                    <Loading />
                )
            }
        </>
    )
}