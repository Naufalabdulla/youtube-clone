import { useState } from 'react'
import Default from './pages/layouts/Default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Default />
    </>
  )
}

export default App
