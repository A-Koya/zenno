import { UserInfo } from './UserInfo'
export default {
    id: 'UserInfo',
    component: UserInfo,
    title: 'UserInfo',
}
export const Default = () => <UserInfo imageUrl="https://github.com/shadcn.png" name="名前" />