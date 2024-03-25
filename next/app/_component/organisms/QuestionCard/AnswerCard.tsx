import * as React from "react"
import { AvaterDate } from '../../molecules/cards/AvaterDate';
import { Reactions } from '../../molecules/cards/Reactions';
import { AnswerMain } from "../../molecules/cards/AnswerMain";
import { ThumbsUp } from "react-feather";

export type answerCard = {
    id: string
    image_url: string,
    user_name: string,
    updated_at: string,
    content: string,
    good: string
}
export function AnswerCard(props: answerCard) {
    return (
        <div>
            <div className="border border-gray-300 rounded-sm p-2 lg:min-w-[450px]">
                <div className="flex flex-col space-y-1">
                    <AvaterDate imageUrl={props.image_url} name={props.user_name} date={props.updated_at} />
                    <AnswerMain content={props.content} />
                    <div className="flex item-center space-x-2">
                        <ThumbsUp className="w-5 h-5 text-yellow-500" />
                        <div>{props.good}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}