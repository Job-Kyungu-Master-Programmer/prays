import React from 'react'
import Modals from './components/Modals'
import Background  from './components/Background'

const App = () => {
  return (
    <div className='app'>
        <div className="container app__container">
            <Modals />
            <Background />
        </div>
    </div>
  )
}

export default App