import React from 'react'
import { QuestionCard } from '../../organisms/questionCard/QuestionCard';
import { questionCardType } from '@/lib/types/questionCardType';

export const CardList = ({ cardDatas }: { cardDatas: questionCardType[] }) => {
  return (
    <ul className="container flex flex-col space-y-4">
      {cardDatas.map((Data) => (<li key={Data.id}><QuestionCard {...Data} /></li>))}
    </ul>
  )
}
