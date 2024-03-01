import React from 'react'
import { Button } from "@/components/ui/button"

export const FunctionButton = ({ name }: { name: string }) => {
  return (
    <Button variant="outline" className="font-semibold">{name}</Button>
  )
}
