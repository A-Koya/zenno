import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {ThumbsUp} from 'react-feather'
import {Inbox} from 'react-feather'
import {AvatarIcon} from '../../atoms/avater/AvatarIcon'

export function QuestionCard() {
  return (
    <Card className="w-[500px]">
      <CardHeader className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <AvatarIcon/>
          <div>
            <div>kebin</div>
            <div>2024-2-3</div>
          </div>
        </div>
        <div className="font-bold text-xl">トマト栽培のコツを教えて</div>
        <CardDescription>私は自宅でトマトを栽培しており...</CardDescription>
          <CardDescription className="flex items-center space-x-2">
            <div className="bg-gray-200 rounded-sm p-1 text-sm">初心者</div>
            <div className="bg-gray-200 rounded-sm p-1 text-sm">初心者</div>
            <div className="bg-gray-200 rounded-sm p-1 text-sm">初心者</div>
          </CardDescription>
      </CardHeader>
      <div className="flex space-x-6 container">
        <div className="flex item-center space-x-2">
          <ThumbsUp className="w-5 h-5 text-yellow-500"/>
          <div>12</div>
        </div>
        <div className="flex item-center space-x-2">
          <Inbox className="w-5 h-5"/>
          <div>12</div>
        </div>
      </div>
    </Card>
  )
}
