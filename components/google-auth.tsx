"use client"

import React from 'react'
import { Button } from './ui/button'
import { GoogleAction } from '@/actions/google'

const GoogleAuth = () => {
    return (
        <Button onClick={async () => {
            const res = await GoogleAction()
            if (res.url) {
                window.location.href = res.url
            } else {
                alert('Something went wrong')
            }
        }} size={"lg"} variant={"secondary"}>Continue with Google</Button>
    )
}

export default GoogleAuth