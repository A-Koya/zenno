import React from 'react'
import { QuestionCard } from '../../organisms/questionCard/QuestionCard';
import { questionCardType } from '@/lib/types/questionCardType';

export const CardList = ({ cardDatas }: { cardDatas: questionCardType[] }) => {
  return (
    <div className="container flex flex-col space-y-4">
      {cardDatas.map((Data) => (
        <QuestionCard {...Data} />
      ))}
    </div>
  )
}
