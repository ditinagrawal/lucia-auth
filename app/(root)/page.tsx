import { Button } from '@/components/ui/button';
import { validateRequest } from '@/lib/auth';
import Link from 'next/link';

const page = async () => {
    const user = await validateRequest()
    if (!user.user) {
        return (
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-6xl text-center tracking-wide'>
                    You are not authenticated
                    <br />Please Login!
                </h1>
            </div>
        )
    }

    return (
        <div className='flex items-center justify-center h-full'>
            <h1 className='text-6xl'>Hello, {user?.user?.username}</h1>
        </div>
    )
}

export default page