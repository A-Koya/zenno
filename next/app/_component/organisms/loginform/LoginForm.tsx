"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(4, {
    message: "ユーザー名は4文字以上です。"
  }).max(12,{
    message:"ユーザー名は12文字以内です。"
  }),
  password: z.string().min(8,{
    message:"パスワードは8文字以上です。"
  }).max(20,{
    message:"パスワードは20文字以内です。"
  })
})

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{username:'',password:''},
    criteriaMode: 'all',
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div className="border-2 border-gray-400 p-3 rounded-sm w-1/2">
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
            render={({field})=>(
              <FormItem>
                <FormLabel>PassWord</FormLabel>
                <FormControl>
                  <Input placeholder="password(合言葉)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">ログイン</Button>
        </form>
      </Form>
    </div>
  )
}
