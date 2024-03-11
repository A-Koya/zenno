import React from 'react'
import { AvatarIcon } from '../../atoms/avater/AvatarIcon'
import { iconNameType } from '@/lib/types/userType'
import { Input } from '@/components/ui/input'
import { Navigation } from 'react-feather'

export const UserInfo = ({ imageUrl, name }: iconNameType) => {
    return (
        <div className='border border-bold border-gray-600 rounded-sm p-4 flex flex-col space-y-4 max-w-[350px]'>
            <div className='flex space-x-2 items-center'>
                <AvatarIcon imageUrl={imageUrl} alt="アイコン" />
                <div className='font-semibold'>現在のアイコン</div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" />
            </div>
            <div className='font-semibold'>ユーザーネーム: {name}</div>
            <div className="flex w-full items-center space-x-2 max-w-sm">
                <Input type="name" placeholder="変更後のお名前" />
                <button type="submit" className='border border-gray-600 border-semibold rounded-md p-1 hover:bg-gray-300'><Navigation /></button>
            </div>
            <div className='font-semibold'>パスワード</div>
            <div className="flex w-full items-center space-x-2 max-w-sm">
                <Input type="name" placeholder="変更後のパスワード" />
                <button type="submit" className='border border-gray-600 border-semibold rounded-md p-1 hover:bg-gray-300'><Navigation /></button>
            </div>
        </div>
    )
}
