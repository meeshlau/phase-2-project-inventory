import React, { useEffect, useState } from "react"
import InventoryList from "./InventoryList"
import '../App.css';

function App() {
  const [inventory, setInventory] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/equipment")
    .then((r) => r.json())
    .then((inv) => setInventory(inv))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <InventoryList inventory={inventory} />
      </header>
    </div>
  );
}

export default App;
