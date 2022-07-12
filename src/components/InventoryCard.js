import React from "react"

function InventoryCard({ key, brand, model, image }) {

    return (
        <div>
            <h2>{brand} {model}</h2>
            <img key={key} src={image} alt={model} />
        </div>
    )
}

export default InventoryCard