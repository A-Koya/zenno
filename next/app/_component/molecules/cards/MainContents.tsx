import { mainContentsType } from '../../../../lib/types/questionCardType';
import {CardDescription} from '@/components/ui/card'
export const MainContents = ({title,content,tags}:mainContentsTypeContentsType) => {
  return(
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-xl">{title}</div>
        <CardDescription>{content}</CardDescription>
          <CardDescription className="flex items-center space-x-2">
            {tags.map((tag)=>(
              <div className="bg-gray-200 rounded-sm p-1 text-sm">{tag}</div>
            ))}
        </CardDescription>
    </div>
  )
}