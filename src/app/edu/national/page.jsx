// src/app/edu/national/page.jsx
import React from 'react'

import Introduction from './Components/Introduction'

import Escuela from './Schools/Escuela'
import EMedia from './Schools/EMedia'
import Otras from './Schools/Otras'





function page() {
    return (
        <React.Fragment>
            <Introduction />

            <Escuela />
            <EMedia />
            <Otras />
        </React.Fragment>
    )
}

export default page