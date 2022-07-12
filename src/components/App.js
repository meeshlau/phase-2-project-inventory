import React, { useEffect, useState } from "react"
import InventoryContainer from "./InventoryContainer"
import '../App.css';

function App() {
  const [inventory, setInventory] = useState([])
  console.log(inventory)
  
  useEffect(() => {
    fetch("http://localhost:3000/equipment")
    .then((r) => r.json())
    .then((inv) => setInventory(inv))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <InventoryContainer inventory={inventory} />
      </header>
    </div>
  );
}

export default App;
