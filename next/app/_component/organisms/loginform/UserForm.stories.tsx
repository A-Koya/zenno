import { UserForm } from './UserForm'
export default {
    id: 'LoginForm',
    component: UserForm,
    title: 'LoginForm',
}
export const Default = () => <UserForm variant='loginform' />
export const AddUser = () => <UserForm variant='userAddForm' />