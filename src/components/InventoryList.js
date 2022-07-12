import React from "react"
import InventoryCard from "./InventoryCard"

function InventoryList({ inventory }) {
    return (
        <div>
            {inventory.map((inv) => {
                <InventoryCard key={inv.id} brand={inv.brand} model={inv.model} image={inv.image}/>
            })}
            
        </div>
    )
}

export default InventoryList;