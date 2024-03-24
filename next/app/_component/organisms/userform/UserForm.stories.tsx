import { UserForm } from './UserForm'
export default {
    id: 'UserForm',
    component: UserForm,
    title: 'UserForm',
}
export const Default = () => <UserForm variant='loginForm' />
export const AddUser = () => <UserForm variant='userAddForm' />