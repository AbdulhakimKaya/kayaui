import React from 'react'

import { Paragraph, Button } from 'kayaui'
import 'kayaui/dist/index.css'

const App = () => {
  return (
    <>
      <Paragraph text="Create React Library Example 😄" />
      <Button text={"click"} onClick={() => alert("asdf")}/>
    </>
  )
}

export default App
