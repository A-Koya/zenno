import React from 'react'
import { AvatarIcon } from '../../atoms/avater/AvatarIcon';
import { avaterDateType } from '../../../../lib/types/questionCardType';

export const AvaterDate = ({imageUrl,alt,name,date}:avaterDateType) => {
  return (
    <div className="flex items-center space-x-2">
        <AvatarIcon imageUrl={imageUrl} alt={alt}/>
        <div>
            <div>{name}</div>
            <div>{date}</div>          
        </div>
    </div>
  )
}

