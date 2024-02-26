import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Search} from 'react-feather'

export const SearchWithButton = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="検索" />
      <Button type="submit" size="sm"><Search /></Button>
    </div>
  )
}
