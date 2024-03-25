'use Client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from 'react-feather'

export const SearchWithButton = () => {
  const [param, setParam] = useState<string>('')
  const router = useRouter()
  const changeParam = (e: any) => {
    setParam(e.target.value)
  }
  const routing = () => {
    let url: string
    url = '/?search=' + param
    router.push(url)
  }
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="検索" value={param} onChange={changeParam} />
      <Button type="submit" size="sm" onClick={() => routing()}><Search /></Button>
    </div>
  )
}
