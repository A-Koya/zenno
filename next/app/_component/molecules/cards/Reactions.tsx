import React from 'react'
import { ThumbsUp } from 'react-feather'
import { Inbox } from 'react-feather'
import { ReactionsType } from '../../../../lib/types/questionCardType';

export const Reactions = ({ good, post }: ReactionsType) => {
  return (
    <div className="flex space-x-6">
      <div className="flex item-center space-x-2">
        <ThumbsUp className="w-5 h-5 text-yellow-500" />
        <div>{good}</div>
      </div>
      <div className="flex item-center space-x-2">
        <Inbox className="w-5 h-5" />
        <div>{post}</div>
      </div>
    </div>
  )
}
