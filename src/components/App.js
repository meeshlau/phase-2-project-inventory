import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Search from "./Search"
import AddInventoryForm from"./AddInventoryForm"
import '../App.css';
import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container';
import InventoryList from "./InventoryList"


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
      <NavBar />
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/addinventoryform">
          <AddInventoryForm />
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
      </Switch>
      <Container>
        <AddInventoryForm setInventory={setInventory} inventory={inventory} />
        <Search  setSearch={setSearch} />
        <InventoryList inventory={invToRender}/>
      </Container>
    </div>
   
  );
}

export default App;
