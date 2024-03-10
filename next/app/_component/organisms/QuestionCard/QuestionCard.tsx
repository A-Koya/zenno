import * as React from "react"
import {
  Card,
  CardHeader,
} from "@/components/ui/card"
import { AvaterDate } from '../../molecules/cards/AvaterDate';
import { Reactions } from '../../molecules/cards/Reactions';
import { MainContents } from '../../molecules/cards/MainContents';
import { questionCardType } from '../../../../lib/types/questionCardType';
import Link from 'next/link'

export function QuestionCard(props: questionCardType) {
  return (
    <Link href={props.cardLink}>
      <div className="border border-gray-300 rounded-sm p-2">
        <div className="flex flex-col space-y-1">
          <AvaterDate imageUrl={props.imageUrl} name={props.name} date={props.date} />
          <MainContents title={props.title} content={props.content} tags={props.tags} />
          <Reactions good={props.good} post={props.post} />
        </div>
      </div>
    </Link>
  )
}