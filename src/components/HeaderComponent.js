import React from 'react'
import { Navigation } from './Navigation'

export const HeaderComponent = () => {
    return (
        <header className="border-b p-3 flex justify-between item-center">
            <span className="font-bold">
                 AppName
            </span> 
            <Navigation />
        </header>
    )
}
