
export default function ProductListItem( { productItem }) {
    return (
        <div className="ProductListItem">
            <div className="name">{productItem.name}</div>
            <div className = "buy">
                <button onClick ={() => console.log('clicked')}>
                    ADD
                </button>
            </div>
        </div>
    )
}