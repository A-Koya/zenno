"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

const formSchema = z.object({
  username: z.string().min(4, {
    message: "ユーザー名は4文字以上です。"
  }).max(12, {
    message: "ユーザー名は12文字以内です。"
  }),
  password: z.string().min(8, {
    message: "パスワードは8文字以上です。"
  }).max(20, {
    message: "パスワードは20文字以内です。"
  })
})

export function UserForm({ variant }: { variant: 'loginForm' | 'userAddForm' }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: '', password: '' },
    criteriaMode: 'all',
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div className="border-2 border-gray-400 p-3 rounded-sm">
      <div className="mb-4">
        <div className="mb-2">
          <Image
            src="/images/logo.png"
            width={100}
            height={50}
            alt="全知全農のロゴ"
          />
        </div>
      </div>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username(お名前)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PassWord</FormLabel>
                <FormControl>
                  <Input placeholder="password(合言葉)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{
            variant === 'loginForm' ? (
              <Button type="submit">ログイン</Button>
            ) : variant === 'userAddForm' ? (
              <Button type="submit">新規登録</Button>
            ) : (<div>variantの値が正しくありません</div>)
          }
        </form>
      </Form>
    </div>
  )
}
