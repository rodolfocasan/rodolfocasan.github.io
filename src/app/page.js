// src/app/page.js
import React from 'react'

import Introduction from './Home/Components/Introduction';
import Stats from './Home/Components/Stats';





function page() {
  return (
    <React.Fragment>
      <Introduction />
      <Stats />
    </React.Fragment>
  )
}

export default page