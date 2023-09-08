import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ productItems, isPaid, handleAddToCart, user }) {
    const products = productItems.map( product =>
        <ProductListItem 
        key={product._id}
        productItem={product}
        handleAddToCart={handleAddToCart}
        user={user}
        />
        );
        return (
            <main className="ProductList">
                {products}
            </main>
        )
}