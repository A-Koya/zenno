'use client'
import { postDatas } from '@/lib/functions/post'
import { mainContentsType } from '@/lib/types/questionCardType'
import Link from 'next/link'
import React, { useState } from 'react'

type postData = {
    id: string
} & mainContentsType

export default function page() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const id = "123e4567-e89b-12d3-a456-426614174000"
    const onChangeTitle = (e: any) => {
        setTitle(e.target.value)
    }
    const onChangeContent = (e: any) => {
        setContent(e.target.value)
    }
    const onChangeTags = (e: any) => {
        setTags(e.target.value)
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        const json: postData = {
            id: id,
            title: title,
            content: content,
            tags: tags
        }
        const post = async (json: postData) => {
            try {
                const res = await postDatas<postData>(process.env.NEXT_PUBLIC_CREATE_QUESTION, json)
                setIsError(false)
            } catch (e) {
                console.log(e)
                setIsError(true)
            }
        }
        if (title !== "" && content !== "") {
            post(json)
            setContent('')
            setTitle('')
            setTags('')
        }
    }
    return (
        <div className='flex justify-center items-center h-screen bg-green-300'>
            <form className='border rounded-md p-8 bg-white w-1/2'>
                <div className='flex flex-col space-y-8'>
                    <div className='flex justify-between space-x-2'>
                        <button className='font-semibold text-lg border rounded-sm p-2 bg-green-500 border-black hover:bg-green-200' onClick={(e) => onSubmit(e)}>
                            質問を作成する
                        </button>
                        <Link className='font-semibold text-lg border rounded-sm p-2 bg-purple-500 hover:bg-purple-200' href="/">
                            ホームに戻る
                        </Link>
                    </div>
                    <div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="title" className='font-semibold text-md mb-4'>タイトル</label>
                            <input className='border-2 border-gray-500' type="text" name="title" id="title" placeholder='タイトル' value={title} onChange={onChangeTitle} />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-md mb-4' htmlFor="content">質問の内容</label>
                            <textarea className='border-2 border-gray-500' name="content" id="content" rows={5} value={content} onChange={onChangeContent}></textarea>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-md mb-4' htmlFor="tags">タグ<span className='text-sm opacity-50 ml-2'>カンマ区切りで記入してください</span></label>
                            <input className='border-2 border-gray-500' type="text" name="tags" id="tags" placeholder='タグを入力' value={tags} onChange={onChangeTags} />
                        </div>
                    </div>
                    {
                        isError ? (
                            <div className='font-bold text-lg text-red-500'>送信に失敗しました</div>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </form >
        </div >
    )
}
