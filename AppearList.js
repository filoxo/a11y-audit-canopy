import React from 'react'
import {Appear} from 'mdx-deck'

const AppearList = ({children}) => (<div style={{display: 'flex', justifyContent: 'center'}} >
  <ul style={{textAlign: 'left'}}>
    <Appear>
      {children}
    </Appear>
  </ul>
</div>)

export default AppearList