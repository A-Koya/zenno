import React from 'react'
import { AvatarIcon } from '../../atoms/avater/AvatarIcon';
import { avaterDateType } from '../../../../lib/types/questionCardType';

export const AvaterDate = ({ imageUrl, name, date }: avaterDateType) => {
  return (
    <div className="flex items-center space-x-2">
      <AvatarIcon imageUrl={imageUrl} alt="ユーザーアイコン" />
      <div>
        <div>{name}</div>
        <div>{String(date)}</div>
      </div>
    </div>
  )
}

