'use client'
import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { SearchWithButton } from '@/app/_component/molecules/SearchWithButton'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


export const BaseHeader = () => {
  const router = useRouter()
  return (
    <header>
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
          <Button variant="outline" className="font-semibold" onClick={() => router.push('/login')}>ログイン</Button>
          <Button variant="outline" className="font-semibold" onClick={() => router.push('/userAdd')}>新規会員登録</Button>
        </nav>
      </div>
    </header>
  )
}
