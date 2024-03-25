import React, { Suspense } from 'react'

export const AnswerMain = ({ content }: { content: string }) => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <div className='font-medium'>{content}</div>
        </Suspense>
    )
}
