import * as React from "react"
import { AvaterDate } from '../../molecules/cards/AvaterDate';
import { Reactions } from '../../molecules/cards/Reactions';
import { MainContents } from '../../molecules/cards/MainContents';
import { questionCardType } from '../../../../lib/types/questionCardType';

export function QuestionCard(props: questionCardType) {
  return (
    <div>
      <div className="border border-gray-300 rounded-sm p-2 lg:min-w-[450px]">
        <div className="flex flex-col space-y-1">
          <AvaterDate imageUrl={props.imageUrl} name={props.name} date={props.date} />
          <MainContents title={props.title} content={props.content} tags={props.tags} />
          <Reactions good={props.good} post={props.post} />
        </div>
      </div>
    </div>
  )
}