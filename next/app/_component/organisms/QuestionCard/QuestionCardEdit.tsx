import React from 'react'
import { QuestionCard } from './QuestionCard'
import { questionCardType } from '@/lib/types/questionCardType'
import { Trash2 } from 'react-feather'

export const QuestionCardEdit = (props: questionCardType) => {
    return (
        <div className='flex items-start'>
            <QuestionCard {...props} />
            <button className="border border-gray-600 border-bold rounded-md bg-red-500 p-2 text-white hover:bg-red-300">
                <Trash2 />
            </button>
        </div>
    )
}
