import { mainContentsType } from '../../../../lib/types/questionCardType';
import { Suspense } from 'react';
export const MainContents = ({ title, content, tags }: mainContentsType) => {
  const tagsArray: string[] = tags.substring(1, tags.length - 1).split(',')
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-xl">{title}</div>
        <div className=''>{content}</div>
        <ul className="flex items-center space-x-2">
          {tagsArray?.map((tag: string, index: number) => (
            <li key={index} className="bg-gray-200 rounded-sm p-1 text-sm opacity-80">{tag}</li>
          ))}
        </ul>
      </div>
    </Suspense>
  )
}