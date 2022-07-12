import React from "react"
import InventoryCard from "./InventoryCard"

function InventoryContainer({ inventory }) {
    console.log(inventory)
    return (
        <InventoryCard inventory={inventory}/>
    )
}

export default InventoryContainer