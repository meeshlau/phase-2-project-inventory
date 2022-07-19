import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Search from "./Search"
import AddInventoryForm from"./AddInventoryForm"
import '../App.css';
import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container';
import InventoryList from "./InventoryList"
import Home from "./Home"

function App() {
  const [inventory, setInventory] = useState([])
    const [search, setSearch] = useState("")
    
    useEffect(() => {
      fetch("http://localhost:3000/equipment")
      .then((r) => r.json())
      .then((inv) => setInventory(inv))
    }, [])
  
    const invToRender = inventory.filter(inv => inv.model.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/addinventory">
            <AddInventoryForm setInventory={setInventory} inventory={inventory} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/inventory">
            <InventoryList inventory={invToRender} setSearch={setSearch}/>
          </Route>
        </Switch>
      </Container>
    </div>
   
  );
}

export default App;
