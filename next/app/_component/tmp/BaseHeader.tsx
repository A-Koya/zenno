import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import {SearchWithButton} from '@/app/_component/molecules/SearchWithButton'
import {LoginButton} from '@/app/_component/atoms/buttons/LoginButton'


export const BaseHeader = () => {
  return (
    <header className="bg-green-500 py-2">
      <div className="container flex items-center justify-between h-14 px-2">
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
          <Link className="text-white font-medium" href="/">
            新着
          </Link>
          <Link className="text-white font-medium" href="#">
            人気
          </Link>
          <Link className="text-white font-medium" href="#">
            タグ検索
          </Link>
        </nav>
        <nav className="flex items-center space-x-2">
        <SearchWithButton/>
        <LoginButton />
        </nav>
      </div>
    </header>
  )
}
