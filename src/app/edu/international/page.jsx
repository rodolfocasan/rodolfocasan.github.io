// src/app/edu/international/page.jsx
import React from 'react'

import Introduction from './Components/Introduction'

import Google from './Schools/Google'
import Udemy from './Schools/Udemy'





function page() {
    return (
        <React.Fragment>
            <Introduction />

            <Google />
            <Udemy />
        </React.Fragment>
    )
}

export default page