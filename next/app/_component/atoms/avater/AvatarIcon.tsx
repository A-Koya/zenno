import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarIcon({ imageUrl, alt }: { imageUrl: string, alt: string }) {
  return (
    <Avatar>
      <AvatarImage src={imageUrl} alt={alt} sizes="lg" />
    </Avatar>
  )
}
