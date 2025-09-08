
import SideBar from '@/components/SideBar';
import React from 'react'

function RootLayout({children} : {children : React.ReactNode}) {
    return (
        <main>
            <SideBar/>
            {children}
        </main>
    )
}

export default RootLayout;