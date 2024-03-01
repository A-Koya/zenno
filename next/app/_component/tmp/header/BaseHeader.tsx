import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { SearchWithButton } from '@/app/_component/molecules/SearchWithButton'
import { FunctionButton } from '@/app/_component/atoms/buttons/FunctionButton'


export const BaseHeader = () => {
  return (
    <header className="">
      <div className="bg-green-500 py-2 flex items-center justify-between h-14 px-2">
        <nav className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              src="/images/logo.png"
              width={100}
              height={50}
              alt="全知全農のロゴ"
              className="bg-white rounded-xl p-1"
            />
          </Link>
        </nav>
        <nav className="flex items-center space-x-2">
          <SearchWithButton />
          <FunctionButton name="ログイン" />
          <FunctionButton name="新規会員登録" />
        </nav>
      </div>
      <div className="bg-green-200">
        <nav className="container flex space-x-8 py-2">
          <Link href="/" className='font-semibold'>
            <div>新着</div>
          </Link>
          <Link href="/aaa" className='font-semibold opacity-60'>
            <div>いいね順</div>
          </Link>
          <Link href="/aaa" className='font-semibold opacity-60'>
            <div>タグ検索</div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
