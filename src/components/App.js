import React from 'react'
import '../styles/App.css';


function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const id = queryParams.get("id")
  const name = queryParams.get("name")
  const designation = queryParams.get("designation")

  return (
    <div className="App">
      <p>Employee{id}{name}{designation}</p>
    </div>
  )
}

export default App;
