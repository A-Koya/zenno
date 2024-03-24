import React from 'react'
import { UserForm } from '../_component/organisms/userform/UserForm'

export default function Page() {
    return (
        <div className='m-2 container mx-auto'>
            <UserForm variant='loginForm' />
        </div>
    )
}
