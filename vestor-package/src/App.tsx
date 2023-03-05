import React from 'react'
import Vestor from './index'
import './App.css'

function App() {
  const vestor = Vestor({url: 'http://localhost:3000'})
  return (
    <div className="App">
      {vestor?.page_name}
      <br/>
      {vestor?.visit_count}
    </div>
  )
}

export default App
