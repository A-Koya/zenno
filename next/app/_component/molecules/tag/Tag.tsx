import React from 'react'
import {
    Card,
} from "@/components/ui/card"
import { Hash } from "react-feather"
import { tagType } from '@/lib/types/tagType'

export const Tag = ({ name, sum }: tagType) => {
    return (
        <Card className="p-1 border-gray-500">
            <div className="flex items-center space-x-2">
                <div className="p-2 border rounded-full bordler-bold border-gray-500">
                    <Hash />
                </div>
                <div>
                    <div className='font-semibold'>{name}</div>
                    <div className='flex items-center space-x-2'>
                        <div className='text-sm'>タグ件数</div>
                        <div>{sum}</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
