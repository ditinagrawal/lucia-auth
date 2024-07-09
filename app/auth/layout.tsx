import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex items-center justify-center h-full pt-12'>
            {children}
        </div>
    )
}

export default AuthLayout