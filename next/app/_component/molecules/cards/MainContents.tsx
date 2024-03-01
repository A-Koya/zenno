import { CardDescription } from '@/components/ui/card'
import { mainContentsType } from '../../../../lib/types/questionCardType';
import { Suspense } from 'react';
export const MainContents = ({ title, content, tags }: mainContentsType) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-xl">{title}</div>
        <CardDescription>{content}</CardDescription>
        <CardDescription className="flex items-center space-x-2">
          {tags?.map((tag: string) => (
            <div className="bg-gray-200 rounded-sm p-1 text-sm">{tag}</div>
          ))}
        </CardDescription>
      </div>
    </Suspense>
  )
}