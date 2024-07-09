import GoogleAuth from '@/components/google-auth'
import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center h-full pt-10'>
            <GoogleAuth />
            {children}
        </div>
    )
}

export default AuthLayout