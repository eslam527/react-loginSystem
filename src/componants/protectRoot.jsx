import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoot({ children }) {

    if (localStorage.getItem('userData') || localStorage.getItem('logInData')) {
        return children
    } else {
        return <Navigate to={'/'} />
    }

    return (
        <div>

        </div>
    )
}
