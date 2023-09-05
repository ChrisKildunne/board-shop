
export default function ProductListItem( { productItem }) {
    const handleAddButton = () =>{
        console.log('Qty increased:');   
    }

    return (
        <div className="ProductListItem">
            <div className="name">{productItem.name}</div>
            <div>
                <button onClick={handleAddButton}>Add To Cart</button>
            </div>
           
        </div>
    )
}