import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { AvaterDate } from '../../molecules/cards/AvaterDate';
import { Reactions } from '../../molecules/cards/Reactions';
import { MainContents } from '../../molecules/cards/MainContents';
import { questionCardType}from '../../../../lib/types/questionCardType';

export function QuestionCard() {
  const imageUrl:string = "https://github.com/shadcn.png"
  const title:string = "トマト栽培のコツを教えて"
  const content:string = "私は自宅でトマトを栽培しており..."
  const tags:string[] = ["初心者","初心者","初心者"]
  return (
    <Card className="w-1/2">
      <CardHeader className="flex flex-col space-y-2">
        <AvaterDate imageUrl={imageUrl} alt="イメージ画像" name="kebin" date="2014-1-1"/>
        <MainContents title={title} content={content} tags={tags}/>
        <Reactions good={12} post={12}/> 
      </CardHeader>
    </Card>
  )
}